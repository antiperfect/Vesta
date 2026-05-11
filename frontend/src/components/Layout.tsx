import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen text-foreground font-body overflow-x-hidden selection:bg-secondary/30 selection:text-secondary flex flex-col">
      {/* Background Image Container */}
      <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
        {/* We removed the dark overlays to let the bright golden hour image shine through */}
        <div className="absolute inset-0 bg-white/30 z-10 mix-blend-overlay" /> 
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-white/20 z-10" />
        <img 
          src="/bg.png" 
          alt="Golden Hour Wheat Field" 
          className="w-full h-full object-cover opacity-90 scale-105"
        />
      </div>

      <Navbar />
      
      <main className="flex-grow pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  )
}
