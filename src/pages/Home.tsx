import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Palette, Heart, Sparkles, Award } from 'lucide-react';
import { useFeaturedProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';

const Home: React.FC = () => {
  const { products: featuredProducts, loading } = useFeaturedProducts();

  const testimonials = [
    {
      id: 1,
      name: "Elif Yılmaz",
      comment: "Marbleria'dan aldığım fular gerçekten benzersiz. Her bakışta farklı desenler keşfediyorum.",
      rating: 5,
      location: "İstanbul"
    },
    {
      id: 2,
      name: "Ahmet Kaya",
      comment: "Ebru sanatını modern yaşamla buluşturan harika bir marka. Kalite ve estetik mükemmel.",
      rating: 5,
      location: "Ankara"
    },
    {
      id: 3,
      name: "Zeynep Özkan",
      comment: "Özel siparişimde istediğim renk tonlarını mükemmel bir şekilde uyguladılar.",
      rating: 5,
      location: "İzmir"
    }
  ];

  const features = [
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: 'El Yapımı Sanat',
      description: 'Her parça geleneksel ebru tekniklerinde ustalar tarafından hazırlanır'
    },
    {
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      title: 'Benzersiz Tasarım',
      description: 'Hiçbir desen tekrarlanmaz, her parça kendi hikayesini anlatır'
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: 'Kişisel Hizmet',
      description: 'Özel siparişleriniz için renk ve desen tercihlerinizi dinleriz'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: 'Premium Kalite',
      description: 'En kaliteli kumaşlar ve boyalarla uzun ömürlü güzellik'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-teal-200 rounded-full opacity-25 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-pink-200 rounded-full opacity-20 animate-bounce"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Sparkles className="w-16 h-16 text-purple-600 mx-auto mb-4 animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Ebru Sanatının
            </span>
            <br />
            <span className="text-gray-800">Büyüleyici Dünyası</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Geleneksel ebru sanatını modern moda anlayışıyla birleştiren benzersiz tasarımlar. 
            Her parça özenle hazırlanmış, her desen eşsiz bir sanat eseri.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/products"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Koleksiyonu Keşfet
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/custom-orders"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Özel Sipariş Ver
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">100+</div>
              <div className="text-sm text-gray-600">Benzersiz Desen</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">5★</div>
              <div className="text-sm text-gray-600">Müşteri Puanı</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Öne Çıkan Ürünler
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Her biri özenle tasarlanmış, ebru sanatının inceliklerini yansıtan seçkin parçalarımız
            </p>
          </div>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <LoadingSpinner size="lg" />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProducts.slice(0, 6).map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Link 
                  to="/products"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group text-lg"
                >
                  Tüm Ürünleri Görüntüle
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden Marbleria?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Ebru sanatının geleneksel değerlerini modern tasarımla buluşturan benzersiz yaklaşımımız
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Müşteri Yorumları
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Marbleria ailesinin bir parçası olan müşterilerimizden gelen geri bildirimler
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 hover:bg-white border border-gray-100">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Benzersiz Tasarımınızı Oluşturun
          </h2>
          <p className="text-blue-100 text-xl mb-10 leading-relaxed">
            Hayalinizdeki renk kombinasyonları ve desenleri bizimle paylaşın, 
            size özel bir ebru sanatı eseri yaratalalım.
          </p>
          <Link 
            to="/custom-orders"
            className="bg-white text-blue-600 px-10 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 inline-flex items-center group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Özel Sipariş Başlat
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;