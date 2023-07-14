
import {FrontPageCard} from "@/components/FrontPageCard";
import ThemeToggle from '@/components/ui/ThemeToggle'
import Nav from '@/components/Nav'
import SocialButton from "@/components/SocialButton";
import {Button} from "@/components/ui/button";
import Link from 'next/link'
import Image from 'next/image'
import React from "react";
import Footer from "@/components/Footer";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <nav className="flex justify-end w-full max-w-7xl mx-auto">
                <Nav />
            </nav>
            <main className="flex-grow relative mt-28">
                <div className="w-full md:w-10/12 mx-auto dark:bg-zinc-900/0 bg-white rounded">
                    <div className="flex flex-col w-fit md:flex-row justify-center border border-black dark:border-white p-5 rounded">
                        <Image
                            className="lg:w-1/2 w-4/5 max-w-lg rounded mx-auto"
                            src="/images/jnn.png"
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                        />
                        <div className="flex flex-col">
                            <p className="p-5 dark:text-zinc-300 text-zinc-900 w-full">
                                I'm a multi-disciplinary graphic designer from Reno, Nevada who's
                                delivered creative and engaging solutions across brand identity,
                                print, packaging, and digital media. I work with my clients from
                                the first step through to the completed product to make sure they
                                are fully on board with where I am taking them. My passion is my
                                work, and I'm committed to bringing my clients' visions to life. I
                                Currently work as an expert production artist and aspiring
                                developer. I have an interest in front-end web development but I'm
                                also interested in full-stack development, I love building on both
                                sides of the browser!
                            </p>
                            <div className="text-zinc-900 dark:text-zinc-300 flex justify-center">
                                <Link href="https://twitter.com/jgreich_" target="_blank">
                                    <Button
                                        variant="outline"
                                        className="mx-6"
                                    >
                                        <FaTwitter className="text-3xl" />
                                    </Button>
                                </Link>
                                <Link href="https://github.com/JamesReich" target="_blank">
                                    <Button
                                        variant="outline"
                                        className="mx-6"
                                    >
                                        <FaGithub className="text-3xl" />
                                    </Button>
                                </Link>
                                <Link href="https://www.instagram.com/jgreich_/" target="_blank">
                                    <Button
                                        variant="outline"
                                        className="mx-6"
                                    >
                                        <FaInstagram className="text-3xl" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
