import { useState } from 'react'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { GlassButton } from '@/components/ui/apple-tahoe-liquid-glass-button'
import { Loader2, TrendingUp, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const transitionVariants = {
    item: {
        hidden: { opacity: 0, filter: 'blur(8px)', y: 12 },
        visible: {
            opacity: 1, filter: 'blur(0px)', y: 0,
            transition: { type: 'spring' as const, bounce: 0.3, duration: 1.5 },
        },
    },
}

// Indian Seasons based on the dataset
const SEASONS = ["Kharif", "Rabi", "Whole Year", "Summer", "Winter", "Autumn"]

export function Predict() {
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState<{prediction: number, unit: string} | null>(null)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        setResult(null)

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())

        try {
            const response = await fetch('/api/predict', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const resData = await response.json()

            if (!response.ok) throw new Error(resData.error || 'Failed to predict')

            setResult({ prediction: resData.prediction, unit: resData.unit })
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
            <AnimatedGroup
                variants={{
                    container: { visible: { transition: { staggerChildren: 0.05 } } },
                    ...transitionVariants,
                }}
            >
                <div className="text-center mb-12">
                    <h1 className="font-heading text-display-lg-mobile md:text-headline-md text-foreground mb-4">
                        Yield <span className="text-secondary italic">Predictor</span>
                    </h1>
                    <p className="text-muted-foreground">Enter the field parameters to forecast the harvest output.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Form Section */}
                    <div>
                        <form onSubmit={handleSubmit} className="glass-panel rounded-[2rem] p-6 md:p-8 shadow-sm border border-white/60">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <FormInput label="Crop Name" name="Crop" placeholder="e.g. Rice, Wheat" required />
                                <FormInput label="Crop Year" name="Crop_Year" type="number" placeholder="e.g. 2023" required />
                                
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold tracking-wide text-foreground uppercase">Season</label>
                                    <div className="relative">
                                        <select 
                                            name="Season" 
                                            required
                                            defaultValue=""
                                            className="w-full bg-white/50 border border-white/80 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all appearance-none shadow-sm text-sm"
                                        >
                                            <option value="" disabled>Select a season</option>
                                            {SEASONS.map(s => <option key={s} value={s} className="bg-background">{s}</option>)}
                                        </select>
                                    </div>
                                </div>
                                
                                <FormInput label="State" name="State" placeholder="e.g. Maharashtra" required />
                                <FormInput label="Area (Hectares)" name="Area" type="number" step="0.01" placeholder="0.00" required />
                                <FormInput label="Annual Rainfall (mm)" name="Annual_Rainfall" type="number" step="0.01" placeholder="0.00" required />
                                <FormInput label="Fertilizer Usage" name="Fertilizer" type="number" step="0.01" placeholder="0.00" required />
                                <FormInput label="Pesticide Usage" name="Pesticide" type="number" step="0.01" placeholder="0.00" required />
                            </div>

                            <div className="mt-8 flex justify-end">
                                <GlassButton 
                                    type="submit" 
                                    disabled={loading}
                                    glassColor="rgba(255, 255, 255, 0.5)"
                                    contentClassName="text-foreground font-semibold min-w-[160px]"
                                >
                                    {loading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : "Run Prediction"}
                                </GlassButton>
                            </div>
                        </form>
                    </div>

                    {/* Result Section */}
                    <div className="sticky top-24">
                        <div className="glass-card rounded-[2rem] p-8 h-full flex flex-col justify-center min-h-[300px] relative overflow-hidden shadow-sm border border-white/80">
                            {/* Smaller, less intense decorative blur */}
                            <div className={cn(
                                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-[64px] transition-all duration-1000 -z-10",
                                result ? "bg-secondary/10" : error ? "bg-red-500/5" : "bg-primary/5"
                            )} />

                            {loading && (
                                <div className="text-center animate-pulse">
                                    <Loader2 className="w-10 h-10 text-secondary animate-spin mx-auto mb-4" />
                                    <p className="text-secondary font-medium">Calculating...</p>
                                </div>
                            )}

                            {!loading && !result && !error && (
                                <div className="text-center text-muted-foreground">
                                    <TrendingUp className="w-12 h-12 opacity-30 mx-auto mb-4 text-primary" />
                                    <p>Submit the parameters to see the predicted yield.</p>
                                </div>
                            )}

                            {error && (
                                <div className="text-center text-red-500/80">
                                    <AlertCircle className="w-10 h-10 mx-auto mb-4 opacity-80" />
                                    <p className="font-medium text-sm">{error}</p>
                                </div>
                            )}

                            {result && (
                                <AnimatedGroup
                                    preset="zoom"
                                    className="text-center"
                                >
                                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Predicted Yield</p>
                                    <div className="font-heading text-5xl font-bold text-foreground mb-3 drop-shadow-sm">
                                        {result.prediction.toLocaleString()}
                                    </div>
                                    <p className="text-muted-foreground font-medium">{result.unit} / hectare</p>
                                </AnimatedGroup>
                            )}
                        </div>
                    </div>
                </div>
            </AnimatedGroup>
        </div>
    )
}

function FormInput({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
    return (
        <div className="space-y-2">
            <label className="text-xs font-semibold tracking-wide text-foreground uppercase">{label}</label>
            <input 
                {...props}
                className="w-full bg-white/50 border border-white/80 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all shadow-sm text-sm"
            />
        </div>
    )
}
