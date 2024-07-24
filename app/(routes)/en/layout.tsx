import Footer from "@/components/en/footer";
import { Navbar }  from "@/components/en/navbar";

interface DashboardType {
    children: React.ReactNode;
}

export default async function Dashboard({children}: DashboardType) {

    return (
        <div className="px-12">
            <Navbar/>
            {children}
            <Footer />
        </div>
    )
}