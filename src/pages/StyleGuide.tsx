import React, { useState } from 'react';
import { Heart, Share2, ChevronRight, Palette, Sparkles } from 'lucide-react';

const StyleGuide: React.FC = () => {
  const [selectedSeason, setSelectedSeason] = useState('spring');

  const seasons = [
    { id: 'spring', name: 'İlkbahar', emoji: '🌸' },
    { id: 'summer', name: 'Yaz', emoji: '☀️' },
    { id: 'autumn', name: 'Sonbahar', emoji: '🍂' },
    { id: 'winter', name: 'Kış', emoji: '❄️' }
  ];

  const styleGuides = {
    spring: [
      {
        id: 1,
        title: 'Çiçek Bahçesi Kombini',
        description: 'Pembe tonlarında ebru fular ile pastel renk pantolon uyumu',
        image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
        items: ['Pembe Ebru Fular', 'Bej Pantolon', 'Beyaz Bluz'],
        colors: ['#FFB6C1', '#F5F5DC', '#FFFFFF'],
        occasions: ['Günlük', 'Brunch', 'Bahçe Partisi']
      },
      {
        id: 2,
        title: 'Deniz Esintisi',
        description: 'Mavi tonlarında ebru desenli parçalarla ferah bir görünüm',
        image: 'https://images.pexels.com/photos/7679726/pexels-photo-7679726.jpeg?auto=compress&cs=tinysrgb&w=600',
        items: ['Mavi Ebru Şapka', 'Beyaz Elbise', 'Denim Ceket'],
        colors: ['#87CEEB', '#FFFFFF', '#4682B4'],
        occasions: ['Sahil', 'Yürüyüş', 'Kafeterya']
      }
    ],
    summer: [
      {
        id: 3,
        title: 'Tropikal Rüya',
        description: 'Canlı renkli ebru desenleriyle yaz enerjisi',
        image: 'https://images.pexels.com/photos/7679724/pexels-photo-7679724.jpeg?auto=compress&cs=tinysrgb&w=600',
        items: ['Turuncu Ebru Fular', 'Beyaz Şort', 'Sarı Bluz'],
        colors: ['#FF6347', '#FFFFFF', '#FFD700'],
        occasions: ['Tatil', 'Festival', 'Piknik']
      },
      {
        id: 4,
        title: 'Akşam Serinliği',
        description: 'Mor tonlarında ebru ile zarif yaz akşamı',
        image: 'https://images.pexels.com/photos/7679729/pexels-photo-7679729.jpeg?auto=compress&cs=tinysrgb&w=600',
        items: ['Mor Ebru Pantolon', 'Beyaz Gömlek', 'Gümüş Aksesuar'],
        colors: ['#9370DB', '#FFFFFF', '#C0C0C0'],
        occasions: ['Akşam Yemeği', 'Tiyatro', 'Romantik']
      }
    ],
    autumn: [
      {
        id: 5,
        title: 'Sonbahar Yaprakları',
        description: 'Turuncu ve kahverengi tonlarında doğal uyum',
        image: 'https://images.pexels.com/photos/7679727/pexels-photo-7679727.jpeg?auto=compress&cs=tinysrgb&w=600',
        items: ['Turuncu Ebru Fular', 'Kahverengi Pantolon', 'Krem Kazak'],
        colors: ['#FF8C00', '#8B4513', '#F5F5DC'],
        occasions: ['İş', 'Kahve', 'Alışveriş']
      }
    ],
    winter: [
      {
        id: 6,
        title: 'Kış Masalı',
        description: 'Koyu renk ebru desenleriyle şık kış kombini',
        image: 'https://images.pexels.com/photos/7679728/pexels-photo-7679728.jpeg?auto=compress&cs=tinysrgb&w=600',
        items: ['Lacivert Ebru Şapka', 'Siyah Kaban', 'Gri Triko'],
        colors: ['#191970', '#000000', '#808080'],
        occasions: ['Resmi', 'Ofis', 'Gece']
      }
    ]
  };

  const styleTypes = [
    {
      id: 'casual',
      name: 'Günlük',
      icon: '👕',
      description: 'Rahat ve konforlu kombinler',
      tips: ['Ebru fular ile sade kıyafetleri renklendirin', 'Konforlu pantolon seçin', 'Doğal makyaj tercih edin']
    },
    {
      id: 'formal',
      name: 'Resmi',
      icon: '👔',
      description: 'Şık ve profesyonel görünüm',
      tips: ['Koyu renk ebru desenleri tercih edin', 'Minimalist aksesuar kullanın', 'Kaliteli kumaş seçin']
    },
    {
      id: 'bohemian',
      name: 'Bohem',
      icon: '🌸',
      description: 'Sanatsal ve özgür stil',
      tips: ['Canlı renkli ebru parçaları karıştırın', 'Katmanlı giyin', 'Doğal materyaller tercih edin']
    },
    {
      id: 'elegant',
      name: 'Zarif',
      icon: '✨',
      description: 'Sofistike ve incelikli',
      tips: ['Pastel ebru tonları seçin', 'Simetrik desenler tercih edin', 'Aksesuarları dengeli kullanın']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Stil Rehberi
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Ebru sanatının renkleriyle hayatınıza stil katın. 
            Her mevsim için özel kombin önerilerimizi keşfedin.
          </p>
        </div>
      </section>

      {/* Style Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stil Türleri
            </h2>
            <p className="text-gray-600">
              Kişiliğinize uygun stil türünü seçin, size özel kombinler keşfedin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {styleTypes.map(style => (
              <div key={style.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{style.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{style.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{style.description}</p>
                </div>
                <div className="space-y-2">
                  {style.tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Sparkles className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Guides */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mevsimlik Kombinler
            </h2>
            <p className="text-gray-600">
              Her mevsim için özel olarak hazırlanmış ebru kombini önerilerimiz
            </p>
          </div>

          {/* Season Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-2 shadow-sm">
              <div className="flex space-x-2">
                {seasons.map(season => (
                  <button
                    key={season.id}
                    onClick={() => setSelectedSeason(season.id)}
                    className={`px-6 py-3 rounded-md font-medium transition-colors ${
                      selectedSeason === season.id
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    <span className="mr-2">{season.emoji}</span>
                    {season.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Style Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {styleGuides[selectedSeason as keyof typeof styleGuides]?.map(guide => (
              <div key={guide.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {guide.description}
                  </p>
                  
                  {/* Items */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Parçalar:</h4>
                    <div className="flex flex-wrap gap-2">
                      {guide.items.map((item, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Colors */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Renk Paleti:</h4>
                    <div className="flex space-x-2">
                      {guide.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 rounded-full border-2 border-gray-300"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Occasions */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Uygun Ortamlar:</h4>
                    <div className="flex flex-wrap gap-2">
                      {guide.occasions.map((occasion, index) => (
                        <span
                          key={index}
                          className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                        >
                          {occasion}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group">
                    Bu Kombini Oluştur
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Harmony Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Renk Uyumu Rehberi
            </h2>
            <p className="text-gray-600">
              Ebru sanatının renkleriyle mükemmel uyum sağlayın
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-8 mb-4">
                <Palette className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Soğuk Tonlar</h3>
                <p className="text-gray-600 text-sm">
                  Mavi, yeşil, mor tonları sakinlik ve profesyonellik verir
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-lg p-8 mb-4">
                <Palette className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sıcak Tonlar</h3>
                <p className="text-gray-600 text-sm">
                  Turuncu, kırmızı, sarı tonları enerji ve canlılık katar
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-8 mb-4">
                <Palette className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Nötr Tonlar</h3>
                <p className="text-gray-600 text-sm">
                  Gri, bej, krem tonları dengeleyici ve zarif etki yaratır
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Size Özel Stil Danışmanlığı
          </h2>
          <p className="text-purple-100 text-lg mb-8">
            Kişisel stilinizi keşfetmek ve en uygun kombinleri oluşturmak için 
            uzman ekibimizden destek alın.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
            Stil Danışmanlığı Al
          </button>
        </div>
      </section>
    </div>
  );
};

export default StyleGuide;