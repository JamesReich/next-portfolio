"use client"

import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from "@/components/Footer";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Pill from "@/components/Pill";
export default function Home() {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <nav className="flex justify-end w-full max-w-7xl mx-auto">
                <Nav />
            </nav>
            <main className="max-w-7xl mx-auto">
                <div className="flex flex-col justify-center mx-auto lg:flex-row w-11/12 md:w-full">
                    <div className="w-full lg:w-1/2 border border-black dark:border-white rounded p-5 m-2 self-center animate-fade-in-left">
                        <div>
                            <div className="flex justify-between">
                                <h2 className="font-semibold text-2xl">
                                    Cloak Chat
                                </h2>
                                <Link href="https://cloak.chat" target="_blank">
                                    <Button variant="outline">Website</Button>
                                </Link>
                            </div>
                            <div>
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    <div className="w-full md:w-2/3 flex flex-col m-2 justify-between">
                                        <p className="text-lg">
                                        Cloak Chat is a robust, secure and fast text and voice chat application. Still in active development and not yet released.
                                            I work as the sole frontend developer on this project along with a backend developer. I am responsible for the entire frontend of the application, including the UI, UX, and the code itself.
                                        </p>

                                        <div className="my-5">
                                            <p className="text-lg font-semibold">
                                                Technologies used:
                                            </p>
                                            <Pill className="m-1.5">React</Pill>
                                            <Pill className="m-1.5">React Query</Pill>
                                            <Pill className="m-1.5">Electron</Pill>
                                            <Pill className="m-1.5">TypeScript</Pill>
                                            <Pill className="m-1.5">TailwindCSS</Pill>
                                            <Pill className="m-1.5">Python</Pill>
                                            <Pill className="m-1.5">WebTransport</Pill>
                                            <Pill className="m-1.5">Vite</Pill>
                                            <Pill className="m-1.5">MySQL</Pill>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start w-full md:w-1/2 m-2">
                                        <p className="text-lg font-semibold">
                                            Some notable features include:
                                        </p>
                                        <ul className="list-disc list-inside">
                                            <li className="text-lg">End-to-end encryption</li>
                                            <li className="text-lg">Web transport instead of web sockets</li>
                                            <li className="text-lg">Text chat</li>
                                            <li className="text-lg">syntax highlighting</li>
                                            <li className="text-lg">markdown support</li>
                                            <li className="text-lg">User owned and operated Rooms/Servers</li>
                                            <li className="text-lg">Emoji support</li>
                                            <li className="text-lg">Gif Support</li>
                                            <li className="text-lg">User settings</li>
                                            <li className="text-lg">User roles</li>
                                            <li className="text-lg">User permissions</li>
                                            <li className="text-lg">Themes</li>
                                            <li className="text-lg">Online status indication</li>
                                            <li className="text-lg">Voice chat</li>
                                            <li className="text-lg">Separate channels with groups</li>
                                        </ul>
                                    </div>
                                </div>
                                <Image onClick={() => setIsModalOpen(true)} className="mt-5 rounded cursor-pointer" src="/images/projects/cloak-chat.png" alt="A screenshot of Cloak Chat" width={1920} height={1080} />
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
                            </div>
                            <footer>
                            </footer>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 border border-black dark:border-white rounded p-5 m-2 self-center lg:self-start animate-fade-in-right">
                        <div>
                            <div className="flex justify-between">
                                <h2 className="font-semibold text-2xl">
                                    Stan Hulse Law
                                </h2>
                                <Link href="https://stanhulselaw.com" target="_blank">
                                    <Button variant="outline">Website</Button>
                                </Link>
                            </div>
                            <div>
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    <div className="w-full md:w-2/3 flex flex-col m-2 justify-between">
                                        <p className="text-lg">
                                            Static website for Texas lawyer Stan Hulse. Website includes bootstrap for it&apos;s mobile first approach and features a contact form using javascript to validate the response and send it to the appropriate email.
                                        </p>

                                        <div className="my-5">
                                            <p className="text-lg font-semibold">
                                                Technologies used:
                                            </p>
                                            <Pill className="m-1.5">Javascript</Pill>
                                            <Pill className="m-1.5">Bootstrap</Pill>
                                            <Pill className="m-1.5">Sass/Scss</Pill>
                                            <Pill className="m-1.5">HTML</Pill>
                                            <Pill className="m-1.5">EmailJs</Pill>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start w-full md:w-1/2 m-2">
                                        <p className="text-lg font-semibold">
                                            Some notable features include:
                                        </p>
                                        <ul className="list-disc list-inside">
                                            <li className="text-lg">Custom contact form</li>
                                            <li className="text-lg">Mobile friendly design</li>
                                            <li className="text-lg">SEO optimized</li>
                                            <li className="text-lg">Accessible</li>
                                            <li className="text-lg">markdown support</li>
                                            <li className="text-lg">Custom logo</li>
                                        </ul>
                                    </div>
                                </div>
                                <Image onClick={() => setIsModalOpen(true)} className="mt-5 rounded cursor-pointer" src="/images/projects/stansite.webp" alt="A screenshot of stan hulse law dot com" width={1920} height={1080} />
                                {isModalOpen && (
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
                                                    <Button variant="outline" onClick={() => setIsModalOpen(false)} className="">
                                                        Close
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <footer>
                            </footer>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
