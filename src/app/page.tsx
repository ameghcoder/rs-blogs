import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/BlogCard';

export const metadata: Metadata = {
  title: 'Rahul Sharma Blogs',
  description: 'Welcome to Rahul Sharma Blogs where I share my thoughts and experiences.',
  openGraph: {
    title: 'Rahul Sharma Blogs',
    description: 'Welcome to Rahul Sharma Blogs where I share my thoughts and experiences.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Sharma Blogs',
    description: 'Welcome to Rahul Sharma Blogs where I share my thoughts and experiences.',
  },
};

export default async function Home() {
  const allPosts = await getAllPosts();
  // Get only the latest 3 posts for the homepage
  const latestPosts = allPosts.slice(0, 4);

  return (
    <main className="container mx-auto px-4 py-8">
      <JsonLd />
      <HeroSection />
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Latest Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
      <div className="flex justify-between items-center mb-8">
        <Button variant="default">
          <Link
            href="/blogs"
            className="hover:underline"
          >
            View All Posts →
          </Link>
        </Button>
      </div>
    </main>
  );
}
