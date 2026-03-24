// components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'CodeFlow AI',
    desc: 'Intelligent code assistant with GPT integration, real-time suggestions and snippets.',
    tags: ['React', 'NodeJS', 'OpenAI'],
    link: '#',
  },
  {
    title: 'Urban Cart',
    desc: 'Full-stack e‑commerce platform with cart, payment gateway and admin dashboard.',
    tags: ['NextJS', 'Spring', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'EventHive',
    desc: 'Cross-platform event management app built with Flutter and Firebase.',
    tags: ['Flutter', 'Firebase', 'NodeJS'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-10"># PROJECTS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <a href={project.link} className="text-gray-500 hover:text-gray-800">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;