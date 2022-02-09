'use client'
import { useSingleServicesQuery } from "@/redux/feature/Services/servicesApi";
import { useDeleteCartMutation } from "@/redux/feature/cart/cartApi";
import { setCart } from "@/redux/feature/cart/cartSlice";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import PaymentModal from "../Payment/PaymentModal";
import { PrimaryLoading } from "../ui/Loading";

const OrderList = ({ item }) => {

    const { data: services, isLoading } = useSingleServicesQuery(item?.tourId)
    const { product } = useSelector(state => state.cart)
    const [deleteCart, isSuccess] = useDeleteCartMutation()
    if (isLoading) {
        return <><PrimaryLoading /> </>
    }

    const dispatch = useDispatch()


    // console.log(services);
    return (
        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 grid-cols-2 items-center justify-between cursor-pointer'>

            <Link href={`/tours/${item?.tourId}`} className="flex items-center space-x-2">
                <div className="avatar">
                    <div className="mask mask-squircle w-8 h-8">
                        <img src={item?.tourPic} alt="Avatar" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{item?.tourName}
                    </div>
                    <div className="text-sm opacity-50">{item?.destination} km {' '}(people :{item?.person})</div>
                </div>
            </Link>

            <p className='hidden md:flex'>{services.data.price} </p>
            <span className='hidden md:flex'>
                {services.data.price * item?.person}
            </span>
            <div className='flex  items-center justify-between'>
                <label
                    onClick={() => deleteCart(item?._id)}
                    htmlFor="confirmation-modal" className="btn btn-warning btn-xs ml-3 lg:ml-0"> x</label>
                <label
                    onClick={() => dispatch(setCart(item))}
                    htmlFor="my-modal-3" className='btn btn-sm btn-warning'>PAY</label>
                <BsThreeDotsVertical />
            </div>

            {product &&
                <PaymentModal product={product} />
            }
        </li>
    );
};

export default OrderList;