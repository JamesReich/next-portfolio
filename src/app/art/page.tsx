
"use client"
import {useState} from "react";

import {FrontPageCard} from "@/components/FrontPageCard";
import ThemeToggle from '@/components/ui/ThemeToggle'
import Nav from '@/components/Nav'
import SocialButton from "@/components/SocialButton";
import Link from 'next/link'
import Image from 'next/image'
import React from "react";
import Gallery from "@/components/Gallery";
import Lightbox from 'yet-another-react-lightbox'
import "yet-another-react-lightbox/styles.css";
import { photos, hitNukesPhotos, commisionedArtworkPhotos, boomerTattooPhotos, redrawsPhotos, cloakChatPhotos } from "@/components/Gallery";
import Footer from "@/components/Footer";
export default function About() {
    const [index, setIndex] = useState({hitNukes: -1, commissions: -1, boomerTattoo: -1, redraws: -1, cloakChat: -1});

    return (
        <div className="flex flex-col min-h-screen">
            <nav className="flex justify-end w-full max-w-7xl mx-auto">
                <Nav />
            </nav>
            <main className="flex-grow relative max-w-7xl mx-auto w-full">
                <div className="w-full md:w-10/12 mx-auto dark:bg-zinc-900/0 bg-white rounded p-2">
                    <Gallery
                        index={index}
                        setIndex={(album: number, i: number) => setIndex({...index, [album]: i})}
                    />
                    <Lightbox
                        slides={hitNukesPhotos}
                        open={index.hitNukes >= 0}
                        index={index.hitNukes}
                        close={() => setIndex({...index, hitNukes: -1})}
                    />
                    <Lightbox
                        slides={commisionedArtworkPhotos}
                        open={index.commissions >= 0}
                        index={index.commissions}
                        close={() => setIndex({...index, commissions: -1})}
                    />
                    <Lightbox
                        slides={boomerTattooPhotos}
                        open={index.boomerTattoo >= 0}
                        index={index.boomerTattoo}
                        close={() => setIndex({...index, boomerTattoo: -1})}
                    />
                    <Lightbox
                        slides={redrawsPhotos}
                        open={index.redraws >= 0}
                        index={index.redraws}
                        close={() => setIndex({...index, redraws: -1})}
                    />
                    <Lightbox
                        slides={cloakChatPhotos}
                        open={index.cloakChat >= 0}
                        index={index.cloakChat}
                        close={() => setIndex({...index, cloakChat: -1})}
                    />
                </div>
            </main>
            <Footer/>
        </div>
    );
}
