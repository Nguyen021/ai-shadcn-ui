import { cn } from "@/lib/utils";
import { BrainCircuit, Scale } from "lucide-react";
import { Poppins } from "next/font/google";

interface LogoProps {
    className?: string;
}

const poppins = Poppins({ weight: "700", subsets: ["latin"] })

const Logo: React.FC<LogoProps> = ({ className }) => {
    return (<div className={cn("flex items-center",
        className
    )}>
        <Scale color="#a18cd1" size={40} />
        <span className={cn("ml-2 text-3xl font-bold",
            poppins.className
        )}>
            Libra
        </span>
    </div>)
}

export default Logo