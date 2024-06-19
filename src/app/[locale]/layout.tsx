import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
    title: {
        template: "%s - Time Tracking",
        default: "Time Tracking",
    },
    description: "Designed By Time Tracking",
    keywords: [
        "Web development",
        "ios app development",
        "android app development",
        "wordpress development",
        "software development",
        "Time Tracking"
    ],
}
const inter = Inter({ subsets: ["latin"] })

import { AOSInit } from "@/app/wrappers/aos"
import Header from "@/components/header/page"

interface RootLayoutProps {
    children: React.ReactNode
    params: { locale: string }
}


const RootLayout = ({ children, params: { locale } }: RootLayoutProps) => {


    const t = useTranslations("Home")

    const localeHeader = {
        author: t('author'),
        home: t(`home`),
        login: t(`login`),
        signup: t(`signup`),
        contact: t(`contact`),
    }
    const localeFooter = {
        portfolio: t(`portfolio`),
        about: t(`about`),
        contact: t(`contact`),
        author: t('author'),
    }


    return (
        <html lang={locale}>
            <AOSInit />
            <body className={`${inter.className} bg-white text-black`}>
                <Header localeHeader={localeHeader} />
                <div className="pt-[50px]">
                    {children}
                </div>
            </body>
        </html>
    )
}

export default RootLayout