'use client'
import { usePostCartMutation } from "@/redux/feature/cart/cartApi";
import { useSingleUserQuery } from "@/redux/feature/users/usersApi";
import { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";

const Booking = ({ tour, comments }) => {
    const [person, setPerson] = useState(1)
    const { data } = useSingleUserQuery(localStorage.getItem('userId'))
    const [postCart, { isSuccess, isLoading }] = usePostCartMutation()

    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10))
    let price = tour?.price * person
    let services = tour?.price * 10 / 100 * person
    let total = (tour?.price + services) * person

    const handleBooking = (e) => {
        e.preventDefault()

        // Check if the selected date is less than the present day
        const selectedDateObj = new Date(selectedDate);
        const presentDate = new Date();
        if (selectedDateObj < presentDate) {
            alert("Selected date cannot be less than the present day.");
            return;
        }
        const form = e.target
        const name = form.name.value
        const phone = form.phone.value
        const date = form.date.value
        const bookingData = {
            userName: data.data.name,
            userEmail: data.data.email,
            userId: data.data._id,
            tourId: tour?._id,
            tourPic: tour.photo,
            tourName: tour?.title,
            destination: tour?.distance,
            name, phone, date, person, price, services, total
        };
        postCart(bookingData)
    }

    return (
        <div className="col-span-12 md:col-span-4 sticky top-16 max-h-[460px] ">
            <form onSubmit={handleBooking} className="p-4 border rounded-md shadow-sm">
                <div className="flex items-center justify-between ">
                    <p className="text-md"><span className="text-orange-400 text-2xl font-bold">{tour?.price}$ </span> /per person</p>
                    <div className="flex gap-2 items-center">
                        <div className="">
                            <AiOutlineStar className="text-yellow-500" /></div>
                        {!comments?.data?.length ? <p>No reviews</p> : <p>{comments?.data[0].averageRating?.toFixed(2)} ({comments?.data?.length}) </p>}
                    </div>
                </div>
                <hr className="my-5" />
                <div className="">
                    <h1 className="text-md font-bold">
                        Information
                    </h1>
                    <div className="border p-4 flex flex-col gap-4 mt-2">
                        <input required maxLength={30} placeholder="Name" name="name" type="text" className="w-full outline-none border-b" defaultValue={data?.data?.name} />
                        <input required maxLength={30} placeholder="Phone Number" name="phone" type="number" className="w-full outline-none border-b" />
                        <div className="flex gap-2">
                            <input
                                onChange={(e) => setSelectedDate(e.target.value)}
                                required placeholder="Date" name="date" type="date" className="w-full outline-none border-b" />
                            <input
                                onChange={(e) => setPerson(e.target.value)}
                                required maxLength={3} placeholder="Person" name="person" type="number" className="w-full outline-none border-b" />
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <span className="text-orange-400  font-bold">$  {tour?.price}</span>
                                * <span className="text-orange-400  font-bold">{person} person </span>
                            </div>
                            <span className="text-orange-400  ">{price.toFixed(2)}$ </span>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <p>Services charge</p>
                            </div>
                            <span className="text-orange-400  ">{services.toFixed(2)}$ </span>
                        </div>
                        <hr />
                        <div className="flex justify-between">

                            <div className="flex gap-2">
                                <p>Total</p>
                            </div>
                            <span className="text-orange-400 ">{total.toFixed(2)}$ </span>
                        </div>
                    </div>
                </div>
                <div className="duration-300">
                    {person > 0 ?
                        <button
                            className="btn btn-warning w-full mt-4 btn-sm">
                            {isLoading ? "Loading..." :
                                ' Add to Cart Now'}

                        </button>
                        :
                        <button
                            className="btn btn-warning w-full mt-4 btn-sm" disabled>book Now</button>
                    }
                </div>
            </form>

        </div>
    );
};

export default Booking;