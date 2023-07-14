"use client"

import ThemeToggle from '@/components/ui/ThemeToggle'
import Nav from '@/components/Nav'
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import Footer from "@/components/Footer";
export default function Resume() {
    const handleDownload = () => {
        const url = "/files/james_reich_resume_2023.pdf";
        const link = document.createElement("a");
        link.href = url;
        link.download = "james-reich-resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <nav className="flex justify-end w-full max-w-7xl mx-auto">
                <Nav />
            </nav>
            <main className="mt-24">
                <div className="md:w-3/4 mx-auto my-5 max-w-7xl w-11/12 animate-fade-in-right">
                    <h1 className="font-semibold text-3xl">Resume</h1>
                    <p>Feel free to check out my resume, and even download it if you&apos;d like.</p>
                </div>
                <div className="container md:w-3/4 w-11/12 mx-auto bg-white dark:bg-zinc-900 p-5 mb-20 rounded border border-black dark:border-white animate-fade-in-left">
                    <h2 className="text-2xl font-bold text-sky-500">James Reich</h2>
                    <h3 className="text-lg font-medium">
                        Expert Production Artist & Web Developer
                    </h3>
                    <h6 className="text-sm">
                        Reno, Nevada | jreich.dev | james@jreich.dev{" "}
                    </h6>
                    <p className="my-2">
                        Multi-disciplinary graphic designer and web developer born and
                        raised in Reno, Nevada. With a passion for front-end web development
                        and love for both sides of the browser, I strive to create
                        meaningful and memorable experiences for users.
                    </p>

                    <Separator className="dark:border-white border border-black mt-10" />

                    <p className="font-bold text-sm my-2 text-sky-500">
                        WORK EXPERIENCE
                    </p>

                    <div className="my-10">
                        <h3 className="text-xl font-bold">
                            CLOAK CHAT
                        </h3>
                        <p className="opacity-60 text-sm">
                            Frontend Developer  | Jan 2023 - Current
                        </p>
                        <p>
                            • Collaborated closely with the other developer, handling multiple roles including product management,
                            UX design, and QA engineering
                        </p>
                        <p>
                            • Designed and implemented sophisticated web features for Cloak Chat, a chat application built using
                            Electron, React, and Tailwind CSS, in a two-person team
                        </p>
                        <p>
                            • Adapted Agile development methodologies to effectively manage tasks and meet project deadlines in a
                            two-person team
                        </p>
                        <p>
                            • Developed high-performance and scalable solutions for Cloak Chat, optimizing for efficiency and
                            resource usage in a small team setting
                        </p>
                    </div>

                    <div className="my-10">
                        <h3 className="text-xl font-bold ">
                            FREELANCE WEB DEVELOPER
                        </h3>
                        <p className="opacity-60 text-sm">
                            Web Developer | Feb 2022 - Current
                        </p>
                        <p>
                            • Develop and maintain responsive, mobile-friendly websites using
                            HTML, CSS, JavaScript, and other programming languages as
                            required
                        </p>
                        <p>
                            • Collaborate with clients to understand their needs,
                            requirements, and goals, and provide recommendations and solutions
                            to improve their web presence
                        </p>
                        <p>
                            • Perform website updates and maintenance, including bug fixes,
                            feature enhancements, and security patches
                        </p>
                        <p>
                            • Stay up-to-date with the latest web development trends and
                            technologies and provide guidance to clients on how to best
                            leverage these advancements
                        </p>
                        <p>
                            • Manage multiple projects simultaneously while ensuring timely
                            and quality delivery of work
                        </p>
                    </div>

                    <div className="my-10">
                        <h3 className="text-xl font-bold">CUSTOMINK</h3>
                        <p className="opacity-60 text-sm">
                            Expert Production Artist | Nov 2020 - Current
                        </p>
                        <p>
                            • Processed customer orders for screen-printing, ensuring accuracy and adherence to print minimums
                            for over 150 orders per week
                        </p>
                        <p>
                            • Utilized a wide range of tools and guidelines to achieve 98% customer satisfaction across various custom
                            apparel and products
                        </p>
                        <p>
                            • Supported the art and design team&apos;s success by maintaining high accuracy in processing high volumes
                            of orders
                        </p>
                        <p>
                            • Adapted to changing guidelines and procedures across the company to ensure seamless project
                            execution
                        </p>
                        <p>
                            • Developed graphic assets adding value to customer experience & conversion
                        </p>
                    </div>

                    <div className="my-10">
                        <h3 className="text-xl font-bold">
                            BOOMER TATTOO
                        </h3>
                        <p className="opacity-60 text-sm">
                            Graphic Designer | Dec 2019 - May 2020
                        </p>
                        <p>
                            • Eliminate reliance on outside contractors by designing and
                            producing marketing collateral and display merchandising in-house
                        </p>
                        <p>
                            • Conceive and launch quarterly art and digitizing review
                            publication specially geared towards sales force for dual
                            purposing as a piece of information and motivational tool
                        </p>
                        <p>
                            • Contribute to product development, brainstorm with marketing
                            clients, inspect and approve printed pieces, provide design
                            direction to colleagues, and work efficiently under tight
                            deadlines
                        </p>
                    </div>

                    <Separator className="dark:border-white border border-black mt-10" />
                    <p className="font-bold text-sm my-2 text-sky-500">
                        EDUCATION
                    </p>

                    <div className="my-10">
                        <h3 className="text-xl font-bold">TREEHOUSE</h3>
                        <p className="opacity-60 text-sm">
                            Full Stack Developer Bootcamp | Mar 2022 - Jun 2022
                        </p>
                        <p>
                            • Completed an intensive Full Stack Developer Bootcamp, gaining proficiency in both front-end and
                            back-end development technologies
                        </p>
                        <p>
                            • Mastered front-end web development using HTML, CSS, and JavaScript, along with popular frameworks
                            such as React and Angular
                        </p>
                        <p>
                            • Acquired back-end development skills using Node.js, Express, and databases like MongoDB and
                            PostgreSQL
                        </p>
                        <p>
                            • Gained hands-on experience with version control systems, such as Git and GitHub, for effective
                            collaboration and code management
                        </p>
                    </div>

                    <Separator className="dark:border-white border border-black mt-10" />
                    <p className="font-bold text-sm my-2 text-sky-500">
                        CERTIFICATIONS
                    </p>

                    <div className="my-10">
                        <p>
                            • Adobe Certified Expert (ACE) - Photoshop
                        </p>
                        <p>
                            • Adobe Certified Expert (ACE) - Illustrator
                        </p>
                    </div>

                    <Separator className="dark:border-white border border-black mt-10" />
                    <p className="font-bold text-sm mt-2 mb-8 text-sky-500">
                        SKILLS
                    </p>

                    <div className="flex flex-wrap">
                        <p className="bg-sky-500 text-md font-semibold px-2 py-0.5 rounded m-1">
                            Adobe Photoshop
                        </p>
                        <p className="bg-sky-500 text-md font-semibold px-2 py-0.5 rounded m-1">
                            Adobe Illustrator
                        </p>
                        <p className="bg-sky-500 text-md font-semibold px-2 py-0.5 rounded m-1">
                            HTML
                        </p>
                        <p className="bg-sky-500 text-md font-semibold px-2 py-0.5 rounded m-1">
                            Tailwind
                        </p>
                        <p className="bg-sky-500 text-md font-semibold px-2 py-0.5 rounded m-1">
                            React
                        </p>
                        <p className="bg-sky-500 text-md font-semibold px-2 py-0.5 rounded m-1">
                            NodeJs
                        </p>
                        <p className="bg-sky-500 text-md font-semibold px-2 py-0.5 rounded m-1">
                            Express
                        </p>
                        <p className="bg-sky-500 text-md font-semibold px-2 py-0.5 rounded m-1">
                            Sass/Scss
                        </p>
                        <p className="bg-sky-500 text-md font-semibold px-2 py-0.5 rounded m-1">
                            JavaScript
                        </p>
                        <p className="bg-sky-500 text-md font-semibold px-2 py-0.5 rounded m-1">
                            Bootstrap
                        </p>
                        <p className="bg-sky-500 text-md font-semibold px-2 py-0.5 rounded m-1">
                            Git/Github
                        </p>
                        <p className="bg-sky-500 text-md font-semibold px-2 py-0.5 rounded m-1">
                            Critical Thinking
                        </p>
                        <p className="bg-sky-500 text-md font-semibold px-2 py-0.5 rounded m-1">
                            Flexible & Adaptable
                        </p>
                        <p className="bg-sky-500 text-md font-semibold px-2 py-0.5 rounded m-1">
                            Quick Learner
                        </p>
                    </div>

                    <Separator className="dark:border-white border border-black mt-10" />

                    <div className="mt-5">
                        <Button
                            variant="outline"
                            onClick={handleDownload}
                            className="p-2 rounded-md font-bold"
                        >
                            Download this resume
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
