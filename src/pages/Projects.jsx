import React, { useState } from "react";
import { ExternalLink, Github, Clock, CheckCircle, Code, Zap, Users, Award, FileText, ShoppingCart, Music, Trophy } from 'lucide-react';

const ProjectCard = ({ title, period, url, githubUrl, status, statusColor, techStack, achievements, bulletColor, highlights }) => (
  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 hover:from-white/15 hover:to-white/10 transition-all duration-300 border border-white/20 shadow-xl group">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 mb-3 flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          {period}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {url && (
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center space-x-2 hover:underline"
            >
              <span>{url.replace('https://', '')}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
      {status && (
        <div className="mt-4 md:mt-0">
          <span className={`${statusColor} px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2`}>
            <CheckCircle className="w-4 h-4" />
            <span>{status}</span>
          </span>
        </div>
      )}
    </div>

    {/* Highlights Section */}
    {highlights && (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {highlights.map((highlight, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-4 text-center">
            <div className="flex justify-center mb-2">
              {highlight.icon}
            </div>
            <div className="text-lg font-bold text-white">{highlight.value}</div>
            <div className="text-xs text-gray-400">{highlight.label}</div>
          </div>
        ))}
      </div>
    )}

    {techStack && (
      <div className="mb-6">
        <p className="text-sm text-gray-400 mb-3">
          <span className="font-semibold text-blue-400 flex items-center">
            <Code className="w-4 h-4 mr-2" />
            Tech Stack:
          </span>
        </p>
        <div className="flex flex-wrap gap-2">
          {techStack.split(', ').map((tech, index) => (
            <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    )}

    <div className="mb-4">
      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
        <Award className="w-5 h-5 mr-2 text-yellow-400" />
        Key Achievements:
      </h4>
      <ul className="space-y-4 text-gray-300">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className={`w-2 h-2 ${bulletColor} rounded-full mt-2 flex-shrink-0`}></div>
            <span dangerouslySetInnerHTML={{ __html: achievement }}></span>
          </li>
        ))}
      </ul>
    </div>

    {/* Action Buttons */}
    <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
      {url && (
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Live Demo</span>
        </a>
      )}
      {githubUrl && (
        <a 
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-500 text-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-500 hover:text-white transition-all duration-300 flex items-center space-x-2"
        >
          <Github className="w-4 h-4" />
          <span>View Code</span>
        </a>
      )}
    </div>
  </div>
);

