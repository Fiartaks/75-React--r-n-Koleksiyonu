import { useState, useEffect } from 'react';
import { client, queries, Product } from '../lib/sanity';
import { fallbackProducts } from '../data/fallbackProducts';

// Sanity bağlantısını kontrol et
const checkSanityConnection = async (): Promise<boolean> => {
  try {
    await client.fetch('*[_type == "product"][0]');
    return true;
  } catch (error) {
    console.warn('Sanity CMS bağlantısı kurulamadı, fallback veriler kullanılıyor:', error);
    return false;
  }
};

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const isConnected = await checkSanityConnection();
        
        if (isConnected) {
          const data = await client.fetch(queries.allProducts);
          setProducts(data);
        } else {
          // Fallback verileri kullan
          setProducts(fallbackProducts as Product[]);
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        // Hata durumunda fallback verileri kullan
        setProducts(fallbackProducts as Product[]);
        setError(null); // Kullanıcıya hata gösterme, fallback verilerle devam et
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export const useFeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);
        const isConnected = await checkSanityConnection();
        
        if (isConnected) {
          const data = await client.fetch(queries.featuredProducts);
          setProducts(data);
        } else {
          // Fallback verileri kullan - sadece featured olanları
          const featuredProducts = fallbackProducts.filter(p => p.featured);
          setProducts(featuredProducts as Product[]);
        }
      } catch (err) {
        console.error('Error fetching featured products:', err);
        // Hata durumunda fallback verileri kullan
        const featuredProducts = fallbackProducts.filter(p => p.featured);
        setProducts(featuredProducts as Product[]);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return { products, loading, error };
};

export const useProduct = (slug: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const isConnected = await checkSanityConnection();
        
        if (isConnected) {
          const data = await client.fetch(queries.productBySlug, { slug });
          setProduct(data);
        } else {
          // Fallback verileri kullan
          const foundProduct = fallbackProducts.find(p => 
            p.slug?.current === slug || p._id === slug
          );
          setProduct(foundProduct as Product || null);
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        // Hata durumunda fallback verileri kullan
        const foundProduct = fallbackProducts.find(p => 
          p.slug?.current === slug || p._id === slug
        );
        setProduct(foundProduct as Product || null);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  return { product, loading, error };
};

export const useProductsByCategory = (category: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!category) return;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const isConnected = await checkSanityConnection();
        
        if (isConnected) {
          const data = await client.fetch(queries.productsByCategory, { category });
          setProducts(data);
        } else {
          // Fallback verileri kullan
          const categoryProducts = fallbackProducts.filter(p => p.category === category);
          setProducts(categoryProducts as Product[]);
        }
      } catch (err) {
        console.error('Error fetching products by category:', err);
        // Hata durumunda fallback verileri kullan
        const categoryProducts = fallbackProducts.filter(p => p.category === category);
        setProducts(categoryProducts as Product[]);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return { products, loading, error };
};