import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/_core/hooks/useAuth';
import { getLoginUrl } from '@/const';
import { Link } from 'wouter';
import { TrendingUp, Leaf, BarChart3, MapPin } from 'lucide-react';

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">Crop Yield Forecast</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/forecast">
              <a className="text-gray-600 hover:text-gray-900 font-medium transition">
                Forecast
              </a>
            </Link>
            <Link href="/about">
              <a className="text-gray-600 hover:text-gray-900 font-medium transition">
                Services
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-600 hover:text-gray-900 font-medium transition">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Predict Your Crop Yield with AI
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Leverage advanced machine learning models to forecast crop yields based on climate,
          seasonal, and satellite data. Make informed decisions for better harvests.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/forecast">
            <a>
              <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-lg">
                Start Prediction
              </Button>
            </a>
          </Link>
          <Button variant="outline" className="px-8 py-6 text-lg">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Service?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BarChart3,
                title: 'Accurate Predictions',
                description: 'Hybrid ML models with 7.41% average error rate',
              },
              {
                icon: TrendingUp,
                title: 'Real-time Forecasts',
                description: 'Get instant predictions based on current data',
              },
              {
                icon: MapPin,
                title: 'Regional Analysis',
                description: 'Tailored forecasts for North Kazakhstan region',
              },
              {
                icon: Leaf,
                title: 'Multi-crop Support',
                description: 'Predict yields for 7 different crop types',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="hover:shadow-lg transition">
                  <CardHeader>
                    <Icon className="w-8 h-8 text-green-600 mb-2" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Input Data',
                description: 'Enter climate parameters, seasonal data, and satellite indices',
              },
              {
                step: '2',
                title: 'Process',
                description: 'Our AI models analyze the data using advanced algorithms',
              },
              {
                step: '3',
                title: 'Get Results',
                description: 'Receive accurate crop yield forecasts instantly',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Crops Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Supported Crops
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Cereals',
              'Oilseeds',
              'Sunflower',
              'Potato',
              'Vegetables',
              'Melons',
              'Sugar Beet',
            ].map((crop, idx) => (
              <Card key={idx} className="hover:shadow-lg transition">
                <CardContent className="pt-6">
                  <p className="text-center font-semibold text-gray-900">{crop}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Optimize Your Harvest?</h3>
          <p className="text-xl mb-8 opacity-90">
            Start using our crop yield forecasting system today and make data-driven decisions
            for better agricultural outcomes.
          </p>
          <Link href="/forecast">
            <a>
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold rounded-lg">
                Get Started Now
              </Button>
            </a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">About</h4>
              <p className="text-sm">
                Advanced crop yield forecasting using hybrid machine learning models and satellite data.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/forecast"><a className="hover:text-white transition">Forecast</a></Link></li>
                <li><Link href="/about"><a className="hover:text-white transition">Services</a></Link></li>
                <li><Link href="/contact"><a className="hover:text-white transition">Contact</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <p className="text-sm">
                Email: info@cropforecast.com<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Crop Yield Forecast. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
