import { useEffect, useState } from 'react';
import { FaRobot } from 'react-icons/fa';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-colors duration-500 ${scrolled
                    ? 'bg-gradient-to-r from-[#21c4e7] via-[#dbe3e6] to-[#4d5358] shadow-lg backdrop-blur-md'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <FaRobot className="text-migratexCyan text-2xl" />
                    <span className="font-poppins font-extrabold text-white text-xl select-none tracking-wide">
                        MigrateX
                    </span>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex gap-10">
                    {['Home', 'Features', 'How It Works', 'Pricing', 'Docs', 'Contact'].map(
                        (link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                                className="relative text-white font-semibold tracking-wide uppercase transition-all hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-gradient-to-r hover:after:from-cyan-400 hover:after:via-silver-300 hover:after:to-steel-grey-600 hover:after:shadow-[0_0_8px_rgba(33,196,231,0.8)] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:via-silver-300 after:to-steel-grey-600 after:transition-all after:duration-300"
                            >
                                {link}
                            </a>
                        )
                    )}
                </div>

                {/* CTA Button */}
                <a
                    href="#cta"
                    className="hidden md:inline-flex items-center justify-center px-6 py-2 rounded-full font-semibold text-black bg-transparent border-2 border-gradient-cyan transition-all duration-300 hover:border-gradient-silver hover:shadow-[0_0_15px_rgba(33,196,231,0.9)]"
                    style={{
                        background:
                            'linear-gradient(to right, #21c4e7, #dbe3e6, #4d5358)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        borderImageSlice: 1,
                        borderImageSource:
                            'linear-gradient(to right, #21c4e7, #dbe3e6, #4d5358)',
                    }}
                >
                    Get Started
                </a>
            </div>
        </nav>
    );
}
