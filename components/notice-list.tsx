"use client";
import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { useQuery } from "@tanstack/react-query";
import { BookX, RefreshCw, FileText, Image as ImageIcon } from "lucide-react";
import { NOTICES_QUERY } from "@/sanity/lib/queries";
import { TNotice } from "@/lib/types";

const fetchnotices = async (): Promise<TNotice[]> => {
  // Added generic type for safer fetching
  return await client.fetch<TNotice[]>(NOTICES_QUERY);
};

const NoticeList = () => {
  const {
    data: notices,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["notices"],
    queryFn: fetchnotices,
    staleTime: 1000 * 60 * 60 * 24,
    retry: 2,
  });

  if (isLoading) {
    return (
      <div className='flex justify-center items-center py-12'>
        <div className='animate-spin rounded-full h-10 w-10 border-t-2 border-blue-600'></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='text-center py-8'>
        <RefreshCw className='w-10 h-10 text-red-600 mx-auto mb-4' />
        <p className='text-red-600 font-semibold'>
          Failed to load notices. Please try again later.
        </p>
      </div>
    );
  }

  if (!notices || notices.length === 0) {
    return (
      <div className='text-center py-8'>
        <BookX className='w-10 h-10 text-gray-400 mx-auto mb-4' />
        <p className='text-gray-600'>No notices available at this time.</p>
      </div>
    );
  }

  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-16'>
      {notices.map((notice) => (
        <li
          key={notice._id}
          className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] flex flex-col justify-between'
        >
          <div className='flex flex-col gap-4'>
            {notice.imageUrl && (
              <div className='relative w-full h-48 rounded-lg overflow-hidden shadow-sm'>
                <Image
                  src={notice.imageUrl}
                  alt={notice.title}
                  fill
                  className='object-cover'
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            )}
            <div className='flex-grow'>
              <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2'>
                {notice.title}
              </h3>
              {notice.description && (
                <p className='text-gray-600 dark:text-gray-400 text-sm line-clamp-3'>
                  {notice.description}
                </p>
              )}
            </div>
          </div>

          <div className='mt-6'>
            {notice.pdf ? (
              <a
                href={notice.pdf}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all w-full justify-center'
              >
                <FileText className='w-4 h-4' />
                View PDF
              </a>
            ) : notice.imageUrl ? (
              <a
                href={notice.imageUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all w-full justify-center'
              >
                <ImageIcon className='w-4 h-4' />
                View Image
              </a>
            ) : (
              <p className='text-gray-500 italic text-center text-sm'>No preview available</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoticeList;