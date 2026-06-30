export default function Footer() {
    return (
        <footer className="bg-surface-container-low border-t border-outline-variant/10">
            <div className="flex flex-col md:flex-row justify-between items-center px-lg py-xl max-w-container-max mx-auto gap-md">
                <div className="flex flex-col items-center md:items-start gap-xs">
                    <div className="text-headline-md font-bold text-primary">𝒫𝑒𝓇𝓈𝑜𝓃𝒶</div>
                    <p className="text-caption text-on-surface-variant">
                        © 2024 Ali Ur Rehman. All rights reserved.
                    </p>
                </div>
                <div className="flex gap-lg">
                    <a
                        href="https://github.com/Mr-Chips4556?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-caption text-on-surface-variant hover:text-primary underline transition-colors cursor-pointer">
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ali-ur-rehman-4981b4356/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-caption text-on-surface-variant hover:text-primary underline transition-colors cursor-pointer">
                        LinkedIn
                    </a>
                    <a
                        href="/cv.pdf"
                        className="text-caption text-on-surface-variant hover:text-primary underline transition-colors cursor-pointer">
                        Download CV
                    </a>
                </div>
            </div>
        </footer>
    )
}
