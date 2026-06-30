import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['work', 'stack', 'experience', 'contact']

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="fixed top-0 w-full z-50 bg-surface/80 glass-nav shadow-sm">
            <div className="flex justify-between items-center px-lg py-md max-w-container-max mx-auto">
                <div className="text-headline-md font-bold text-primary">𝒫𝑒𝓇𝓈𝑜𝓃𝒶</div>
                <div className="hidden md:flex gap-lg items-center">
                    {links.map(l => (
                        <a key={l} href={`#${l}`}
                            className="text-body-md text-on-surface-variant hover:text-primary transition-colors capitalize">
                            {l}
                        </a>
                    ))}
                    <a href="#contact"
                        className="bg-primary-container text-white px-lg py-sm rounded-lg font-bold active:scale-95 transition-transform duration-200">
                        Hire Me
                    </a>
                </div>
                <button className="md:hidden text-primary" onClick={() => setOpen(!open)}>
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            {open && (
                <div className="md:hidden bg-surface border-t border-outline-variant/20 px-lg py-md flex flex-col gap-md">
                    {links.map(l => (
                        <a key={l} href={`#${l}`} onClick={() => setOpen(false)}
                            className="text-body-md text-on-surface-variant hover:text-primary capitalize transition-colors">
                            {l}
                        </a>
                    ))}
                    <a href="#contact"
                        className="bg-primary-container text-white px-lg py-sm rounded-lg font-bold text-center">
                        Hire Me
                    </a>
                </div>
            )}
        </nav>
    )
}
