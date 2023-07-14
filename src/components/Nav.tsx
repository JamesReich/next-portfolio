"use client"

import * as React from "react"
import Link from "next/link"

import {Menu, X} from "lucide-react"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image";
import ThemeToggle from "@/components/ui/ThemeToggle";


export function MobileNav() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="md:hidden block m-2 relative mb-28 bg-white dark:bg-black">
            <button
                className="absolute right-2 top-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
                {isOpen ? <X size={24}/> : <Menu size={32} />}
            </button>
            {isOpen && (
                <ul className="flex flex-col space-y-4 mt-4 w-44 absolute top-4 right-2 z-50 bg-white dark:bg-black p-2 shadow-md shadow-black/30 rounded border border-black/20 dark:border-white" role="menu">
                    <li className="dark:hover:bg-zinc-700 hover:bg-zinc-300 p-1 py-2 rounded-md w-full" role="menuitem">
                        <Link href="/">
                            <p>Home</p>
                        </Link>
                    </li>
                    <li className="dark:hover:bg-zinc-700 hover:bg-zinc-300 p-1 py-2 rounded-md w-full" role="menuitem">
                        <Link href="/projects">
                            <p>Projects</p>
                        </Link>
                    </li>
                    <li className="dark:hover:bg-zinc-700 hover:bg-zinc-300 p-1 py-2 rounded-md w-full" role="menuitem">
                        <Link href="/art">
                            <p>Art</p>
                        </Link>
                    </li>
                    <li className="dark:hover:bg-zinc-700 hover:bg-zinc-300 p-1 py-2 rounded-md w-full" role="menuitem">
                        <Link href="/resume">
                            <p>Resume</p>
                        </Link>
                    </li>
                    <li className="dark:hover:bg-zinc-700 hover:bg-zinc-300 p-1 py-2 rounded-md w-full" role="menuitem">
                        <Link href="/contact">
                            <p>Contact</p>
                        </Link>
                    </li>
                    <div className="self-center w-full"><ThemeToggle /></div>
                </ul>
            )}
        </div>
    )
}
export function Nav() {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <NavigationMenu>
            <div className="md:hidden">
                <MobileNav />
            </div>
            <div className="hidden md:block">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Welcome</NavigationMenuTrigger>
                        <NavigationMenuContent className="dark:bg-black bg-white">
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild className="dark:hover:bg-zinc-700 hover:bg-zinc-300">
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <Image className="mx-auto" src="/images/artwork/JIMBO.png" alt="vector drawing on myself" width={100} height={100} />
                                            <div className="mb-2 mt-4 text-lg font-medium mx-auto">
                                                jgreich.dev
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Back to the homepage
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/projects" title="Projects" className="dark:hover:bg-zinc-700 hover:bg-zinc-300">
                                    Check out some of my web development projects.
                                </ListItem>
                                <ListItem href="/art" title="Artwork" className="dark:hover:bg-zinc-700 hover:bg-zinc-300">
                                    A gallery of some of my paid and personal artwork.
                                </ListItem>
                                <ListItem href="/resume" title="Resume" className="dark:hover:bg-zinc-700 hover:bg-zinc-300">
                                    A summary of my education, experience, and skills.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/projects" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Projects
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/art" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Art
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/resume" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Resume
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/contact" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Contact
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <div className="self-center"><ThemeToggle /></div>
                </NavigationMenuList>

            </div>

        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default Nav;
