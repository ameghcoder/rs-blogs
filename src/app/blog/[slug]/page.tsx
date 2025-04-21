import { getPostBySlug, getAllPosts } from '@/lib/blog';
import MarkdownContent from '@/components/MarkdownContent';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import Image from 'next/image';

type Props = {
    params: Promise<{ slug: string }> | { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const post = await getPostBySlug(resolvedParams.slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${post.slug}`,
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                },
            ],
            authors: [post.author],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
        },
    };
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: Props) {
    const resolvedParams = await params;
    const post = await getPostBySlug(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="container mx-auto px-4 py-8">
            <JsonLd post={post} />
            <Link
                href="/blogs"
                className="inline-block mb-6 text-blue-600 dark:text-blue-400 hover:underline"
            >
                ← Back to all posts
            </Link>
            <div>
                {
                    post.image && (
                        <Image src={post.image} alt={post.title} width={1200} height={500} className='w-full max-h-[50vh] object-cover rounded-lg mb-6' />
                    )
                }
            </div>
            <article>
                <header className="mb-4">
                    <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
                    <div className="text-gray-600 dark:text-gray-400">
                        {new Date(post.date).toLocaleDateString()} • {post.author}
                    </div>
                </header>
                <MarkdownContent content={post.content} />
            </article>
        </main>
    );
}
