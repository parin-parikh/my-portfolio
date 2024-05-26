import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";


export default function Navbar({className}:{className?:string}) {
  const socials = [
    {
        link: "https://www.linkedin.com/in/parinparikh1",
        label: "LindedIn",
        icon: SiLinkedin,
    },
    {
        link: "https://github.com/parin-parikh",
        label: "GitHub",
        icon: SiGithub,
    },
  ]
  {/* <nav className={cn('py-10 flex justify-between items-center animate-move-down', className)}> */}
  return (
    <nav className={cn('py-10 flex justify-between items-center animate-move-down', className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Parin Parikh 👨🏻‍💻</h1>
        <div className='flex items-center gap-5'>
            {socials.map((social, index) => {
                const Icon = social.icon
                return <Link href={social.link} key={index} aria-label={social.label}>
                    <Icon className='w-6 h-6 hover:scale-125 transition-all' />
                </Link>
            })}
        </div>
    </nav>
  )
}
