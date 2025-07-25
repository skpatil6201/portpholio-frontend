import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const TabButton = ({ tabKey, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(tabKey)}
      className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
        isActive
          ? 'bg-blue-500 text-white shadow-lg'
          : 'text-gray-300 hover:text-white hover:bg-white/5'
      }`}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );

  const ExperienceCard = ({ title, company, period, status, statusColor, achievements, bulletColor }) => (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <h4 className={`text-xl font-semibold mb-2 ${company.color}`}>{company.name}</h4>
          <p className="text-gray-400">{period}</p>
        </div>
        {status && (
          <div className="mt-4 md:mt-0">
            <span className={`${statusColor} px-4 py-2 rounded-full text-sm font-semibold`}>
              {status}
            </span>
          </div>
        )}
      </div>
      <ul className="space-y-3 text-gray-300">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className={`w-2 h-2 ${bulletColor} rounded-full mt-2 flex-shrink-0`}></div>
            <span dangerouslySetInnerHTML={{ __html: achievement }}></span>
          </li>
        ))}
      </ul>
    </div>
  );

  const ProjectCard = ({ title, period, url, status, statusColor, techStack, achievements, bulletColor }) => (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-2">{period}</p>
          {url && (
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center space-x-2"
            >
              <span>{url.replace('https://', '')}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
        {status && (
          <div className="mt-4 md:mt-0">
            <span className={`${statusColor} px-4 py-2 rounded-full text-sm font-semibold`}>
              {status}
            </span>
          </div>
        )}
      </div>
      {techStack && (
        <div className="mb-4">
          <p className="text-sm text-gray-400 mb-3">
            <span className="font-semibold">Tech Stack:</span> {techStack}
          </p>
        </div>
      )}
      <ul className="space-y-3 text-gray-300">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className={`w-2 h-2 ${bulletColor} rounded-full mt-2 flex-shrink-0`}></div>
            <span dangerouslySetInnerHTML={{ __html: achievement }}></span>
          </li>
        ))}
      </ul>
    </div>
  );

  const EducationCard = ({ degree, institution, period, grade, gradeColor }) => (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2">{degree}</h3>
          <h4 className={`text-xl font-semibold mb-2 ${institution.color}`}>{institution.name}</h4>
          <p className="text-gray-400">{period}</p>
        </div>
        {grade && (
          <div className={`${gradeColor} px-4 py-2 rounded-full text-lg font-bold`}>
            {grade}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-[#0a0a23] text-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center">
          Welcome to My Portfolio
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 text-center max-w-2xl">
          Hi, I'm <span className="text-blue-400 font-semibold">Tejas Harne</span> — a passionate web developer specializing in modern full-stack development using React, Node.js, MongoDB, and more.
        </p>
       
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 border border-white/20">
            <TabButton 
              tabKey="experience" 
              label="Experience" 
              isActive={activeTab === 'experience'} 
              onClick={setActiveTab} 
            />
            <TabButton 
              tabKey="education" 
              label="Education" 
              isActive={activeTab === 'education'} 
              onClick={setActiveTab} 
            />
            <TabButton 
              tabKey="projects" 
              label="Projects" 
              isActive={activeTab === 'projects'} 
              onClick={setActiveTab} 
            />
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <ExperienceCard
                title="MERN Stack Developer"
                company={{ name: "Maharashtra Informatics OPC Pvt Ltd, Pune", color: "text-blue-400" }}
                period="Jan 2025 - June 2025"
                status="Current Role"
                statusColor="bg-green-500/20 text-green-400"
                bulletColor="bg-blue-400"
                achievements={[
                  "Designed, developed, and maintained high-performance Node.js applications with strong focus on scalability, reliability, and clean architecture using Express.js and microservices design principles",
                  "Built and integrated RESTful APIs enabling seamless communication between frontend and backend systems, aligned with modern web standards and enterprise-level documentation practices",
                  "Collaborated with UI/UX designers and product managers to transform user requirements into technical specifications, delivering efficient backend solutions",
                  "Led backend debugging and performance tuning efforts, reducing downtime and latency by implementing optimized logic and asynchronous patterns"
                ]}
              />

              <ExperienceCard
                title="MERN Stack Developer"
                company={{ name: "D&W Tech, Amravati", color: "text-purple-400" }}
                period="Jul 2024 - Dec 2024"
                bulletColor="bg-purple-400"
                achievements={[
                  "Engineered high-performance backend systems with Node.js and Express.js, improving response times by <span class='text-green-400 font-semibold'>35%</span> and boosting overall scalability",
                  "Designed and documented RESTful APIs for seamless integration with third-party services, including Razorpay for secure payment processing",
                  "Built and optimized MySQL database schemas to support complex business logic, using indexing and query optimization to enhance performance",
                  "Implemented secure, JWT-based authentication to manage user access and protect application endpoints"
                ]}
              />

              <ExperienceCard
                title="MERN Stack Developer Trainee"
                company={{ name: "AlmaBetter, Bangalore (Remote)", color: "text-indigo-400" }}
                period="Mar 2023 - Jun 2024"
                status="Top 5% of 200+ students"
                statusColor="bg-yellow-500/20 text-yellow-400"
                bulletColor="bg-indigo-400"
                achievements={[
                  "Gained hands-on experience in front-end technologies like HTML, CSS, JavaScript, and back-end tools like Node.js, MongoDB, and SQL",
                  "Developed an optimized web application using ReactJS (front-end) and ExpressJS (backend)",
                  "Learned and applied best practices such as user authentication and data encryption for high-quality, secure web applications"
                ]}
              />
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <EducationCard
                degree="Masters of Computer Application"
                institution={{ name: "P.G Department of Computer Science & Technology, HVPM Amravati", color: "text-blue-400" }}
                period="2023 - 2025"
                grade="Current"
                gradeColor="bg-green-500/20 text-green-400"
              />

              <EducationCard
                degree="Bachelor of Computer Application"
                institution={{ name: "Sant Gadge Baba Amravati University", color: "text-purple-400" }}
                period="2019 - 2023"
                grade="78%"
                gradeColor="bg-purple-500/20 text-purple-400"
              />
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <ProjectCard
                title="Make Easy Documents"
                period="April 2025 - June 2025"
                url="https://makeeasydocuments.com"
                status="45% Performance Boost"
                statusColor="bg-green-500/20 text-green-400"
                techStack="Node.js, Express.js, MongoDB, Mongoose, Redis, PayU, Passport.js, Google OAuth, Axios"
                bulletColor="bg-green-400"
                achievements={[
                  "Designed and integrated a complete user flow including form submission, PayU payment gateway integration, real-time transaction status handling, and automated notifications via email",
                  "Built an intuitive admin dashboard for document review and status updates with automatic user notifications on each status change",
                  "Enhanced user experience with re-submission support, transaction history tracking, and real-time status visibility within the user dashboard",
                  "Improved system performance by <span class='text-green-400 font-semibold'>45%</span> using Redis for caching, implemented secure file storage with MinIO"
                ]}
              />

              <ProjectCard
                title="Mahagarjana News Portal"
                period="Jan 2025 - Mar 2025"
                url="https://mahagarjana.news"
                status="99.8% API Reliability"
                statusColor="bg-blue-500/20 text-blue-400"
                techStack="Node.js, Express.js, MongoDB, Mongoose, Passport.js, Multer, Nodemailer, JWT, Axios, Facebook Graph API, Instagram Graph API, LinkedIn API, MinIO"
                bulletColor="bg-blue-400"
                achievements={[
                  "Architected a robust backend infrastructure for a news publishing platform enabling dynamic content management, user authentication, and cross-platform social media publishing",
                  "Integrated OAuth-based social login capabilities (Google and Facebook) using custom Passport.js strategies",
                  "Implemented cross-platform social media publishing functionality using Facebook Graph API, Instagram Graph API, and LinkedIn API",
                  "Cut down manual social media posting by <span class='text-green-400 font-semibold'>90%</span> by automating content distribution via API integrations",
                  "Maintained a <span class='text-green-400 font-semibold'>99.8%</span> API reliability rate through resilient error handling for social platform interactions"
                ]}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;