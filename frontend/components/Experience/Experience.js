import Image from "next/image";
import image from '../../assets/images/experience.png';
import Container from "../ui/Container";
import { Subtitle, Title } from "../ui/Title";

const Experience = () => {
    return (
        <Container className=''>
            <div className="flex flex-col-reverse md:flex-row">
                <div className="max-w-md">
                    <div className="">
                        <Subtitle >
                            Experience
                        </Subtitle>
                        <Title className={''}>
                            With our all experience <br />
                            we will serve you
                        </Title>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laboriosam eius quos eum fugiat, quas similique excepturi deleniti dicta </p>
                    <div className="mt-5 flex justify-between">
                        <div className="flex flex-col items-center">
                            <button className='p-3 rounded-md bg-orange-400 font-extrabold text-white'>12k+</button>
                            <p>Successful Trips</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <button className='p-4 rounded-md bg-orange-400 font-extrabold text-white'>2k+</button>
                            <p>Regular Customer</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <button className='p-4 rounded-md bg-orange-400 font-extrabold text-white'>12</button>
                            <p>year experience</p>
                        </div>
                    </div>
                </div>
                <div className="ml-10 ">
                    <Image src={image} />
                </div>
            </div>
        </Container>
    );
};

export default Experience;