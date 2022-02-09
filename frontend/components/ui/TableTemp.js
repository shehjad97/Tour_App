import InputTemp from "./InputTemp";
import { Title } from "./Title";


export default function TableTemp({ title, children }) {
    return (
        <div className="mt-4">
            <div className="">
                <Title>{title}</Title>
            </div>
            <div className="mb-6 flex items-center gap-4 w-full justify-between">
                <div className="md:w-[300px]">
                    <InputTemp refId='Name' filed='Search' />
                </div>
                <div className="">
                    <label className='px-3 border py-1'>sort</label>
                    <label className='px-3 border py-1'>Filter</label>
                </div>

            </div>
            <div className="">
                {children}
            </div>
        </div>
    )
}