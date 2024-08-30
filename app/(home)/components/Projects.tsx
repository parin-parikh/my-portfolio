import React from 'react'
import { SiAzurefunctions, SiAzurepipelines, SiClerk, SiCloudflareworkers, SiCsharp, SiCss3, SiFirebase, SiFlask, SiHtml5, SiJavascript, SiMicrosoftazure, SiMongodb, SiNextdotjs, SiNodedotjs, SiOpenai, SiPython, SiReact, SiSass, SiSocketdotio, SiSqlalchemy, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

export default function Projects() {
    const projects = [
        {
            title: "Note Sphere",
            tech: [SiNextdotjs, SiTailwindcss, SiReact, SiClerk, SiCloudflareworkers, SiFirebase, SiOpenai],
            link: "https://notesphere-delta.vercel.app/",
            cover: "/notesphere.png",
            background: "bg-indigo-500",
            githubLink: "https://github.com/parin-parikh/NoteSphere",
            demo: true,
            github: true
        },
        {
            title: "Strmlne website",
            tech: [SiReact, SiSass, SiHtml5],
            link: "https://strmlne.dev",
            cover: "/strmlne.PNG",
            background: "bg-indigo-500",
            githubLink: "",
            demo: true,
            github: false
        },
        {
            title: "Azure Cloud Resume",
            tech: [SiAzurefunctions, SiAzurepipelines, SiMicrosoftazure, SiCsharp, SiJavascript],
            link: "https://www.parinresume.xyz/",
            cover: "/resume-website.png",
            background: "bg-indigo-500",
            githubLink: "https://github.com/parin-parikh/my-azure-resume",
            demo: true,
            github: true
        },
        {
            title: "Generate Images with AI",
            tech: [SiNextdotjs, SiReact, SiTailwindcss, SiMicrosoftazure, SiTypescript, SiOpenai],
            link: "https://ai-image-generator-kappa-beryl.vercel.app/",
            cover: "/ai-image-generator.PNG",
            background: "bg-indigo-500",
            githubLink: "https://github.com/parin-parikh/ai-image-generator",
            demo: true,
            github: true
        },
        {
            title: "Check Your Source",
            tech: [SiReact, SiHtml5, SiCss3],
            link: "https://syndicategit.github.io/CheckYourSource/",
            cover: "/CheckYourSource.jpg",
            background: "bg-indigo-500",
            githubLink: "https://github.com/SyndicateGit/CheckYourSource/",
            demo: true,
            github: true
        },
        {
            title: "Real time Messanger with Authentication",
            tech: [SiReact, SiNodedotjs, SiMongodb, SiSocketdotio, SiCss3],
            link: "",
            cover: "/messageApp.png",
            background: "bg-indigo-500",
            githubLink: "https://github.com/parin-parikh/Multiuser-Messanger",
            demo: false,
            github: true
        },
        {
            title: "Contact List",
            tech: [SiReact, SiPython, SiFlask, SiSqlalchemy, SiCss3],
            link: "",
            cover: "/contact-list.PNG",
            background: "bg-indigo-500",
            githubLink: "https://github.com/parin-parikh/Contact-List",
            demo: false,
            github: true
        },
        {
            title: "My old portfolio website",
            tech: [SiJavascript, SiHtml5, SiCss3],
            link: "https://parin-parikh.github.io/Portfolio_Website/",
            cover: "/old_portfolio.PNG",
            background: "bg-indigo-500",
            githubLink: "https://github.com/parin-parikh/Portfolio_Website",
            demo: true,
            github: true
        }
        // {
        //     title: "Music Player",
        //     tech: [SiJavascript, SiHtml5, SiCss3],
        //     link: "https://parin-parikh.github.io/Music-Player/",
        //     cover: "/music-player.PNG",
        //     background: "bg-indigo-500",
        //     githubLink: "https://github.com/parin-parikh/Music-Player/",
        //     demo: true,
        //     github: true
        // }
    ]
    return (
        <div className='py-10 p-5 sm:p-0'>
            <Title text='Projects 📂' className='flex flex-col items-center justify-center' />
            <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
                {projects.map((project, index) => {
                    return (
                        <div key={index}>
                            <div className={cn("p-3 pt-2 rounded-md flex flex-col sm:p-5", project.background)}>
                                <h1 className='block sm:hidden text-2xl font-bold text-center'>{project.title}</h1>
                                <DirectionAwareHover imageUrl={project.cover} className='w-full h-64 space-y-5 overflow-hidden'>
                                    <div className='space-y-5'>
                                        {/* <h1 className='hidden text-2xl font-bold text-left sm:block'>{project.title}</h1> */}
                                        <h1 className='hidden md:block lg:block text-2xl font-bold text-left'>{project.title}</h1>
                                        <div className='hidden lg:flex md:flex items-center gap-5'>
                                            {project.tech.map((Icon, index) => {
                                                return <Icon className='w-8 h-8' key={index} />
                                            })}
                                        </div>
                                    </div>
                                </DirectionAwareHover>
                                <div className='sm:hidden flex justify-center gap-5 mt-3'>
                                    {project.tech.map((Icon, index) => {
                                        return <Icon className='w-8 h-8' key={index} />
                                    })}
                                </div>
                            </div>
                            <div className="flex justify-between m-2">
                                {
                                    project.github && (
                                        <div>
                                            <a href={project.githubLink} className="rounded decoration-indigo-500 hover:text-indigo-300">
                                                GitHub
                                            </a>
                                        </div>
                                    )
                                }
                                
                                {project.demo && (
                                    <div className="ml-auto">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="rounded decoration-green-500 hover:text-green-300">
                                            View live demo
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center mt-5">
                <div className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-600 max-w-max">
                    <a href="https://github.com/parin-parikh?tab=repositories">
                        See more projects
                    </a>
                </div>
            </div>

        </div>
    )
}
