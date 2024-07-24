import Footer from "@/components/nl/footer";
import { Navbar }  from "@/components/nl/navbar";

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