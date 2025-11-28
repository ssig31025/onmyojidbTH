import React from "react";
import Link from "@docusaurus/Link";
// Docusaurus doesn't have lucide-react by default. 
// We can install it or use simple placeholders. 
// For now, I will use simple text/emoji placeholders to avoid dependency hell unless I install it.
// Or I can try to use the SVGs directly if I had them, but I don't.
// Let's use Emoji for now, it's safe and fast.

const features = [
    {
        title: "Shikigami Library",
        description: "Detailed stats, skills, and evolution materials for all characters.",
        icon: "👥", // Users
        href: "/shikigami",
        color: "text-blue-500",
    },
    {
        title: "Soul Database",
        description: "Complete catalog of souls with drop locations and set effects.",
        icon: "💿", // Disc
        href: "/souls",
        color: "text-purple-500",
    },
    {
        title: "Game Modes",
        description: "Guides for Secret Zones, Assembly Bosses, and PvP Duel.",
        icon: "⚔️", // Sword
        href: "/docs/modes", // Pointing to docs for guides
        color: "text-red-500",
    },
    {
        title: "Tools & Calcs",
        description: "Team builder, speed tuner, and damage calculators.",
        icon: "🧮", // Calculator
        href: "/tools",
        color: "text-green-500",
    },
];

export function FeatureGrid() {
    return (
        <section className="container py-12 md:py-16">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => (
                    <Link
                        key={feature.title}
                        to={feature.href}
                        className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-card p-6 transition-all hover:shadow-md hover:border-primary/50 no-underline hover:no-underline block"
                    >
                        <div className="flex flex-col gap-4">
                            <div className={`p-2 w-fit rounded-md bg-gray-100 dark:bg-gray-800 text-2xl`}>
                                {feature.icon}
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors m-0">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 m-0">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
