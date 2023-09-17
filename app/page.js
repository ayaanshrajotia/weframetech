import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";
import CardList from "@/components/CardList";
import { BiPlusMedical } from "react-icons/bi";
import HeroSection from "@/components/HeroSection";
import MainSection from "@/components/MainSection";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-dark-purple font-cairo">
            {/* Sidebar */}
            <Sidebar />
            {/* Navbar */}
            <Navbar />
            {/* Main */}
            <MainSection />
        </div>
    );
}
