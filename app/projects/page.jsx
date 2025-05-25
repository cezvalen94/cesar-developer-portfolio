"use client";

import React from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "Codi-EMicroscope",
    description:
      "A Nanoimaging Tool that helps biologists and researchers conduct advanced experiments easily.",
    stack: [{ name: "BioTech" }, { name: "Data Visualization" }],
    image: "/assets/projects/codi.png",
    live: "https://alto.codi.bio/",
  },
  {
    num: "02",
    title: "Plasmid Design",
    description:
      "An online tool for genetic experiments, offering DNA editing, primer design, and translation features with a user-friendly interface.",
    stack: [{ name: "AI" }, { name: "BioTech" }],
    image: "/assets/projects/mendelgen.png",
    live: "https://mendelgen.com/",
  },
  {
    num: "03",
    title: "Data Manager",
    description:
      "A no-code, generative AI analytics platform that enables speed to insights.",
    stack: [
      { name: "AI" },
      { name: "Data Management" },
      { name: "Data Visualization" },
    ],
    image: "/assets/projects/data-manager.png",
    live: "https://datachat.ai/",
  },
  {
    num: "04",
    title: "TabRabbit",
    description:
      "An all-in-one technology suite that brings all elements of restaurant technology into one product.",
    stack: [{ name: "E-Commerce" }],
    image: "/assets/projects/tabrabbit.png",
    live: "https://tabrabbit.com/",
  },
  {
    num: "05",
    title: "UnityAi",
    description:
      "A platform that optimizes hospital operations by managing patient flow from admission to discharge.",
    stack: [{ name: "AI" }, { name: "Healthcare" }],
    image: "/assets/projects/unityai.png",
    live: "https://unityai.co/",
  },
  {
    num: "06",
    title: "APYVision",
    description:
      "Data platform for DeFi investors and protocols - Track your liquidity providing performance and impermanent losses across chains and AMMs.",
    stack: [{ name: "web3" }],
    image: "/assets/projects/apyvision.png",
    live: "https://apy.vision/",
  },
  {
    num: "07",
    title: "theGuarantors",
    description:
      "A property management system that streamlines operations, improves tenant communication, and simplifies maintenance.",
    stack: [{ name: "Real Estate" }],
    image: "/assets/projects/theGuarantors.png",
    live: "https://www.theguarantors.com/",
  },
  {
    num: "08",
    title: "Pickleball",
    description:
      "A go-to hub for pickleball enthusiasts, offering news, tournament updates, player rankings, a community hub, and a shop for equipment and apparel.",
    stack: [{ name: "Sport", name: "E-Commerce" }],
    image: "/assets/projects/pickleball.png",
    live: "https://pickleball.com/",
  },
  {
    num: "09",
    title: "H2O.ai Wave",
    description:
      "Python framework that lets you build interactive web apps and dashboards without knowing HTML, CSS, or JavaScript.",
    stack: [{ name: "AI" }, { name: "Data Visualization" }],
    image: "/assets/projects/h2oaiwave.png",
    live: "https://wave.h2o.ai/",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6"
    >
      <div className="container mx-auto">
        <h3 className="h3 mb-8 text-accent text-center">My Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={90}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover rounded-xl"
                  priority={project.num === "02"}
                />
              </div>

              {/* Project Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/95 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm mt-2 text-white/80">
                  {project.description}
                </p>

                {/* Stack */}
                <ul className="flex gap-2 text-xs mt-2">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="mt-4 flex gap-4">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 bg-secondary text-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all duration-500">
                      <BsArrowUpRight className="text-xl" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
