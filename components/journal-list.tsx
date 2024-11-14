"use client";
import React from "react";
import Image from "next/image";
import { TJournal } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { JOURNAL_QUERY } from "@/sanity/lib/queries";
import { useQuery } from "@tanstack/react-query";
import { BookX, RefreshCw } from "lucide-react"; // Import Lucide icons

const fetchJournals = async (): Promise<TJournal[]> => {
  return await client.fetch(JOURNAL_QUERY);
};

const JournalList = () => {
  const {
    data: journals,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["journals"],
    queryFn: fetchJournals,
    staleTime: 1000 * 60 * 60 * 24,
    retry: 2,
  });

  if (isLoading) {
    return (
      <div className='max-w-2xl mx-auto w-full p-4 text-center'>
        <div className='animate-pulse flex flex-col gap-4'>
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className='h-40 bg-gray-200 dark:bg-gray-800 rounded-xl'
            />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='max-w-2xl mx-auto w-full p-4 text-center text-red-500'>
        <div className='flex flex-col items-center justify-center p-8 border border-gray-200 dark:border-gray-800 rounded-xl'>
          <RefreshCw className='w-12 h-12 mb-4 text-red-500' />
          <h3 className='text-lg font-medium mb-2'>Failed to Load Journals</h3>
          <p className='text-gray-600 dark:text-gray-400'>
            There was an error loading the journals. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  if (!journals || journals.length === 0) {
    return (
      <div className='max-w-2xl mx-auto w-full p-4 text-center'>
        <div className='flex flex-col items-center justify-center p-8 border border-gray-200 dark:border-gray-800 rounded-xl'>
          <BookX className='w-12 h-12 mb-4 text-gray-400 dark:text-gray-600' />
          <h3 className='text-lg font-medium mb-2'>No Journals Found</h3>
          <p className='text-gray-600 dark:text-gray-400'>
            There are currently no journals available. Please check back later.
          </p>
        </div>
      </div>
    );
  }

  const sortedJournals = [...journals].sort((a, b) => {
    const volA = parseInt(a.title.split("Vol ")[1]);
    const volB = parseInt(b.title.split("Vol ")[1]);
    return volA - volB;
  });

  return (
    <ul className='max-w-2xl mx-auto w-full gap-4 p-4'>
      {sortedJournals.map((journal) => (
        <li
          key={journal._id}
          className='p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl mb-4 border border-gray-100 dark:border-gray-800'
        >
          <div className='flex gap-4 flex-col md:flex-row'>
            <div className='relative'>
              <Image
                width={100}
                height={140}
                src={journal.cover}
                alt={journal.title}
                className='h-40 w-28 md:h-32 md:w-24 rounded-lg object-cover shadow-md'
                priority
              />
            </div>
            <div className='flex flex-col justify-center'>
              <h3 className='font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left'>
                {journal.title}
              </h3>
              <p className='text-neutral-600 dark:text-neutral-400 text-center md:text-left'>
                ISSN: {journal.issueNumber}
              </p>
              {journal.description && (
                <p className='text-sm text-neutral-500 dark:text-neutral-400 mt-2 text-center md:text-left line-clamp-2'>
                  {journal.description}
                </p>
              )}
            </div>
          </div>
          <a
            href={journal.resources}
            target='_blank'
            rel='noopener noreferrer'
            download
            className='px-6 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-blue-500 hover:text-white text-black mt-4 md:mt-0 transition-colors duration-200 flex items-center gap-2'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-4 h-4'
            >
              <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
              <polyline points='7 10 12 15 17 10' />
              <line x1='12' y1='15' x2='12' y2='3' />
            </svg>
            Download
          </a>
        </li>
      ))}
    </ul>
  );
};

export default JournalList;
