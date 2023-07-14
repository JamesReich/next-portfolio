import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

export default function SocialButton(props: any) {
    let icon;

    if (props.social === "twitter") {
        icon = (
            <>
                <FaTwitter />
                <p className="ml-3">Twitter</p>
            </>
        );
    }

    if (props.social === "instagram") {
        icon = (
            <>
                <FaInstagram />
                <p className="ml-3" >Instagram</p>
            </>
        );
    }

    if (props.social === "github") {
        icon = (
            <>
                <FaGithub />
                <p className="ml-3">GitHub</p>
            </>
        );
    }

    return <div className={`${props.className} text-4xl flex my-3`}>{icon}</div>;
}