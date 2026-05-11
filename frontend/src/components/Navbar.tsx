import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Leaf, Activity, Info, Sun } from 'lucide-react'
import { GlassButton } from '@/components/ui/apple-tahoe-liquid-glass-button'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Home', href: '/', icon: Sun },
    { name: 'Predict', href: '/predict', icon: Activity },
    { name: 'About', href: '/about', icon: Info },
]

export const Navbar = () => {
    const [menuState, setMenuState] = React.useState(false)
    const location = useLocation()

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none">
            <nav
                data-state={menuState ? 'active' : 'inactive'}
                className="pointer-events-auto w-full max-w-4xl glass-pill rounded-full transition-all duration-300"
            >
                <div className="px-6 py-3 transition-all duration-300">
                    <div className="relative flex items-center justify-between gap-6 lg:gap-0">
                        {/* Logo Area */}
                        <Link
                            to="/"
                            aria-label="home"
                            className="flex items-center space-x-2 group">
                            <Leaf className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                            <span className="font-heading text-xl font-semibold tracking-tight text-foreground">Vesta</span>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMenuState(!menuState)}
                            aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                            className="relative z-20 block cursor-pointer p-2 lg:hidden text-primary">
                            <Menu className={cn("absolute inset-0 m-auto size-6 duration-200", menuState ? "rotate-180 scale-0 opacity-0" : "")} />
                            <X className={cn("absolute inset-0 m-auto size-6 duration-200", menuState ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0")} />
                        </button>

                        {/* Desktop Navigation Links */}
                        <div className="hidden lg:flex items-center justify-center flex-1">
                            <ul className="flex gap-8 text-sm font-medium">
                                {menuItems.map((item, index) => {
                                    const isActive = location.pathname === item.href;
                                    return (
                                        <li key={index}>
                                            <Link
                                                to={item.href}
                                                className={cn(
                                                    "flex items-center gap-2 duration-150 py-1 transition-colors relative group",
                                                    isActive 
                                                        ? "text-primary font-semibold" 
                                                        : "text-muted-foreground hover:text-foreground"
                                                )}>
                                                <span>{item.name}</span>
                                                {/* Animated underline indicator */}
                                                {isActive && (
                                                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full" />
                                                )}
                                                {!isActive && (
                                                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                                )}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Desktop CTA / Mobile Menu Container */}
                        <div className={cn(
                            "absolute top-full left-0 mt-4 w-full flex-wrap items-center justify-end space-y-6 rounded-3xl glass-card p-6 shadow-xl lg:static lg:mt-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-filter-none",
                            menuState ? "block" : "hidden lg:flex"
                        )}>
                            <div className="lg:hidden w-full">
                                <ul className="space-y-4 text-base font-medium">
                                    {menuItems.map((item, index) => {
                                        const isActive = location.pathname === item.href;
                                        return (
                                            <li key={index}>
                                                <Link
                                                    to={item.href}
                                                    onClick={() => setMenuState(false)}
                                                    className={cn(
                                                        "flex items-center gap-3 duration-150 p-2 rounded-xl",
                                                        isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-black/5 hover:text-foreground"
                                                    )}>
                                                    <item.icon className="w-5 h-5" />
                                                    <span>{item.name}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col lg:w-auto">
                                <GlassButton
                                    size="sm"
                                    onClick={() => window.location.href = '#/predict'}
                                    contentClassName="text-primary font-semibold"
                                >
                                    Consult Vesta
                                </GlassButton>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
