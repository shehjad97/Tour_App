'use client'

import { useGetCartQuery } from "@/redux/feature/cart/cartApi";

const Drawer = () => {
    const { data, isLoading } = useGetCartQuery(localStorage.getItem('userId'))
    console.log(data);
    return (
        <div>
            commoin s
        </div>
    );
};

export default Drawer;