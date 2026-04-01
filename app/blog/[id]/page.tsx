import { notFound } from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/app/lib/prisma';

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getPost(id: string) {
  const postId = parseInt(id);
  if (isNaN(postId)) return null;
  
  const post = await prisma.blogPost.findUnique({
    where: { id: postId },
  });
  return post;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Blog
      </Link>
      
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      
      <div className="text-gray-500 mb-6">
        By {post.author || 'Anonymous'} • {new Date(post.createdAt).toLocaleDateString()}
        {post.updatedAt !== post.createdAt && (
          <span> (Updated: {new Date(post.updatedAt).toLocaleDateString()})</span>
        )}
      </div>
      
      <div className="prose max-w-none">
        <p className="whitespace-pre-wrap">{post.content}</p>
      </div>
    </div>
  );
}