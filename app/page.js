import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
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
