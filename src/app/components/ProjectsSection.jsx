"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-Tech Sustain Project",
    description: "I developed an e-commerce platform for tech and gaming products with an integrated community for sustainability, utilizing Figma for design and Java, MySQL, and Spring Boot for backend efficiency. Project management followed Scrum, with task organization on Trello and GitHub for streamlined workflow",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/loremonmu/front_E-TechSustain",
    previewUrl: "https://e-tech-sustain.netlify.app/",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description: "Crafted with React and Node.js, my personal portfolio project seamlessly merges dynamic front-end design. Showcasing my skills and projects, it offers an interactive platform for visitors to explore my work and get to know me better.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ElianaReyesFino/Portafolio-Eli.git",
    previewUrl: "https://portafolio-eli.vercel.app/",
  },
  {
    id: 3,
    title: "Glowverse Cosmetics",
    description: "Landing page for GlowVerse Cosmetics, a beauty brand that is distinguished not only by its exceptional quality but also by its vibrant community. HTML, CSS and Bootstrap were used in the development of the website. Our goal was to create an online experience that reflected the delicacy and sophistication of our products.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ElianaReyesFino/Glow-verse-Cosmetic.git",
    previewUrl: "https://glow-verse-cosmetic.vercel.app/",
  },
  
  
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
