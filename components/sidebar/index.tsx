"use client"
import { cn } from "@/lib/utils";
import { useSideBarStore } from "@/stores/sidebar-store";
import React from "react";
import Logo from "../logo";
import { SidebarToggle } from "./sidebar-toggle";
import { UserButton, useUser } from "@clerk/nextjs";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "../ui/progress";
import ThemeToggle from "./themetoggle";
import SubcriptionButton from "../subcription-button";
import Navbar from "./navbar";

interface SidebarProps {
    className?: string;
    isProPlan?: boolean;
    userLimitCount: number;
}

const Sidebar: React.FC<SidebarProps> = ({
    className,
    isProPlan,
    userLimitCount
}) => {

    const { isMinimal } = useSideBarStore()
    const { user } = useUser()
    return (
        <div className={cn(
            "text-white",
            className
        )}>
            <div className="h-20 pl-7 pr-6">
                <div className="flex items-center justify-between w-full">
                    {
                        !isMinimal && <Logo />
                    }
                    <SidebarToggle />
                </div>
            </div>
            <div className="grow overflow-y-auto scroll-smooth scrollbar-none">
                <Navbar />
            </div>
            <div className={cn(
                "fixed bottom-8 left-4 right-4",
                "lg:left-7 lg:right-auto",
                isMinimal && "lg:left-3"
            )}>
                <div className="mb-4 p-4 rounded-lg bg-gray-900">
                    <div className="mb-4 flex items-center">
                        <UserButton afterSignOutUrl="/" />
                        {
                            isMinimal &&
                            <span className="text-sm ml-4">
                                {user?.emailAddresses?.[0].emailAddress}
                            </span>
                        }

                    </div>
                    {
                        !isProPlan &&
                        <div className="mb-4">
                            <div className="text-center mb-2 text-muted-foreground font-semibold">
                                {userLimitCount}/{MAX_FREE_COUNTS} Free generations
                            </div>
                            <Progress
                                value={(userLimitCount / MAX_FREE_COUNTS) * 100}
                                className="bg-gray-950 h-3"
                                indicatorClassName="gradient-btn"
                            />
                        </div>
                    }
                    <SubcriptionButton isPro={isProPlan} />
                </div>
                <ThemeToggle />
            </div>
        </div>
    )
}
export default Sidebar