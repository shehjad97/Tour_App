import { DrawerButton } from "../ui/Buttons";
import Container from "../ui/Container";

const Navbar = () => {

    return (
        <div className="sticky top-0 bg-base-100 shadow-md w-full z-10 lg:hidden">
            <Container>
                <div className="flex  items-center py-4 px-1">
                    <div className="w-full " >
                        <p className="text-md md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#e4a9fe] to-[#c2abff] ">Welcome, to your Dashboard </p>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* <div className="hidden lg:flex gap-3 nav text-lg ">
                            {navItems}
                        </div> */}
                        <div className="dropdown dropdown-end z-10">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-7 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                        <DrawerButton htmlFor="my-drawer-2"
                            className='' />
                    </div>
                </div>
            </Container>
        </div>
    );
};
export default Navbar