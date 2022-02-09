import Image from 'next/image';
import heroImage from "../../assets/images/hero-img01.jpg";
import heroImage2 from "../../assets/images/hero-img02.jpg";
import worldImage from "../../assets/images/world.png";
import Container from '../ui/Container';
import { Subtitle, Title } from '../ui/Title';
import Search from './Search';

const HeroMain = () => {
    return (
        <Container className="min-h-[80vh] justify-center">
            <div className="flex justify-center">
                <div className="md:flex gap-x-3 ">
                    <div className="md:w-1/2  items-center my-10">
                        <div className="flex items-center mb-4">
                            <div className="">
                                <Subtitle className="font-light">
                                    Know Before You go
                                </Subtitle>
                            </div>
                            <Image className="w-10 h-10" src={worldImage} />
                        </div>
                        <Title className='text-3xl md:text-2xl lg:text-4xl mb-4 duration-300 font-extrabold'>
                            Traveling opens the door to creating {''}
                            <span className="text-orange-400"> Memories</span>
                        </Title>
                        <p>
                            Endless horizons, laughter-filled adventures, and heartwarming connections—travel unveils a treasure trove of memories.
                        </p>
                    </div>
                    <div className="md:w-1/2 h-[350px] flex items-center">
                        <div className="grid grid-cols-6 gap-x-2 ">
                            <Image src={heroImage} className="col-span-2 h-full " />
                            <Image src={heroImage2} className="col-span-2  h-full mt-4 " />
                            <Image src={heroImage} className="col-span-2  h-full mt-8" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <Search />
            </div>
        </Container>
    );
};

export default HeroMain;