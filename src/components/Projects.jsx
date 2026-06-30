import { useState } from 'react'
import { X } from 'lucide-react'

const projects = [
    {
        id: 1,
        image: '/project1/cover.png',
        images: ['/project1/cover.png', '/project1/home.png', '/project1/prayers.png', '/project1/community.png'],
        title: 'Guidance IFT',
        subtitle: 'Islamic services mobile app with real-time data.',
        stats: [{ label: 'Platform', value: 'iOS & Android' }, { label: 'Backend', value: 'Firebase' }],
        desc: 'Built a full-featured Islamic services app including prayer times, Quran access, and payment gateway integration. Implemented real-time data sync and user authentication.',
        reverse: false,
    },
    {
        id: 2,
        image: '/Project2/0.jpg',
        images: ['/Project2/1.png', '/Project2/2.png', '/Project2/3.png', '/Project2/4.png', '/Project2/5.png', '/Project2/6.png', '/Project2/7.png', '/Project2/8.png', '/Project2/9.png', '/Project2/10.png', '/Project2/11.png', '/Project2/12.png', '/Project2/13.png', '/Project2/14.png', '/Project2/15.png'],
        title: 'Xenscape',
        subtitle: 'Your all-in-one companion for physical strength and mental clarity',
        stats: [{ label: 'Platform', value: 'Cross-Platform' }, { label: 'Sessions', value: '50k+' }],
        desc: 'Seamlessly combining guided meditation with dynamic workout tracking, this app empowers users to balance their fitness journeys and mental well-being in a single, intuitive interfaceercises, and daily activity logs.',
        reverse: true,
    },
    {
        id: 3,
        image: '/project3/1.png',
        images: ['/project3/1.png', '/project3/2.jpg', '/project3/3.jpg', '/project3/4.png'],
        title: 'Dermascans AI',
        subtitle: 'AI-powered dermatology diagnosis app.',
        stats: [{ label: 'Model', value: 'AI/ML' }, { label: 'Security', value: 'AES-256' }],
        desc: 'Engineered an AI-powered skin analysis app using machine learning models to detect and track skin conditions. Integrated camera API with real-time analysis and report generation.',
        reverse: false,
    },
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <>
            <section className="py-xxl" id="work">
                <div className="max-w-container-max mx-auto px-gutter">
                    <h2 className="text-headline-lg font-semibold mb-xl">Developed Projects</h2>
                    <div className="space-y-xl">
                        {projects.map((p, i) => (
                            <div key={i}
                                className={`flex flex-col gap-xl items-center bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/10 ambient-shadow p-lg scroll-reveal
                                ${p.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                                {/* Image */}
                                <div className="lg:w-1/2 w-full h-80 rounded-xl overflow-hidden bg-surface-container">
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
                                        onError={e => { e.target.style.display = 'none' }}
                                    />
                                </div>
                                {/* Content */}
                                <div className="lg:w-1/2 w-full space-y-md">
                                    <div>
                                        <h3 className="text-headline-lg font-semibold text-primary">{p.title}</h3>
                                        <p className="text-body-md text-on-surface-variant">{p.subtitle}</p>
                                    </div>
                                    {/* Stats Row */}
                                    <div className="grid grid-cols-2 gap-md py-md border-y border-outline-variant/20">
                                        {p.stats.map(stat => (
                                            <div key={stat.label}>
                                                <p className="text-caption uppercase text-outline">{stat.label}</p>
                                                <p className="text-headline-md font-semibold text-tertiary">{stat.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-body-md">{p.desc}</p>
                                    <button
                                        onClick={() => setSelectedProject(p)}
                                        className="text-primary font-bold flex items-center gap-xs hover:underline transition-all">
                                        Read More →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal Popup */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="bg-white max-w-5xl w-full max-h-[90vh] overflow-y-auto relative rounded-xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-surface-container transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="grid md:grid-cols-2 gap-xl p-xl">
                            {/* Images Column */}
                            <div className="space-y-md">
                                {selectedProject.images.map((img, idx) => (
                                    <div key={idx} className="rounded-xl overflow-hidden bg-surface-container">
                                        <img
                                            src={img}
                                            alt={`${selectedProject.title} screenshot ${idx + 1}`}
                                            className="w-full h-auto object-cover"
                                            onError={e => { e.target.style.display = 'none' }}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Details Column */}
                            <div className="space-y-lg">
                                <div>
                                    <h3 className="text-headline-lg font-semibold text-primary mb-sm">{selectedProject.title}</h3>
                                    <p className="text-body-lg text-on-surface-variant">{selectedProject.subtitle}</p>
                                </div>

                                <div className="space-y-md py-md border-y border-outline-variant/20">
                                    {selectedProject.stats.map(stat => (
                                        <div key={stat.label} className="flex justify-between">
                                            <span className="text-caption uppercase text-outline">{stat.label}</span>
                                            <span className="text-body-md font-semibold text-on-surface">{stat.value}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-body-md text-on-surface leading-relaxed">{selectedProject.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
