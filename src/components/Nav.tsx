"use client"
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Fragment, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

function PhotoPhoto(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M22 10.272A11.545 11.545 0 0 0 19.5 10c-6.18 0-11.222 4.875-11.489 10.99M22 10.271V13c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 21 16.8 21 14 21h-4c-.759 0-1.414 0-1.989-.01M22 10.271c-.005-2.323-.05-3.57-.545-4.542a5 5 0 0 0-2.185-2.185C18.2 3 16.8 3 14 3h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 5.73C2 6.8 2 8.2 2 11v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185c.78.397 1.735.505 3.281.534M7.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
        </svg>
    )
}

function HomeHome2(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M3 12.759c0-1.017 0-1.526.119-2.002a4 4 0 0 1 .513-1.19c.265-.414.634-.763 1.374-1.461l2.6-2.456c1.546-1.46 2.32-2.19 3.201-2.466a4 4 0 0 1 2.386 0c.882.275 1.655 1.006 3.201 2.466l2.6 2.456c.74.698 1.11 1.047 1.374 1.46a4 4 0 0 1 .513 1.191c.119.476.119.985.119 2.002v3.574c0 1.085 0 1.628-.12 2.073a3.5 3.5 0 0 1-2.474 2.475c-.445.119-.988.119-2.073.119-.31 0-.465 0-.592-.034a1 1 0 0 1-.707-.707C15 20.132 15 19.977 15 19.667V17c0-.465 0-.697-.03-.891a2.5 2.5 0 0 0-2.079-2.078C12.697 14 12.464 14 12 14s-.697 0-.891.03A2.5 2.5 0 0 0 9.03 16.11C9 16.303 9 16.535 9 17v2.667c0 .31 0 .465-.034.592a1 1 0 0 1-.707.707C8.132 21 7.977 21 7.667 21c-1.085 0-1.628 0-2.073-.12a3.5 3.5 0 0 1-2.475-2.474C3 17.96 3 17.418 3 16.333V12.76Z" />
        </svg>
    )
}

function FolderGit(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M22 13v-.6c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 6 17.84 6 15.6 6h-2.316c-.47 0-.704 0-.917-.065a1.5 1.5 0 0 1-.517-.276c-.172-.142-.302-.337-.563-.728l-.575-.862c-.26-.391-.39-.586-.562-.728a1.5 1.5 0 0 0-.517-.276C9.42 3 9.185 3 8.716 3H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C2 6.04 2 7.16 2 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 21 6.16 21 8.4 21H9m4-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0c0 2.8 2.2 5 5 5m-5-5v8m5-3a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
        </svg>
    )
}

function FileWriting(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M14 2.058V3.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C16.28 8 17.12 8 18.8 8h1.142M14 2.058C13.607 2 13.136 2 12.349 2H10.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C4 5.04 4 6.16 4 8.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C7.04 22 8.16 22 10.4 22h3.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C20 18.96 20 17.84 20 15.6V9.651c0-.787 0-1.257-.058-1.651M14 2.058c.096.014.187.03.277.053.408.098.798.26 1.156.478.404.248.75.594 1.442 1.286l1.25 1.25c.692.692 1.038 1.038 1.286 1.442a4 4 0 0 1 .479 1.156c.021.09.038.181.052.277M8 13h8m-8 4h5" />
        </svg>
    )
}

function MessageDefault(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="m21.803 7.762-5.508 3.505c-1.557.99-2.335 1.486-3.171 1.678a5 5 0 0 1-2.248 0c-.836-.192-1.614-.688-3.171-1.678L2.197 7.762m19.606 0C22 8.722 22 10.006 22 12c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 20 16.8 20 14 20h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 16.2 2 14.8 2 12c0-1.994 0-3.278.197-4.238m19.606 0a4.003 4.003 0 0 0-.348-1.032 5 5 0 0 0-2.185-2.185C18.2 4 16.8 4 14 4h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 6.73a4.006 4.006 0 0 0-.348 1.032" />
        </svg>
    )
}





