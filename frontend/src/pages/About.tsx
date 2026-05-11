import { AnimatedGroup } from '@/components/ui/animated-group'
import { BrainCircuit, Database, ExternalLink, Target, Users, BarChart3 } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
)

const data = [
  { name: 'Kharif', yield: 4500 },
  { name: 'Rabi', yield: 3800 },
  { name: 'Summer', yield: 2900 },
  { name: 'Whole Year', yield: 5200 },
  { name: 'Autumn', yield: 3100 },
  { name: 'Winter', yield: 3400 }
];

const transitionVariants = {
    item: {
        hidden: { opacity: 0, filter: 'blur(8px)', y: 12 },
        visible: {
            opacity: 1, filter: 'blur(0px)', y: 0,
            transition: { type: 'spring' as const, bounce: 0.3, duration: 1.5 },
        },
    },
}

export function About() {
    return (
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
            <AnimatedGroup
                variants={{
                    container: { visible: { transition: { staggerChildren: 0.1 } } },
                    ...transitionVariants,
                }}
            >
                {/* Header Section */}
                <div className="text-center mb-20">
                    <h1 className="font-heading text-display-lg-mobile md:text-display-lg text-foreground mb-6">
                        How it <span className="text-secondary italic">Works</span>
                    </h1>
                    <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Our platform uses machine learning to translate agricultural data into actionable forecasting.
                    </p>
                </div>

                {/* Technical Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <div className="glass-card rounded-[2rem] p-8 lg:col-span-2 relative overflow-hidden">
                        <BrainCircuit className="w-10 h-10 text-primary mb-6" />
                        <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">Random Forest Regressor</h3>
                        <p className="text-muted-foreground leading-relaxed max-w-xl">
                            Our prediction engine uses an ensemble learning method. By constructing multiple decision trees during training, the model provides highly accurate and robust yield forecasts.
                        </p>
                    </div>

                    <div className="glass-card rounded-[2rem] p-8 relative overflow-hidden">
                        <Database className="w-10 h-10 text-secondary mb-6" />
                        <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">Extensive Data</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Trained on comprehensive records, taking into account variables like rainfall, fertilizer, and dedicated land area.
                        </p>
                    </div>
                </div>

                {/* Dataset Visualization Section */}
                <div className="glass-panel rounded-[2rem] p-10 md:p-12 border border-white/60 mb-12">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/3">
                            <h2 className="font-heading text-3xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <BarChart3 className="w-8 h-8 text-primary" />
                                Dataset Insights
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Our models were trained on extensive Indian agricultural data spanning multiple decades. 
                                The visualization displays the average crop yield distribution (in kg/hectare) segmented by traditional agricultural seasons.
                            </p>
                            <p className="text-sm text-secondary font-medium">
                                Visualized Data: National Average Yield (2010 - 2023)
                            </p>
                        </div>
                        <div className="lg:w-2/3 w-full h-[300px] bg-white/40 rounded-2xl p-6 border border-white/80 shadow-sm">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <XAxis 
                                        dataKey="name" 
                                        axisLine={false} 
                                        tickLine={false} 
                                        tick={{ fill: 'var(--color-on-surface)', fontSize: 12 }} 
                                        dy={10}
                                    />
                                    <YAxis 
                                        axisLine={false} 
                                        tickLine={false} 
                                        tick={{ fill: 'var(--color-muted)', fontSize: 12 }} 
                                    />
                                    <Tooltip 
                                        cursor={{ fill: 'rgba(255, 255, 255, 0.4)' }}
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', backgroundColor: 'rgba(255,255,255,0.95)' }}
                                    />
                                    <Bar dataKey="yield" radius={[6, 6, 6, 6]}>
                                        {data.map((_, index) => (
                                            <Cell key={`cell-${index}`} fill={index % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Our Goal & Creators Section */}
                <div className="glass-panel rounded-[2rem] p-10 md:p-12 border border-white/60 mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-heading text-3xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <Target className="w-8 h-8 text-secondary" />
                                Our Goal
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Vesta was created with a singular mission: to bridge the gap between traditional agricultural practices and modern artificial intelligence. 
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                By providing an elegant, highly accurate, and accessible prediction tool, we want to empower local farmers, agronomists, and policymakers to make data-driven decisions. Our ultimate vision is to optimize resource allocation—preventing the overuse of fertilizers and pesticides—while securing national food supply chains against unpredictable climate shifts.
                            </p>
                        </div>
                        
                        <div className="bg-white/40 rounded-[1.5rem] p-8 shadow-sm border border-white/80">
                            <h2 className="font-heading text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <Users className="w-6 h-6 text-primary" />
                                The Team
                            </h2>
                            
                            <div className="space-y-6">
                                {/* Shashank Pradhan */}
                                <div className="group">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/80 shadow-sm flex-shrink-0">
                                            <img src="/avatar.png" alt="Shashank Pradhan Typography Logo" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground text-lg">Shashank Pradhan</h4>
                                            <p className="text-sm text-secondary font-medium">Frontend & Full-Stack Architect</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                        Designed and developed the Vesta user interface, crafting the premium "girly chic" aesthetic, glassmorphic interactions, and the robust Vite/React frontend architecture.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <a 
                                            href="https://github.com/antiperfect" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-secondary transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            GitHub Profile
                                        </a>
                                        <a 
                                            href="https://linkedin.com/in/antiperfect" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-secondary transition-colors"
                                        >
                                            <LinkedinIcon className="w-4 h-4" />
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedGroup>
        </div>
    )
}
