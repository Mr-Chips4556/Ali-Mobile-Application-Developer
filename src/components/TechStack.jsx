import { Smartphone, Layers, Database, Wrench, Zap } from 'lucide-react'

const groups = [
    { icon: Smartphone, title: 'Platforms', tags: ['React Native', 'iOS', 'Android', 'Expo', 'TypeScript', 'JavaScript'] },
    { icon: Layers, title: 'Architecture', tags: ['Clean Arch', 'Redux', 'Context API', 'TypeScript', 'MVC', 'MVVM'] },
    { icon: Database, title: 'Backend', tags: ['Firebase', 'REST APIs', 'OpenAI API', 'PostgreSQL', 'Node.js', 'MongoDB'] },
    { icon: Wrench, title: 'Tools', tags: ['GitHub', 'VS Code', 'Postman', 'Figma', 'Git', 'Jira'] },
    { icon: Zap, title: 'Integrations', tags: ['Payment Gateways', 'Push Notifications', 'Analytics', 'Social Auth', 'Maps API', 'Cloud Storage'] },
]

export default function TechStack() {
    return (
        <section className="py-xxl bg-surface-container-low" id="stack">
            <div className="max-w-container-max mx-auto px-gutter">
                <h2 className="text-headline-lg font-semibold mb-xl border-l-4 border-primary pl-md">
                    Technical Arsenal
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
                    {groups.map((g, i) => (
                        <div key={i}
                            className="bg-surface p-lg rounded-xl border border-outline-variant/20 ambient-shadow scroll-reveal">
                            <div className="text-primary mb-md">
                                <g.icon className="w-8 h-8 stroke-[1.5]" />
                            </div>
                            <h3 className="text-headline-md font-semibold mb-md">{g.title}</h3>
                            <div className="flex flex-wrap gap-xs">
                                {g.tags.map(t => (
                                    <span key={t}
                                        className="text-label-mono bg-primary/10 text-primary px-sm py-xs rounded font-medium">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
