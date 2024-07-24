import Footer from "@/components/tr/footer";
import { Navbar }  from "@/components/tr/navbar";

interface DashboardType {
    children: React.ReactNode;
}

export default async function Dashboard({children}: DashboardType) {

    return (
        <div className="">
            <Navbar/>
            {children}
            <Footer />
        </div>
    )
}