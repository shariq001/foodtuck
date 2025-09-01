import Header from "@/components/Header";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
        
        <body className="bg-white text-black">
            <Header />
            {
                children
            }
        </body>
        </>
    )
}