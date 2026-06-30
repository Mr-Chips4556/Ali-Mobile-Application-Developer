import { Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
    return (
        <section className="py-xxl" id="contact">
            <div className="max-w-container-max mx-auto px-gutter">
                <div className="bg-primary text-on-primary rounded-3xl p-xl flex flex-col lg:flex-row gap-xl shadow-2xl overflow-hidden relative">
                    {/* Background icon watermark */}
                    <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                        <Mail className="w-48 h-48" />
                    </div>

                    {/* Left Info */}
                    <div className="lg:w-1/2 space-y-lg relative z-10">
                        <h2 className="font-display text-display">Initiate Project</h2>
                        <p className="text-body-lg opacity-90">
                            Ready to build your next mobile app? Let's discuss your project requirements or a potential collaboration.
                        </p>
                        <div className="space-y-md pt-md">
                            <div className="flex items-center gap-md">
                                <div className="w-12 h-12 rounded-full bg-on-primary/10 flex items-center justify-center">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-caption opacity-70">Email Address</p>
                                    <p className="text-body-lg font-bold">aliurrehman605@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-md">
                                <div className="w-12 h-12 rounded-full bg-on-primary/10 flex items-center justify-center">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-caption opacity-70">Based In</p>
                                    <p className="text-body-lg font-bold">Pakistan / Remote</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="lg:w-1/2 bg-surface rounded-2xl p-lg text-on-surface relative z-10 ambient-shadow">
                        <div className="space-y-md">
                            {[
                                { label: 'Full Name', type: 'text', placeholder: 'John Doe' },
                                { label: 'Email Address', type: 'email', placeholder: 'john@company.com' },
                            ].map(field => (
                                <div key={field.label}>
                                    <label className="text-caption text-on-surface-variant mb-xs block">{field.label}</label>
                                    <input
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        className="w-full border-b border-outline-variant bg-transparent py-sm focus:border-primary focus:outline-none transition-colors text-body-md"
                                    />
                                </div>
                            ))}
                            <div>
                                <label className="text-caption text-on-surface-variant mb-xs block">Project Scope</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full border-b border-outline-variant bg-transparent py-sm focus:border-primary focus:outline-none transition-colors text-body-md resize-none"
                                />
                            </div>
                            <button className="w-full bg-primary-container text-on-primary-container font-bold py-md rounded-xl active:scale-95 transition-all mt-md flex items-center justify-center gap-sm">
                                Transmit Message <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
