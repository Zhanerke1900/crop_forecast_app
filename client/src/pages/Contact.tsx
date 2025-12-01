import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'wouter';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">
          Have questions? We'd love to hear from you. Get in touch with our team.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Email */}
            <Card className="hover:shadow-lg transition">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@cropforecast.com</p>
                    <p className="text-gray-600">support@cropforecast.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="hover:shadow-lg transition">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="hover:shadow-lg transition">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Agricultural Avenue<br />
                      North Kazakhstan, 110000<br />
                      Kazakhstan
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="hover:shadow-lg transition">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                  <p><span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM</p>
                  <p><span className="font-medium">Sunday:</span> Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <p className="text-green-700 font-semibold text-lg mb-2">
                      ✓ Message Sent Successfully!
                    </p>
                    <p className="text-green-600">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message
                      </Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        rows={6}
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 rounded-lg"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Crop Yield Forecast. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
