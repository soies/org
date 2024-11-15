import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import SparklesText from "./sparkles-text";
import { BookOpenText, Cpu, Handshake, Projector, Users } from "lucide-react";

const About = () => {
  return (
    <section
      id='about'
      className='max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10'
    >
      <div className='flex gap-y-2 flex-col mb-8'>
        <h1 className='text-3xl md:text-5xl font-bold mb-4'>About Us</h1>
        <h2 className='text-lg md:text-2xl text-wrap font-mono'>
          Empowering Industrial Engineering for Nepal’s Future
        </h2>
        <p className='max-w-2xl font-sans text-pretty'>
          At SOIES Nepal, we are dedicated to fostering a vibrant community of
          industrial engineering scholars and professionals. Our mission is to
          enhance efficiency, innovation, and problem-solving within Nepal’s
          industrial sector.
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        <SparklesText text='How we work?' className='text-center' />
        <BentoGrid className='max-w-4xl mx-auto'>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default About;

const ItemsImage = ({
  src,
  alt,
  height,
  width,
}: {
  src: string;
  alt: string;
  height: number;
  width: number;
}) => (
  <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className=' object-center  w-full'
    />
  </div>
);

const items = [
  {
    title: "Collaboration with Industry",
    description:
      "Work with stakeholders and experts to bring significant programs, seminars, and events for education and economic development.",
    header: (
      <ItemsImage
        src={"/expert.jpeg"}
        alt={"Expert"}
        height={300}
        width={300}
      />
    ),
    icon: <Users className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: "Forum for Networking",
    description:
      "Provide a platform for development, networking, information sharing, idea exchange, and problem-solving in industrial engineering.",
    header: (
      <ItemsImage
        src={"/networking.webp"}
        alt={"Expert"}
        width={300}
        height={300}
      />
    ),
    icon: <Handshake className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: "Support for Scholars",
    description:
      "Organize regular programs to support industrial engineering students.",
    header: (
      <ItemsImage
        src={"/seminar.webp"}
        alt={"Expert"}
        width={300}
        height={300}
      />
    ),
    icon: <Projector className='h-4 w-4 text-neutral-500' />,
  },

  {
    title: "Annual Magazine: INDUSTRIAL VISION",
    description:
      "Publish a magazine highlighting practical solutions for industrial challenges and success stories.",
    header: (
      <ItemsImage
        src={"/vision1.png"}
        alt={"Expert"}
        height={500}
        width={300}
      />
    ),
    icon: <BookOpenText className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: "Productivity Improvements",
    description:
      "Explore sources of productivity improvement through research, publications, seminars, and discussions.",
    header: (
      <ItemsImage
        src={"/project.webp"}
        alt={"Expert"}
        height={300}
        width={300}
      />
    ),
    icon: <Cpu className='h-4 w-4 text-neutral-500' />,
  },
];
