import React from 'react'
import { SiCss3, SiFlask, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiPython, SiReact, SiSass, SiSocketdotio, SiSqlalchemy } from 'react-icons/si'
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
        background: "bg-indigo-500",
        githubLink: "",
        demo: true
    },
    {
        title: "Check Your Source",
        tech: [SiReact, SiHtml5, SiCss3],
        link: "https://syndicategit.github.io/CheckYourSource/",
        cover: "/CheckYourSource.jpg",
        background: "bg-indigo-500",
        githubLink: "https://github.com/SyndicateGit/CheckYourSource/",
        demo: true
    },
    {
        title: "Real time Messanger with Authentication",
        tech: [SiReact, SiNodedotjs, SiMongodb, SiSocketdotio, SiCss3],
        link: "",
        cover: "/messageApp.png",
        background: "bg-indigo-500",
        githubLink: "https://github.com/parin-parikh/Multiuser-Messanger",
        demo: false
    },
    {
        title: "Contact List",
        tech: [SiReact, SiPython, SiFlask, SiSqlalchemy, SiCss3],
        link: "",
        cover: "/contact-list.PNG",
        background: "bg-indigo-500",
        githubLink: "https://github.com/parin-parikh/Contact-List",
        demo: false
    },
    {
        title: "My old portfolio website",
        tech: [SiJavascript, SiHtml5, SiCss3],
        link: "https://github.com/parin-parikh/Portfolio_Website/",
        cover: "/old_portfolio.PNG",
        background: "bg-indigo-500",
        githubLink: "https://github.com/parin-parikh/Portfolio_Website",
        demo: true
    },
    {
        title: "Music Player",
        tech: [SiJavascript, SiHtml5, SiCss3],
        link: "https://parin-parikh.github.io/Music-Player/",
        cover: "/music-player.PNG",
        background: "bg-indigo-500",
        githubLink: "https://github.com/parin-parikh/Music-Player/",
        demo: true
    },
    {
        title: "Maze Game",
        tech: [SiJavascript, SiHtml5, SiCss3],
        link: "https://parin-parikh.github.io/mazeGame/",
        cover: "/maze-project.PNG",
        background: "bg-indigo-500",
        githubLink: "https://github.com/parin-parikh/mazeGame/",
        demo: true
    },
    {
        title: "Save Links Chrome Extension",
        tech: [SiJavascript, SiHtml5, SiCss3],
        link: "https://parin-parikh.github.io/Save-Links/",
        cover: "/save-link.PNG",
        background: "bg-indigo-500",
        githubLink: "https://github.com/parin-parikh/Save-Links",
        demo: true
    }
  ]
  return (
    <div className='py-10 p-5 sm:p-0'>
        <Title text='Projects 📂' className='flex flex-col items-center justify-center'/>
        <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
            {projects.map((project, index) => {
                return (
                    <div key={index}>
                        <Link href={project.githubLink}> 
                            <div className={cn("p-5 rounded-md flex flex-col items-center ", project.background)}>
                                <DirectionAwareHover imageUrl={project.cover} className='w-full h-64 space-y-5 overflow-hidden'>
                                    <div className='space-y-5'>
                                        <h1 className='text-2xl font-bold'>{project.title}</h1>
                                        <div className='flex items-center gap-5'>
                                            {project.tech.map((Icon, index) => {
                                                return <Icon className='w-8 h-8' key={index} />
                                            })}
                                        </div>
                                        <h1>Click to view on GitHub</h1>
                                    </div>
                                </DirectionAwareHover>
                            </div>
                        </Link>
                        {project.demo ? (
                            <div className='flex justify-center items-center mt-0'>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white px-4 py-2 rounded hover:underline decoration-green-500">View live demo</a>        
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                )
            })}
        </div>
    </div>
  )
}