const home = [
    {
        name: 'Home',
        description: 'Welcome to my personal space on the web! Discover my journey, skills, and passions.',
        href: '/',
        icon: HomeHome2
    },
    {
        name: 'Projects',
        description: 'Explore my portfolio of projects, showcasing my problem-solving skills and creativity in software development.',
        href: '/projects',
        icon: FolderGit
    },
    {
        name: 'Resume',
        description: 'View my professional resume, highlighting my educational background, work experience, and technical expertise.',
        href: '/resume',
        icon: FileWriting
    },
    {
        name: 'Artwork',
        description: 'Browse my collection of art, reflecting my creativity and artistic vision across various mediums.',
        href: '/art',
        icon: PhotoPhoto
    },
    {
        name: 'Contact',
        description: 'Get in touch with me for collaborations, opportunities, or just to say hello.',
        href: '/contact',
        icon: MessageDefault
    },
]



export default function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    function CurlyBracesEmpty(props: any) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M8 4C6.343 4 5 5.194 5 6.667v2.666C5 10.806 3.657 12 2 12c1.657 0 3 1.194 3 2.667v2.666C5 18.806 6.343 20 8 20m8-16c1.657 0 3 1.194 3 2.667v2.666C19 10.806 20.343 12 22 12c-1.657 0-3 1.194-3 2.667v2.666C19 18.806 17.657 20 16 20" />
            </svg>
        )
    }
    return (
        <header className="mx-auto w-full max-w-7xl">
            <nav className="mx-auto flex max-w-7xl text-black dark:text-white items-center justify-between p-6 lg:px-8"
                 aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">James Reich Portfolio Site</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none"
                             stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <path
                                d="M8 4C6.343 4 5 5.194 5 6.667v2.666C5 10.806 3.657 12 2 12c1.657 0 3 1.194 3 2.667v2.666C5 18.806 6.343 20 8 20m8-16c1.657 0 3 1.194 3 2.667v2.666C19 10.806 20.343 12 22 12c-1.657 0-3 1.194-3 2.667v2.666C19 18.806 17.657 20 16 20"/>
                        </svg>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black dark:text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button
                            className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-black dark:text-white">
                            Home
                            <ChevronDownIcon className="h-5 w-5 flex-none text-black dark:text-white"
                                             aria-hidden="true"/>
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel
                                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-black shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {home.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-zinc-900"
                                        >
                                            <div
                                                className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-100 dark:bg-zinc-900 group-hover:bg-white group-hover:bg-zinc-800">
                                                <item.icon
                                                    className="h-6 w-6 text-black dark:text-white group-hover:text-sky-700"
                                                    aria-hidden="true"/>
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href}
                                                   className="block font-semibold text-black dark:text-white">
                                                    {item.name}
                                                    <span className="absolute inset-0"/>
                                                </a>
                                                <p className="mt-1 text-black dark:text-white">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <a href="/projects" className="text-sm font-semibold leading-6 text-black dark:text-white">
                        Projects
                    </a>
                    <a href="/resume" className="text-sm font-semibold leading-6 text-black dark:text-white">
                        Resume
                    </a>
                    <a href="/art" className="text-sm font-semibold leading-6 text-black dark:text-white">
                        Artwork
                    </a>
                    <a href="/contact" className="text-sm font-semibold leading-6 text-black dark:text-white">
                        Contact
                    </a>

                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div className="self-center"><ThemeToggle/></div>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10"/>
                <Dialog.Panel
                    className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white dark:bg-black sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="p-6">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">James Reich Portfolio Site</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                     fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                     strokeWidth="2">
                                    <path
                                        d="M8 4C6.343 4 5 5.194 5 6.667v2.666C5 10.806 3.657 12 2 12c1.657 0 3 1.194 3 2.667v2.666C5 18.806 6.343 20 8 20m8-16c1.657 0 3 1.194 3 2.667v2.666C19 10.806 20.343 12 22 12c-1.657 0-3 1.194-3 2.667v2.666C19 18.806 17.657 20 16 20"/>
                                </svg>
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-black dark:text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="py-6">
                                <div className="mx-2 self-center flex">
                                    <ThemeToggle/>
                                    <p className="mx-2">Toggle Theme</p>
                                </div>
                            </div>
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {home.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800"
                                        >
                                            <div
                                                className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-zinc-950 group-hover:bg-white group-hover:dark:bg-zinc-900">
                                                <item.icon
                                                    className="h-6 w-6 text-black dark:text-white group-hover:text-sky-700"
                                                    aria-hidden="true"/>
                                            </div>
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
