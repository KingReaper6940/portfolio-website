"use client"

import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

interface Project {
    title: string
    description: string
    badge?: string
    technologies: string[]
    bgColor: string
    github?: string
    live?: string
    liveText?: string
}

export default function ProjectsPage() {
    const allProjects: Project[] = [
        {
            title: "AI App Creation Agency",
            description:
                "Revolutionary app creation agency leveraging artificial intelligence to build custom mobile and web applications for content creators. Features automated app development pipelines, AI-powered design systems, and innovative revenue-sharing models. Empowers creators to monetize their content through dedicated apps without technical expertise, handling everything from development to deployment and maintenance.",
            technologies: ["Next.js", "AI/ML", "React Native", "Node.js", "OpenAI API", "Stripe API", "Firebase"],
            bgColor: "bg-[#8B5CF6]",
            live: "https://v0-brillance-saa-s-landing-page-nine-teal.vercel.app/",
            liveText: "View Live Website",
        },
        {
            title: "Royale Recap",
            description:
                "Enter your Clash Royale player tag and instantly generate a personalized stats poster. Pulls your data through the Clash Royale API, analyzes your battle history, win rates, trophies, and achievements, then creates a beautiful downloadable poster showcasing your complete stats.",
            technologies: ["Next.js", "TypeScript", "Clash Royale API", "Canvas", "TailwindCSS", "Vercel"],
            bgColor: "bg-[#EF4444]",
            live: "https://www.royalerecap.com/",
            liveText: "View Live Website",
        },
        {
            title: "Cursor Prompt Enhancer",
            description:
                "Published VS Code/Cursor extension suite with 380+ downloads on Open VSX. Uses AI to refine developer prompts in real-time with 4.8+ star rating.",
            technologies: ["TypeScript", "VS Code API", "AI/ML", "Open VSX"],
            bgColor: "bg-[#8B5CF6]",
            github: "https://github.com/KingReaper6940/CursorEnhancer",
            live: "https://open-vsx.org/extension/VrishnViswaSathyamoorthy/cursor-prompt-enhancer",
            liveText: "View on Open VSX",
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
                "My first commissioned project — a sleek and professional website built for a modern management company. Developed using Next.js and deployed on Vercel, delivering fast performance, responsive design, and a seamless user experience that effectively showcases the company's services and brand.",
            technologies: ["Next.js", "TypeScript", "CSS", "JavaScript", "Vercel"],
            bgColor: "bg-[#F59E0B]",
            github: "https://github.com/KingReaper6940/project-one",
            live: "https://project-one-j8f2-adqr6d70e-kingreaper6940s-projects.vercel.app/",
            liveText: "View Live Website",
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

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="container mx-auto px-4 py-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-black text-white border-[3px] border-black rounded-full px-6 py-3 font-bold text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        All My <span className="bg-[#FFC224] text-black px-3 py-1">Projects</span>
                    </h1>
                    <p className="text-gray-600 text-lg">
                        {allProjects.length} innovative projects across AI/ML, mobile, and web development
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
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

                            <p className="text-sm text-black/80 mb-4 leading-relaxed">{project.description}</p>

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
                                        {project.liveText || "View Live Website"}
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
