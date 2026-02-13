import React from "react";
import Image from "next/image";
import SparklesText from "./sparkles-text";
import { BookOpenText, Cpu, Handshake, Projector, Users } from "lucide-react";

// Simplified Image Component that respects aspect ratio
const ItemsImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full rounded-xl overflow-hidden bg-muted mb-4">
    <img
      src={src}
      alt={alt}
      className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
);

const About = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10"
    >
      {/* Header Section */}
      <div className="flex flex-col gap-y-2 mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
        <h2 className="text-lg md:text-2xl font-mono text-muted-foreground">
          Empowering Industrial Engineering for Nepal’s Future
        </h2>
        <p className="max-w-2xl font-sans text-pretty text-neutral-600 dark:text-neutral-400">
          At SOIES Nepal, we are dedicated to fostering a vibrant community of
          industrial engineering scholars and professionals. Our mission is to
          enhance efficiency, innovation, and problem-solving within Nepal’s
          industrial sector.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <SparklesText text="How we work?" className="text-center" />
        
        {/* Masonry-style Grid: Auto-sizes based on content */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item, i) => (
            <div 
              key={i} 
              className="break-inside-avoid bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              {item.header}
              <div className="flex items-center gap-2 mb-2">
                {item.icon}
                <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

const items = [
  {
    title: "Collaboration with Industry",
    description: "Work with stakeholders and experts to bring significant programs, seminars, and events for education and economic development.",
    header: <ItemsImage src="/expert.jpeg" alt="Industry Collaboration" />,
    icon: <Users className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Forum for Networking",
    description: "Provide a platform for development, networking, information sharing, idea exchange, and problem-solving in industrial engineering.",
    header: <ItemsImage src="/networking.webp" alt="Networking Forum" />,
    icon: <Handshake className="h-5 w-5 text-green-500" />,
  },
  {
    title: "Support for Scholars",
    description: "Organize regular programs to support industrial engineering students.",
    header: <ItemsImage src="/seminar.webp" alt="Student Support" />,
    icon: <Projector className="h-5 w-5 text-purple-500" />,
  },
  {
    title: "Annual Magazine: INDUSTRIAL VISION",
    description: "Publish a magazine highlighting practical solutions for industrial challenges and success stories.",
    header: <ItemsImage src="/vision1.png" alt="Annual Magazine" />,
    icon: <BookOpenText className="h-5 w-5 text-orange-500" />,
  },
  {
    title: "Productivity Improvements",
    description: "Explore sources of productivity improvement through research, publications, seminars, and discussions.",
    header: <ItemsImage src="/project.webp" alt="Research and Productivity" />,
    icon: <Cpu className="h-5 w-5 text-red-500" />,
  },
];