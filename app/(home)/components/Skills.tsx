"use client";

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiC, SiFlask, SiGit, SiGithub, SiJavascript, SiMicrosoftazure, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTailwindcss } from 'react-icons/si'

export default function Skills() {
  const skills = [
    {
        text: "React",
        Icon: SiReact
    },
    {
        text: "Next.js",
        Icon: SiNextdotjs
    },
    {
        text: "Tailwind",
        Icon: SiTailwindcss
    },
    {
        text: "JavaScript",
        Icon: SiJavascript
    },
    {
        text: "Python",
        Icon: SiPython
    },
    {
        text: "Git",
        Icon: SiGit
    },
    {
        text: "Azure",
        Icon: SiMicrosoftazure
    },
    {
        text: "Node.js",
        Icon: SiNodedotjs
    },
    {
        text: "MongoDB",
        Icon: SiMongodb
    },
    {
        text: "Flask",
        Icon: SiFlask
    },
    {
        text: "MySQL",
        Icon: SiMysql
    },
    {
        text: "C",
        Icon: SiC
    },
  ]

  return (
    <div className='max-w-5xl mx-auto px-8'>
        <Title text='Skills 🛠️' className='flex flex-col items-center justify-center'/>
        <HoverEffect items={skills}/>
    </div>
  )
}
