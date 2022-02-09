'use client'
import OrderList from "@/components/OrderLists/OrderList";
import Container from "@/components/ui/Container";
import { useGetCartQuery } from "@/redux/feature/cart/cartApi";
import Link from "next/link";



const page = () => {
    const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
    const { data } = useGetCartQuery(userId)
    return (
        <div className="bg-base-100 min-h-[calc(100vh_-_280px)]">
            <Container className="py-5 ">
                <div className="">
                    <p className='text-2xl font-[400] mb-5'>Orders : </p>
                    <div>
                        <div className='w-full m-auto p-4 border rounded-lg bg-white  '>
                            <div className='my-3 p-2 grid md:grid-cols-4  grid-cols-2 items-center justify-between cursor-pointer'>
                                <span>items</span>
                                <span className='hidden md:grid'>price</span>
                                <span className='hidden md:grid'>total</span>
                                <span className='sm:text-left text-left'>Action</span>
                            </div>
                            {data?.data?.length ? <ul>
                                {data?.data?.map((item, i) =>
                                    <OrderList key={i} item={item} />
                                )}
                            </ul> :
                                <div className='text-center text-2xl font-bold text-gray-500 my-10'>No Orders</div>
                            }
                            <div className="">
                                <li className=' rounded-lg my-3 p-2 grid md:grid-cols-4 grid-cols-2 items-center justify-between cursor-pointer'>
                                    <div className="hidden md:flex items-center space-x-2">
                                        <Link className='btn btn-sm btn-primary mt-2' href={`/tours`}>BacK to Tours</Link>
                                    </div>
                                    <span className='flex lg:-ml-12'></span>
                                    <p className='hidden md:flex '></p>
                                    <div className='flex items-center justify-between'>
                                        <Link href={`/history`}
                                            className='btn btn-sm btn-warning ml-6'>Payment history</Link>
                                    </div>
                                </li>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default page;