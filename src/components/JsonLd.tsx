"use client";

import { BlogPost } from '@/types/blog';

interface JsonLdProps {
    post?: BlogPost;
    isBlogList?: boolean;
}

export default function JsonLd({ post, isBlogList = false }: JsonLdProps) {
    const baseUrl = 'https://myblog.com'; // Replace with your actual domain

    // Schema for the blog post
    if (post) {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            author: {
                '@type': 'Person',
                name: post.author,
            },
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `${baseUrl}/blog/${post.slug}`,
            },
            publisher: {
                '@type': 'Organization',
                name: 'My Blog',
                logo: {
                    '@type': 'ImageObject',
                    url: `${baseUrl}/logo.png`, // Replace with your actual logo
                },
            },
        };

        return (
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        );
    }

    // Schema for the blog list
    if (isBlogList) {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'My Blog',
            description: 'A personal blog built with Next.js',
            url: `${baseUrl}/blogs`,
            publisher: {
                '@type': 'Organization',
                name: 'My Blog',
                logo: {
                    '@type': 'ImageObject',
                    url: `${baseUrl}/logo.png`, // Replace with your actual logo
                },
            },
        };

        return (
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        );
    }

    // Default schema for the homepage
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'My Blog',
        description: 'A personal blog built with Next.js',
        url: baseUrl,
        publisher: {
            '@type': 'Organization',
            name: 'My Blog',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/logo.png`, // Replace with your actual logo
            },
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
} 