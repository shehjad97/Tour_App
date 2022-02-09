'use client'
import Booking from "@/components/Booking/Booking";
import Comment from "@/components/Comment/Comment";
import Container from "@/components/ui/Container";
import { PrimaryLoading } from "@/components/ui/Loading";
import { useSingleServicesQuery } from "@/redux/feature/Services/servicesApi";
import { useGetCommentsByIdQuery } from "@/redux/feature/comment/commentApi";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";


const page = ({ params }) => {

    const { data, isLoading } = useSingleServicesQuery(params.id)
    const { data: comments, isLoading: commentLoading } = useGetCommentsByIdQuery(params.id, {
        refetchOnMountOrArgChange: true,
        pollingInterval: 30000
    })

    if (isLoading) return <>
        <div className="h-screen flex items-center justify-center">
            <PrimaryLoading />
        </div>
    </>
    return (
        <div className="my-10">
            <Container>
                <div className="">
                    <div className=" grid grid-cols-12 relative gap-4">
                        <div className="col-span-12 md:col-span-8">
                            <div className="col-span-12">
                                <figure><Image src={data?.data?.photo}
                                    width={800}
                                    height={500}
                                    alt="Shoes" /></figure>
                                <div className=" border mt-4 p-4">
                                    <h2 className="font-bold my-2">{data?.data?.title}</h2>
                                    <div className="flex  justify-between my-3">
                                        <div className="flex items-center gap-2">
                                            <p><GrLocation /></p>
                                            <p>{data?.data?.city}</p>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <div className="">
                                                <AiOutlineStar className="text-yellow-500" /></div>
                                            {!comments?.data?.length > 0 ? <p>No reviews</p> : <p> {comments?.data[0].averageRating?.toFixed(2)}  ({comments?.data?.length}) </p>}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between ">
                                        <p className="text-sm"><span className="text-orange-400">{data?.data?.price}$ </span> /per person</p>
                                        {/* <button className="btn btn-warning btn-xs">book Now</button> */}
                                    </div>
                                    <div className="my-4">
                                        <p className="text-xl font-bold">Description</p>
                                        <p>{data?.data?.desc}</p>
                                    </div>
                                </div>
                                {commentLoading ?
                                    <div className="">
                                        <PrimaryLoading />
                                    </div>
                                    : <div className="mt-6">
                                        <div className="mb-3">
                                            {/* add COMMENT */}
                                            <Comment service={data?.data} />
                                        </div>
                                        {/* show comments */}
                                        {comments?.data?.length > 0 ? <div className="px-4 ">
                                            <p className="font-bold ">Comments</p>
                                            {comments?.data?.map((review, i) => (
                                                <div key={i} className=" my-2">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-4">
                                                            <div className=" avatar">
                                                                <div className="w-10 rounded-full">
                                                                    <Image src={review?.photo}
                                                                        width={40}
                                                                        height={40}
                                                                        alt="img"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <p className="font-bold">{review?.displayName}</p>
                                                                <p>{review?.comment}</p>
                                                            </div>
                                                        </div>
                                                        <div className="">
                                                            <div className="flex items-center gap-2">
                                                                <div className="">
                                                                    <AiOutlineStar className="text-yellow-500" /></div>
                                                                <p>{review?.rating}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            ))}
                                        </div>
                                            : <div className="px-4 pb-4">
                                                <p className="font-bold ">No Comments</p>
                                            </div>
                                        }
                                    </div>}
                            </div>
                        </div>
                        {/* // booking part  */}
                        <Booking tour={data?.data} comments={comments} />
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default page;