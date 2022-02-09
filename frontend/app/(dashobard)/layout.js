import Navbar from "@/components/NavBars/Navbar";
import SideNav from "@/components/NavBars/SideNav";
import Container from "@/components/ui/Container";
import PrivateRoute from "@/providers/PrivateRoute";


export default function layout({ children }) {
    return (
        <div className="">

            <PrivateRoute>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <Navbar />
                        <Container>
                            {children}
                        </Container>
                    </div>
                    <SideNav />
                </div>

            </PrivateRoute>

        </div>
    )
}