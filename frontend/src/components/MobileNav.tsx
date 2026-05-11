import { Link, useLocation } from "react-router-dom"
import { Leaf, Activity, Info } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/", icon: Leaf },
  { name: "Predict", href: "/predict", icon: Activity },
  { name: "About", href: "/about", icon: Info },
]

export function MobileNav() {
  const location = useLocation()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden pb-safe pt-2 px-4 bg-background/80 backdrop-blur-2xl border-t border-primary/20">
      <div className="flex items-center justify-around pb-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all duration-300 relative",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive && (
                <div className="absolute inset-0 bg-primary/10 rounded-xl -z-10" />
              )}
              <item.icon className={cn("w-6 h-6 mb-1", isActive && "drop-shadow-[0_0_8px_rgba(78,222,163,0.5)]")} />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
