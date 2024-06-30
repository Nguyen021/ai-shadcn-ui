"use client"
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useSideBarStore } from "@/stores/sidebar-store";

export default function Topbar() {
    const { handleOpenOrClose } = useSideBarStore();
    return (<div className={cn(
        "flex items-center p-4 justify-between sticky top-0 z-30",
        "lg:hidden"
    )} >
        <Logo />
        <Button
            variant="ghost"
            size="icon"
            onClick={handleOpenOrClose}
        >
            <Menu />
        </Button>
    </div>)
}