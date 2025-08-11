import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import { FaRobot, FaLightbulb, FaCogs, FaPlug } from "react-icons/fa";
import codeTransformAnimation from "../assets/animations/Programmer.json";


const taglineText =
    "One Click. New Stack. Endless Possibilities.";

const features = [
    {
        icon: FaRobot,
        title: "One-Click Migration",
        description: "Convert legacy code instantly with AI-powered migration.",
        gradient: "from-[#0a2540] via-[#153e75] to-[#118c8d]",
    },
    {
        icon: FaLightbulb,
        title: "Multi-Stack Support",
        description: "Supports Python, Java, Node.js, and more frameworks.",
        gradient: "from-[#153e75] via-[#0d414d] to-[#2f3a43]",
    },
    {
        icon: FaCogs,
        title: "Error-Free Conversion",
        description: "AI-powered accuracy ensures zero errors in your migrated code.",
        gradient: "from-[#2f3a43] via-[#55606e] to-[#0d414d]",
    },
    {
        icon: FaPlug,
        title: "Seamless Integration",
        description: "Works effortlessly with your existing dev tools and pipelines.",
        gradient: "from-[#118c8d] via-[#374151] to-[#55606e]",
    },
];

export default function LandingPage() {
    const [scrolled, setScrolled] = useState(false);
    const [typedTagline, setTypedTagline] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);

    // Navbar background switch on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    // Typing animation for tagline (inline, not separate component)
    useEffect(() => {
        let i = 0;
        const typeNext = () => {
            if (i <= taglineText.length) {
                setTypedTagline(taglineText.slice(0, i));
                i++;
                setTimeout(typeNext, 80);
            }
        };
        typeNext();

        const cursorBlink = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 500);

        return () => {
            setTypedTagline("");
            clearInterval(cursorBlink);
        };
    }, []);

    return (
        <div className="min-h-screen font-poppins relative bg-gradient-to-br from-[#21c4e7] via-[#dbe3e6] to-[#4d5358] overflow-x-hidden">

            {/* Navbar */}
            <nav
                className={`fixed w-full top-0 z-50 transition-colors duration-500 ${scrolled
                    ? "bg-gradient-to-r from-[#21c4e7] via-[#dbe3e6] to-[#4d5358] shadow-lg backdrop-blur-md"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
                    <div className="flex items-center gap-3">
                        <img
                            src={require("../assets/logo.png")}
                            alt="MigrateX Logo"
                            className="h-9 w-9 object-contain drop-shadow-lg"
                        />
                        <span className="font-extrabold text-gradient-dark-blue text-xl select-none tracking-wide">
                            MigrateX
                        </span>
                    </div>


                    {/* Navigation Links */}
                    <div className="hidden md:flex gap-10">
                        {["Home", "Features", "How It Works", "Pricing", "Docs", "Contact"].map(
                            (link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="relative font-semibold tracking-wide uppercase transition-all hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-gradient-to-r hover:after:from-cyan-800 hover:after:via-steel-grey-dark hover:after:to-dark-cyan hover:after:shadow-[0_0_8px_rgba(13,65,77,0.8)] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-800 after:via-steel-grey-dark after:to-dark-cyan after:transition-all after:duration-300 text-gradient-dark-blue"
                                >
                                    {link}
                                </a>
                            )
                        )}
                    </div>

                    {/* CTA Button */}
                    <a
                        href="#cta"
                        className="hidden md:inline-flex items-center justify-center px-6 py-2 rounded-full font-semibold text-black bg-transparent border-2 border-gradient-dark-blue transition-all duration-300 hover:border-gradient-steel-grey-dark hover:shadow-[0_0_15px_rgba(13,65,77,0.9)]"
                        style={{
                            background:
                                "linear-gradient(to right, #0a2540, #153e75, #118c8d)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            borderImageSlice: 1,
                            borderImageSource:
                                "linear-gradient(to right, #0a2540, #153e75, #118c8d)",
                        }}
                    >
                        Get Started
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-[600px] flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 md:px-24 py-32 max-w-7xl mx-auto w-full overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#21c4e7] via-[#dbe3e6] to-[#4d5358] opacity-75 animate-gradientBackground"></div>

                <div className="max-w-xl z-10 flex flex-col">
                    <h1
                        className="text-6xl font-extrabold text-gradient-dark-blue bg-clip-text text-transparent mb-6"
                        style={{
                            zIndex: 2,
                            position: "relative",
                            lineHeight: "1.3",
                            wordBreak: "break-word",
                        }}
                    >
                        MigrateX
                    </h1>
                    {/* Typing animation for tagline (inline) */}
                    <div className="mb-2 text-3xl font-semibold text-gradient-dark-cyan min-h-[4.5rem] md:min-h-[3.5rem] lg:min-h-[3.5rem] whitespace-normal break-words z-10" style={{ wordBreak: 'break-word', lineHeight: 1.3 }}>
                        {typedTagline}
                        <span>{cursorVisible ? "|" : " "}</span>
                    </div>

                    <p className="mt-4 max-w-md text-lg text-dark-solid z-10">
                        AI-powered assistant to migrate your codebase faster, safer, and smarter.
                    </p>
                    <div className="mt-10 flex gap-6">
                        <a
                            href="#start-migrating"
                            className="px-8 py-4 bg-gradient-to-r from-[#0a2540] via-[#153e75] to-[#118c8d] rounded-full font-semibold text-white shadow-lg hover:opacity-90 transition"
                        >
                            Start Migrating
                        </a>
                        <a
                            href="#see-demo"
                            className="px-8 py-4 border-2 border-transparent rounded-full font-semibold text-gradient-dark-cyan hover:text-[#0a2540] hover:border-[#0a2540] hover:shadow-[0_0_10px_#0a2540] transition"
                        >
                            See Demo
                        </a>
                    </div>
                </div>

                <motion.div
                    className="w-full max-w-lg mt-16 md:mt-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <Lottie
                        animationData={codeTransformAnimation}
                        loop={true}
                        autoplay={true}
                        className="w-full h-auto select-none"
                    />
                </motion.div>
            </section>

            {/* Features Section */}
            <section
                id="features"
                className="py-20 px-6 md:px-24 max-w-7xl mx-auto w-full grid md:grid-cols-4 gap-8"
            >
                {features.map(({ icon: Icon, title, description, gradient }, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(13, 65, 77, 0.7)" }}
                        className="bg-gradient-to-br from-[#1f2937] to-[#374151] rounded-3xl p-8 flex flex-col items-center text-center cursor-pointer border-2 border-transparent hover:border-gradient-dark-blue transition-all"
                    >
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.15 }}
                            className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center text-white shadow-lg`}
                        >
                            <Icon className="text-3xl" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-gradient-steel-grey-dark mb-3">{title}</h3>
                        <p className="text-dark-solid">{description}</p>
                    </motion.div>
                ))}
            </section>

            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }

        @keyframes gradientBackground {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .animate-gradientBackground {
            background-size: 200% 200%;
            animation: gradientBackground 20s ease infinite;
        }
        .border-gradient-dark-blue {
            border-image-source: linear-gradient(to right, #0a2540, #153e75, #118c8d);
            border-image-slice: 1;
        }
        .border-gradient-steel-grey-dark {
            border-image-source: linear-gradient(to right, #2f3a43, #55606e);
            border-image-slice: 1;
        }

        .text-gradient-dark-blue {
            background: linear-gradient(90deg, #0a2540, #153e75);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .text-gradient-dark-cyan {
            background: linear-gradient(90deg, #0d414d, #118c8d);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .text-gradient-steel-grey-dark {
            background: linear-gradient(90deg, #2f3a43, #55606e);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .text-dark-solid {
            color: #222f3e;
        }

        .animate-blink {
            animation: blink 1s steps(1) infinite;
        }
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        `}</style>
        </div>
    );
}
