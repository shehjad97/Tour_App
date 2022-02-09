'use client'
import Search from "@/components/Hero/Search";
import Card from "@/components/services/Card";
import Container from "@/components/ui/Container";
import { PrimaryLoading } from "@/components/ui/Loading";
import { useSearchServicesQuery } from "@/redux/feature/Services/servicesApi";
import { useSelector } from "react-redux";

const page = () => {
    const { city, distance } = useSelector(state => state.search)
    console.log(city, distance);



    const { data: searchData, isLoading } = useSearchServicesQuery({ city, distance });
    return (
        <div className="">
            <div className="">
                <div className="tour_cover">
                    <h1 className="text-[2.5rem] text-white">Search result</h1>
                </div>
                <Container className="my-20">
                    <Search />
                    <div className="mt-10">
                        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                            {isLoading ? <div className=" flex items-center justify-center">
                                <PrimaryLoading />
                            </div> :
                                <>
                                    {searchData?.data?.map(tour => <Card key={tour.id} tour={tour} />)}
                                </>
                            }
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default page;