import { Globe, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className='bg-slate-50 text-gray-900 py-12 px-4'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='flex items-center mb-4'>
          <Image
            src='/soies.svg'
            alt='SOIES Logo'
            height={80}
            width={80}
            className=' mr-4'
          />
          <h2 className='text-2xl font-bold'>
            SOCIETY OF INDUSTRIAL ENGINEERING STUDENTS (SOIES) NEPAL
          </h2>
        </div>
        <div>
          <div className='flex items-start mb-4'>
            <div className='mr-4'>
              <Phone className='text-2xl' />
            </div>
            <div>
              <p className='font-semibold'>Phone</p>
              <p>9840257131</p>
            </div>
          </div>
          <div className='flex items-start mb-4'>
            <div className='mr-4'>
              <Mail className='text-2xl' />
            </div>
            <div>
              <p className='font-semibold'>Email</p>
              <p>mail@soiesnepal.org.np</p>
            </div>
          </div>
          <div className='flex items-start mb-4'>
            <div className='mr-4'>
              <Globe className='text-2xl' />
            </div>
            <div>
              <p className='font-semibold'>Website</p>
              <p>www.soiesnepal.org.np</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className='text-2xl font-bold mb-4'>Quick Links</h3>
          <ul className='space-y-2'>
            <li>
              <a
                href='https://www.soiesnepal.org.np'
                className='hover:text-gray-600'
              >
                Official Website
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/soies_nepal'
                className='hover:text-gray-600'
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href='https://linkedin.com/in/soies-nepal-18984b280/'
                className='hover:text-gray-600'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href='https://www.youtube.com/@SOIES_nepal'
                className='hover:text-gray-600'
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
        <div className='flex items-center space-x-6'>
          <a
            href='https://linkedin.com/in/soies-nepal-18984b280/'
            className='text-2xl hover:text-gray-600'
          >
            <Linkedin />
          </a>
          <a
            href='https://www.instagram.com/soies_nepal'
            className='text-2xl hover:text-gray-600'
          >
            <Instagram />
          </a>
          <a
            href='https://www.youtube.com/@SOIES_nepal'
            className='text-2xl hover:text-gray-600'
          >
            <Youtube />
          </a>
        </div>
      </div>
      <div className='mt-8 text-center text-gray-500'>
        <p>
          &copy; {new Date().getFullYear()} SOIES Nepal. All rights reserved.
        </p>
      </div>
      <Separator className='my-8 border-gray-300' />
    </footer>
  );
};

export default Footer;
