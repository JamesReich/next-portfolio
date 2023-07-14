//@ts-nocheck
"use client"

import Image from 'next/image'
import {FrontPageCard} from "@/components/FrontPageCard";
import ThemeToggle from '@/components/ui/ThemeToggle'
import Nav from '@/components/Nav'
import React, { useState, useRef, Suspense } from "react";
import emailjs from "@emailjs/browser";
// @ts-ignore
import dynamic from "next/dynamic";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {Button} from "@/components/ui/button";
import Footer from "@/components/Footer";




export default function Contact() {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [recaptchaValue, setRecaptchaValue] = useState("");
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const form = useRef();

    const [isMounted, setIsMounted] = useState(true);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    let ReCAPTCHA;

    if(isMounted) {
        ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), {
            ssr: false,
        });
    }
    function handleRecaptchaChange(value: string) {
        setRecaptchaValue(value);
    }
    // @ts-ignore
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_9oq9vf5",
                "contact_form",
                form.current,
                "7rk0fZKCarMU2UaCh"
            )
            .then(
                (result: any) => {
                    setContact({
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                    });
                    setEmailError(false);
                    setEmailSuccess(true);
                },
                (error: any) => {
                    setEmailError(true);
                }
            );
    };



    const emailSuccessMessage = (
        <div className="bg-emerald-100 border border-emerald-400 text-emerald-700 px-4 py-3 rounded relative mt-5">
            <div className="font-bold">Success!</div>
            <div className="block sm:inline"> Your message has been sent.</div>
        </div>
    );
    const emailErrorMessage = (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-5">
            <div className="font-bold">Error!</div>
            <div className="block sm:inline">
                There was an error sending your message.
            </div>
        </div>
    );

    return (
        <div className="flex flex-col min-h-screen">
            <nav className="flex justify-end w-full max-w-7xl mx-auto">
                <Nav />
            </nav>
            <main className="flex-grow relative z-0 mt-20">
                <div className="w-11/12 md:w-1/2 mx-auto rounded border border-black dark:border-white animate-fade-in-right">
                    <div className="text-4xl dark:text-zinc-300 p-5">Contact</div>
                    <div className="px-8 mb-5 mx-auto">
                        <div className="dark:text-zinc-300">
                            I would love to hear from you and assist with any questions or
                            needs you may have. Please fill out the form below and I will be
                            in touch with you shortly.
                        </div>
                        <div className="dark:text-zinc-300 mt-2">
                            I look forward to connecting with you.
                        </div>
                    </div>
                    <Separator />
                    <form onSubmit={sendEmail} ref={form}>
                        <CardContent className="flex flex-col w-full md:w-2/3 mx-auto">
                            <label className="mb-1 dark:text-zinc-300" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="rounded-md p-1 dark:bg-zinc-950 dark:text-white border dark:border-white focus:border-sky-600 dark:focus:border-sky-600 outline-none border-black mb-4 animate-fade-in-left"
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={contact.name}
                                onChange={(e) =>
                                    setContact({ ...contact, name: e.target.value })
                                }
                            />
                            <label className="mb-1 dark:text-zinc-300" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="rounded-md p-1 dark:bg-zinc-950 dark:text-white border dark:border-white focus:border-sky-600 dark:focus:border-sky-600 outline-none border-black mb-4 animate-fade-in-right"
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={contact.email}
                                onChange={(e) =>
                                    setContact({ ...contact, email: e.target.value })
                                }
                            />
                            <label className="mb-1 dark:text-zinc-300" htmlFor="phone">
                                Phone
                            </label>
                            <input
                                className="rounded-md p-1 dark:bg-zinc-950 dark:text-white border dark:border-white focus:border-sky-600 dark:focus:border-sky-600 outline-none border-black mb-4 animate-fade-in-left"
                                type="tel"
                                id="phone"
                                name="phone"
                                value={contact.phone}
                                onChange={(e) =>
                                    setContact({ ...contact, phone: e.target.value })
                                }
                            />
                            <label className="mb-1 dark:text-zinc-300" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="rounded-md p-1 dark:bg-zinc-950 dark:text-white border dark:border-white focus:border-sky-600 dark:focus:border-sky-600 outline-none border-black h-24 mb-2 animate-fade-in-right"
                                id="message"
                                name="message"
                                required
                                value={contact.message}
                                onChange={(e) =>
                                    setContact({ ...contact, message: e.target.value })
                                }
                            />
                            { isMounted &&
                            <Suspense fallback={<div>Loading...</div>}>
                                <ReCAPTCHA
                                    className="mb-5 mt-2 mx-auto"
                                    sitekey="6LeDHp8gAAAAAIMZJUXSOYsrHsoWpZk8KemHeVSk"
                                    onChange={handleRecaptchaChange}
                                />
                            </Suspense>
                            }
                            <Button
                                className="mb-10 dark:hover:bg-zinc-950 hover:bg-sky-600 dark:hover:text-white hover:text-white animate-fade-in-left"
                                variant="outline"
                                type="submit"
                                value="Send"
                            >
                                Send
                            </Button>
                            {emailSuccess && emailSuccessMessage}
                            {emailError && emailErrorMessage}
                        </CardContent>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}