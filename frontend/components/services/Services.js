'use client'
import { BiSolidCustomize } from "react-icons/bi";
import { FaPlaneDeparture } from 'react-icons/fa';
import { TiWeatherPartlySunny } from "react-icons/ti";
import Container from "../ui/Container";
import { Subtitle, Title } from "../ui/Title";



const Services = () => {
    const servicerData = [
        {
            title: "Weather Calculator",
            description: "Meteorological magic in compact calculations. ",
            icon: <TiWeatherPartlySunny />
        },
        {
            title: "Best Tour Guide",
            description: "Expert storyteller, unforgettable experiences guaranteed.",
            icon: <FaPlaneDeparture />
        },
        {
            title: "Customize Your Trip",
            description: "Tailor-made adventures, your dreams, our execution.",
            icon: <BiSolidCustomize />
        }
    ]
    return (
        <Container className='my-7'>
            <div className="grid grid-cols-9 gap-4 duration-300">
                <div className="col-span-9 md:col-span-9 lg:col-span-3">
                    <Subtitle className="font-light inline-block">
                        Our Services
                    </Subtitle>
                    <Title className='text-3xl mt-4 font-semibold'>
                        We offer our <br />
                        best services
                    </Title>
                </div>
                {servicerData.map((service, i) => (
                    <div key={i} className="col-span-9 md:col-span-3 lg:col-span-2 flex flex-col gap-2 border-r border-b py-4 border-orange-200 shadow-sm text-xs ">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#faa935]">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        <p className="">{service.description}</p>
                    </div>

                ))
                }

            </div >
        </Container >


    );
};

export default Services;