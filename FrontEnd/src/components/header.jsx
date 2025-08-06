import { Link } from "react-router-dom";
import DigiFlexLogo from "../assets/DigiFlex.png";

export default function Header() {
    return (
        <header>
            <div className="h-12 bg-black">
                <p className="text-2xl uppercase text-white text-center pt-2">
                    Get print-ready designs
                </p>
            </div>
            <div>
                <nav className="items-center justify-between flex bg-white opacity-90 px-12">
                    <div className="text-2xl inline-flex items-center">
                        <img
                            src={DigiFlexLogo}
                            alt="DigiFlex Logo"
                            className="h-12"
                        />
                    </div>
                    <div>
                        <ul className="flex space-x-4 text-black">
                            <li className="ml-5 px-2 py-1 first-letter:capitalize">
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li className="ml-5 px-2 py-1 first-letter:capitalize">
                                <Link to={"/shop"}>Shop</Link>
                            </li>
                            <li className="ml-5 px-2 py-1 first-letter:capitalize">
                                <Link to={"/contact"}>contact</Link>
                            </li>
                            <li className="ml-5 px-2 py-1 first-letter:capitalize">
                                cart
                            </li>
                            <li className="ml-5 px-2 py-1 first-letter:capitalize">
                                <Link to={"/login"}>login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
