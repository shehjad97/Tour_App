'use client'
import { useFirebaseInfo } from "@/providers/FirebaseProvaider";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { BiUser } from "react-icons/bi";
import Swal from "sweetalert2";
import NavAddToCart from "../AddToCart/NavAddToCart";
import Container from "../ui/Container";

const MainNav = () => {

    const { user, logout } = useFirebaseInfo()
    const pathname = usePathname()
    const navItems =
        <>
            <li><Link className={` ${pathname === "/" ? 'text-gray-900' : ''} text-gray-400 hover:text-gray-900 duration-300`} href='/'>Home</Link></li>
            {/* <li><Link className={` ${pathname === "/about" ? 'text-gray-900' : ''}text-gray-400 hover:text-gray-900 duration-300`} href={'/about'}>About</Link></li> */}
            <li><Link className={` ${pathname === "/tours" ? 'text-gray-900' : ''} text-gray-400 hover:text-gray-900 duration-300`} href={'/tours'}>Tours</Link></li>
            {/* <li><Link className={` ${pathname === "/dashboard" ? 'text-gray-900' : ''} text-gray-400 hover:text-gray-900 duration-300`} href={'/dashboard'}>dashboard</Link></li> */}
        </>

    const handleLLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to logout !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: `Logout`
        }).then((result) => {
            if (result.isConfirmed) {
                logout().then(re => {
                    Swal.fire({
                        icon: 'success',
                        title: `LogOut SuccessFull`,
                        showConfirmButton: false, timer: 1500
                    })
                    localStorage.removeItem('userId')
                })
            } else { }
        })
    }

    return (
        <div className="sticky top-0  shadow-md z-50 bg-base-100 ">
            <Container className=" ">
                <div className="navbar ">
                    <div className="navbar-start" >
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52 list-none ">
                                {navItems}
                            </ul>
                        </div>
                        <a href='/' className="btn btn-ghost  text-xl font-bold ">Tour App</a>
                    </div>
                    <div className=" w-full flex justify-end  gap-8 ">
                        <div className="hidden lg:flex gap-3 list-none ">
                            {navItems}
                        </div>

                        <div className="">
                            {user &&
                                <NavAddToCart />}
                            <div className="dropdown ">
                                <label tabIndex={1}
                                    className=" transition-colors md:hover:bg-gray-50">
                                    <div className={`flex items-center ${user?.uid && "btn btn-ghost "} `}>
                                        <BiUser className='text-xl ' />
                                        {user?.uid ?
                                            <div className="text-sm ">{user.displayName}</div> :
                                            <div className=''><Link href='/login'>Login</Link></div>
                                        }
                                    </div>
                                </label>
                                {user?.uid &&
                                    <ul tabIndex={1} className="menu menu-compact dropdown-content w-28 md:w-32 lg:w-32  shadow bg-base-100 p-0">
                                        {/* <li><Link href="/dashboard" className=""> Profile</Link></li> */}
                                        <hr />
                                        <li><Link href="/orders">Orders</Link></li>
                                        <hr />
                                        <li
                                            onClick={handleLLogout}
                                        ><p>Logout</p></li>
                                    </ul>}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default MainNav;