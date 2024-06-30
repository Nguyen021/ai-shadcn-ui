import Sidebar from "@/components/sidebar"
import Topbar from "@/components/topbar"
import { cn } from "@/lib/utils"
import React from "react"

const DashboardLayout = (props: {
    children: React.ReactNode
}) => {
    return (<div>
        <header>
            <Topbar />
        </header>
        <main className={cn(
            "lg:bg-gray-950 lg:overflow-hidden lg:pl-80 lg:py-7 [&:has([is-navbar-minimal])]:lg:pl-20"
        )}>
            <Sidebar userLimitCount={0} />
        </main>
        {props.children}
    </div>)
}
export default DashboardLayout