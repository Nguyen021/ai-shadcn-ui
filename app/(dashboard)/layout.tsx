import UpgradeProSub from "@/components/dashboard/upgrade-prosub"
import Sidebar from "@/components/sidebar"
import MobileSidebar from "@/components/sidebar/mobile-sidebar"
import Topbar from "@/components/topbar"
import { cn } from "@/lib/utils"
import React from "react"

const DashboardLayout = (props: {
    children: React.ReactNode
}) => {
    const isProPlan = false
    const userLimitCount = 0
    return (<div>
        <header>
            <Topbar />
        </header>
        <main className="lg:bg-gray-950 lg:overflow-hidden lg:pl-80 [&:has([is-navbar-minimal])]:lg:pl-20 lg:pr-7 lg:py-7"
        >
            <Sidebar
                userLimitCount={userLimitCount}
                isProPlan={isProPlan}
                className={cn(
                    "fixed left-0 z-20 w-80 hidden [&:has([is-navbar-minimal]):w-fit",
                    "lg:block"
                )}
            />
            <MobileSidebar
                userLimitCount={userLimitCount}
                isProPlan={isProPlan}
            />
            <UpgradeProSub isProPlan={isProPlan} />
            <div className={cn(
                "bg-background h-[calc(100vh-56px)]",
                "lg:rounded-2xl lg:p-7"
            )}>
                {props.children}
            </div>
        </main>

    </div>)
}
export default DashboardLayout