import Image from 'next/image';
import Link from 'next/link';
import Pill from "@/components/Pill";
import { Button } from '@/components/ui/button';

const ProjectCard = ({ title, description, technologies, features, websiteLink, imageSrc, handleImageClick, codeLink }) => (
    <div className="w-11/12 lg:w-1/2 border border-black dark:border-white rounded p-5 m-2 self-center animate-fade-in-left">
        <div className="w-[1000px]">
            <div className="flex justify-between">
                <h2 className="font-semibold text-2xl self-center">{title}</h2>
                <div className="flex w-1/2 justify-around self-center">
                    <Link className="mr-2" href={websiteLink} target="_blank">
                        <Button variant="outline">Website</Button>
                    </Link>
                    {codeLink && (
                        <Link  href={codeLink} target="_blank">
                            <Button variant="outline">Code</Button>
                        </Link>
                    )
                    }
                </div>
            </div>
            <hr className="my-2" />
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="w-full md:w-2/3 flex flex-col m-2 justify-between">
                    <p className="text-lg">{description}</p>
                    <div className="my-5">
                        <p className="text-lg font-semibold">Technologies used:</p>
                        {technologies.map((tech, index) => (
                            <Pill key={index} className="m-1.5">{tech}</Pill>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col justify-start w-full md:w-1/2 m-2">
                    <p className="text-lg font-semibold">Notable features:</p>
                    <ul className="list-disc list-inside">
                        {features.map((feature, index) => (
                            <li key={index} className="text-lg">{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <Image onClick={handleImageClick} className="mt-5 rounded cursor-pointer" src={imageSrc} alt={`A screenshot of ${title}`} width={1920} height={1080} />
        </div>
    </div>
);

export default ProjectCard;
