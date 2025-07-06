import React, { useState } from 'react';
import { Upload, Palette, MessageCircle, CheckCircle, Info } from 'lucide-react';

const CustomOrders: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productType: '',
    colors: [],
    size: '',
    description: '',
    urgency: 'normal',
    budget: '',
    inspiration: ''
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [currentStep, setCurrentStep] = useState(1);

  const productTypes = [
    { id: 'fular', name: 'Fular', price: '450₺ - 600₺' },
    { id: 'pantolon', name: 'Pantolon', price: '800₺ - 1200₺' },
    { id: 'sapka', name: 'Şapka', price: '300₺ - 450₺' },
    { id: 'kombin', name: 'Kombin Seti', price: '1200₺ - 2000₺' },
    { id: 'diger', name: 'Diğer', price: 'Fiyat Teklifi' }
  ];

  const colorOptions = [
    { id: 'mavi', name: 'Mavi', color: '#3B82F6' },
    { id: 'mor', name: 'Mor', color: '#8B5CF6' },
    { id: 'yesil', name: 'Yeşil', color: '#10B981' },
    { id: 'turuncu', name: 'Turuncu', color: '#F59E0B' },
    { id: 'pembe', name: 'Pembe', color: '#EC4899' },
    { id: 'sari', name: 'Sarı', color: '#EAB308' },
    { id: 'kirmizi', name: 'Kırmızı', color: '#EF4444' },
    { id: 'kahverengi', name: 'Kahverengi', color: '#A16207' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleColorToggle = (colorId: string) => {
    setFormData(prev => ({
      ...prev,
      colors: prev.colors.includes(colorId)
        ? prev.colors.filter(id => id !== colorId)
        : [...prev.colors, colorId]
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    setCurrentStep(4); // Show success message
  };

  const steps = [
    { number: 1, title: 'Ürün Seçimi', description: 'Hangi ürünü özelleştirmek istiyorsunuz?' },
    { number: 2, title: 'Tasarım Tercihleri', description: 'Renk ve stil tercihlerinizi belirtin' },
    { number: 3, title: 'İletişim Bilgileri', description: 'Size nasıl ulaşabiliriz?' },
    { number: 4, title: 'Tamamlandı', description: 'Siparişiniz başarıyla alındı' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Özel Sipariş
          </h1>
          <p className="text-xl text-indigo-100 mb-8">
            Hayalinizdeki ebru sanatı eserini birlikte yaratıyoruz. 
            Kişisel tercihlerinizi paylaşın, size özel tasarım hazırlayalım.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                currentStep >= step.number
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {currentStep > step.number ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <span className="font-medium">{step.number}</span>
                )}
              </div>
              <div className="ml-3 hidden sm:block">
                <p className={`text-sm font-medium ${
                  currentStep >= step.number ? 'text-purple-600' : 'text-gray-500'
                }`}>
                  {step.title}
                </p>
                <p className="text-xs text-gray-500">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-16 h-0.5 mx-4 ${
                  currentStep > step.number ? 'bg-purple-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Hangi ürünü özelleştirmek istiyorsunuz?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {productTypes.map(product => (
                  <div
                    key={product.id}
                    className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                      formData.productType === product.id
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, productType: product.id }))}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">Fiyat aralığı: {product.price}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Teslim süresi: 2-3 hafta</span>
                      <div className={`w-5 h-5 rounded-full border-2 ${
                        formData.productType === product.id
                          ? 'border-purple-600 bg-purple-600'
                          : 'border-gray-300'
                      }`}>
                        {formData.productType === product.id && (
                          <div className="w-full h-full bg-white rounded-full transform scale-50"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setCurrentStep(2)}
                  disabled={!formData.productType}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Devam Et
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Tasarım Tercihlerinizi Belirtin
              </h2>
              
              {/* Color Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Palette className="w-5 h-5 mr-2" />
                  Renk Tercihleri
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Ebru deseninizde kullanılmasını istediğiniz renkleri seçin (çoklu seçim yapabilirsiniz)
                </p>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                  {colorOptions.map(color => (
                    <button
                      key={color.id}
                      onClick={() => handleColorToggle(color.id)}
                      className={`w-12 h-12 rounded-full border-4 transition-all ${
                        formData.colors.includes(color.id)
                          ? 'border-gray-900 scale-110'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{ backgroundColor: color.color }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Beden</h3>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Beden seçin</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Özel İstekler</h3>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Tasarım hakkında özel isteklerinizi, ilham aldığınız öğeleri veya detayları buraya yazın..."
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows={4}
                />
              </div>

              {/* File Upload */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">İlham Görselleri</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">
                    İlham aldığınız görselleri, renk paletlerini veya referans resimlerini yükleyin
                  </p>
                  <label className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors cursor-pointer">
                    Dosya Seç
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
                {uploadedFiles.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-2">Yüklenen dosyalar:</p>
                    <ul className="space-y-1">
                      {uploadedFiles.map((file, index) => (
                        <li key={index} className="text-sm text-gray-700">
                          {file.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Urgency */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Aciliyet</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: 'normal', name: 'Normal', description: '2-3 hafta', extra: '' },
                    { id: 'urgent', name: 'Acil', description: '1-2 hafta', extra: '+%25 ücret' },
                    { id: 'very-urgent', name: 'Çok Acil', description: '3-7 gün', extra: '+%50 ücret' }
                  ].map(urgency => (
                    <div
                      key={urgency.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        formData.urgency === urgency.id
                          ? 'border-purple-600 bg-purple-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, urgency: urgency.id }))}
                    >
                      <h4 className="font-medium text-gray-900">{urgency.name}</h4>
                      <p className="text-sm text-gray-600">{urgency.description}</p>
                      {urgency.extra && (
                        <p className="text-xs text-orange-600 mt-1">{urgency.extra}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="text-gray-600 hover:text-gray-800 font-medium"
                >
                  Geri
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Devam Et
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                İletişim Bilgileri
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bütçe Aralığı
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Bütçe aralığı seçin</option>
                    <option value="500-1000">500₺ - 1000₺</option>
                    <option value="1000-2000">1000₺ - 2000₺</option>
                    <option value="2000-5000">2000₺ - 5000₺</option>
                    <option value="5000+">5000₺+</option>
                  </select>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <Info className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium text-blue-900 mb-1">
                        Sipariş Süreci
                      </h4>
                      <p className="text-sm text-blue-700">
                        Talebinizi aldıktan sonra 24 saat içinde size detaylı fiyat teklifi ve 
                        tasarım sürecine dair bilgi göndereceğiz. Onayınızın ardından üretim başlayacak.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="text-gray-600 hover:text-gray-800 font-medium"
                  >
                    Geri
                  </button>
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                  >
                    Özel Siparişi Gönder
                  </button>
                </div>
              </form>
            </div>
          )}

          {currentStep === 4 && (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Siparişiniz Başarıyla Alındı!
              </h2>
              <p className="text-gray-600 mb-8">
                Özel sipariş talebiniz için teşekkür ederiz. Ekibimiz en kısa sürede size 
                detaylı fiyat teklifi ve tasarım sürecine dair bilgi gönderecek.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Sipariş Özeti
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Ürün:</span>
                    <span className="font-medium">
                      {productTypes.find(p => p.id === formData.productType)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Seçilen Renkler:</span>
                    <span className="font-medium">
                      {formData.colors.length} renk seçildi
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Aciliyet:</span>
                    <span className="font-medium">
                      {formData.urgency === 'normal' ? 'Normal' : 
                       formData.urgency === 'urgent' ? 'Acil' : 'Çok Acil'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setCurrentStep(1);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      productType: '',
                      colors: [],
                      size: '',
                      description: '',
                      urgency: 'normal',
                      budget: '',
                      inspiration: ''
                    });
                  }}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Yeni Sipariş Ver
                </button>
                <button
                  onClick={() => window.location.href = '/'}
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Ana Sayfaya Dön
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomOrders;