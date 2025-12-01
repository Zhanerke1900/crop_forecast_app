import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  prediction: router({
    predict: publicProcedure
      .input((val: unknown) => {
        const obj = val as Record<string, unknown>;
        return {
          temp: Number(obj.temp),
          humidity: Number(obj.humidity),
          rain: Number(obj.rain),
          tvp: Number(obj.tvp),
          hvp: Number(obj.hvp),
          ssm: Number(obj.ssm),
          ndvimax: Number(obj.ndvimax),
          ndwimax: Number(obj.ndwimax),
        };
      })
      .mutation(async ({ input }) => {
        try {
          const { predictCropYield } = await import('./ml/predictCropYield');
          const predictions = await predictCropYield(input);
          return {
            success: true,
            predictions,
            timestamp: new Date(),
          };
        } catch (error) {
          console.error('Prediction error:', error);
          return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error',
          };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
