import Footer from "@/components/Footer/Footer";
import MainNav from "@/components/NavBars/MainNav";
import PrivateRoute from "@/providers/PrivateRoute";

const layout = ({ children }) => {
    return (
        <div className="min-h-screen">
            <PrivateRoute>
                <MainNav />
                {children}
                <Footer />
            </PrivateRoute>
        </div>
    );
};

export default layout;