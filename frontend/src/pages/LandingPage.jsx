import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { FaRobot, FaLightbulb, FaCogs, FaPlug, FaUpload, FaCog, FaDownload } from "react-icons/fa";
import codeTransformAnimation from "../assets/animations/Programmer.json";
import uploadAnim from '../assets/animations/upload File.json';
import gearAnim from '../assets/animations/gear.json';
import previewAnim from '../assets/animations/preview.json'; // Optional, for 4 steps
import downloadAnim from '../assets/animations/download.json';

const taglineText = "One Click. New Stack. Endless Possibilities.";

const features = [
    { icon: FaRobot, title: "One-Click Migration", description: "Convert legacy code instantly with AI-powered migration." },
    { icon: FaLightbulb, title: "Multi-Stack Support", description: "Supports Python, Java, Node.js, and more frameworks." },
    { icon: FaCogs, title: "Error-Free Conversion", description: "AI-powered accuracy ensures zero errors in your migrated code." },
    { icon: FaPlug, title: "Seamless Integration", description: "Works effortlessly with your existing dev tools and pipelines." },
];

const howItWorksSteps = [
    {
        title: "Upload Your Code",
        main: "Connect or upload your project",
        details: "Supports GitHub, GitLab, Bitbucket, or direct local upload.",
        lottie: uploadAnim
    },
    {
        title: "AI Processes & Optimizes",
        main: "Let AI transform your codebase",
        details: "Our AI handles framework migration, dependency mapping, and deep optimizations.",
        lottie: gearAnim
    },
    {
        title: "Preview & Validate",
        main: "See proposed changes before download",
        details: "Review diffs and validate settings before moving forward.",
        lottie: previewAnim
    },
    {
        title: "Download Your New Stack",
        main: "Get a ready-to-use setup",
        details: "Receive your fully compatible project & instant documentation.",
        lottie: downloadAnim
    },
];

