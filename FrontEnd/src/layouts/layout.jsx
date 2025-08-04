import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Layout() {
    return (
        <>
            <Header />
            <main className="container mx-auto p-4">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
