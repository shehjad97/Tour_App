import FirebaseProvider from '@/providers/FirebaseProvaider';
import ReduxProvider from '@/providers/ReduxProvider';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
const inter = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
    title: 'Make My Tour',
    description: 'Tour is love, Tour is life',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxProvider>
                    <FirebaseProvider>
                        {children}
                    </FirebaseProvider>
                </ReduxProvider>
            </body>
        </html>
    )
}
