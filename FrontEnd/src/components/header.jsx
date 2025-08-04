import { Link } from "react-router-dom";
import DigiFlexLogo from "../assets/DigiFlex.png";

export default function Header() {
    return (
        <header>
            <div className="items-center justify-between flex bg-blue-950 opacity-90 px-12">
                <div className="text-2xl inline-flex items-center text-white">
                    <img
                        src={DigiFlexLogo}
                        alt="DigiFlex Logo"
                        className="h-16"
                    />
                </div>
                <div>
                    <ul className="flex space-x-4 text-white">
                        <li className="ml-5 px-2 py-1">
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className="ml-5 px-2 py-1">
                            <Link to={"/services"}>Services</Link>
                        </li>
                        <li className="ml-5 px-2 py-1">
                            <Link to={"/about-us"}>About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
