import Footer from "@/components/nl/footer";
import { Navbar }  from "@/components/nl/navbar";

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