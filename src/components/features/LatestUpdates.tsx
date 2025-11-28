import React from "react";
import Link from "@docusaurus/Link";

const updates = [
    {
        id: 1,
        title: "New SSR Shikigami: Amaterasu Arrives",
        date: "2023-10-25",
        category: "New Arrival",
    },
    {
        id: 2,
        title: "Patch Notes: Skill Balance Adjustments",
        date: "2023-10-18",
        category: "Patch Notes",
    },
    {
        id: 3,
        title: "Event Guide: Six Realms Gate",
        date: "2023-10-15",
        category: "Event",
    },
];

export function LatestUpdates() {
    return (
        <section className="container py-12 md:py-16 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold tracking-tight m-0">Latest Updates</h2>
                <Link to="/news" className="text-sm font-medium text-primary hover:underline flex items-center">
                    View All →
                </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {updates.map((update) => (
                    <Link
                        key={update.id}
                        to={`/news/${update.id}`}
                        className="group block space-y-3 rounded-lg border border-gray-200 dark:border-gray-700 p-5 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 no-underline hover:no-underline"
                    >
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-0.5 font-medium">
                                {update.category}
                            </span>
                            <span className="flex items-center">
                                📅 {update.date}
                            </span>
                        </div>
                        <h3 className="font-semibold leading-tight text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors m-0">
                            {update.title}
                        </h3>
                    </Link>
                ))}
            </div>
        </section>
    );
}
