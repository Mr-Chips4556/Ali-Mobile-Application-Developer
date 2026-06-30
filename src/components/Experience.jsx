const milestones = [
    {
        title: 'React Native Developer',
        company: 'Freelance / Remote',
        period: '2023 — Present',
        active: true,
        points: [
            'Built 3 full-featured cross-platform apps across Islamic services, wellness, and healthcare domains.',
            'Integrated AI/ML features using OpenAI API for smart in-app experiences.',
            'Implemented payment gateway integrations and real-time Firebase sync.',
        ],
    },
    {
        title: 'Mobile App Developer',
        company: 'Personal Projects & Clients',
        period: '2022 — 2023',
        active: false,
        points: [
            'Developed and published mobile apps with clean architecture patterns.',
            'Worked with REST APIs, push notifications, and third-party SDK integrations.',
        ],
    },
    {
        title: 'CS Student & Learner',
        company: 'University',
        period: '2020 — 2022',
        active: false,
        desc: 'Studied Computer Science with focus on data structures, algorithms, and software engineering fundamentals.',
    },
]

export default function Experience() {
    return (
        <section className="py-xxl bg-surface-container-low" id="experience">
            <div className="max-w-container-max mx-auto px-gutter">
                <h2 className="text-headline-lg font-semibold mb-xl text-center">Career Journey</h2>
                <div className="relative timeline-line ml-4 md:ml-0 md:max-w-3xl md:mx-auto">
                    {milestones.map((m, i) => (
                        <div key={i} className="mb-xl relative pl-10 scroll-reveal">
                            <div className={`absolute left-0 w-6 h-6 rounded-full z-10
                                ${m.active
                                    ? 'active-node'
                                    : 'bg-outline-variant border-4 border-surface'
                                }`}
                            />
                            <div className="bg-surface p-lg rounded-xl border border-outline-variant/20 ambient-shadow">
                                <div className="flex flex-col md:flex-row justify-between md:items-center mb-md">
                                    <div>
                                        <h4 className="text-headline-md font-semibold text-primary">{m.title}</h4>
                                        <p className="text-body-md font-bold text-on-surface-variant">{m.company}</p>
                                    </div>
                                    <span className={`text-label-mono px-sm py-xs rounded mt-sm md:mt-0
                                        ${m.active
                                            ? 'text-primary bg-primary-fixed-dim/20'
                                            : 'text-on-surface-variant bg-surface-container-highest'
                                        }`}>
                                        {m.period}
                                    </span>
                                </div>
                                {m.points ? (
                                    <ul className="space-y-sm text-on-surface-variant list-disc list-inside text-body-md">
                                        {m.points.map((pt, j) => <li key={j}>{pt}</li>)}
                                    </ul>
                                ) : (
                                    <p className="text-body-md text-on-surface-variant">{m.desc}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
