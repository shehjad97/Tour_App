import Footer from "@/components/Footer/Footer";
import MainNav from "@/components/NavBars/MainNav";

export default function Layout({ children }) {
    return (
        <div className="">
            <MainNav />
            {children}
            <Footer />
        </div>
    )
}