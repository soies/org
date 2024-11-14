"use client";
import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

// Define the background positions for each card to create sections of the single image
const backgroundPositions = [
  "0% 0%", // Top-left corner
  "50% 0%", // Top-center
  "100% 0%", // Top-right corner
  "0% 50%", // Middle-left
  "50% 50%", // Center
  "100% 50%", // Middle-right
  "0% 100%", // Bottom-left
  "50% 100%", // Bottom-center
  "100% 100%", // Bottom-right
];

export default function LibraryPage() {
  return (
    <div className='container mx-auto py-10 p-4 m-4 w-4/5'>
      <h1 className='text-3xl font-bold text-center mb-8'>Library</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {data.semesters.map((semester, index) => (
          <Card
            key={semester.semester}
            className='hover:shadow-lg transition-shadow cursor-pointer overflow-hidden'
            onClick={() => window.open(semester.url, "_blank")}
          >
            <CardContent
              className='flex items-center justify-center h-64 text-white transition-transform duration-500 ease-out transform hover:scale-105'
              style={{
                backgroundImage: "url(/library.webp)",
                backgroundSize: "300% 300%", // Adjust to zoom in on the large image
                backgroundPosition:
                  backgroundPositions[index % backgroundPositions.length],
              }}
            >
              <CardTitle className='text-xl font-semibold text-center bg-black bg-opacity-60 p-2 rounded'>
                {semester.semester}
              </CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

const data = {
  semesters: [
    {
      semester: "Semester 1",
      url: "https://drive.google.com/drive/folders/0B3Ymcwwizgl_WG12bWhYMkhrLWc?resourcekey=0-DEMJ__ad6_HnVcySTQQhGw",
    },
    {
      semester: "Semester 2",
      url: "https://drive.google.com/drive/folders/0B3Ymcwwizgl_SXNxc2VYRUtKb0U?resourcekey=0-WUd9HZw-NrI_IfdaSib7Rw",
    },
    {
      semester: "Semester 3",
      url: "https://drive.google.com/drive/folders/0B3Ymcwwizgl_OWxDMUk1MkRLTWs?resourcekey=0-zt4KoBDgCb4ulQ_beX0WNA",
    },
    {
      semester: "Semester 4",
      url: "https://drive.google.com/drive/folders/0B3Ymcwwizgl_QjVvamUxUEw0Tkk?resourcekey=0-Z-Mf98rQEibEh5WGTApAiA",
    },
    {
      semester: "Semester 5",
      url: "https://drive.google.com/drive/folders/0B3Ymcwwizgl_NjBXNG5LVVlDWDg?resourcekey=0-GAxOs7PxLDHFO_CRSCoL-A",
    },
    {
      semester: "Semester 6",
      url: "https://drive.google.com/drive/folders/0B3Ymcwwizgl_bDZ0WVlYdFB5bmM?resourcekey=0-bEnX5EzytMvKV4FcSqmPZw",
    },
    {
      semester: "Semester 7",
      url: "https://drive.google.com/drive/folders/0B3Ymcwwizgl_UUJOVUp6UjZaSUU?resourcekey=0-vFFaok-joPHgMWWVIoTdxw",
    },
    {
      semester: "Semester 8",
      url: "https://drive.google.com/drive/folders/0B3Ymcwwizgl_TkUzZ1pKM0NfV1k?resourcekey=0-QKphi6R2YEDOAdVCb7nDSA",
    },
  ],
};
