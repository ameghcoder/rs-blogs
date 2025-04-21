import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

interface Post {
    slug: string;
    title: string;
    date: string;
    author: string;
    description: string;
    image: string;
}
const BlogCard = ({ post }: { post: Post }) => {
    return (

        <article className="max-w-lg mx-auto relative">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm relative">
                <Link href={`/blog/${post.slug}`}>
                    <Image
                        width={600}
                        height={300}
                        className="w-full h-48 rounded-t-lg"
                        src={post.image ? post.image : 'https://flowbite.com/docs/images/blog/image-1.jpg'}
                        alt={post.title} />
                </Link>
                <div className="p-5 flex flex-col justify-between h-full">
                    <div>
                        <div className="mb-2 text-xs">
                            {new Date(post.date).toLocaleDateString()} • {post.author}
                        </div>
                        <a href="#">
                            <h2 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{post.title}</h2>
                        </a>
                        <p className="font-normal text-gray-700 mb-3 line-clamp-1">{post.description}</p>
                    </div>
                    <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href={`/blog/${post.slug}`}>
                        Read more →
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default BlogCard
