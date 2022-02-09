import Link from 'next/link';

const HistoryList = ({ item }) => {
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


            <span className='hidden md:flex'>
                {item?.total}

            </span>
            <span className='hidden md:flex'>
                {item.paymentID}

            </span>

        </li>
    );
};

export default HistoryList;