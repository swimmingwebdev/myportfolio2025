import Image from 'next/image';
import ProjectCard from '@/components/project-card';

// Sample project data (hardcoded for now)
const projects = [
  {
    title: 'Personal Portfolio',
    description: 'A responsive portfolio website built with Next.js and TailwindCSS',
    imageUrl: '/images/project1.jpg',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://swimmingwebdev.me'
  },
  {
    title: 'E-commerce Platform',
    description: 'An online store with product listings, cart functionality, and user accounts',
    imageUrl: '/images/project2.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://example.com'
  },
  {
    title: 'Weather App',
    description: 'A weather application showing forecasts using a public API',
    imageUrl: '/images/project3.jpg',
    technologies: ['JavaScript', 'CSS', 'WeatherAPI'],
    githubUrl: 'https://github.com/yourusername/weather-app'
  }
];

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hello, I'm <span className="text-blue-400">a Full-Stack Developer</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Based in Vancouver, BC. Previously a motion graphic designer, now creating exceptional web experiences.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a 
              href="#contact"
              className="px-6 py-3 border border-gray-600 rounded-md hover:bg-gray-800 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 rounded-full overflow-hidden mx-auto">
                <Image 
                  src="/images/profile.jpg" 
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-gray-300 mb-4">
                I'm a full-stack web developer with a background in motion graphic design. Currently studying 
                Computer Information Technology at the British Columbia Institute of Technology, I'm passionate 
                about creating user-friendly web applications.
              </p>
              <p className="text-gray-300 mb-4">
                My journey from motion graphics to web development has given me a unique perspective on visual 
                design and user experience. I enjoy combining technical skills with creative problem-solving.
              </p>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">My Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'Next.js', 'React', 'TailwindCSS', 'Node.js', 'MySQL', 'Docker', 'Nginx'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-800 text-blue-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-300 mb-8">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:your.email@example.com"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Email Me
            </a>
            <a 
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-600 rounded-md hover:bg-gray-800 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}