import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
    return (
        <nav className="bg-white dark:bg-gray-800 shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold flex items-center gap-2">
                        <Image src="/logo.png" alt="Rahul Sharma Blogs" width={28} height={28} />
                        RS Blogs
                    </Link>
                    <div className="flex space-x-6">
                        <Link
                            href="/"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            Home
                        </Link>
                        <Link
                            href="/blogs"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            All Posts
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
} 