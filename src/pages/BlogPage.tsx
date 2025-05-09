import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { Calendar, ChevronRight, Search } from 'lucide-react'; // Removed unused Clock import
import { BlogPost } from '@/types';
import { Input } from '@/components/ui/input';
import Newsletter from '@/components/Newsletter';
import { Helmet } from 'react-helmet';

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

const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onChange 
}: { 
  categories: string[], 
  selectedCategory: string | null, 
  onChange: (category: string | null) => void 
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <div className="space-y-2">
        <button 
          className={`block px-3 py-2 rounded-md w-full text-left ${selectedCategory === null ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
          onClick={() => onChange(null)}
        >
          All Categories
        </button>
        {categories.map((category) => (
          <button 
            key={category}
            className={`block px-3 py-2 rounded-md w-full text-left ${selectedCategory === category ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
            onClick={() => onChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Fetch blog posts from API
  // Suppression des variables inutilisées (isLoading et error)
const { data: posts } = useQuery<BlogPost[]>({
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
    },
    {
      id: "4",
      title: "The Future of AI in Everyday Technology",
      excerpt: "How artificial intelligence is becoming integrated into our daily devices and changing the way we interact with technology.",
      content: "Full content of the blog post goes here...",
      category: "Artificial Intelligence",
      author: {
        name: "Jennifer Lee",
        avatar: ""
      },
      publishDate: "2023-05-02T00:00:00Z",
      readTime: "7 min read",
      imageUrl: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "5",
      title: "Creating a Secure Password Strategy",
      excerpt: "Best practices for generating and managing passwords to keep your accounts safe in an era of increasing data breaches.",
      content: "Full content of the blog post goes here...",
      category: "Cybersecurity",
      author: {
        name: "Michael Chen",
        avatar: ""
      },
      publishDate: "2023-04-18T00:00:00Z",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "6",
      title: "The Complete Guide to Cloud Storage Solutions",
      excerpt: "Comparing the top cloud storage options to help you find the best service for your personal or business needs.",
      content: "Full content of the blog post goes here...",
      category: "Cloud Computing",
      author: {
        name: "Samantha Wright",
        avatar: ""
      },
      publishDate: "2023-04-05T00:00:00Z",
      readTime: "9 min read",
      imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];

  const displayPosts = posts || fallbackPosts;

  // Extract all unique categories
  const categories = Array.from(new Set(displayPosts.map(post => post.category)));

  // Filter posts by search query and selected category
  const filteredPosts = displayPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === null || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog | EasyTech</title>
        <meta name="description" content="Helpful articles, tips, and insights about technology, cybersecurity, productivity tools, and more to help you navigate the tech world." />
      </Helmet>
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Tech Insights Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Stay updated with the latest tech trends, tips, and insights to help you navigate the digital world.</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-3/4">
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-xl shadow text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">No posts found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </div>
            
            <div className="lg:w-1/4">
              <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                <h3 className="text-lg font-semibold mb-4">Search Articles</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <CategoryFilter 
                  categories={categories} 
                  selectedCategory={selectedCategory}
                  onChange={setSelectedCategory}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default BlogPage;
