import Link from "next/link"

export const PrimaryButton = ({ children, className, link }) => {
    return (

        <>
            {link ?
                <Link
                    href={link}
                    className={`btn btn-sm hover:scale-105 hover:bg-[#faa935] duration-300 text-white font-[1.1rem] py-[0.4rem] px-[1.5rem] bg-[#faa935] border-none rounded-[50px] lowercase ${className}`}>
                    {children}
                </Link> :
                <button

                    className="btn btn-sm hover:scale-105 hover:bg-[#faa935] duration-300 text-white font-[1.1rem] py-[0.4rem] px-[1.5rem] bg-[#faa935] border-none rounded-[50px] lowercase">
                    {children}
                </button>
            }
        </>
    )
}

export const SecondaryButton = ({ children, className, link }) => {
    return (

        <>
            {link ?
                <Link
                    href={link}
                    className={`bg-transparent font-[500] border-none ${className}`}>
                    <label className="text-[1.1rem] text-[#0b2727]" > {children}</label>
                </Link> :
                <button
                    disabled
                    className=" btn btn-sm ">
                    {children}
                </button>
            }
        </>
    )
}

export function DrawerButton({ htmlFor, className }) {
    return (
        <label
            htmlFor={htmlFor} className={`drawer-button border-none cursor-pointer lg:hidden  ${className}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg" className={`h-7 w-8 duration-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label >
    )
}