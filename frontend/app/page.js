import Cat from "@/components/Cat/cat";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import HeroMain from "@/components/Hero/HeroMain";
import MainNav from "@/components/NavBars/MainNav";
import Explore from "@/components/services/Explore";
import Services from "@/components/services/Services";

export default function Home() {
    return (
        <div className="">
            <MainNav />
            <HeroMain />
            <Services />
            <div className="my-20">
                <Explore />
            </div>
            <div className="mb-20">
                <Experience />
            </div>
            <div className="">
                <Gallery />
            </div>
            <div className="mb-20">
                <Cat />
            </div>
            <Footer />
        </div>
    )
}
