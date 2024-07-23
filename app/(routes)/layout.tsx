import '@/components/ui/emblaCorousel/css/base.css'
import { Navbar }  from "@/components/navbar";

interface DashboardType {
    children: React.ReactNode;
}

export default async function Dashboard({children}: DashboardType) {

    return (
        <div className="px-12">
            <Navbar/>
            {children}
        </div>
    )
}