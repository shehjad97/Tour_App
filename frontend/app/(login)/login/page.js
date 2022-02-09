'use client'
import AlertMessage from "@/Hooks/Alert";
import FormTemplate from "@/components/ui/FormTemplate";
import { useFirebaseInfo } from "@/providers/FirebaseProvaider";
import { usePostUsersMutation } from "@/redux/feature/users/usersApi";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function login() {


    const router = useRouter()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { GoogleLogin, loginEmail } = useFirebaseInfo()

    const [postUsers, { isError, isLoading, isSuccess }] = usePostUsersMutation()


    const { successMessage, errorMessage } = AlertMessage()
    const getUserCredentials = () => {
        const user = typeof window !== 'undefined' && localStorage ? localStorage.getItem('user') : null
        return user ? JSON.parse(user) : null
    }
    const saveUserCredentials = (email, password) => {
        const user = { email, password }
        typeof window !== 'undefined' && localStorage ? localStorage.setItem('user', JSON.stringify(user)) : null
    }
    const removerUserCredentials = () => {
        typeof window !== 'undefined' && localStorage ? localStorage.removeItem('user') : null
    }
    const [saveInfo, satSaveInfo] = useState(getUserCredentials() ? true : false)
    const user = getUserCredentials()
    const email = user?.email
    const password = user?.password

    const onSubmit = (data) => {
        if (typeof window !== 'undefined' && localStorage) {
            if (saveInfo) { saveUserCredentials(data.email, data.password) }
            else { removerUserCredentials() }
        }
        const email = data.email
        const password = data.password
        loginEmail(email, password)
            .then((res) => {
                const addedUser = {
                    name: res.user.displayName,
                    email: res.user.email,
                    pic: res.user.photoURL,
                    uid: res.user.uid,
                    verified: res.user.emailVerified,
                };
                addToDb(addedUser)
            }).catch(error => errorMessage(error.message))
    }
    // google login 
    const handleGoogleLogin = () => {
        GoogleLogin()
            .then((res) => {
                const addedUser = {
                    name: res.user.displayName,
                    email: res.user.email,
                    pic: res.user.photoURL,
                    uid: res.user.uid,
                    verified: res.user.emailVerified,
                };
                addToDb(addedUser)

            }).catch(error => errorMessage(error.message))
    }
    const addToDb = async (user) => {
        const data = await postUsers(user)
        console.log(data);
        if (data.data.success) {
            localStorage.setItem('userId', data.data.data._id)
            successMessage("account login successfully")
            reset()
            router.push("/");
        }
    }

    const tableData = [
        { label: 'email', name: 'email', type: 'email', placeholder: 'email', def: email, error: errors.email },
        { label: 'password', name: 'password', type: 'password', placeholder: 'password', def: password, error: errors.password }
    ]

    //redirectToRight path



    return (
        <div className="flex justify-center items-center h-screen">
            <div className=" w-full max-w-xs p-4  rounded-lg  shadow-md backdrop-blur-lg ">
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <p className="text-2xl font-medium  text-center">
                            Sign in
                        </p>
                        {tableData.map((data, index) =>
                            <FormTemplate
                                key={index}
                                data={data}
                                register={register}
                            />
                        )}
                        <div className="flex  items-center justify-between">
                            <label
                                onChange={() => satSaveInfo(!saveInfo)}
                                className="label cursor-pointer">
                                <input type="checkbox"
                                    defaultChecked={user ? true : false}

                                    className="checkbox checkbox-sm " />
                                <span className="label-text pl-2">Remember me</span>

                            </label>

                            <a href="/" className="flex items-start text-sm text-gray-600  hover:underline">Forget Password?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                    </form>
                    <div className="">
                        <div className="divider">OR</div>
                        <button
                            onClick={handleGoogleLogin}
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login with Google</button>
                        <div className="text-sm mt-2 font-medium text-gray-500 flex justify-between">
                            Not registered? <Link href='/resister' className="text-blue-700 hover:underline ">
                                Resister
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}