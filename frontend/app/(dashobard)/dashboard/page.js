
import TableTemp from '@/components/ui/TableTemp';
import { userData } from '@/data/data';
import { RiDeleteBin5Line } from 'react-icons/ri';
export default function users() {


    return (
        <TableTemp title="Users">
            <table className="table table-sm ">
                <thead>
                    <tr>
                        <th></th>
                        <td className='hidden md:inline-block'>Name</td>
                        <td >Email</td>
                        <td className='hidden lg:inline-block'>Created</td>
                        <td>Info</td>
                        <td className='hidden md:inline-block w-auto'>Verified</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody className=''>
                    {/* Generating rows dynamically */}
                    {userData.map((user, index) => (
                        <tr key={user._id} className=''>
                            <th>{index + 1}</th>
                            <td className='hidden md:flex flex-col w-full' >{user.name}</td>
                            <td>{user.email}</td>
                            <td className='hidden lg:inline-block' >{user.created}</td>
                            <td> <label className="btn btn-xs">Details</label> </td>
                            <td className='hidden md:inline-block' >{user.verified ? 'Yes' : 'No'}</td>
                            <td> <button className=" text-red-500 hover:text-white duration-300"
                            ><RiDeleteBin5Line /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableTemp>
    )
}