"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { fetchTeamData } from "@/lib/fetch/sanity.action";
import { TeamMember } from "@/lib/types";

export default function TeamMemberPage() {
  const [teams, setTeams] = useState<TeamMember[]>([]);
  const [active, setActive] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadTeamData() {
      try {
        const data = await fetchTeamData();
        setTeams(data);
      } catch (error) {
        console.error("Failed to fetch team data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadTeamData();
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-[400px]'>
        <div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-neutral-900'></div>
      </div>
    );
  }

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/20 backdrop-blur-sm h-full w-full z-10'
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className='fixed inset-0 grid place-items-center z-[100]'>
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className='flex absolute top-4 right-4 lg:top-8 lg:right-8 items-center justify-center bg-white/90 backdrop-blur-sm rounded-full h-8 w-8 shadow-lg'
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className='w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-2xl'
            >
              <motion.div
                layoutId={`image-${active.name}-${id}`}
                className='relative h-80'
              >
                <Image
                  priority
                  fill
                  src={active.photoUrl}
                  alt={active.name}
                  className='object-cover object-center'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                  <motion.h3
                    layoutId={`title-${active.name}-${id}`}
                    className='text-2xl font-bold mb-2'
                  >
                    {active.name}
                  </motion.h3>
                  <motion.p
                    layoutId={`position-${active.position}-${id}`}
                    className='text-white/90 text-lg'
                  >
                    {active.position}
                  </motion.p>
                </div>
              </motion.div>

              <div className='p-6'>
                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className='text-neutral-600 dark:text-neutral-400 text-base leading-relaxed'
                >
                  {active.description}
                </motion.p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {teams.map((member) => (
            <motion.li
              layoutId={member._id}
              key={member._id}
              onClick={() => setActive(member)}
              className='group relative cursor-pointer'
            >
              <motion.div
                className='aspect-[3/4] rounded-2xl overflow-hidden'
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  fill
                  src={member.photoUrl}
                  alt={member.name}
                  className='object-cover object-center group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <div className='absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                  <h3 className='text-white font-semibold text-lg mb-1'>
                    {member.name}
                  </h3>
                  <p className='text-white/90 text-sm'>{member.position}</p>
                </div>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
}

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.05 },
      }}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-4 w-4 text-black'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M18 6l-12 12' />
      <path d='M6 6l12 12' />
    </motion.svg>
  );
};
