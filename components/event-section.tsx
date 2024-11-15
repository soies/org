"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";
import { TEvent } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import { useQuery } from "@tanstack/react-query";

// Fetch events from Sanity
const fetchEvents = async (): Promise<TEvent[]> => {
  return await client.fetch(EVENTS_QUERY);
};

// Format date to YYYY-MM-DD
const formatDate = (date: string): string => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export function EventSection() {
  const {
    data: events,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
    retry: 2,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading events.</p>;

  // Map the fetched events to match the required format for Timeline component
  const timelineData = (events ?? []).map((event) => ({
    title: formatDate(event.eventDate), // Format the eventDate to YYYY-MM-DD
    content: (
      <div>
        <p className='text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8'>
          {event.title}
        </p>
        <div className='grid grid-cols-2 gap-4'>
          {event.images?.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Event image ${index}`}
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <div className='w-full' id='event'>
      <Timeline data={timelineData} />
    </div>
  );
}
