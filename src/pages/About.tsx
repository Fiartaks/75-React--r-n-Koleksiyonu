import React from 'react';
import { Award, Users, Heart, Sparkles, Clock, Shield } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: 'Elif Yılmaz',
      role: 'Kurucu & Baş Tasarımcı',
      image: 'https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Ebru sanatında 15 yıllık deneyimi olan Elif, geleneksel teknikleri modern tasarımla buluşturuyor.'
    },
    {
      name: 'Ahmet Kara',
      role: 'Usta Ebruzen',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Geleneksel ebru sanatını yaşatan Ahmet usta, her desende yılların tecrübesini yansıtıyor.'
    },
    {
      name: 'Zeynep Özkan',
      role: 'Üretim Koordinatörü',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Kalite kontrol ve üretim süreçlerini titizlikle yöneten Zeynep, her ürünün mükemmel olmasını sağlıyor.'
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Tutku',
      description: 'Ebru sanatına olan sevgimiz ve bu güzel sanatı yaşatma tutkumuz her işimize yansıyor.'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: 'Kalite',
      description: 'En yüksek kalite standartlarında, özenle seçilmiş malzemelerle üretim yapıyoruz.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      title: 'Benzersizlik',
      description: 'Her ürün tamamıyla özgün ve tekrar edilemez. Hiçbir desen bir diğerinin aynısı değil.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Müşteri Odaklılık',
      description: 'Müşterilerimizin memnuniyeti bizim en büyük önceliğimiz ve başarı kriterimiz.'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Marbleria Kuruldu',
      description: 'Ebru sanatını modern yaşamla buluşturma hayaliyle yola çıktık.'
    },
    {
      year: '2021',
      title: 'İlk Koleksiyon',
      description: 'Fular ve şapka koleksiyonumuzla müşterilerimizle buluştuk.'
    },
    {
      year: '2022',
      title: 'Üretim Kapasitesi Artırıldı',
      description: 'Artan talep üzerine atölyemizi genişlettik ve ekibimizi büyüttük.'
    },
    {
      year: '2023',
      title: 'Özel Sipariş Servisi',
      description: 'Müşterilerimizin özel isteklerine yönelik kişiselleştirme hizmeti başlattık.'
    },
    {
      year: '2024',
      title: 'Dijital Dönüşüm',
      description: 'Online platformumuzla tüm Türkiye\'ye ulaşma hedefine ulaştık.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Marbleria'nın
            </span>
            <br />
            Hikayesi
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Geleneksel ebru sanatının büyüleyici dünyasını modern yaşamla buluşturan 
            bir ailenin tutkuyla başladığı yolculuk.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ebru Sanatının Modern Yorumu
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Marbleria, geleneksel Türk ebru sanatının büyüleyici dünyasından ilham alan 
                  bir moda markasıdır. 2020 yılında, ebru sanatına olan derin sevgi ve bu 
                  güzel sanatı yaşatma tutkusuyla kurulmuştur.
                </p>
                <p>
                  Ebru sanatının su üzerinde yaratılan benzersiz desenlerini, günlük yaşamın 
                  parçası haline getirmek için çalışıyoruz. Her ürünümüz, yüzyıllardır 
                  süregelen geleneksel tekniklerin modern bir yorumu olarak ortaya çıkıyor.
                </p>
                <p>
                  Misyonumuz, bu eşsiz sanat formunu koruyarak gelecek nesillere aktarmak 
                  ve aynı zamanda modern yaşamın bir parçası haline getirmektir.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ebru sanatı süreci"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Marbleria'yı ayakta tutan ve her kararımızda rehber olan temel değerlerimiz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ekibimiz
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Marbleria ailesinin tutkulu ve deneyimli üyeleri ile tanışın
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Yolculuğumuz
            </h2>
            <p className="text-gray-600">
              Marbleria'nın kurulduğu günden bu yana geçirdiği önemli kilometre taşları
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Neden Marbleria?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ebru sanatını modern yaşamla buluşturan benzersiz yaklaşımımız
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hızlı Teslimat</h3>
              <p className="text-gray-600 text-sm">
                Türkiye genelinde 2-3 gün içinde kapınıza kadar teslimat
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kalite Garantisi</h3>
              <p className="text-gray-600 text-sm">
                Memnun kalmazsanız 30 gün içinde iade ve değişim garantisi
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Müşteri Memnuniyeti</h3>
              <p className="text-gray-600 text-sm">
                7/24 müşteri destek hizmetimiz ile her zaman yanınızdayız
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Marbleria Ailesine Katılın
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Ebru sanatının büyüleyici dünyasını keşfedin, benzersiz tasarımlarla 
            stilinizi yansıtın ve bu güzel sanatı yaşatmaya destek olun.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
            Koleksiyonu Keşfet
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;