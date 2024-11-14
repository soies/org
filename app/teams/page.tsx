"use client";
import Image from "next/image";
import React, { useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { TeamMember } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { TEAMS_QUERY } from "@/sanity/lib/queries";
import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react"; // Using Lucide icon instead of custom SVG

const fetchTeams = async (): Promise<TeamMember[]> => {
  return await client.fetch(TEAMS_QUERY);
};

export default function TeamMemberPage() {
  const [active, setActive] = useState<TeamMember | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  const {
    data: teams = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["teams"],
    queryFn: fetchTeams,
    staleTime: 1000 * 60 * 60, // Cache data for 60 minutes
  });

  useOutsideClick(ref, () => setActive(null));

  // Handle keyboard event for "Escape" key
  React.useEffect(() => {
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

  if (isLoading) {
    return (
      <div className='flex justify-center items-center min-h-[400px]'>
        <div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-neutral-900'></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='max-w-7xl mx-auto px-4 text-center py-12'>
        <div className='flex flex-col items-center justify-center p-8 border border-gray-200 dark:border-gray-800 rounded-xl'>
          <p className='text-red-500'>
            Failed to load team data. Please try again later.
          </p>
        </div>
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
            className='fixed inset-0 bg-black-slate-100 backdrop-blur-sm h-full w-full z-10'
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className='fixed inset-0 grid place-items-center z-[100]'>
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className='w-full max-w-[500px] md:w-full h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-2xl'
            >
              <motion.div
                layoutId={`image-${active.name}-${id}`}
                className='relative h-80 md:h-60 sm:h-48'
              >
                <Image
                  priority
                  fill
                  src={active.photoUrl}
                  alt={active.name}
                  className='object-cover object-center'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                <motion.button
                  key={`button-${active.name}-${id}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.05 },
                  }}
                  className='absolute top-2 right-2 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full h-8 w-8 shadow-lg lg:hidden'
                  onClick={() => setActive(null)}
                >
                  <X className='h-4 w-4 text-black' />
                </motion.button>
                <div className='absolute bottom-0 left-0 right-0 p-4 md:p-3 sm:p-2 text-white'>
                  <motion.h3
                    layoutId={`title-${active.name}-${id}`}
                    className='text-xl md:text-lg font-bold mb-1 sm:mb-0'
                  >
                    {active.name}
                  </motion.h3>
                  <motion.p
                    layoutId={`position-${active.position}-${id}`}
                    className='text-white/90 text-sm'
                  >
                    {active.position}
                  </motion.p>
                </div>
              </motion.div>

              <div className='p-4 md:p-3 sm:p-2'>
                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className='text-neutral-600 dark:text-neutral-400 text-base leading-relaxed  sm:text-xs'
                >
                  {active.description}
                </motion.p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
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
                  <h3 className='text-white font-semibold text-lg mb-1 sm:text-base'>
                    {member.name}
                  </h3>
                  <p className='text-white/90 text-sm sm:text-xs'>
                    {member.position}
                  </p>
                </div>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
}