function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Professional Resume Builder",
      period: "May 2025 - July 2025",
      url: "https://resume-builder-demo.com",
      githubUrl: "https://github.com/tejasharne/resume-builder",
      status: "PDF Generation",
      statusColor: "bg-emerald-500/20 text-emerald-400",
      techStack: "React, Tailwind CSS, jsPDF, React-PDF, React Hook Form, Context API",
      bulletColor: "bg-emerald-400",
      category: "frontend",
      highlights: [
        { icon: <FileText className="w-5 h-5 text-emerald-400" />, value: "10+", label: "Templates" },
        { icon: <Zap className="w-5 h-5 text-yellow-400" />, value: "Instant", label: "PDF Export" },
        { icon: <Users className="w-5 h-5 text-blue-400" />, value: "5K+", label: "Downloads" }
      ],
      achievements: [
        "Built a comprehensive resume builder with <span class='text-emerald-400 font-semibold'>10+ professional templates</span> and real-time preview functionality",
        "Implemented drag-and-drop section reordering and dynamic form validation using React Hook Form",
        "Integrated high-quality PDF generation with custom styling and formatting options using jsPDF and React-PDF",
        "Added features like template customization, color schemes, font selection, and section toggling for maximum personalization",
        "Achieved <span class='text-emerald-400 font-semibold'>5000+ resume downloads</span> within the first month of launch"
      ]
    },
    {
      id: 2,
      title: "Amazon E-commerce Clone",
      period: "March 2025 - May 2025",
      url: "amzon-clone-eta.vercel.app",
      githubUrl: "https://github.com/skpatil6201/Amzon-Clone",
      status: "Full E-commerce",
      statusColor: "bg-orange-500/20 text-orange-400",
      techStack: "React, Redux Toolkit, Firebase, Stripe API, Material-UI, React Router, Axios",
      bulletColor: "bg-orange-400",
      category: "fullstack",
      highlights: [
        { icon: <ShoppingCart className="w-5 h-5 text-orange-400" />, value: "500+", label: "Products" },
        { icon: <Users className="w-5 h-5 text-blue-400" />, value: "Authentication", label: "User System" },
        { icon: <CheckCircle className="w-5 h-5 text-green-400" />, value: "Stripe", label: "Payments" }
      ],
      achievements: [
        "Developed a fully functional e-commerce platform replicating Amazon's core features including product catalog, shopping cart, and checkout system",
        "Implemented secure user authentication and authorization using Firebase Auth with Google sign-in integration",
        "Built advanced search and filtering functionality with category-based navigation and price range filters",
        "Integrated Stripe payment gateway for secure transaction processing with order history tracking",
        "Designed responsive UI components using Material-UI with <span class='text-orange-400 font-semibold'>mobile-first</span> approach for optimal user experience",
        "Utilized Redux Toolkit for efficient state management across cart, user session, and product data"
      ]
    },
    {
      id: 3,
      title: "Spotify Music Streaming Clone",
      period: "February 2025 - April 2025",
      url: "spotify-done.vercel.app",
      githubUrl: "https://github.com/skpatil6201/Spotify_Done",
      status: "Real-time API",
      statusColor: "bg-green-500/20 text-green-400",
      techStack: "React, Spotify Web API, Context API, React Router, Tailwind CSS, Axios, Web Audio API",
      bulletColor: "bg-green-400",
      category: "frontend",
      highlights: [
        { icon: <Music className="w-5 h-5 text-green-400" />, value: "Live", label: "Music Data" },
        { icon: <Zap className="w-5 h-5 text-yellow-400" />, value: "30s", label: "Preview Tracks" },
        { icon: <Users className="w-5 h-5 text-blue-400" />, value: "Playlists", label: "Management" }
      ],
      achievements: [
        "Created a feature-rich music streaming application using Spotify Web API for real-time music data and track previews",
        "Implemented comprehensive music player controls including play/pause, skip, volume control, and progress tracking",
        "Built dynamic playlist management system with create, edit, and delete functionality mirroring Spotify's interface",
        "Developed advanced search functionality with artist, album, and track filtering with <span class='text-green-400 font-semibold'>real-time results</span>",
        "Designed custom audio visualizer components and responsive grid layouts for album artwork display",
        "Integrated user authentication flow with Spotify OAuth for personalized playlists and listening history"
      ]
    },
    {
      id: 4,
      title: "Hvpm Sport Club Platform",
      period: "January 2025 - March 2025",
      url: "https://hyvpm-sport-club.com",
      githubUrl: "https://github.com/tejasharne/hyvpm-sport-club",
      status: "MERN Stack",
      statusColor: "bg-purple-500/20 text-purple-400",
      techStack: "MongoDB, Express.js, React, Node.js, JWT, Multer, Cloudinary, Socket.io, Material-UI, Mongoose",
      bulletColor: "bg-purple-400",
      category: "fullstack",
      highlights: [
        { icon: <Trophy className="w-5 h-5 text-purple-400" />, value: "Multi-Sport", label: "Management" },
        { icon: <Users className="w-5 h-5 text-blue-400" />, value: "200+", label: "Members" },
        { icon: <Zap className="w-5 h-5 text-yellow-400" />, value: "Real-time", label: "Updates" }
      ],
      achievements: [
        "Engineered a comprehensive sports club management system handling member registration, event scheduling, and tournament organization",
        "Developed robust backend APIs using Express.js and MongoDB for managing member profiles, sports categories, and event data",
        "Implemented real-time notification system using Socket.io for match updates, tournament results, and club announcements",
        "Built secure authentication system with JWT tokens and role-based access control for admin, coach, and member roles",
        "Created dynamic dashboard interfaces for different user roles with <span class='text-purple-400 font-semibold'>real-time statistics</span> and performance tracking",
        "Integrated Cloudinary for efficient image and document storage with automatic optimization and CDN delivery"
      ]
    },
    {
      id: 5,
      title: "Make Easy Documents",
      period: "April 2025 - June 2025",
      url: "https://makeeasydocuments.com",
      githubUrl: "https://github.com/tejasharne/make-easy-documents",
      status: "45% Performance Boost",
      statusColor: "bg-green-500/20 text-green-400",
      techStack: "Node.js, Express.js, MongoDB, Mongoose, Redis, PayU, Passport.js, Google OAuth, Axios",
      bulletColor: "bg-green-400",
      category: "fullstack",
      highlights: [
        { icon: <Zap className="w-5 h-5 text-yellow-400" />, value: "45%", label: "Performance Boost" },
        { icon: <Users className="w-5 h-5 text-blue-400" />, value: "1000+", label: "Active Users" },
        { icon: <CheckCircle className="w-5 h-5 text-green-400" />, value: "99.9%", label: "Uptime" }
      ],
      achievements: [
        "Designed and integrated a complete user flow including form submission, PayU payment gateway integration, real-time transaction status handling, and automated notifications via email",
        "Built an intuitive admin dashboard for document review and status updates with automatic user notifications on each status change",
        "Enhanced user experience with re-submission support, transaction history tracking, and real-time status visibility within the user dashboard",
        "Improved system performance by <span class='text-green-400 font-semibold'>45%</span> using Redis for caching, implemented secure file storage with MinIO"
      ]
    },
    {
      id: 6,
      title: "Mahagarjana News Portal",
      period: "Jan 2025 - Mar 2025",
      url: "https://mahagarjana.news",
      githubUrl: "https://github.com/tejasharne/mahagarjana-news",
      status: "99.8% API Reliability",
      statusColor: "bg-blue-500/20 text-blue-400",
      techStack: "Node.js, Express.js, MongoDB, Mongoose, Passport.js, Multer, Nodemailer, JWT, Axios, Facebook Graph API, Instagram Graph API, LinkedIn API, MinIO",
      bulletColor: "bg-blue-400",
      category: "fullstack",
      highlights: [
        { icon: <CheckCircle className="w-5 h-5 text-green-400" />, value: "99.8%", label: "API Reliability" },
        { icon: <Zap className="w-5 h-5 text-yellow-400" />, value: "90%", label: "Automation" },
        { icon: <Users className="w-5 h-5 text-blue-400" />, value: "3", label: "Social Platforms" }
      ],
      achievements: [
        "Architected a robust backend infrastructure for a news publishing platform enabling dynamic content management, user authentication, and cross-platform social media publishing",
        "Integrated OAuth-based social login capabilities (Google and Facebook) using custom Passport.js strategies",
        "Implemented cross-platform social media publishing functionality using Facebook Graph API, Instagram Graph API, and LinkedIn API",
        "Cut down manual social media posting by <span class='text-green-400 font-semibold'>90%</span> by automating content distribution via API integrations",
        "Maintained a <span class='text-green-400 font-semibold'>99.8%</span> API reliability rate through resilient error handling for social platform interactions"
      ]
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-[#0a0a23] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 mb-6">
            My Projects Portfolio
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my expertise in full-stack development, 
            API integrations, performance optimization, and modern web technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 border border-white/20 shadow-xl">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  filter === category.key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-white/10 hover:scale-105'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 animate-in fade-in duration-500">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/30">
          <h3 className="text-2xl font-bold text-white mb-4">Interested in Working Together?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create innovative solutions. 
            Let's discuss how I can help bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Start a Project
            </button>
            <button className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
              View All Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;