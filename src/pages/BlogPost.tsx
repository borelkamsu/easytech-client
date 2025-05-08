import { useParams, Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { BlogPost as BlogPostType } from '@/types';
import Newsletter from '@/components/Newsletter';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';

const BlogPost = () => {
  const { id } = useParams();
  
  // Fetch specific blog post from API
  const { data: post, isLoading, error } = useQuery<BlogPostType>({
    queryKey: [`/api/blog-posts/${id}`],
  });

  // Fetch related posts
  const { data: relatedPosts } = useQuery<BlogPostType[]>({
    queryKey: ['/api/blog-posts/related', id],
  });

  // Fallback blog post data in case of error or while loading
  const fallbackPost: BlogPostType = {
    id: "1",
    title: "5 Essential Cybersecurity Tips for Small Businesses",
    excerpt: "Protect your business from common cyber threats with these practical security measures that won't break the bank.",
    content: `
      <p>Small businesses are increasingly becoming targets for cyberattacks because they often lack the robust security measures of larger corporations. Here are five essential cybersecurity tips that can significantly improve your business's security posture without requiring a massive budget:</p>
      
      <h2>1. Implement Strong Password Policies</h2>
      <p>Enforce the use of strong, unique passwords for all business accounts and systems. Consider implementing a password manager to help employees maintain multiple complex passwords securely. Require regular password changes and multi-factor authentication whenever possible.</p>
      
      <h2>2. Keep Software and Systems Updated</h2>
      <p>Regularly update all software, operating systems, and applications used in your business. These updates often contain critical security patches that fix vulnerabilities that could be exploited by attackers. Set up automatic updates whenever possible to ensure nothing is missed.</p>
      
      <h2>3. Educate Your Employees</h2>
      <p>Human error remains one of the biggest cybersecurity vulnerabilities. Conduct regular training sessions to teach employees about phishing attacks, safe browsing habits, and the importance of data protection. Make cybersecurity awareness a part of your company culture.</p>
      
      <h2>4. Backup Your Data Regularly</h2>
      <p>Implement a robust backup strategy following the 3-2-1 rule: maintain at least three copies of your data, store two backup copies on different storage media, with one located offsite. This protects your business from data loss due to ransomware attacks or hardware failures.</p>
      
      <h2>5. Secure Your Network</h2>
      <p>Use a business-grade firewall and ensure your Wi-Fi network is secure, encrypted, and hidden. Consider implementing a virtual private network (VPN) for employees who work remotely to ensure secure connections to your business network.</p>
      
      <p>By implementing these basic cybersecurity measures, small businesses can significantly reduce their risk of becoming victims of cyberattacks. Remember that cybersecurity is not a one-time effort but an ongoing process that requires regular attention and updates.</p>
    `,
    category: "Cybersecurity",
    author: {
      name: "James Davis",
      avatar: ""
    },
    publishDate: "2023-06-12T00:00:00Z",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600"
  };

  // Sample related posts
  const fallbackRelatedPosts: BlogPostType[] = [
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
      id: "7",
      title: "How to Recognize and Avoid Phishing Attacks",
      excerpt: "Learn to identify and protect yourself from increasingly sophisticated phishing attempts targeting your personal information.",
      content: "Full content of the blog post goes here...",
      category: "Cybersecurity",
      author: {
        name: "Lisa Johnson",
        avatar: ""
      },
      publishDate: "2023-03-22T00:00:00Z",
      readTime: "7 min read",
      imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];

  const displayPost = post || fallbackPost;
  const displayRelatedPosts = relatedPosts || fallbackRelatedPosts;

  if (isLoading) {
    return (
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Error loading blog post</h2>
            <p className="mt-4 text-gray-600">Unable to load the requested blog post. Please try again later.</p>
            <Link href="/blog">
              <Button className="mt-6 bg-primary hover:bg-blue-600">
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{displayPost.title} | EasyTech Blog</title>
        <meta name="description" content={displayPost.excerpt} />
      </Helmet>
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-primary hover:text-blue-600 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all articles
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                {displayPost.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{displayPost.title}</h1>
              
              <div className="flex items-center text-gray-500 mb-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="font-semibold text-primary">{displayPost.author.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <span>{displayPost.author.name}</span>
                </div>
                <span className="mx-3">•</span>
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(displayPost.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="mx-3">•</span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {displayPost.readTime}
                </span>
              </div>
            </div>
            
            <div className="mb-8">
              <img 
                src={displayPost.imageUrl} 
                alt={displayPost.title}
                className="w-full h-auto rounded-xl shadow-md" 
              />
            </div>
            
            <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: displayPost.content }} />
            
            <div className="border-t border-gray-200 pt-8 mb-12">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold text-primary">{displayPost.author.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Written by {displayPost.author.name}</p>
                    <p className="text-gray-600 text-sm">Tech Writer at EasyTech</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button className="text-gray-500 hover:text-primary transition-colors" aria-label="Share on Twitter">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  <button className="text-gray-500 hover:text-primary transition-colors" aria-label="Share on Facebook">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="text-gray-500 hover:text-primary transition-colors" aria-label="Share on LinkedIn">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                  <button className="text-gray-500 hover:text-primary transition-colors" aria-label="Copy link">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            
            {displayRelatedPosts.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {displayRelatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex">
                        <div className="w-1/3">
                          <img 
                            src={relatedPost.imageUrl} 
                            alt={relatedPost.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-2/3 p-4">
                          <span className="text-xs text-primary font-medium">{relatedPost.category}</span>
                          <h4 className="text-md font-semibold text-gray-800 mb-1 line-clamp-2">{relatedPost.title}</h4>
                          <p className="text-sm text-gray-500">{relatedPost.readTime}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default BlogPost;
