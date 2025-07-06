# 🌀 Ürün Koleksiyonu

Marbleria, geleneksel Türk ebru sanatından ilham alan benzersiz moda ürünlerinin satışa sunulduğu modern bir e-ticaret platformudur. Fular, pantolon, şapka ve kombin setleri ile ebru sanatının büyüleyici dünyasını günlük yaşamla buluşturuyoruz.

![Marbleria Banner](https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1200)

## ✨ Özellikler

### 🛍️ E-Ticaret Özellikleri
- **Ürün Kataloğu**: Fular, pantolon, şapka ve kombin setleri
- **Gelişmiş Filtreleme**: Kategori, fiyat, renk ve beden filtreleri
- **Sepet Yönetimi**: Ürün ekleme, çıkarma ve miktar güncelleme
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu modern arayüz

### 🎨 Stil ve Tasarım
- **Stil Rehberi**: Mevsimlik kombin önerileri
- **Renk Uyumu**: Ebru sanatı renk paletleri
- **Kişiselleştirme**: Özel sipariş formu
- **Sanat Süreci**: Her ürünün ebru hikayesi

### 🔧 Yönetim Paneli
- **Ürün Yönetimi**: Ekleme, düzenleme, silme
- **Görsel Yükleme**: Drag & drop resim yükleme
- **Stok Takibi**: Anlık stok durumu
- **Admin Dashboard**: Kapsamlı yönetim arayüzü

### 📱 Kullanıcı Deneyimi
- **Hızlı Arama**: Anlık ürün arama
- **Görünüm Modları**: Grid ve liste görünümü
- **Favoriler**: Beğenilen ürünleri kaydetme
- **Sosyal Paylaşım**: Ürün paylaşım özellikleri

## 🚀 Teknoloji Stack

### Frontend
- **React 18** - Modern UI kütüphanesi
- **TypeScript** - Tip güvenli geliştirme
- **Vite** - Hızlı geliştirme ortamı
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - SPA routing
- **Lucide React** - Modern icon seti

### Backend & CMS
- **Sanity CMS** - Headless content management
- **Sanity Studio** - İçerik yönetim arayüzü
- **GROQ** - Güçlü sorgu dili

### Deployment
- **Netlify** - Frontend hosting
- **Sanity Cloud** - CMS hosting

## 📦 Kurulum

### Ön Gereksinimler
- Node.js (v18 veya üzeri)
- npm veya yarn
- Git

### 1. Projeyi Klonlayın
```bash
git clone https://github.com/kullaniciadi/marbleria.git
cd marbleria
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. Ortam Değişkenlerini Ayarlayın
`.env.local` dosyası oluşturun:

```env
# Sanity CMS Ayarları
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_TOKEN=your_token

# Geliştirme Ortamı
VITE_API_BASE_URL=http://localhost:5173
```

### 4. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```

Uygulama `http://localhost:5173` adresinde çalışacaktır.

## 🎯 Sanity CMS Kurulumu

### 1. Sanity Hesabı Oluşturun
- [Sanity.io](https://www.sanity.io/) adresine gidin
- Ücretsiz hesap oluşturun
- Yeni proje oluşturun

### 2. Proje Bilgilerini Alın
- Project ID'yi kopyalayın
- Dataset adını not alın (genellikle "production")

### 3. Schema Dosyalarını Ekleyin
Sanity Studio'da aşağıdaki schema'ları oluşturun:

#### Product Schema
```javascript
export default {
  name: 'product',
  title: 'Ürün',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Ürün Adı',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'name' }
    },
    {
      name: 'price',
      title: 'Fiyat',
      type: 'number'
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          {title: 'Fular', value: 'fular'},
          {title: 'Pantolon', value: 'pantolon'},
          {title: 'Şapka', value: 'sapka'},
          {title: 'Kombin', value: 'kombin'}
        ]
      }
    },
    {
      name: 'images',
      title: 'Ürün Görselleri',
      type: 'array',
      of: [{type: 'image'}]
    },
    // Diğer alanlar...
  ]
}
```

### 4. API Token Oluşturun
- Sanity Dashboard'da "API" sekmesine gidin
- "Add API token" butonuna tıklayın
- "Viewer" yetkisi verin
- Token'ı `.env.local` dosyasına ekleyin

## 📁 Proje Yapısı

```
marbleria/
├── public/                 # Statik dosyalar
├── src/
│   ├── components/         # React bileşenleri
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ImageUpload.tsx
│   │   └── ProductForm.tsx
│   ├── pages/             # Sayfa bileşenleri
│   │   ├── Home.tsx
│   │   ├── Products.tsx
│   │   ├── StyleGuide.tsx
│   │   ├── CustomOrders.tsx
│   │   ├── About.tsx
│   │   ├── Cart.tsx
│   │   └── AdminPanel.tsx
│   ├── context/           # React Context
│   │   └── CartContext.tsx
│   ├── hooks/             # Custom hooks
│   │   └── useProducts.ts
│   ├── lib/               # Yardımcı kütüphaneler
│   │   └── sanity.ts
│   ├── data/              # Fallback veriler
│   │   └── fallbackProducts.ts
│   └── App.tsx
├── sanity/                # Sanity CMS dokümantasyonu
├── package.json
└── README.md
```

## 🎨 Kullanım

### Ürün Yönetimi
1. `/admin` adresine gidin
2. "Yeni Ürün Ekle" butonuna tıklayın
3. Ürün bilgilerini doldurun
4. Görselleri yükleyin (drag & drop destekli)
5. "Kaydet" butonuna tıklayın

### Stil Rehberi
- `/style-guide` sayfasında mevsimlik kombinleri görüntüleyin
- Renk uyumu rehberini inceleyin
- Stil türlerini keşfedin

### Özel Sipariş
- `/custom-orders` sayfasından özel sipariş verin
- Renk ve tasarım tercihlerinizi belirtin
- İlham görsellerinizi yükleyin

## 🔧 Geliştirme

### Yeni Özellik Ekleme
1. Feature branch oluşturun
2. Değişiklikleri yapın
3. Test edin
4. Pull request açın

### Kod Standartları
- TypeScript kullanın
- ESLint kurallarına uyun
- Responsive tasarım yapın
- Accessibility standartlarını takip edin

### Build ve Deploy
```bash
# Production build
npm run build

# Preview build
npm run preview

# Lint kontrolü
npm run lint
```

## 🌐 Deployment

### Netlify ile Deploy
1. GitHub repository'yi Netlify'a bağlayın
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Environment variables'ları ekleyin

### Vercel ile Deploy
1. Vercel CLI'ı yükleyin: `npm i -g vercel`
2. `vercel` komutunu çalıştırın
3. Environment variables'ları ekleyin

## 📊 Performans

- **Lighthouse Score**: 95+
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## 🔒 Güvenlik

- HTTPS zorunlu
- XSS koruması
- CSRF koruması
- Güvenli API endpoints

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

- **Website**: [marbleria.com](https://marbleria.com)
- **Email**: info@marbleria.com
- **Instagram**: [@marbleria_official](https://instagram.com/marbleria_official)

## 🙏 Teşekkürler

- [Pexels](https://pexels.com) - Ücretsiz görseller
- [Lucide](https://lucide.dev) - İkonlar
- [Tailwind CSS](https://tailwindcss.com) - CSS Framework
- [Sanity](https://sanity.io) - Headless CMS

---

**Marbleria** - Ebru sanatının büyüleyici dünyasını modern yaşamla buluşturan platform 🌀# 75-React--r-n-Koleksiyonu
