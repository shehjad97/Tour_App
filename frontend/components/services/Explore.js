'use client'
import { useGetServicesQuery } from "@/redux/feature/Services/servicesApi";
// import tours from "@/assets/data/tours";
import Container from "../ui/Container";
import { PrimaryLoading } from "../ui/Loading";
import { Subtitle, Title } from "../ui/Title";
import Card from "./Card";

const Explore = () => {
    const { data, error, isLoading } = useGetServicesQuery(8)

    if (error) return <>
        <div className="min-h-[90vh] flex justify-center items-center">
            data is not loaded
        </div>
    </>

    return (
        <Container>
            <div className="">
                <Subtitle >
                    Explore
                </Subtitle>
                <Title>
                    Our Feature Tours
                </Title>
            </div>
            {isLoading ? <PrimaryLoading /> : <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                {data?.data?.map(tour => <Card key={tour.id} tour={tour} />)}
            </div>}
        </Container>
    );
};

export default Explore;