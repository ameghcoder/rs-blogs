import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownContentProps {
    content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
    return (
        <article className="prose lg:prose-xl max-w-none markdown-content">
            <ReactMarkdown >{content}</ReactMarkdown>
        </article>
    );
} 