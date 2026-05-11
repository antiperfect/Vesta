import { Link } from 'react-router-dom'
import { GlassButton } from '@/components/ui/apple-tahoe-liquid-glass-button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Leaf } from 'lucide-react'

export function NotFound() {
    return (
        <div className="mx-auto max-w-2xl px-6 py-32 text-center min-h-[70vh] flex flex-col items-center justify-center">
            <AnimatedGroup
                variants={{
                    container: { visible: { transition: { staggerChildren: 0.1 } } },
                    item: {
                        hidden: { opacity: 0, filter: 'blur(8px)', y: 12 },
                        visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { type: 'spring' as const, bounce: 0.3 } }
                    }
                }}
            >
                <div className="w-20 h-20 bg-white/60 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm border border-white/80">
                    <Leaf className="w-10 h-10 text-primary opacity-60" />
                </div>
                <h1 className="font-heading text-6xl text-foreground mb-6">404</h1>
                <h2 className="font-heading text-3xl text-foreground mb-6">Field Not Found</h2>
                <p className="text-body-lg text-muted-foreground mb-12 max-w-md mx-auto">
                    It looks like you've wandered too far from the harvest. The page you are looking for doesn't exist or has been moved.
                </p>
                <Link to="/">
                    <GlassButton size="lg" contentClassName="px-8 font-semibold text-secondary">
                        Return to the Hearth
                    </GlassButton>
                </Link>
            </AnimatedGroup>
        </div>
    )
}
