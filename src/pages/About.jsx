import React, { useState, useEffect } from 'react';
import { Code, Zap, Trophy, Calendar, Users, Target, Shield, Database, Smartphone, BookOpen, Award, MapPin, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import tejas from "../assets/tejas.png"
export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('experience');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const stats = [
        { number: "2+", label: "Projects Built", icon: Code },
        { number: "45%", label: "Performance Boost", icon: Zap },
        { number: "Top 5%", label: "Cohort Ranking", icon: Trophy },
        { number: "1.5+", label: "Years Experience", icon: Calendar }
    ];

    const approaches = [
        {
            title: "Scalable Architecture",
            description: "I focus on building high-performance applications with Node.js and Express.js, implementing microservices architecture and clean coding practices for enterprise-level solutions.",
            icon: Target
        },
        {
            title: "Performance & Security",
            description: "Specializing in JWT-based authentication, payment gateway integration, and caching strategies with Redis. Achieved 45% performance improvements through optimization.",
            icon: Shield
        },
        {
            title: "Full-Stack Excellence",
            description: "Expert in MERN stack development with strong focus on RESTful API design, database optimization, and seamless frontend-backend integration.",
            icon: Users
        }
    ];

    const drives = [
        "Building scalable backend systems",
        "Creating user-friendly interfaces",
        "Optimizing database performance",
        "Implementing secure authentication"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="mb-8">
                            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-2xl overflow-hidden">
                                <img src={tejas} alt="Tejas" className="w-full h-full object-cover rounded-full" />
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                                Tejas  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Harne</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                Passionate <span className="text-blue-400 font-semibold">MERN Stack Developer</span> with 1.5+ years of experience building scalable backend systems and user-friendly applications
                            </p>
                            <div className="flex justify-center items-center space-x-4 mt-6 text-gray-400">
                                <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>Pune, Maharashtra</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Mail className="w-4 h-4" />
                                    <span>tejaspatil77777@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                                <div className="text-gray-300 text-sm">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* My Journey Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12">
                    <h2 className="text-4xl font-bold text-white mb-8 text-center">My Journey</h2>
                    <div className="prose prose-lg prose-invert max-w-none">
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Hello! I'm <span className="text-blue-400 font-semibold">Tejas Harne</span>, a dedicated MERN Stack Developer with 1.5+ years of hands-on experience in building scalable backend systems and user-friendly frontend interfaces. My expertise lies in Node.js, Express.js, and creating robust RESTful APIs.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Currently working at <span className="text-purple-400 font-semibold">Maharashtra Informatics OPC Pvt Ltd</span>, I specialize in designing high-performance applications with microservices architecture. I have successfully integrated payment gateways, implemented secure authentication systems, and improved system performance by <span className="text-green-400 font-semibold">45%</span> using Redis caching strategies.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            My journey started at AlmaBetter where I ranked in the <span className="text-yellow-400 font-semibold">top 5%</span> of over 200 students, and I continue to deliver fast, secure, and user-focused applications while collaborating effectively with cross-functional teams.
                        </p>
                    </div>
                </div>
            </div>

            {/* Technical Skills Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Expertise</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                        <Database className="w-10 h-10 text-blue-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-3">Backend Development</h3>
                        <p className="text-gray-300 text-sm mb-3">Node.js, Express.js, RESTful APIs, Microservices, JWT, OAuth, Passport.js</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                        <Code className="w-10 h-10 text-green-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-3">Frontend Development</h3>
                        <p className="text-gray-300 text-sm mb-3">React.js, HTML5, CSS3, TailwindCSS, JavaScript (ES6+)</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                        <Database className="w-10 h-10 text-purple-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-3">Database Management</h3>
                        <p className="text-gray-300 text-sm mb-3">MongoDB, Mongoose, MySQL, Redis Caching</p>
                    </div>
                </div>
            </div>

            {/* My Approach Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">My Approach</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {approaches.map((approach, index) => {
                        const Icon = approach.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <Icon className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-2xl font-bold text-white mb-4">{approach.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{approach.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* What Drives Me Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-8 md:p-12">
                    <h2 className="text-4xl font-bold text-white mb-8 text-center">What Drives Me</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {drives.map((drive, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <span className="text-gray-300 text-lg">{drive}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Experience & Education Tabs */}
            


        </div>
    );
}