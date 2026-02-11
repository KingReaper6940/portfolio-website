"use client"

import { X, ExternalLink, Github } from "lucide-react"
import { useEffect } from "react"

interface Project {
    title: string
    description: string
    badge?: string
    technologies: string[]
    bgColor: string
    github?: string
    live?: string
}

interface AllProjectsModalProps {
    isOpen: boolean
    onClose: () => void
}

export function AllProjectsModal({ isOpen, onClose }: AllProjectsModalProps) {
    const allProjects: Project[] = [
        {
            title: "AI App Creation Agency",
            description:
                "Revolutionary app creation agency leveraging artificial intelligence to build custom mobile and web applications for content creators. Features automated app development pipelines, AI-powered design systems, and innovative revenue-sharing models. Empowers creators to monetize their content through dedicated apps without technical expertise, handling everything from development to deployment and maintenance.",
            technologies: ["Next.js", "AI/ML", "React Native", "Node.js", "OpenAI API", "Stripe API", "Firebase"],
            bgColor: "bg-[#8B5CF6]",
            live: "https://v0-brillance-saa-s-landing-page-nine-teal.vercel.app/",
        },
        {
            title: "Royale Recap",
            description:
                "Enter your Clash Royale player tag and instantly generate a personalized stats poster. Pulls your data through the Clash Royale API, analyzes your battle history, win rates, trophies, and achievements, then creates a beautiful downloadable poster showcasing your complete stats.",
            technologies: ["Next.js", "TypeScript", "Clash Royale API", "Canvas", "TailwindCSS", "Vercel"],
            bgColor: "bg-[#EF4444]",
            live: "https://www.royalerecap.com/",
        },
        {
            title: "Aura",
            badge: "🏆 Award Winner",
            description:
                "Award-winning mental health and wellness application that won the University of West London National Science Fair. A comprehensive platform that uses advanced data visualization and machine learning to help users track their emotional patterns and provide personalized wellness insights. Features real-time mood tracking, AI-powered recommendations, and comprehensive analytics dashboard for mental health professionals.",
            technologies: ["React", "D3.js", "Firebase", "Material-UI", "Chart.js", "Machine Learning"],
            bgColor: "bg-[#10B981]",
            github: "https://github.com/KingReaper6940/Aura",
        },
        {
            title: "Vynn AIO Content",
            description:
                "All-in-one content creation platform powered by AI that generates, optimizes, and manages digital content across multiple formats. Streamlines content workflows for creators and businesses with intelligent automation and comprehensive content management tools.",
            technologies: ["Next.js", "Python", "OpenAI API", "TypeScript", "TailwindCSS", "PostgreSQL"],
            bgColor: "bg-[#F59E0B]",
            github: "https://github.com/KingReaper6940/Vynnn",
        },
        {
            title: "Clone Date AI",
            description:
                "Innovative AI dating application that creates personalized dating experiences through intelligent matching algorithms and conversation starters. Built with modern web technologies to revolutionize how people connect and find meaningful relationships.",
            technologies: ["React", "Node.js", "AI/ML", "MongoDB", "Express", "Socket.io"],
            bgColor: "bg-[#EF4444]",
            github: "https://github.com/rishabhsai/clone-date-ai",
        },
        {
            title: "Briefly",
            description:
                "AI-powered summarization tool that transforms lengthy content into concise, digestible summaries. Features intelligent content analysis and customizable summary lengths for various document types, making information consumption more efficient.",
            technologies: ["Python", "NLP", "FastAPI", "React", "OpenAI API", "TensorFlow"],
            bgColor: "bg-[#38BDF8]",
            github: "https://github.com/rishabhsai/briefly",
        },
        {
            title: "Hidaya Spirit Guide",
            description:
                "Spiritual guidance application that provides personalized insights and recommendations based on Islamic teachings. Features AI-powered content generation and community-driven spiritual resources to help users on their spiritual journey.",
            technologies: ["React Native", "Firebase", "AI/ML", "Node.js", "MongoDB"],
            bgColor: "bg-[#8B5CF6]",
            github: "https://github.com/rishabhsai/-Hidaya-spiritguide/tree/Viswa's-Branch",
        },
        {
            title: "TrendFlip AI",
            description:
                "AI-powered e-commerce platform that analyzes market trends and consumer behavior to help businesses optimize their product strategies and maximize sales potential.",
            technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "OpenAI API"],
            bgColor: "bg-[#10B981]",
        },
        {
            title: "Project One",
            description:
                "A sleek and professional website built for Project One, a modern management company. Developed using Next.js and deployed on Vercel, the site delivers fast performance, responsive design, and a seamless user experience. It effectively showcases the company's services and brand with a clean, intuitive layout.",
            technologies: ["Next.js", "TypeScript", "CSS", "JavaScript", "Vercel"],
            bgColor: "bg-[#F59E0B]",
            github: "https://github.com/KingReaper6940/project-one",
            live: "https://project-one-j8f2-adqr6d70e-kingreaper6940s-projects.vercel.app/",
        },
        {
            title: "Veswo Bot",
            description:
                "Advanced conversational AI assistant built with natural language processing capabilities, designed to provide intelligent responses and automated customer support solutions.",
            technologies: ["Python", "NLP", "FastAPI", "React", "MongoDB"],
            bgColor: "bg-[#EF4444]",
            github: "https://github.com/KingReaper6940/Veswo1-bot",
        },
        {
            title: "Nittany Eats",
            description:
                "Comprehensive food delivery platform connecting Penn State students with local restaurants, featuring real-time order tracking, payment integration, and personalized recommendations.",
            technologies: ["React Native", "Node.js", "Express", "MongoDB", "Stripe API"],
            bgColor: "bg-[#38BDF8]",
            github: "https://github.com/KingReaper6940/nittany-eats",
        },
    ]

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

            {/* Modal */}
            <div className="relative min-h-screen flex items-center justify-center p-4">
                <div className="relative bg-white border-[3px] border-black rounded-[32px] w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                    {/* Header */}
                    <div className="sticky top-0 bg-white border-b-[3px] border-black p-6 flex items-center justify-between z-10">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold">
                                All My <span className="bg-[#FFC224] text-black px-3 py-1">Projects</span>
                            </h2>
                            <p className="text-gray-600 mt-2">{allProjects.length} innovative projects across AI/ML, mobile, and web development</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors border-2 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5"
                            aria-label="Close modal"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Projects Grid */}
                    <div className="overflow-y-auto p-6 max-h-[calc(90vh-120px)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {allProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className={`${project.bgColor} border-[3px] border-black rounded-[24px] p-6 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all`}
                                >
                                    {project.badge && (
                                        <div className="mb-3">
                                            <span className="text-black text-sm font-bold bg-white/40 px-3 py-1.5 rounded-full border-2 border-black">
                                                {project.badge}
                                            </span>
                                        </div>
                                    )}

                                    <h3 className="text-xl font-bold mb-2 text-black">{project.title}</h3>

                                    <p className="text-sm text-black/80 mb-4 leading-relaxed line-clamp-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="text-xs bg-black/10 text-black font-medium px-2.5 py-1 rounded-full border border-black/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-black font-semibold text-sm hover:gap-3 transition-all bg-black/10 hover:bg-black/20 px-4 py-2 rounded-full border-2 border-black/30"
                                            >
                                                View on GitHub
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-black font-semibold text-sm hover:gap-3 transition-all bg-white/40 hover:bg-white/60 px-4 py-2 rounded-full border-2 border-black/30"
                                            >
                                                Try It Live
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
