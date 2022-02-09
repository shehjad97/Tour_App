'use client'
import { PrimaryLoading } from '@/components/ui/Loading';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { auth, useFirebaseInfo } from "./FirebaseProvaider";

const PrivateRoute = ({ children }) => {
    const router = useRouter();

    // const dispatch = useDispatch()
    // const pathname = usePathname()
    const { loading, user } = useFirebaseInfo()
    // dispatch(redirectToRight(pathname))
    const [customLoading, setCustomLoading] = useState(true)
    useEffect(() => {
        setCustomLoading(true)
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (!user) {
                setCustomLoading(false)
                router.push("/login");
            }
        });
        return () => unsubscribe();
    }, []);
    setTimeout(() => {
        setCustomLoading(false)
    }, 700)

    if (loading || customLoading || !user) return <>
        <PrimaryLoading />
    </>
    if (!loading && !customLoading && !user) { router.push("/login"); }
    return <> {children} </>
};

export default PrivateRoute;