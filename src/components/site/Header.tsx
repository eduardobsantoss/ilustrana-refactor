import { NavLink, Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { socials } from "@/lib/socials";

const navItems = [
    { to: "/portfolio", label: "portfólio" },
    { to: "/sobre", label: "sobre" },
    { to: "/contato", label: "contato" },
];

export function Header() {
    return (
        <header className="sticky top-0 z-30 border-b-2 border-ink/10 bg-background/85 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
                <Link to="/" className="flex items-center gap-2">
                    <span className="sticker flex h-9 w-9 items-center justify-center rounded-full bg-lemon">
                        <Sparkles className="h-4 w-4 text-ink" strokeWidth={2.5} />
                    </span>
                    <span className="font-display text-3xl leading-none text-primary">ilustrana</span>
                    <span className="font-display text-2xl leading-none text-ink/70">studio</span>
                </Link>

                <nav className="hidden items-center gap-7 font-sans text-sm font-semibold md:flex">
                    {navItems.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `transition-colors hover:text-primary ${isActive ? "text-primary" : "text-ink/80"}`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    {socials.map(({ href, label, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="rounded-full p-2 text-ink/70 transition-colors hover:bg-secondary hover:text-primary"
                        >
                            <Icon className="h-4 w-4" />
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}
