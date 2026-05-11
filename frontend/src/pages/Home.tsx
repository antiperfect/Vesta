import { ArrowRight, Sprout, CloudRain, Droplets, Shield, Trophy } from 'lucide-react'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { GlassButton } from '@/components/ui/apple-tahoe-liquid-glass-button'
import { Link } from 'react-router-dom'

const transitionVariants = {
    item: {
        hidden: { opacity: 0, filter: 'blur(8px)', y: 12 },
        visible: {
            opacity: 1, filter: 'blur(0px)', y: 0,
            transition: { type: 'spring' as const, bounce: 0.3, duration: 1.5 },
        },
    },
}

export function Home() {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-12 md:pt-24 pb-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex flex-col items-center text-center">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                                    },
                                },
                                ...transitionVariants,
                            }}
                            className="flex flex-col items-center"
                        >
                            <h1 className="max-w-4xl font-heading text-display-lg-mobile md:text-display-lg text-foreground mb-8 leading-tight">
                                Predict Crop Yields with <span className="text-secondary italic">Abundance</span>
                            </h1>
                            
                            <p className="max-w-2xl text-pretty text-body-lg text-muted-foreground mb-12">
                                Empower your agricultural decisions using machine learning. Predict crop yields with high accuracy based on historical data and environmental factors.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <Link to="/predict">
                                    <GlassButton
                                        size="lg"
                                        contentClassName="text-secondary font-semibold text-lg px-4 flex items-center gap-2 tracking-wide"
                                        glassColor="rgba(255, 255, 255, 0.4)"
                                    >
                                        Try the Predictor <ArrowRight className="w-5 h-5" />
                                    </GlassButton>
                                </Link>
                            </div>
                        </AnimatedGroup>
                    </div>
                </div>
            </section>

            {/* Metrics Section */}
            <section className="py-8 pb-16 relative">
                <div className="mx-auto max-w-4xl px-6">
                    <AnimatedGroup
                        variants={{
                            container: { visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } },
                            ...transitionVariants,
                        }}
                    >
                        <div className="glass-pill rounded-full py-4 px-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 border border-white/80 shadow-sm text-center">
                            <div className="flex items-center gap-3">
                                <Trophy className="w-5 h-5 text-secondary" />
                                <span className="font-heading text-lg font-semibold text-foreground">94% Accuracy</span>
                            </div>
                            <div className="hidden md:block w-px h-6 bg-border" />
                            <div className="flex items-center gap-3">
                                <Sprout className="w-5 h-5 text-primary" />
                                <span className="text-muted-foreground">Over <strong className="text-foreground">10,000+</strong> predictions made</span>
                            </div>
                        </div>
                    </AnimatedGroup>
                </div>
            </section>

            {/* Holistic Analysis Section */}
            <section className="py-12 md:py-20 relative">
                <div className="mx-auto max-w-7xl px-6">
                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
                                },
                            },
                            ...transitionVariants,
                        }}
                    >
                        <div className="text-center mb-16">
                            <h2 className="font-heading text-headline-md text-foreground mb-4">Holistic Analysis</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">We look at all the factors that influence your harvest.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <FeatureCard 
                                icon={<Sprout className="w-8 h-8 text-primary" />}
                                title="Crop Analytics"
                                desc="Models tailored for specific crop varieties and seasons."
                            />
                            <FeatureCard 
                                icon={<CloudRain className="w-8 h-8 text-blue-400/80" />}
                                title="Climate Integration"
                                desc="Factoring annual rainfall patterns into yield forecasting."
                            />
                            <FeatureCard 
                                icon={<Droplets className="w-8 h-8 text-secondary" />}
                                title="Soil Nutrition"
                                desc="Optimizing fertilizer usage for maximum output."
                            />
                            <FeatureCard 
                                icon={<Shield className="w-8 h-8 text-rose-300" />}
                                title="Pest Defense"
                                desc="Balancing protection with sustainable farming goals."
                            />
                        </div>
                    </AnimatedGroup>
                </div>
            </section>
        </div>
    )
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="glass-card rounded-[2rem] p-8 hover:-translate-y-2 transition-all duration-500 group">
            <div className="w-16 h-16 rounded-2xl bg-white/60 border border-white/80 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                {icon}
            </div>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>
    )
}
