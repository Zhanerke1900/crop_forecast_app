import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { BarChart3, Database, Zap, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-bold text-gray-900">Crop Yield Forecast</a>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/forecast">
              <a className="text-gray-600 hover:text-gray-900 font-medium transition">Forecast</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-600 hover:text-gray-900 font-medium transition">Services</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-600 hover:text-gray-900 font-medium transition">Contact</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600">
          Comprehensive crop yield forecasting solutions powered by advanced AI and machine learning
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <Card className="hover:shadow-xl transition">
            <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
              <BarChart3 className="w-8 h-8 mb-2" />
              <CardTitle>Real-Time Yield Prediction</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                Get instant crop yield forecasts based on current climate conditions, seasonal data,
                and satellite imagery. Our hybrid machine learning models provide accurate predictions
                with an average error rate of just 7.41%.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Multi-crop support (7 crop types)</li>
                <li>✓ Real-time processing</li>
                <li>✓ High accuracy predictions</li>
                <li>✓ Instant results</li>
              </ul>
            </CardContent>
          </Card>

          {/* Service 2 */}
          <Card className="hover:shadow-xl transition">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
              <Database className="w-8 h-8 mb-2" />
              <CardTitle>Data Analysis & Insights</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                Comprehensive analysis of climate patterns, soil conditions, and vegetation indices.
                Understand how different factors affect your crop yields and make informed decisions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Climate data analysis</li>
                <li>✓ Soil moisture monitoring</li>
                <li>✓ Satellite vegetation indices</li>
                <li>✓ Trend analysis</li>
              </ul>
            </CardContent>
          </Card>

          {/* Service 3 */}
          <Card className="hover:shadow-xl transition">
            <CardHeader className="bg-gradient-to-r from-green-600 to-purple-600 text-white rounded-t-lg">
              <Zap className="w-8 h-8 mb-2" />
              <CardTitle>Optimization Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                Receive actionable recommendations to optimize your farming practices based on
                predicted yields and environmental conditions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Irrigation optimization</li>
                <li>✓ Planting recommendations</li>
                <li>✓ Risk assessment</li>
                <li>✓ Resource planning</li>
              </ul>
            </CardContent>
          </Card>

          {/* Service 4 */}
          <Card className="hover:shadow-xl transition">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
              <Shield className="w-8 h-8 mb-2" />
              <CardTitle>Historical Data & Trends</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                Access historical yield data and long-term trend analysis to understand patterns
                and plan for future seasons.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ 30+ years of data</li>
                <li>✓ Trend visualization</li>
                <li>✓ Comparative analysis</li>
                <li>✓ Seasonal patterns</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-white py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Advanced Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">ML</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hybrid ML Models</h3>
              <p className="text-gray-600">
                Combines Ridge Regression and Random Forest for optimal accuracy and stability
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">📡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Satellite Data</h3>
              <p className="text-gray-600">
                Integrates NDVI and NDWI indices from satellite imagery for precise vegetation monitoring
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">🌡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Climate Integration</h3>
              <p className="text-gray-600">
                Incorporates temperature, humidity, rainfall, and soil moisture data for comprehensive analysis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Performance */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Model Performance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="pt-6">
              <p className="text-sm text-gray-600 mb-2">Average MAPE</p>
              <p className="text-4xl font-bold text-green-600">7.41%</p>
              <p className="text-xs text-gray-600 mt-2">Mean Absolute Percentage Error</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="pt-6">
              <p className="text-sm text-gray-600 mb-2">Average MAE</p>
              <p className="text-4xl font-bold text-blue-600">9.25</p>
              <p className="text-xs text-gray-600 mt-2">Mean Absolute Error</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="pt-6">
              <p className="text-sm text-gray-600 mb-2">Supported Crops</p>
              <p className="text-4xl font-bold text-purple-600">7</p>
              <p className="text-xs text-gray-600 mt-2">Different crop types</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 mt-12 rounded-lg max-w-7xl mx-auto mb-8">
        <div className="px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg mb-8 opacity-90">
            Use our forecasting tool to predict crop yields and optimize your farming decisions.
          </p>
          <Link href="/forecast">
            <a>
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 font-bold rounded-lg">
                Start Prediction Now
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
