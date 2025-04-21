"use client"
import { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog';
import BlogCard from './BlogCard';

interface SearchPostsProps {
    posts: BlogPost[];
}

export default function SearchPosts({ posts }: SearchPostsProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredPosts(posts);
            return;
        }

        console.log(searchTerm);

        const searchTermLower = searchTerm.toLowerCase();
        const filtered = posts.filter(
            (post) =>
                (post.title?.toLowerCase() || '').includes(searchTermLower) ||
                (post.description?.toLowerCase() || '').includes(searchTermLower) ||
                (post.author?.toLowerCase() || '').includes(searchTermLower) ||
                (post.content?.toLowerCase() || '').includes(searchTermLower)
        );
        setFilteredPosts(filtered);
    }, [searchTerm, posts]);

    return (
        <div className="mb-8">
            <div className="mb-4">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Search Posts
                </label>
                <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by title, author, or content..."
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                />
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
            </div>

            <div className="flex flex-col space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-8 text-gray-600 dark:text-gray-400">
                        No posts found matching your search criteria.
                    </div>
                )}
            </div>
        </div>
    );
} 