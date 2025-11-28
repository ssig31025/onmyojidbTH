import React from "react";
import Link from "@docusaurus/Link";
import { Button } from "@site/src/components/ui/button";
// Lucide icons might need to be installed or replaced. For now, using simple text or SVGs if needed.
// Docusaurus doesn't include lucide-react by default.
// I will assume for now we can use simple text or install lucide-react later if requested.
// Replacing ArrowRight with a simple -> for now to avoid dependency issues unless I install it.

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background py-20 md:py-32 text-center">
            <div className="container relative z-10 flex flex-col items-center">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                    Master the Art of <span className="text-primary">Onmyoji</span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400 sm:text-xl mb-10">
                    The most comprehensive database for Shikigami, Souls, and Strategy.
                    Built for the global community.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button asChild size="lg" className="h-12 px-8 text-base no-underline hover:no-underline text-white">
                        <Link to="/shikigami">
                            Explore Shikigami →
                        </Link>
                    </Button>
                    {/* 
                    <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
                        <Link to="/tools/team-builder">
                            Build Team
                        </Link>
                    </Button>
                    */}
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/10 blur-3xl pointer-events-none" />
        </section>
    );
}
