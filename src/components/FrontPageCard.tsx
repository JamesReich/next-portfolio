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
                                        <FaTwitter className="text-xl" />
                                    </Button>
                                </Link>
                                <Link href="https://github.com/JamesReich" target="_blank" rel="noopener noreferrer" aria-label="James's Github">
                                    <Button variant="outline" className="mx-3">
                                        <FaGithub className="text-xl" />
                                    </Button>
                                </Link>
                                <Link href="https://www.instagram.com/jgreich_/" target="_blank" rel="noopener noreferrer" aria-label="James's Instagram">
                                    <Button variant="outline" className="mx-3">
                                        <FaInstagram className="text-xl" />
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