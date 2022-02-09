'use client'
import { sateData } from "@/redux/feature/Services/searchSlice";
import { usePathname, useRouter } from 'next/navigation';
import { BiLocationPlus } from "react-icons/bi";
import { BsPeopleFill } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { useDispatch } from "react-redux";
import { PrimaryButton } from "../ui/Buttons";

const Search = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const pathname = usePathname()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const destination = form.destination.value
        const location = form.location.value
        // const maxPeople = form.maxPeople.value
        const data = { location, destination }
        dispatch(sateData({ city: location, distance: destination }))
        // if (!pathname === "/search") {
        //     return
        // }
        router.push("/search")
    }
    return (
        <div className="bg-white border max-w-[600px] py-4 md:py-1 p-2 rounded-3xl mb-3 shadow-xl mt-5 md:mt-0 duration-300">
            <form onSubmit={handleSubmit}>
                <div className=" flex flex-col md:flex-row justify-around items-center w-full gap-4">
                    <div className="flex  items-center gap-x-3 border-r">
                        <BiLocationPlus />
                        <div className="flex flex-row gap-x-3 md:flex-col md:gap-x-0">
                            <p>Location</p>
                            <input
                                name="location"

                                defaultValue={"Indonesia"}
                                type="text" placeholder="place " className="md:w-[100px] outline-none " />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 border-r">
                        <BiLocationPlus />
                        <div className="flex flex-row gap-x-3 md:gap-x-0 md:flex-col">
                            <p>Destination</p>
                            <input
                                name="destination"
                                type="text" placeholder="destination" className="md:w-[100px] outline-none " />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <BsPeopleFill className="text-xl" />
                        <div className="flex flex-row gap-x-3 md:gap-x-0 md:flex-col">
                            <p>Max people</p>
                            <input
                                name="maxPeople"
                                required
                                defaultValue={"2"}
                                type="number" placeholder="Peoples" className="md:w-[100px] outline-none " />
                        </div>
                    </div>
                    <PrimaryButton link="">
                        <FiSearch />
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
};

export default Search;