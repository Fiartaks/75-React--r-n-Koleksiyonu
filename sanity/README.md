# Marbleria CMS Kurulumu

Bu dosya Sanity CMS'in kurulumu ve yapılandırması için gerekli adımları içerir.

## 1. Sanity Hesabı Oluşturma

1. [Sanity.io](https://www.sanity.io/) adresine gidin
2. "Get started for free" butonuna tıklayın
3. GitHub, Google veya email ile hesap oluşturun

## 2. Yeni Proje Oluşturma

1. Sanity Studio'ya giriş yapın
2. "Create new project" butonuna tıklayın
3. Proje adını "marbleria" olarak girin
4. Dataset adını "production" olarak bırakın
5. Template olarak "Clean project" seçin

## 3. Proje Bilgilerini Alma

Proje oluşturduktan sonra:
- Project ID'yi kopyalayın
- Dataset adını not alın (genellikle "production")

## 4. Environment Variables Ayarlama

`.env.local` dosyasını güncelleyin:

```env
VITE_SANITY_PROJECT_ID=your_actual_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_TOKEN=your_token_here
```

## 5. Sanity Studio Kurulumu

Ayrı bir klasörde Sanity Studio'yu kurmak için:

```bash
npm create sanity@latest -- --template clean --create-project "Marbleria CMS" --dataset production
```

## 6. Schema Dosyaları

Sanity Studio'da aşağıdaki schema dosyalarını oluşturun:

### schemas/product.js
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
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      title: 'Fiyat',
      type: 'number',
      validation: Rule => Rule.required().positive()
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
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Açıklama',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'images',
      title: 'Ürün Görselleri',
      type: 'array',
      of: [{type: 'image'}],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'colors',
      title: 'Renkler',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'sizes',
      title: 'Bedenler',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'featured',
      title: 'Öne Çıkan',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'inStock',
      title: 'Stokta',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'materials',
      title: 'Malzemeler',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'careInstructions',
      title: 'Bakım Talimatları',
      type: 'text'
    },
    {
      name: 'artProcess',
      title: 'Sanat Süreci',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0',
      subtitle: 'category'
    }
  }
}
```

### schemas/styleGuide.js
```javascript
export default {
  name: 'styleGuide',
  title: 'Stil Rehberi',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Açıklama',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'season',
      title: 'Mevsim',
      type: 'string',
      options: {
        list: [
          {title: 'İlkbahar', value: 'spring'},
          {title: 'Yaz', value: 'summer'},
          {title: 'Sonbahar', value: 'autumn'},
          {title: 'Kış', value: 'winter'}
        ]
      }
    },
    {
      name: 'image',
      title: 'Görsel',
      type: 'image'
    },
    {
      name: 'items',
      title: 'Parçalar',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'colors',
      title: 'Renk Paleti',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'occasions',
      title: 'Uygun Ortamlar',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'styleType',
      title: 'Stil Türü',
      type: 'string',
      options: {
        list: [
          {title: 'Günlük', value: 'casual'},
          {title: 'Resmi', value: 'formal'},
          {title: 'Bohem', value: 'bohemian'},
          {title: 'Zarif', value: 'elegant'}
        ]
      }
    }
  ]
}
```

## 7. İlk Ürünleri Ekleme

Sanity Studio'da:
1. "Ürün" sekmesine gidin
2. "Create new" butonuna tıklayın
3. Ürün bilgilerini doldurun
4. Görselleri yükleyin
5. "Publish" butonuna tıklayın

## 8. API Token Oluşturma

1. Sanity Dashboard'da projenize gidin
2. "API" sekmesine tıklayın
3. "Tokens" bölümünde "Add API token" butonuna tıklayın
4. Token adını "Marbleria Frontend" olarak girin
5. Permissions olarak "Viewer" seçin
6. Token'ı kopyalayın ve `.env.local` dosyasına ekleyin

## 9. CORS Ayarları

1. Sanity Dashboard'da "API" sekmesine gidin
2. "CORS Origins" bölümünde "Add CORS origin" butonuna tıklayın
3. Origin olarak `http://localhost:5173` ekleyin (development için)
4. Production için domain adresinizi ekleyin

## Notlar

- Sanity'nin ücretsiz planında aylık 100.000 API isteği hakkınız var
- Görsel yükleme için aylık 5GB limit var
- Bu limitler çoğu küçük-orta ölçekli proje için yeterlidir