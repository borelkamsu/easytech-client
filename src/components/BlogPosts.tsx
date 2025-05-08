import { Link } from 'wouter';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { BlogPost } from '@/types';

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 h-full flex flex-col hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex-grow">
        <div className="flex items-center mb-4">
          <span className="text-sm text-gray-500 flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {new Date(post.publishDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-sm text-primary">{post.category}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
      </div>
      <div className="px-6 pb-6">
        <Link href={`/blog/${post.id}`} className="text-primary hover:text-blue-600 font-medium flex items-center">
          Read More
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

const BlogPosts = ({ limit }: { limit?: number }) => {
  // Fetch blog posts from API
  const { data: posts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'],
  });

  // Fallback blog posts data in case of error or while loading
  const fallbackPosts: BlogPost[] = [
    {
      id: "1",
      title: "5 Essential Cybersecurity Tips for Small Businesses",
      excerpt: "Protect your business from common cyber threats with these practical security measures that won't break the bank.",
      content: "Full content of the blog post goes here...",
      category: "Cybersecurity",
      author: {
        name: "James Davis",
        avatar: ""
      },
      publishDate: "2023-06-12T00:00:00Z",
      readTime: "6 min read",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "2",
      title: "10 Free Tools to Boost Your Remote Work Productivity",
      excerpt: "Discover powerful free applications that can help you stay organized and productive while working remotely.",
      content: "Full content of the blog post goes here...",
      category: "Productivity",
      author: {
        name: "Elena Lopez",
        avatar: ""
      },
      publishDate: "2023-05-28T00:00:00Z",
      readTime: "8 min read",
      imageUrl: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "3",
      title: "How to Choose the Right Computer for Your Needs",
      excerpt: "A straightforward guide to understanding computer specifications and selecting the perfect device for your requirements.",
      content: "Full content of the blog post goes here...",
      category: "Hardware",
      author: {
        name: "Ryan Park",
        avatar: ""
      },
      publishDate: "2023-05-15T00:00:00Z",
      readTime: "10 min read",
      imageUrl: "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];

  const displayPosts = posts || fallbackPosts;
  // Apply limit if provided
  const limitedPosts = limit ? displayPosts.slice(0, limit) : displayPosts;

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest from Our Blog</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Tips, trends, and insights to help you navigate the tech world.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {limitedPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
        
        {limit && (
          <div className="mt-12 text-center">
            <Link href="/blog" className="inline-flex items-center text-primary hover:text-blue-600 font-medium">
              View All Posts
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPosts;
