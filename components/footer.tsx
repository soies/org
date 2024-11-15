import { Globe, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import React from "react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className=' text-black py-8 px-4 font-semibold'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Contact Information */}
        <div>
          <h2 className='text-lg font-semibold mb-4'>
            SOCIETY OF INDUSTRIAL ENGINEERING STUDENTS (SOIES) NEPAL
          </h2>
          <p className='mb-2'>
            Institute of Engineering Thapathali Campus, Thapathali, Kathmandu,
            Nepal
          </p>
          <p className='mb-2 flex items-center'>
            <Phone className='mr-2' /> 9840257131
          </p>
          <p className='mb-2 flex items-center'>
            <Mail className='mr-2' /> mail@soiesnepal.org.np
          </p>
          <p className='flex items-center'>
            <Globe className='mr-2' /> www.soiesnepal.org.np
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
          <ul className=''>
            <li className='mb-2'>
              <a
                href='https://www.soiesnepal.org.np'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-400'
              >
                Official Website
              </a>
            </li>
            <li className='mb-2'>
              <a
                href='https://www.instagram.com/soies_nepal'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-400'
              >
                Instagram
              </a>
            </li>
            <li className='mb-2'>
              <a
                href='https://linkedin.com/in/soies-nepal-18984b280/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-400'
              >
                LinkedIn
              </a>
            </li>
            <li className='mb-2'>
              <a
                href='https://www.youtube.com/@SOIES_nepal'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-400'
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className='flex items-center space-x-6'>
          <a
            href='https://linkedin.com/in/soies-nepal-18984b280/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='text-2xl hover:text-gray-400'
          >
            <Linkedin />
          </a>
          <a
            href='https://www.instagram.com/soies_nepal'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
            className='text-2xl hover:text-gray-400'
          >
            <Instagram />
          </a>
          <a
            href='https://www.youtube.com/@SOIES_nepal'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='YouTube'
            className='text-2xl hover:text-gray-400'
          >
            <Youtube />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='mt-8 text-center text-gray-500'>
        <p>
          &copy; {new Date().getFullYear()} SOIES Nepal. All rights reserved.
        </p>
      </div>
      <Separator className='my-4' />
    </footer>
  );
};

export default Footer;
