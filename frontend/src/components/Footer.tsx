import { Link } from 'react-router-dom'
import { Leaf, Mail } from 'lucide-react'

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
)

export function Footer() {
    return (
        <footer className="relative border-t border-white/60 bg-white/20 backdrop-blur-xl mt-20 z-10">
            <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-4 group inline-flex">
                            <Leaf className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                            <span className="font-heading text-2xl font-semibold text-foreground tracking-wide group-hover:text-secondary transition-colors">Vesta</span>
                        </Link>
                        <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-6">
                            Bridging traditional agricultural wisdom and modern artificial intelligence to empower farmers and optimize global food security.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://github.com/antiperfect" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/50 border border-white/60 flex items-center justify-center text-foreground hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all">
                                <GithubIcon className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com/in/antiperfect" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/50 border border-white/60 flex items-center justify-center text-foreground hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all">
                                <LinkedinIcon className="w-5 h-5" />
                            </a>
                            <a href="mailto:shashankpradhan3@gmail.com" className="w-10 h-10 rounded-full bg-white/50 border border-white/60 flex items-center justify-center text-foreground hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-heading font-semibold text-foreground text-lg mb-4">Product</h4>
                        <ul className="space-y-3">
                            <li><Link to="/predict" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Yield Predictor</Link></li>
                            <li><Link to="/about" className="text-sm text-muted-foreground hover:text-secondary transition-colors">How it Works</Link></li>
                            <li><Link to="/about" className="text-sm text-muted-foreground hover:text-secondary transition-colors">The Team</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-heading font-semibold text-foreground text-lg mb-4">Legal</h4>
                        <ul className="space-y-3">
                            <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Terms of Service</Link></li>
                            <li><a href="mailto:shashankpradhan3@gmail.com" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Contact Support</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/40 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Vesta Intelligence. All rights reserved.
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                        Designed & Built by <a href="https://github.com/antiperfect" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-secondary">antiperfect</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
