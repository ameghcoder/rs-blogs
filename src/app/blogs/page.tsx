import { getAllPosts } from '@/lib/blog';
import { Metadata } from 'next';
import SearchPosts from '@/components/SearchPosts';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'All Blog Posts',
    description: 'Browse and search all blog posts on my website.',
    openGraph: {
        title: 'All Blog Posts',
        description: 'Browse and search all blog posts on my website.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'All Blog Posts',
        description: 'Browse and search all blog posts on my website.',
    },
};

export default async function BlogsPage() {
    const posts = await getAllPosts();

    return (
        <main className="container mx-auto px-4 py-8">
            <JsonLd isBlogList={true} />
            <h1 className="text-4xl font-bold mb-8">All Blog Posts</h1>
            <SearchPosts posts={posts} />
        </main>
    );
}
//                 >