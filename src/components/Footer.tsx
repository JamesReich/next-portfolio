"use client"

import { useState } from "react";
import { FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    return (
        <footer className="w-full h-fit static inset-x-0 bottom-0 mt-10">
            <div className="w-full mx-auto flex flex-col md:flex-row max-w-6xl h-full">
                <div className="md:ml-5 p-2 justify-center flex md:self-center md:justify-start order-1">
                    <Button onClick={() => window.scrollTo(0, 0)}>Back to top</Button>
                </div>

                <p className="self-end mx-auto text-center text-xs opacity-40 order-3 md:order-2 dark:text-white">
                    James Reich {year}. Styled with{" "}
                    <Link href="https://tailwindcss.com/" target="_blank">TailwindCSS</Link>
                    {" "}and{" "}
                    <Link href="https://ui.shadcn.com/" target="_blank">shadcn/ui</Link>
                </p>

                <nav
                    className="
                        py-2
                        flex
                        md:py-0
                        m-5
                        order-2
                        md:order-3
                        "
                >
                    <ul
                        className="
                            flex
                            justify-center
                            md:justify-end
                            max-w-7xl
                            mx-auto
                            my-auto
                            w-full
                            "
                    >
                        <li>
                            <Link href="https://github.com/JamesReich" target="_blank" rel="noopener noreferrer" aria-label="James's Github">
                                <div
                                    className="text-black hover:text-black/60 dark:text-white hover:opacity-60 text-2xl mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                         fill="none" stroke="currentColor" strokeLinecap="round"
                                         strokeLinejoin="round" strokeWidth="2">
                                        <path
                                            d="M10 15a3.72 3.72 0 0 0-1 2.58V21m5-6a3.72 3.72 0 0 1 1 2.58V21m-6-1.95a5.7 5.7 0 0 1-2.82.36c-1.52-.52-1.12-1.9-1.9-2.47A2.37 2.37 0 0 0 3 16.5m16-6.75c0 3-1.95 5.25-7 5.25s-7-2.25-7-5.25a6.3 6.3 0 0 1 .68-3c-.34-1.47-.21-3.28.52-3.64.73-.36 2.27.3 3.54 1.15a12.86 12.86 0 0 1 2.26-.2 12.86 12.86 0 0 1 2.26.18c1.27-.85 2.88-1.48 3.54-1.15.66.33.86 2.17.52 3.64A6.3 6.3 0 0 1 19 9.75Z"/>
                                    </svg>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com/jgreich_" target="_blank" rel="noopener noreferrer"
                                  aria-label="James's Twitter">
                                <div
                                    className="text-black hover:text-black/60 dark:text-white hover:opacity-60 text-2xl mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                         fill="none" stroke="currentColor" strokeLinecap="round"
                                         strokeLinejoin="round" strokeWidth="2">
                                        <path
                                            d="m19.8 3-6.218 7.105M4.05 21l6.632-7.579m2.901-3.316L9.267 4.013c-.263-.371-.394-.556-.564-.69a1.5 1.5 0 0 0-.506-.262C7.99 3 7.763 3 7.308 3H5.62c-.75 0-1.126 0-1.328.156A.75.75 0 0 0 4 3.72c-.01.255.207.561.64 1.174l6.041 8.527m2.901-3.316 6.376 9.001c.434.613.65.919.64 1.174a.75.75 0 0 1-.291.564c-.203.156-.578.156-1.328.156H17.29c-.455 0-.682 0-.89-.061a1.5 1.5 0 0 1-.505-.262c-.17-.133-.301-.319-.564-.69l-4.651-6.566"/>
                                    </svg>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://discordapp.com/users/231259227383922689" target="_blank"
                                  rel="noopener noreferrer" aria-label="James's Discord">
                                <div
                                    className="text-black hover:text-black/60 dark:text-white hover:opacity-60 text-2xl mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                         fill="none" stroke="currentColor" strokeLinecap="round"
                                         strokeLinejoin="round" strokeWidth="2">
                                        <path
                                            d="M11 6h2.693a.5.5 0 0 0 .448-.278l.678-1.368a.476.476 0 0 1 .557-.252c.656.188 2.03.641 3.128 1.398 3.864 2.897 3.504 9.39 3.475 10.76a.508.508 0 0 1-.065.24C19.931 20 16.491 20 16.491 20l-1.166-2.426M13 6h-2.688a.5.5 0 0 1-.448-.277l-.683-1.37a.476.476 0 0 0-.556-.252c-.655.188-2.031.642-3.13 1.399-3.863 2.897-3.503 9.39-3.474 10.76a.507.507 0 0 0 .065.24C4.069 20 7.509 20 7.509 20l1.17-2.427M7 17c.6.225 1.155.416 1.678.573M17.004 17c-.6.225-1.156.416-1.68.574m-6.645 0c2.444.735 4.202.735 6.646 0M10.002 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6.002 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                                    </svg>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
);
}