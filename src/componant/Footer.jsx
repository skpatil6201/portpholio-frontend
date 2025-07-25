import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import resume from "../assets/tejas resume new.pdf"
import {useNavigate} from"react-router-dom"
const Footer = () => {
    const [particles, setParticles] = useState([]);

  const navigate = useNavigate();
    useEffect(() => {
        // Generate random particles for background animation
        const generateParticles = () => {
            const newParticles = [];
            for (let i = 0; i < 50; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    delay: Math.random() * 6,
                    duration: 6 + Math.random() * 4
                });
            }
            setParticles(newParticles);
        };

        generateParticles();
    }, []);

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Blog', href: '#blog' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Contact', href: '#contact' }
    ];

    const services = [
        { name: 'Web Development', href: '#web-dev' },
        { name: 'Full Stack Solutions', href: '#fullstack' },
        { name: 'API Development', href: '#api' },
        { name: 'Database Design', href: '#database' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-70 animate-pulse"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            animationDelay: `${particle.delay}s`,
                            animationDuration: `${particle.duration}s`
                        }}
                    />
                ))}
            </div>

            {/* Hero Section */}
            <div className="relative z-10 flex items-center justify-center min-h-[70vh] px-4">
                <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                        Tejas Harne
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
                        Software Developer passionate about creating innovative web solutions.
                    </p>
                    <div className="flex justify-center space-x-6  mt-8">
                       
                        <button 
      onClick={() => navigate('/contact')}  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Get In Touch
                        </button>
                        <button
                            onClick={() => window.open(resume, '_blank')}
                            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-lg"
                        >
                            View Portfolio
                        </button>

                    </div>

                </div>
            </div>

            {/* Footer Section */}
            <footer className="relative z-10 bg-slate-900/90 backdrop-blur-lg border-t border-blue-500/20 mt-auto">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                        {/* Brand Section */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-blue-400 relative">
                                Tejas Harne
                                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                Software Developer passionate about creating innovative web solutions.
                            </p>
                            <div className="flex space-x-4">
                                {[
                                    { Icon: Github, href: 'https://github.com/skpatil6201', label: 'GitHub' },
                                    { Icon: Linkedin, href: 'https://www.linkedin.com/in/mr-tejas-harne/', label: 'LinkedIn' },
                                    { Icon: Mail, href: 'mailto:tejaspatil77777@gmail.com', label: 'Email' }
                                ].map(({ Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        className="group relative w-10 h-10 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 hover:-translate-y-1 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                                        aria-label={label}
                                    >
                                        <Icon size={18} />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full"></div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-blue-400 relative">
                                Quick Links
                                <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                            </h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-slate-400 hover:text-blue-400 hover:pl-4 transition-all duration-300 relative group flex items-center"
                                        >
                                            <ExternalLink size={0} className="w-0 group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-blue-400 relative">
                                Services
                                <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                            </h3>
                            <ul className="space-y-3">
                                {services.map((service) => (
                                    <li key={service.name}>
                                        <a
                                            //   href={service.href}
                                            className="text-slate-400  relative group flex items-center"
                                        >
                                            <ExternalLink size={0} className="w-0 " />
                                            {service.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-blue-400 relative">
                                Contact
                                <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                            </h3>
                            <div className="space-y-4 text-slate-400">
                                <div className="flex items-start space-x-3">
                                    <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm leading-relaxed">
                                        tejaspatil77777@gmail.com
                                    </span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">+91 7028692735</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">Pune, Maharashtra</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="border-t border-blue-500/20 pt-8 relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                        <p className="text-center text-slate-500 text-sm">
                            © 2025 Tejas Harne. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;