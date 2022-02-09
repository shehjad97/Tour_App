'use client'
import { useFirebaseInfo } from '@/providers/FirebaseProvaider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiDashboardLine } from 'react-icons/ri';
import Swal from 'sweetalert2';

export default function SideNav() {
    const pathname = usePathname()
    //how can  i add react icons in this array
    const navLinks = [
        {
            name: "Dashboard",
            icon: <RiDashboardLine />,
            link: "/dashboard",
        },
        {
            name: "login",
            icon: <RiDashboardLine />,
            link: "/login",
        },
        // {
        //     name: "Users",
        //     icon: <FiUsers />,
        //     link: "/dashboard/users",
        // },
        // {
        //     name: "Messages",
        //     icon: <BiMessageAltDetail />,
        //     link: "/dashboard/messages",
        // },
        // {
        //     name: "Blogs",
        //     icon: <FaBloggerB />,
        //     link: "/dashboard/blogs",
        // },
        // {
        //     name: "Add Blogs",
        //     icon: <BiMessageSquareAdd />,
        //     link: "/dashboard/blogs/add-blogs",
        // }

    ]

    const { user, logout } = useFirebaseInfo()
    console.log(user);



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
            } else {
            }
        })
    }
    return (
        <div className="drawer-side z-50  border-r border-gray-800">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className=" w-56  h-full  text-base-content bg-black ">
                <div className="py-6 ">
                    <div className="mx-3 py-2 bg-blue-600 cursor-pointer">
                        <p className="text-center text-white text-xl uppercase ">Tour App</p>
                    </div>
                </div>
                {
                    navLinks.map((link, index) => (
                        <li key={index} className="relative">
                            <Link href={link.link}>
                                <span className={`flex items-center gap-2 p-3 text-gray-200  hover:text-gray-100 duration-300 ${pathname === link.link ? "bg-blue-500" : "hover:bg-gray-700"}`}>
                                    {link.icon}
                                    <span>{link.name}</span>
                                </span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className="hidden absolute bottom-0 lg:flex py-4 px-2 justify-between w-full  border-t border-gray-800 bg-black">
                <a href="#" className="flex items-center gap-2 ">
                    <img className="object-cover rounded-full h-7 w-7" src={user?.photoURL} alt="avatar" />
                    <span className="text-sm font-medium text-gray-200">{user?.displayName}</span>
                </a>
                <button
                    onClick={handleLLogout}
                    className="text-gray-500 transition-colors duration-200 rotate-180  rtl:rotate-0 hover:text-blue-500 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                </button>
            </div>

        </div>
    )
}