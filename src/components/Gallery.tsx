"use client"
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Separator } from "@/components/ui/separator"
import {useState} from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Footer from "@/components/Footer"


export const photos = [
    { src: "/images/artwork/hn_american_missile_show.png", width: 1137, height: 1137 },
    { src: "/images/artwork/hn_bat_flip_WIP-cu.png", width: 1009, height: 1009 },
    { src: "/images/artwork/hn_throwing_ched.png", width: 1009, height: 1009 },
    { src: "/images/artwork/hn_flower_back.png", width: 1009, height: 1009 },
    { src: "/images/artwork/battle_born_baseball.png", width: 1860, height: 1763 },
    { src: "/images/artwork/broski_black_white.png", width: 2134, height: 2134 },
    { src: "/images/artwork/commanderdog.png", width: 753, height: 1007 },
    { src: "/images/artwork/default-blue.png", width: 257, height: 257 },
    { src: "/images/artwork/face_redraw.png", width: 1345, height: 1359 },
    { src: "/images/artwork/fiance.png", width: 1675, height: 1928 },
    { src: "/images/artwork/fresco_fox.png", width: 1523, height: 1623 },
    { src: "/images/artwork/hook_n_haul.png", width: 1045, height: 569 },
    { src: "/images/artwork/JIMBO.png", width: 2291, height: 2931 },
    { src: "/images/artwork/mexica_left_page.png", width: 617, height: 795 },
    { src: "/images/artwork/mexica_right_page.png", width: 617, height: 795 },
    { src: "/images/artwork/nv_decals_final.png", width: 2333, height: 2807 },
    { src: "/images/artwork/redraw_example.png", width: 901, height: 901 },
    { src: "/images/artwork/redraw_example_2.png", width: 731, height: 731 },
    { src: "/images/artwork/t_shirt_mock_up.jpg", width: 4912, height: 3264 },
    { src: "/images/artwork/Wood-Engraved-logo-MockUp.png", width: 2300, height: 1600 },
    { src: "/images/artwork/HighResBalmsWoodFloorCC.png", width: 1080, height: 1080 },
    { src: "/images/artwork/BalmSummerFixed.png", width: 1080, height: 1350 },
    { src: "/images/artwork/github-banner_1.png", width: 1281, height: 641 },
];

export const hitNukesPhotos = [
    { src: "/images/artwork/hn_american_missile_show.png", width: 1137, height: 1137 },
    { src: "/images/artwork/hn_bat_flip_WIP-cu.png", width: 1009, height: 1009 },
    { src: "/images/artwork/hn_throwing_ched.png", width: 1009, height: 1009 },
    { src: "/images/artwork/hn_flower_back.png", width: 1009, height: 1009 },
];

export const commisionedArtworkPhotos = [
    { src: "/images/artwork/battle_born_baseball.png", width: 1860, height: 1763 },
    { src: "/images/artwork/broski_black_white.png", width: 2134, height: 2134 },
    { src: "/images/artwork/commanderdog.png", width: 753, height: 1007 },
    { src: "/images/artwork/fresco_fox.png", width: 1523, height: 1623 },
    { src: "/images/artwork/hook_n_haul.png", width: 1045, height: 569 },
    { src: "/images/artwork/t_shirt_mock_up.jpg", width: 4912, height: 3264 },
    { src: "/images/artwork/Wood-Engraved-logo-MockUp.png", width: 2300, height: 1600 },
    { src: "/images/artwork/mexica_left_page.png", width: 617, height: 795 },
    { src: "/images/artwork/mexica_right_page.png", width: 617, height: 795 },
    { src: "/images/artwork/nv_decals_final.png", width: 2333, height: 2807 },
];

export const boomerTattooPhotos = [
    { src: "/images/artwork/HighResBalmsWoodFloorCC.png", width: 1080, height: 1080 },
    { src: "/images/artwork/BalmSummerFixed.png", width: 1080, height: 1350 },
];

export const redrawsPhotos = [
    { src: "/images/artwork/redraw_example.png", width: 901, height: 901 },
    { src: "/images/artwork/redraw_example_2.png", width: 731, height: 731 },
    { src: "/images/artwork/face_redraw.png", width: 1345, height: 1359 },
    { src: "/images/artwork/fiance.png", width: 1675, height: 1928 },
    { src: "/images/artwork/JIMBO.png", width: 2291, height: 2931 },
];

