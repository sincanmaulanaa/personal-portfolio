import { Icons } from '@/components/icons';
import {
  HomeIcon,
  NotebookIcon,
  ShieldCheck,
  SquareArrowOutUpRight,
} from 'lucide-react';

export const DATA = {
  name: 'Sincan Maulana',
  initials: 'DV',
  url: 'https://shindev.my.id',
  location: 'Ponorogo, Indonesia',
  locationLink: 'https://www.google.com/maps/place/ponorogo',
  description:
    'College Student turned Software Developer. I love building things and helping people. Active on TikTok.',
  summary:
    'I love to solve the problem and implement idea with design and code. Interest to explore different styles of design and follow the design and technology trends for software development.',
  avatarUrl: '/profile.jpeg',
  skills: [
    'React (web & native)',
    'Next.js',
    'Typescript',
    'Redux',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'MongoDB',
    'Socket.io',
    'REST API',
    'Strapi',
    'Sass',
    'TailwindCSS',
    'Bootstrap',
    'Shadcn UI',
    'Framer Motion',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'sincanmaulanaa@gmail.com',
    tel: '+6285157711068',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/sincanmaulanaa',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/sincanmaulanaa',
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'cmlabs',
      href: 'https://cmlabs.co/id-id',
      badges: [],
      location: 'Remote',
      title: 'Frontend Developer - Internship',
      logoUrl: '/cmlabs.png',
      start: 'Feb 2024',
      end: 'May 2024',
      description:
        'At the company, I maintained and optimized the website using TypeScript, TailwindCSS, React, and Next.js. I focused on improving web performance and search engine speed. Collaborating with cross-functional teams, I ensured designs met user needs. Additionally, I worked on internal projects, applying best practices and modern tools.',
    },
    {
      company: 'Educourse.id',
      badges: [],
      href: 'https://educourse.id/',
      location: 'South Tangerang, Indonesia',
      title: 'Frontend Engineer - Internship',
      logoUrl: '/educourse.png',
      start: 'Aug 2023',
      end: 'Dec 2023',
      description:
        'I was awarded MSIB Batch 5 Kampus Merdeka at Educourse.id, where I specialized in Front-End Engineering. During the program, I developed a scalable system that processed over 1.5 billion transactions, ensuring platform reliability. I led a UI redesign that improved the user experience, and optimized web performance by handling large data sets of over 8,000 entries, significantly boosting load times. Additionally, I implemented a targeted communication system, enabling message distribution to 20,000 users, enhancing customer engagement and communication strategies.',
    },
    {
      company: 'The Mastej',
      href: 'https://www.themastej.com/',
      badges: [],
      location: 'Malang, Indonesia',
      title: 'Junior Web Developer - Internship',
      logoUrl: '/the-mastej.png',
      start: 'Aug 2019',
      end: 'Feb 2020',
      description:
        'My internship at Mastej Studio marked my first step into the professional world, providing an invaluable opportunity for growth and learning. Surrounded by talented and supportive colleagues, I gained hands-on experience in web development, particularly in mastering the PHP programming language. In addition to enhancing my technical skills, I contributed by posting articles and news on a tourism information website focused on attractions in Malang. This experience helped me develop both professionally and personally in a dynamic and encouraging environment.',
    },
  ],
  education: [
    {
      school: 'Muhammadiyah University of Ponorogo',
      href: 'https://umpo.ac.id/',
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: '/UMPO.png',
      start: 'Sep 2021',
      end: 'Now',
    },
    {
      school: 'Muhammadiyah University of East Kalimantan',
      href: 'https://www.umkt.ac.id/',
      degree: 'Student Exchange (Kampus Merdeka)',
      logoUrl: '/logo-umkt.png',
      start: 'Sep 2022',
      end: 'Jan 2023',
    },
  ],
  projects: [
    {
      title: 'Anak Sehat',
      href: 'https://anak-sehat.vercel.app',
      dates: 'Aug 2024 - Sep 2024',
      active: true,
      description:
        'Anak Sehat helps parents prevent stunting and promote healthy growth, created for ICONIC IT 2024, where it won 2nd place in web development.',
      technologies: [
        'Next.js',
        'Typescript',
        'Express.js',
        'Flask',
        'PostgreSQL',
        'Vercel',
        'TailwindCSS',
        'Shadcn UI',
        'Magic UI',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://anak-sehat.vercel.app',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '',
      video:
        'https://portfolio-sincan.s3.ap-southeast-2.amazonaws.com/Screen+Recording+2024-10-08+at+20.32.10.mov',
    },
    {
      title: 'Tambang Village',
      href: 'https://desa-tambang.vercel.app',
      dates: 'Sep 2024 - Oct 2024',
      active: true,
      description:
        'Designed and developed a website for the Village Government of Tambang, Pudak Subdistrict, Ponorogo Regency.',
      technologies: [
        'Next.js',
        'Typescript',
        'Strapi',
        'Heroku',
        'Vercel',
        'TailwindCSS',
        'Next UI',
        'Magic UI',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://desa-tambang.vercel.app',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '',
      video:
        'https://portfolio-sincan.s3.ap-southeast-2.amazonaws.com/Screen+Recording+2024-10-09+at+14.51.22.mov',
    },
    {
      title: 'I-GEN',
      href: 'https://partners.i-gen.co.id/',
      dates: 'April 2023 - September 2023',
      active: true,
      description:
        'Developed web app for International Global Education Network (I-GEN). This web app used to manage schools that partner with I-GEN to collaborate in Indonesia - Korea Sister School Partnership.',
      technologies: [
        'Next.js',
        'Typescript',
        'MongoDB',
        'TailwindCSS',
        'Ant Design',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://partners.i-gen.co.id/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '',
      video:
        'https://portfolio-sincan.s3.ap-southeast-2.amazonaws.com/Screen+Recording+2024-10-09+at+14.57.57.mov',
    },
    {
      title: 'Sevilla Digital Apps',
      href: 'https://play.google.com/store/apps/details?id=com.dcitymobile.sevilla&hl=en',
      dates: 'Oct 2023 - Dec 2023',
      active: true,
      description:
        'Sevilla Digital Apps is a platform developed for housing management in the Seville BSD cluster. This platform accommodates administrators and residents in terms of finance, correspondence, the latest information, and other product transaction platforms.',
      technologies: [
        'React Native',
        'Typescript',
        'TailwindCSS',
        'React Hook Form',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://play.google.com/store/apps/details?id=com.dcitymobile.sevilla&hl=en',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '',
      video:
        'https://portfolio-sincan.s3.ap-southeast-2.amazonaws.com/Screen+Recording+2024-10-09+at+15.50.39.mov',
    },
  ],
  hackathons: [
    {
      title: 'Belajar Membuat Aplikasi Web dengan React',
      dates: 'October 2024',
      location: 'Dicoding Academy',
      description: '',
      image:
        'https://media.licdn.com/dms/image/v2/C560BAQHOIi63tC8k8w/company-logo_100_100/company-logo_100_100/0/1660182933847/dicoding_logo?e=1736380800&v=beta&t=8SpCKbPR6ht9tIA88tjASuQlUllKHyc7qrpYfaN945U',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
      links: [
        {
          title: 'Show credential',
          icon: <SquareArrowOutUpRight className='h-4 w-4' />,
          href: 'https://www.dicoding.com/certificates/NVP74O7RWPR0',
        },
      ],
    },
    {
      title: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
      dates: 'May 2023',
      location: 'Dicoding Academy',
      description: '',
      image:
        'https://media.licdn.com/dms/image/v2/C560BAQHOIi63tC8k8w/company-logo_100_100/company-logo_100_100/0/1660182933847/dicoding_logo?e=1736380800&v=beta&t=8SpCKbPR6ht9tIA88tjASuQlUllKHyc7qrpYfaN945U',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
      links: [
        {
          title: 'Show credential',
          icon: <SquareArrowOutUpRight className='h-4 w-4' />,
          href: 'https://www.dicoding.com/certificates/72ZD808L9ZYW',
        },
      ],
    },
    {
      title: 'Belajar Fundamental Front-End Web Development',
      dates: 'October 2022',
      location: 'Dicoding Academy',
      description: '',
      image:
        'https://media.licdn.com/dms/image/v2/C560BAQHOIi63tC8k8w/company-logo_100_100/company-logo_100_100/0/1660182933847/dicoding_logo?e=1736380800&v=beta&t=8SpCKbPR6ht9tIA88tjASuQlUllKHyc7qrpYfaN945U',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
      links: [
        {
          title: 'Show credential',
          icon: <SquareArrowOutUpRight className='h-4 w-4' />,
          href: 'https://www.dicoding.com/certificates/JMZVN2KWRPN9',
        },
      ],
    },
    {
      title: '"Full-Stack Web Designer: Handoff dan Front-End',
      dates: 'April 2022',
      location: 'BuildWithAngga',
      description: '',
      image: 'https://buildwithangga.com/themes/front/images/logo_bwa_new.svg',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
      links: [
        {
          title: 'Show credential',
          icon: <SquareArrowOutUpRight className='h-4 w-4' />,
          href: 'https://class.buildwithangga.com/certificate/full-stack-web-designer-handoff-dan-front-end',
        },
      ],
    },
  ],
} as const;
