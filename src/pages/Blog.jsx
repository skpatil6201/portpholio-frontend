import React, { useState } from 'react';
import {
  Search, Calendar, User, ArrowRight, Github, Linkedin, Twitter, Mail, Code,
  Database, Server, Layout, Heart, MessageCircle, Share2
} from 'lucide-react';
import tejas from "../assets/tejas.png"
const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [expandedPosts, setExpandedPosts] = useState(new Set());

  const categories = ['all', 'react', 'node.js', 'mongodb', 'express', 'javascript', 'tutorials'];

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt: "Learn how to create robust, scalable APIs using Node.js and Express with best practices for error handling, middleware, and database integration.",
      content: "Deep dive into API architecture with Node.js and Express. We explore routing, middleware, error handling, and integration with MongoDB. Understand how to build RESTful APIs that scale and follow industry best practices.",
      author: "Alex Chen",
      date: "2024-07-20",
      category: "node.js",
      readTime: "8 min read",
      likes: 42,
      comments: 12,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      tags: ["Node.js", "Express", "API", "Backend"]
    },
    {
      id: 2,
      title: "React Hooks: Advanced Patterns and Performance",
      excerpt: "Master advanced React Hooks patterns including custom hooks, performance optimization, and complex state management scenarios.",
      content: "React Hooks have revolutionized how we write functional components. Learn to write custom hooks, optimize renders with `useMemo` and `useCallback`, and explore complex global state scenarios using Context or Zustand.",
      author: "Alex Chen",
      date: "2024-07-18",
      category: "react",
      readTime: "12 min read",
      likes: 67,
      comments: 23,
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=400&fit=crop",
      tags: ["React", "Hooks", "Performance", "Frontend"]
    },
    {
      id: 3,
      title: "MongoDB Aggregation Pipeline: From Beginner to Pro",
      excerpt: "Master MongoDB's powerful aggregation framework with real-world examples and performance optimization techniques.",
      content: "MongoDB aggregation pipeline lets you transform and combine data across collections. Learn stages like `$match`, `$group`, `$project`, and performance tricks for indexing and memory usage.",
      author: "Alex Chen",
      date: "2024-07-15",
      category: "mongodb",
      readTime: "15 min read",
      likes: 34,
      comments: 8,
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
      tags: ["MongoDB", "Database", "Aggregation", "NoSQL"]
    },
    {
      id: 4,
      title: "Full-Stack Authentication with JWT and Refresh Tokens",
      excerpt: "Implement secure authentication in your MERN applications using JWT tokens, refresh tokens, and best security practices.",
      content: "Authentication is crucial in modern apps. This guide walks through setting up JWT-based authentication with refresh tokens, handling token expiration, storing tokens securely, and using middleware in Express.",
      author: "Alex Chen",
      date: "2024-07-12",
      category: "tutorials",
      readTime: "20 min read",
      likes: 89,
      comments: 34,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
      tags: ["Authentication", "JWT", "Security", "MERN"]
    },
    {
      id: 5,
      title: "State Management in React: Context vs Redux vs Zustand",
      excerpt: "Compare different state management solutions for React applications and learn when to use each approach.",
      content: "State management is key for scalability. We compare React Context, Redux, and Zustand — evaluating learning curve, boilerplate, and performance — to help you choose the best fit for your app.",
      author: "Alex Chen",
      date: "2024-07-10",
      category: "react",
      readTime: "10 min read",
      likes: 56,
      comments: 19,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop",
      tags: ["React", "State Management", "Redux", "Context"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleLike = (postId) => {
    const newLikedPosts = new Set(likedPosts);
    if (newLikedPosts.has(postId)) {
      newLikedPosts.delete(postId);
    } else {
      newLikedPosts.add(postId);
    }
    setLikedPosts(newLikedPosts);
  };

  const toggleExpand = (postId) => {
    const newExpanded = new Set(expandedPosts);
    if (newExpanded.has(postId)) {
      newExpanded.delete(postId);
    } else {
      newExpanded.add(postId);
    }
    setExpandedPosts(newExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Main Content */}
         <section className="relative py-20 px-4 mt-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <img 
              src={tejas} 
              alt="Alex Chen" 
              className="w-24 h-24 rounded-full mx-auto border-4 border-cyan-400/50 shadow-xl"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Tejas Harne</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full-Stack MERN Developer sharing insights, tutorials, and best practices for building modern web applications
          </p>
          
          {/* Tech Stack Icons */}
          <div className="flex justify-center items-center space-x-8 text-gray-400">
            <div className="flex flex-col items-center space-y-2 group">
              <Layout className="h-8 w-8 group-hover:text-cyan-400 transition-colors" />
              <span className="text-sm">React</span>
            </div>
            <div className="flex flex-col items-center space-y-2 group">
              <Server className="h-8 w-8 group-hover:text-green-400 transition-colors" />
              <span className="text-sm">Node.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2 group">
              <Database className="h-8 w-8 group-hover:text-emerald-400 transition-colors" />
              <span className="text-sm">MongoDB</span>
            </div>
            <div className="flex flex-col items-center space-y-2 group">
              <Code className="h-8 w-8 group-hover:text-yellow-400 transition-colors" />
              <span className="text-sm">Express</span>
            </div>
          </div>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-cyan-500/80 text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-4">
                  {expandedPosts.has(post.id) ? post.content : post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-gray-400">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className="flex items-center space-x-1 hover:text-red-400 transition-colors"
                    >
                      <Heart className={`h-4 w-4 ${likedPosts.has(post.id) ? 'fill-red-400 text-red-400' : ''}`} />
                      <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                    </button>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </div>
                    <button className="hover:text-cyan-400 transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => toggleExpand(post.id)}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    <span className="mr-1">
                      {expandedPosts.has(post.id) ? 'Show less' : 'Read more'}
                    </span>
                    <ArrowRight className={`h-4 w-4 transition-transform ${expandedPosts.has(post.id) ? 'rotate-180' : 'group-hover:translate-x-1'}`} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Blog;
