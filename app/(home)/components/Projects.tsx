import React from 'react'
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiSass } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

export default function Projects() {
  const projects = [
    {
        title: "Strmlne website",
        tech: [SiReact, SiSass, SiHtml5],
        link: "https://strmlne.dev",
        cover: "/strmlne.PNG",
        background: "bg-indigo-500"
    },
    {
        title: "Check Your Source",
        tech: [SiReact, SiHtml5, SiCss3],
        link: "https://syndicategit.github.io/CheckYourSource/",
        cover: "/CheckYourSource.jpg",
        background: "bg-green-500"
    },
    {
        title: "Maze Game",
        tech: [SiJavascript, SiHtml5, SiCss3],
        link: "https://parin-parikh.github.io/mazeGame/",
        cover: "/maze-project.PNG",
        background: "bg-green-500"
    },
    {
        title: "Music Player",
        tech: [SiJavascript, SiHtml5, SiCss3],
        link: "https://parin-parikh.github.io/Music-Player/",
        cover: "/music-player.PNG",
        background: "bg-indigo-500"
    },
  ]
  return (
    <div className='py-10 p-5 sm:p-0'>
        <Title text='Projects 📂' className='flex flex-col items-center justify-center rotate-6'/>
        <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
            {projects.map((project, index) => {
                return (
                    <Link href={project.link} key={index}> 
                        <div className={cn("p-5 rounded-md ", project.background)}>
                            <DirectionAwareHover imageUrl={project.cover} className='w-full h-64 space-y-5 overflow-hidden'>
                                <div className='space-y-5'>
                                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                                    <div className='flex items-center gap-5'>
                                        {project.tech.map((Icon, index) => {
                                            return <Icon className='w-8 h-8' key={index} />
                                        })}
                                    </div>
                                </div>
                            </DirectionAwareHover>
                        </div>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}
