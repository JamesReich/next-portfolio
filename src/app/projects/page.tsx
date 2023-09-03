"use client"

import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from "@/components/Footer";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Pill from "@/components/Pill";

import ProjectCard from "@/components/ProjectCard";
export default function Home() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isStanHulseOpen, setIsStanHulseOpen] = useState(false)
    const [isCloakLiOpen, setIsCloakLiOpen] = useState(false)

    // Data for Cloak Chat project
    const cloakChatData = {
        title: 'Cloak Chat',
        description: 'Cloak Chat is a robust, secure and fast text and voice chat application. Still in active development and not yet released. I work as the sole frontend developer on this project along with a backend developer. I am responsible for the entire frontend of the application, including the UI, UX, and the code itself.',
        technologies: ['React', 'React Query', 'Electron', 'TypeScript', 'TailwindCSS', 'Python', 'WebTransport', 'Vite', 'MySQL'],
        features: ['End-to-end encryption', 'Web transport instead of web sockets', 'Text chat', 'syntax highlighting', 'Markdown support'],
        websiteLink: 'https://cloak.chat',
        imageSrc: '/images/projects/cloak-chat.png',
        handleImageClick: () => setIsModalOpen(true),
        codeLink: ""
    };

    // Data for Stan Hulse Law project
    const stanHulseData = {
        title: 'Stan Hulse Law',
        description: 'Static website for Texas lawyer Stan Hulse. Website includes bootstrap for it\'s mobile first approach and features a contact form using javascript to validate the response and send it to the appropriate email.',
        technologies: ['Javascript', 'Bootstrap', 'Sass/Scss', 'HTML', 'EmailJs'],
        features: ['Custom contact form', 'Mobile friendly design', 'SEO optimized', 'Accessible', 'Custom logo'],
        websiteLink: 'https://stanhulselaw.com',
        imageSrc: '/images/projects/stansite.webp',
        handleImageClick: () => setIsStanHulseOpen(true),
        codeLink: ""
    };

    const cloakLiData = {
        title: 'Cloak.li',
        description: 'Cloak.li is a URL shortener that allows you to shorten links.',
        technologies: ['React', 'Next.js', 'TailwindCSS', 'Vercel', 'MongoDB', 'Node.js', 'Express.js', 'Render'],
        features: ['URL Shortening', 'Link History', 'Click Tracking', 'User-friendly UI'],
        websiteLink: 'https://cloak.li',
        imageSrc: '/images/projects/cloakli.png',
        handleImageClick: () => setIsCloakLiOpen(true),
        codeLink: "https://github.com/JamesReich/cloak.li"
    };

    return (
        <>
            <nav className="flex justify-end w-full max-w-7xl mx-auto">
                <Nav />
            </nav>
            <main className="max-w-[700px] mx-auto mt-20">
                <div className="flex flex-col justify-center md:flex-row flex-wrap">
                    <ProjectCard {...cloakChatData} />
                    <ProjectCard {...cloakLiData} />
                    <ProjectCard {...stanHulseData} />

                </div>
                {isModalOpen && (
                    <div className="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 bg-black bg-opacity-90 transition-opacity" aria-hidden="true"></div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                            <div className="inline-block align-bottom bg-white dark:bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full">
                                <div className="bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 w-full">
                                            <Image src="/images/projects/cloak-chat.png" alt="A screenshot of Cloak Chat" width={1600} height={900} layout="responsive" />
                                        </div>
                                    </div>
                                </div>
                                <div className="dark:bg-black bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <Button variant="outline" onClick={() => setIsModalOpen(false)} className="">
                                        Close
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {isStanHulseOpen && (
                    <div className="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 bg-black bg-opacity-90 transition-opacity" aria-hidden="true"></div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                            <div className="inline-block align-bottom bg-white dark:bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full">
                                <div className="bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 w-full">
                                            <Image src="/images/projects/stansite.webp" alt="A screenshot of Cloak Chat" width={1600} height={900} layout="responsive" />
                                        </div>
                                    </div>
                                </div>
                                <div className="dark:bg-black bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <Button variant="outline" onClick={() => setIsStanHulseOpen(false)} className="">
                                        Close
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {isCloakLiOpen && (
                    <div className="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 bg-black bg-opacity-90 transition-opacity" aria-hidden="true"></div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                            <div className="inline-block align-bottom bg-white dark:bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full">
                                <div className="bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 w-full">
                                            <Image src="/images/projects/cloakli.png" alt="A screenshot of Cloak.li" width={1600} height={900} layout="responsive" />
                                        </div>
                                    </div>
                                </div>
                                <div className="dark:bg-black bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <Button variant="outline" onClick={() => setIsCloakLiOpen(false)} className="">
                                        Close
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    )
}
