'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', content: '', author: '' });
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/blogposts');
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingId ? 'PUT' : 'POST';
      const body = editingId ? { id: editingId, ...formData } : formData;
      
      const res = await fetch('/api/blogposts', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        fetchPosts();
        setFormData({ title: '', content: '', author: '' });
        setShowForm(false);
        setEditingId(null);
      }
    } catch (error) {
      console.error('Failed to save post:', error);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setFormData({ title: post.title, content: post.content, author: post.author });
    setEditingId(post.id);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    try {
      await fetch(`/api/blogposts?id=${id}`, { method: 'DELETE' });
      fetchPosts();
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <button
          onClick={() => { setShowForm(!showForm); setEditingId(null); setFormData({ title: '', content: '', author: '' }); }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {showForm ? 'Cancel' : 'New Post'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg mb-8">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Content</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full p-2 border rounded h-32"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Author</label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            {editingId ? 'Update' : 'Create'}
          </button>
        </form>
      )}

      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-gray-500 text-center">No blog posts yet.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <Link href={`/blog/${post.id}`}>
                <h2 className="text-xl font-semibold text-blue-600 hover:underline">{post.title}</h2>
              </Link>
              <p className="text-gray-600 mt-2 line-clamp-2">{post.content}</p>
              <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <span>By {post.author || 'Anonymous'}</span>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="mt-4 flex gap-2">
                <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">Read More</Link>
                <button onClick={() => handleEdit(post)} className="text-yellow-600 hover:underline">Edit</button>
                <button onClick={() => handleDelete(post.id)} className="text-red-600 hover:underline">Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}