import { AnimatedGroup } from '@/components/ui/animated-group'

export function Privacy() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-20">
            <AnimatedGroup>
                <div className="glass-panel rounded-[2rem] p-10 md:p-16 border border-white/60">
                    <h1 className="font-heading text-4xl text-foreground mb-8">Privacy Policy</h1>
                    <p className="text-sm text-muted-foreground mb-8">Last Updated: May 2026</p>
                    
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                        <p>
                            At Vesta, we take your privacy seriously. This dummy privacy policy outlines how we collect, use, and protect the agricultural data you provide to our Yield Prediction platform.
                        </p>
                        <h3 className="font-heading text-xl text-foreground mt-8 mb-4">1. Data Collection</h3>
                        <p>
                            We collect parameters such as Crop Name, Season, State, Area, Annual Rainfall, Fertilizer usage, and Pesticide usage solely for the purpose of running our prediction models. This data is processed temporarily and is not permanently stored in our databases unless explicitly permitted.
                        </p>
                        <h3 className="font-heading text-xl text-foreground mt-8 mb-4">2. Data Usage</h3>
                        <p>
                            Your agricultural data is used exclusively to generate yield predictions via our Random Forest Regressor model. We do not sell, trade, or otherwise transfer your data to outside parties.
                        </p>
                        <h3 className="font-heading text-xl text-foreground mt-8 mb-4">3. Security</h3>
                        <p>
                            We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet is 100% secure.
                        </p>
                        <h3 className="font-heading text-xl text-foreground mt-8 mb-4">4. Contact</h3>
                        <p>
                            If you have any questions regarding this privacy policy, you may contact us using the information below:
                            <br />
                            <strong>Email:</strong> shashankpradhan3@gmail.com
                        </p>
                    </div>
                </div>
            </AnimatedGroup>
        </div>
    )
}
