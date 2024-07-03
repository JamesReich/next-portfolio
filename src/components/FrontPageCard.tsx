"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import {FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";
import Pill from "@/components/Pill";

export function FrontPageCard() {
    return (
        <div className="mt-28">
        <Card className="w-11/12 lg:w-full mx-auto animate-fade-in-right">
            <CardHeader>
                <div className="flex">
                    <Avatar className="mr-2 self-center w-20 h-20">
                        <AvatarImage src="./images/jreich.png" alt="vector drawing on Jimmy Reich" />
                        <AvatarFallback>JR</AvatarFallback>
                    </Avatar>
                    <CardTitle className="self-center">James Reich</CardTitle>
                </div>
                <CardDescription>Web Developer & Graphic Designer.</CardDescription>
            </CardHeader>
            <CardContent>
            <p>Thanks for checking out my portfolio. I am excited to share with you some of the projects I have worked on and the skills I have developed. As a web developer, I specialize in building and maintaining websites and web applications using a variety of programming languages and technologies. I am always looking to learn and grow, and I am excited to showcase my abilities and experience here. Please take a look around and feel free to reach out with any questions or opportunities. Thank you for visiting!</p>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Link href="/contact" passHref>
                    <Button variant="outline">Get in touch</Button>
                </Link>
            </CardFooter>
        </Card>

            <div className="flex flex-col mt-3 lg:flex-row lg:w-full">
                <Card className="w-11/12 self-center lg:self-start m-2 animate-fade-in-left h-full">
                    <CardHeader>
                        <CardTitle className="flex">
                            About Me
                        </CardTitle>
                    </CardHeader>
                        <CardContent className="flex flex-col">
                            <p className="p-5 dark:text-zinc-300 text-zinc-900 w-full">
                                I&apos;m a multi-disciplinary web developer & graphic designer from Reno, Nevada who&apos;s
                                delivered creative and engaging solutions across brand identity,
                                print, packaging, and digital media. I work with my clients from
                                the first step through to the completed product to make sure they
                                are fully on board with where I am taking them. My passion is my
                                work, and I&apos;m committed to bringing my clients&apos; visions to life. I
                                currently work as an expert production artist and freelance web
                                developer. I have an interest in front-end web development but I&apos;m
                                also interested in full-stack development, I love building on both
                                sides of the browser!
                            </p>
                            <CardTitle className="flex justify-center my-5">
                                My Socials
                            </CardTitle>
                            <CardContent className="text-zinc-900 dark:text-zinc-300 flex justify-center">
                                <Link href="https://twitter.com/jgreich_" target="_blank" rel="noopener noreferrer" aria-label="James's Twitter">
                                    <Button variant="outline" className="mx-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                             height="24" fill="none" stroke="currentColor" strokeLinecap="round"
                                             strokeLinejoin="round" strokeWidth="2">
                                            <path
                                                d="m19.8 3-6.218 7.105M4.05 21l6.632-7.579m2.901-3.316L9.267 4.013c-.263-.371-.394-.556-.564-.69a1.5 1.5 0 0 0-.506-.262C7.99 3 7.763 3 7.308 3H5.62c-.75 0-1.126 0-1.328.156A.75.75 0 0 0 4 3.72c-.01.255.207.561.64 1.174l6.041 8.527m2.901-3.316 6.376 9.001c.434.613.65.919.64 1.174a.75.75 0 0 1-.291.564c-.203.156-.578.156-1.328.156H17.29c-.455 0-.682 0-.89-.061a1.5 1.5 0 0 1-.505-.262c-.17-.133-.301-.319-.564-.69l-4.651-6.566"/>
                                        </svg>
                                    </Button>
                                </Link>
                                <Link href="https://github.com/JamesReich" target="_blank" rel="noopener noreferrer"
                                      aria-label="James's Github">
                                    <Button variant="outline" className="mx-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                             height="24" fill="none" stroke="currentColor" strokeLinecap="round"
                                             strokeLinejoin="round" strokeWidth="2">
                                        <path
                                                d="M10 15a3.72 3.72 0 0 0-1 2.58V21m5-6a3.72 3.72 0 0 1 1 2.58V21m-6-1.95a5.7 5.7 0 0 1-2.82.36c-1.52-.52-1.12-1.9-1.9-2.47A2.37 2.37 0 0 0 3 16.5m16-6.75c0 3-1.95 5.25-7 5.25s-7-2.25-7-5.25a6.3 6.3 0 0 1 .68-3c-.34-1.47-.21-3.28.52-3.64.73-.36 2.27.3 3.54 1.15a12.86 12.86 0 0 1 2.26-.2 12.86 12.86 0 0 1 2.26.18c1.27-.85 2.88-1.48 3.54-1.15.66.33.86 2.17.52 3.64A6.3 6.3 0 0 1 19 9.75Z"/>
                                        </svg>
                                    </Button>
                                </Link>
                                <Link href="https://www.instagram.com/jgreich_/" target="_blank"
                                      rel="noopener noreferrer" aria-label="James's Instagram">
                                    <Button variant="outline" className="mx-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                             height="24" fill="none" stroke="currentColor" strokeLinecap="round"
                                             strokeLinejoin="round" strokeWidth="2">
                                        <path d="M17.046 7h.01m-14.01 5c0-2.514 0-3.77.354-4.78a6.3 6.3 0 0 1 3.866-3.866C8.276 3 9.533 3 12.046 3c2.514 0 3.77 0 4.781.354a6.3 6.3 0 0 1 3.866 3.865c.353 1.01.353 2.267.353 4.781s0 3.77-.353 4.78a6.3 6.3 0 0 1-3.866 3.866c-1.01.354-2.267.354-4.78.354-2.514 0-3.771 0-4.781-.354A6.3 6.3 0 0 1 3.4 16.782c-.354-1.01-.354-2.267-.354-4.781Zm12.778-.56a3.819 3.819 0 1 1-7.555 1.12 3.819 3.819 0 0 1 7.555-1.12Z" />
                                        </svg>

                                    </Button>
                                </Link>

                            </CardContent>
                        </CardContent>
                </Card>

                <Card className="w-11/12 self-center lg:self-start m-2 animate-fade-in-right">
                    <CardHeader>
                        <CardTitle className="flex">
                            Skills at a glance...
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col">
                        <p className="p-5 dark:text-zinc-300 text-zinc-900 w-full">
                            As a versatile web developer, I&apos;ve gained proficiency in a wide range of skills that encompass both front-end and back-end development. These skills have not only been critical in my growth as a developer, but they also enable me to bring diverse and rich functionalities to the web projects I handle.

                            I&apos;ve also had the opportunity to work with WordPress and SanityIO, thereby broadening my skills into CMS-based development.

                            All these skills coalesce to form a comprehensive toolset, empowering me to create holistic web solutions that balance functionality, aesthetics, and performance.
                        </p>
                        <CardContent className="mx-auto">
                            <Pill className="mx-1 my-1">HTML</Pill>
                            <Pill className="mx-1 my-1">CSS</Pill>
                            <Pill className="mx-1 my-1">JavaScript</Pill>
                            <Pill className="mx-1 my-1">React</Pill>
                            <Pill className="mx-1 my-1">Next.js</Pill>
                            <Pill className="mx-1 my-1">Tailwind CSS</Pill>
                            <Pill className="mx-1 my-1">Node.js</Pill>
                            <Pill className="mx-1 my-1">Express</Pill>
                            <Pill className="mx-1 my-1">MongoDB</Pill>
                            <Pill className="mx-1 my-1">MySQL</Pill>
                            <Pill className="mx-1 my-1">Git</Pill>
                            <Pill className="mx-1 my-1">Figma</Pill>
                            <Pill className="mx-1 my-1">Adobe Creative Suite</Pill>
                            <Pill className="mx-1 my-1">WordPress</Pill>
                            <Pill className="mx-1 my-1">PostgreSQL</Pill>
                            <Pill className="mx-1 my-1">Bootstrap</Pill>
                        </CardContent>

                        <CardContent className="flex justify-center my-2">
                            If you&apos;d like to see these skills in action, check out my projects.
                        </CardContent>

                        <Button variant="outline" className="mx-auto">
                            <Link href="/projects">
                                <p>View Projects</p>
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}