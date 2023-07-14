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
                                <FaGithub className="text-black hover:text-black/60 dark:text-white hover:opacity-60 text-2xl mx-2" />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com/jgreich_" target="_blank" rel="noopener noreferrer" aria-label="James's Twitter">
                                <FaTwitter className="text-black hover:text-black/60 dark:text-white hover:opacity-60 text-2xl mx-2" />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://discordapp.com/users/231259227383922689" target="_blank" rel="noopener noreferrer" aria-label="James's Discord">
                                <FaDiscord className="text-black hover:text-black/60 dark:text-white hover:opacity-60 text-2xl mx-2" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}