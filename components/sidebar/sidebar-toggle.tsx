import { cn } from "@/lib/utils"
import { useSideBarStore } from "@/stores/sidebar-store"
import Image from "next/image"
import { Button } from "../ui/button"
import { X } from "lucide-react"

export const SidebarToggle = () => {
    const { isMinimal, handleChangeSidebar, handleOpenOrClose } = useSideBarStore()
    return (
        <div>
            <div className={cn(
                "cursor-pointer hidden",
                "lg:block"

            )}
                onClick={handleChangeSidebar}
                is-navbar-minimal={isMinimal ? "true" : undefined}
            >
                <Image
                    src={`/icons/menu-${isMinimal ? "open" : "close"}.svg`}
                    width={24}
                    height={24}
                    alt="navbar icon"
                />
            </div>
            <Button
                variant="ghost"
                className="lg:hidden"
                size="icon"
                onClick={handleOpenOrClose}
            >
                <X />
            </Button>
        </div>
    )
}