export const cloakChatPhotos = [
    { src: "/images/artwork/default-blue.png", width: 257, height: 257 },
    { src: "/images/artwork/github-banner_1.png", width: 1281, height: 641 },
];

// @ts-ignore
export default function Gallery({index, setIndex}) {

    return (
        <>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                <AccordionItem value="item-1">
                    <div className="my-10">
                        <AccordionTrigger className="font-bold text-3xl dark:text-white text-black">Hit Nukes</AccordionTrigger>
                        <AccordionContent>
                            <p className="my-2 text-xl">Getting to work with the awesome people at Hit Nukes, I was able to design some T-Shirts for their sports attire brand. A lot of this work consisted of patterns and stylization of their existing logo as well as playing around with it, for example the bat flip version of the logo. </p>
                            <Separator className="border dark:border-white border-black w-full my-4" />
                            <PhotoAlbum layout="rows" photos={hitNukesPhotos} onClick={({index}) => setIndex('hitNukes', index)} />
                            <Separator className="border dark:border-white border-black w-full my-4" />
                        </AccordionContent>
                    </div>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <div className="my-10">
                        <AccordionTrigger className="font-bold text-3xl dark:text-white text-black">Boomer Tattoo</AccordionTrigger>
                        <AccordionContent>
                            <p className="my-2 text-xl">Boomer Tattoo was my first official gig as a graphic designer. The work consisted of a lot of marketing material, including work featured in Inked Magazine. These examples include 3D models created in blender and using those assets to create all kinds of promotional material such as the balm in the sand ad. </p>
                            <Separator className="border dark:border-white border-black w-full my-4" />
                            <PhotoAlbum layout="rows" photos={boomerTattooPhotos} onClick={({index}) => setIndex('boomerTattoo', index)} />
                            <Separator className="border dark:border-white border-black w-full my-4" />
                        </AccordionContent>
                    </div>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <div className="my-10">
                        <AccordionTrigger className="font-bold text-3xl dark:text-white text-black">Cloak Chat</AccordionTrigger>
                        <AccordionContent>
                            <p className="my-2 text-xl">Cloak Chat is my current massive project, it is a fully featured chat application. I created the logos, banners, and app icons. Including a brand style sheet and guidelines on how to use the logo and word mark. </p>
                            <Separator className="border dark:border-white border-black w-full my-4" />
                            <PhotoAlbum layout="rows" photos={cloakChatPhotos} onClick={({index}) => setIndex('cloakChat', index)} />
                            <Separator className="border dark:border-white border-black w-full my-4" />
                        </AccordionContent>
                    </div>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <div className="my-10">
                        <AccordionTrigger className="font-bold text-3xl dark:text-white text-black">Commissions</AccordionTrigger>
                        <AccordionContent>
                            <p className="my-2 text-xl">These are various commissions that don&apos;t fit into a specific category. Featured below are a menu design for a local restaurant, various logos, Discord community branding and mock-ups for small business&apos;s social media pages. </p>
                            <Separator className="border dark:border-white border-black w-full my-4" />
                            <PhotoAlbum layout="rows" photos={commisionedArtworkPhotos} onClick={({index}) => setIndex('commissions', index)} />
                            <Separator className="border dark:border-white border-black w-full my-4" />
                        </AccordionContent>
                    </div>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <div className="my-10">
                        <AccordionTrigger className="font-bold text-3xl dark:text-white text-black">Redraws</AccordionTrigger>
                        <AccordionContent>
                            <p className="my-2 text-xl">These are some of my favorite redraws I&apos;ve done over the last couple of years. Featuring work I&apos;ve done for Custom Ink and in my free time. This includes being fully print ready, reducing the amount of colors as much as possible to save customers money all while preserving their original artwork. For example, the two pieces on the left are 4 colors, not including their background color.  </p>
                            <Separator className="border dark:border-white border-black w-full my-4" />
                            <PhotoAlbum layout="rows" photos={redrawsPhotos} onClick={({index}) => setIndex('redraws', index)} />
                            <Separator className="border dark:border-white border-black w-full my-4" />
                        </AccordionContent>
                    </div>
            </AccordionItem>
            </Accordion>
        </>
    );
}