export default function LandingPage() {
    const [scrolled, setScrolled] = useState(false);
    const [typedTagline, setTypedTagline] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        const cursorBlink = setInterval(() => setCursorVisible(prev => !prev), 500);
        return () => {
            setTypedTagline("");
            clearInterval(cursorBlink);
        };
    }, []);

    return (
        <div className="min-h-screen font-poppins relative bg-gradient-to-br from-[#21c4e7] via-[#dbe3e6] to-[#4d5358] overflow-x-hidden">

            {/* Navbar */}
            <nav className={`fixed w-full top-0 z-50 transition-colors duration-500 ${scrolled
                ? "bg-gradient-to-r from-[#21c4e7] via-[#dbe3e6] to-[#4d5358] shadow-lg backdrop-blur-md"
                : "bg-transparent"
                }`}>
                <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img src={require("../assets/logo.png")} alt="MigrateX Logo" className="h-9 w-9 object-contain drop-shadow-lg" />
                        <span className="font-extrabold text-gradient-dark-blue text-xl select-none tracking-wide">MigrateX</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex gap-10">
                        {["Home", "Features", "How It Works", "Pricing", "Docs", "Contact"].map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                                className="relative font-semibold tracking-wide uppercase text-gradient-dark-blue after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-gradient-to-r after:from-[#21c4e7] after:to-[#118c8d] after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <a
                        href="#cta"
                        className="hidden md:inline-flex items-center px-6 py-2 rounded-full font-semibold text-black border-2 border-gradient-dark-blue"
                        style={{
                            background: "linear-gradient(to right, #0a2540, #153e75, #118c8d)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            borderImageSlice: 1,
                            borderImageSource: "linear-gradient(to right, #0a2540, #153e75, #118c8d)",
                        }}
                    >
                        Get Started
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative min-h-[600px] flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 md:px-24 pt-24 pb-10 max-w-7xl mx-auto w-full overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#21c4e7] via-[#dbe3e6] to-[#4d5358] opacity-75 animate-gradientBackground"></div>
                <div className="max-w-xl z-10 flex flex-col">
                    <h1 className="text-6xl font-extrabold leading-[1.3] text-gradient-dark-blue mb-6">MigrateX</h1>
                    <div className="mb-2 text-3xl font-semibold text-gradient-dark-cyan min-h-[3.5rem]">{typedTagline}<span>{cursorVisible ? "|" : " "}</span></div>
                    <p className="mt-4 max-w-md text-lg text-dark-solid z-10">AI-powered assistant to migrate your codebase faster, safer, and smarter.</p>
                    <div className="mt-10 flex gap-6">
                        <a href="#start-migrating" className="px-8 py-4 bg-gradient-to-r from-[#0a2540] via-[#153e75] to-[#118c8d] rounded-full font-semibold text-white shadow-lg hover:opacity-90">Start Migrating</a>
                        <a href="#see-demo" className="px-8 py-4 border-2 rounded-full font-semibold text-gradient-dark-cyan hover:border-[#0a2540]">See Demo</a>
                    </div>
                </div>
                <motion.div className="w-full max-w-lg mt-16 md:mt-0" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }}>
                    <Lottie animationData={codeTransformAnimation} loop autoplay className="w-full h-auto" />
                </motion.div>
            </section>

            {/* Features Section */}
            <section id="features" className="scroll-mt-20 py-10 px-6 md:px-24 max-w-7xl mx-auto w-full grid md:grid-cols-4 gap-8">
                {features.map(({ icon: Icon, title, description }, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05, translateY: -3 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 }}
                        className="relative rounded-2xl p-[3px] bg-gradient-to-r from-[#21c4e7] via-[#118c8d] to-[#21c4e7] animate-borderFlow hover:shadow-[0_0_25px_#21c4e7] min-h-[300px]"
                    >
                        <div className="rounded-2xl bg-white/95 shadow-lg h-full flex flex-col items-center justify-center text-center p-6">
                            <motion.div className="w-14 h-14 mb-4 rounded-full flex items-center justify-center bg-[#21c4e7] shadow-lg animate-iconPulse">
                                <Icon className="text-3xl text-white" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-[#153e75] mb-3">{title}</h3>
                            <p className="text-[#222f3e] text-sm leading-snug">{description}</p>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* How It Works Section */}
            <section
                id="how-it-works"
                className="scroll-mt-20 py-16 px-4 md:px-24 min-h-[560px] max-w-7xl mx-auto w-full
        bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#21c4e7]/10 mt-20 relative overflow-visible"
            >
                {/* Flowline background: Only visible on desktop */}
                <div className="absolute top-28 left-1/2 -translate-x-1/2 z-0 hidden md:block w-[70%] h-28">
                    <svg width="100%" height="80px">
                        <polyline
                            points="0,40 28%,40 33%,10 40%,40 67%,40 100%,40"
                            fill="none"
                            stroke="#21c4e7"
                            strokeWidth="6"
                            opacity="0.12"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <h2 className="text-4xl font-extrabold text-center mb-16 text-gradient-hero">
                    How It Works
                </h2>
                <div className="flex flex-col md:flex-row gap-14 justify-center">
                    {howItWorksSteps.map(({ icon: Icon, title, main, details, lottie }, idx) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: idx * 0.17 }}
                            whileHover={{
                                scale: 1.06,
                                boxShadow: "0 4px 24px 0px rgba(33, 196, 231, 0.25)",
                                borderColor: "#21c4e7"
                            }}
                            className="relative max-w-xs flex flex-col text-center rounded-2xl border-2 border-transparent 
                    bg-[#1f2d3dcc] backdrop-blur-[2px] p-7 shadow-2xl"
                            style={{ marginTop: idx % 2 ? '2rem' : 0 }}
                        >
                            {/* Steps number badge */}
                            <div
                                className="absolute -top-8 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center
                        w-12 h-12 rounded-full bg-gradient-to-br from-[#21c4e7] via-[#118c8d] to-[#4d5358] shadow-lg
                        font-bold text-lg text-white border-4 border-white/40"
                            >
                                {idx + 1}
                            </div>
                            {/* Animated icons/Lottie */}
                            <div className="mb-5 mt-7 flex justify-center items-center w-20 h-20 rounded-full bg-cyan-200/20 drop-shadow-lg">
                            <Lottie animationData={lottie} loop autoplay className="w-16 h-16" />
                            </div>
                            <h3 className="text-xl font-extrabold text-white mb-2">{title}</h3>
                            <div className="text-base font-semibold text-cyan-200 mb-2">{main}</div>
                            <div className="text-sm text-slate-300">{details}</div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA: Try Now button under steps */}
                {/* <div className="w-full flex justify-center mt-14">
                    <a
                        href="#start-migrating"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-[#21c4e7] via-[#118c8d] to-[#4d5358] rounded-full font-extrabold text-white shadow-lg text-lg hover:scale-105 transition focus:outline-none"
                    >
                        Try Now &rarr;
                    </a>
                </div> */}

                <style jsx>{`
        .text-gradient-hero {
            background: linear-gradient(90deg, #21c4e7 0%, #118c8d 50%, #4d5358 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .text-gradient-card {
            background: linear-gradient(90deg, #e9f8fe 35%, #21c4e7 70%, #fff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        `}</style>
            </section>




            {/* Animations */}
            <style jsx>{`
        @keyframes gradientBackground {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .animate-gradientBackground { background-size: 200% 200%; animation: gradientBackground 20s ease infinite; }
        @keyframes borderFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .animate-borderFlow { animation: borderFlow 4s linear infinite; }
        @keyframes iconPulse {
            0% { transform: scale(1); box-shadow: 0 0 0px rgba(33, 196, 231, 0.4); }
            50% { transform: scale(1.05); box-shadow: 0 0 15px rgba(33, 196, 231, 0.6); }
            100% { transform: scale(1); box-shadow: 0 0 0px rgba(33, 196, 231, 0.4); }
        }
        .animate-iconPulse { animation: iconPulse 2s infinite ease-in-out; }
        @keyframes pulseSlow {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.1); }
        }
        .animate-pulse-slow { animation: pulseSlow 3s ease-in-out infinite; }
        .text-gradient-dark-blue { background: linear-gradient(90deg, #0a2540, #153e75); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .text-gradient-dark-cyan { background: linear-gradient(90deg, #0d414d, #118c8d); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .text-dark-solid { color: #222f3e; }
        `}</style>
        </div>
    );
}
