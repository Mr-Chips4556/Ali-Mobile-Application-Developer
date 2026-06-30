import { Briefcase, Smartphone, Zap, Mail } from 'lucide-react'

export default function Hero() {
    return (
        <header className="pt-xxl pb-xl relative overflow-hidden">
            <div className="max-w-container-max mx-auto px-gutter text-center flex flex-col items-center">
                {/* Profile Image */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden mb-lg transition-transform hover:scale-105 duration-500">
                    <img
                        src="/IMG.JPG"
                        alt="Ali Ur Rehman"
                        className="w-full h-full object-cover object-top"
                        onError={e => {
                            e.target.style.display = 'none'
                            e.target.parentElement.style.background = '#eaddff'
                        }}
                    />
                </div>

                {/* Headline */}
                <h1 className="font-display text-display text-on-surface mb-md max-w-3xl leading-tight">
                    Building Seamless{' '}
                    <span className="text-primary-container">Mobile</span>{' '}
                    Experiences
                </h1>

                {/* Subtext */}
                <p className="text-body-lg text-on-surface-variant max-w-2xl mb-lg">
                    React Native Mobile Developer specializing in cross-platform iOS and Android apps,
                    Firebase backends, AI-enabled features, and clean scalable architecture.
                </p>

                {/* Feature Badges */}
                <div className="flex flex-wrap justify-center gap-md mb-xl max-w-3xl">
                    <div className="flex items-center gap-xs bg-surface-container px-md py-sm rounded-lg border border-outline-variant/20">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <span className="text-body-md font-medium">Available for Freelance</span>
                    </div>
                    <div className="flex items-center gap-xs bg-surface-container px-md py-sm rounded-lg border border-outline-variant/20">
                        <Smartphone className="w-5 h-5 text-primary" />
                        <span className="text-body-md font-medium">Native & Cross-Platform Expertise</span>
                    </div>
                    <div className="flex items-center gap-xs bg-surface-container px-md py-sm rounded-lg border border-outline-variant/20">
                        <Zap className="w-5 h-5 text-primary" />
                        <span className="text-body-md font-medium">Event-Driven Integrations</span>
                    </div>
                    <a
                        href="https://github.com/Mr-Chips4556?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-xs bg-surface-container px-md py-sm rounded-lg border border-outline-variant/20 hover:bg-surface-container-high transition-colors cursor-pointer">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span className="text-body-md font-medium">Github</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ali-ur-rehman-4981b4356/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-xs bg-surface-container px-md py-sm rounded-lg border border-outline-variant/20 hover:bg-surface-container-high transition-colors cursor-pointer">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        <span className="text-body-md font-medium">Linkedin</span>
                    </a>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-md">
                    <a href="#work"
                        className="bg-primary text-on-primary px-xl py-md rounded-lg font-bold active:scale-95 transition-all ambient-shadow flex items-center justify-center gap-sm">
                        View Projects
                    </a>
                    <a href="#contact"
                        className="bg-surface-container text-primary border border-outline-variant/30 px-xl py-md rounded-lg font-bold active:scale-95 transition-all hover:bg-surface-container-high flex items-center justify-center gap-sm">
                        Contact Me
                    </a>
                </div>
            </div>
        </header>
    )
}
