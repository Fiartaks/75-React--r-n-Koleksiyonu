import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'demo-project',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
});

// Image URL builder
const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

// GROQ queries
export const queries = {
  // Get all products
  allProducts: `*[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    price,
    category,
    description,
    colors,
    sizes,
    images,
    featured,
    inStock,
    materials,
    careInstructions,
    artProcess,
    _createdAt
  }`,

  // Get product by slug
  productBySlug: `*[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    price,
    category,
    description,
    colors,
    sizes,
    images,
    featured,
    inStock,
    materials,
    careInstructions,
    artProcess,
    relatedProducts[]-> {
      _id,
      name,
      slug,
      price,
      images[0]
    },
    _createdAt
  }`,

  // Get featured products
  featuredProducts: `*[_type == "product" && featured == true] | order(_createdAt desc) [0...6] {
    _id,
    name,
    slug,
    price,
    category,
    images[0],
    colors
  }`,

  // Get products by category
  productsByCategory: `*[_type == "product" && category == $category] | order(_createdAt desc) {
    _id,
    name,
    slug,
    price,
    category,
    description,
    colors,
    sizes,
    images[0],
    featured,
    inStock
  }`,

  // Get style guides
  allStyleGuides: `*[_type == "styleGuide"] | order(season asc) {
    _id,
    title,
    description,
    season,
    image,
    items,
    colors,
    occasions,
    styleType
  }`,

  // Get blog posts
  allBlogPosts: `*[_type == "blogPost"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    author,
    publishedAt,
    categories
  }`
};

// Product interface
export interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  price: number;
  category: string;
  description: string;
  colors: string[];
  sizes: string[];
  images: any[];
  featured: boolean;
  inStock: boolean;
  materials: string[];
  careInstructions: string;
  artProcess: string;
  relatedProducts?: Product[];
  _createdAt: string;
}

// Style Guide interface
export interface StyleGuide {
  _id: string;
  title: string;
  description: string;
  season: string;
  image: any;
  items: string[];
  colors: string[];
  occasions: string[];
  styleType: string;
}