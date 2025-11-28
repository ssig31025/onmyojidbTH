import React from "react";
import Link from "@docusaurus/Link";
import { Shikigami } from "@site/src/types/shikigami";
import { Badge } from "@site/src/components/ui/badge";

interface ShikigamiCardProps {
    data: Shikigami;
}

const rarityColors: Record<string, string> = {
    SP: "bg-red-600 text-white border-red-400",
    SSR: "bg-orange-500 text-white border-orange-300",
    SR: "bg-purple-500 text-white border-purple-300",
    R: "bg-blue-500 text-white border-blue-300",
    N: "bg-gray-500 text-white border-gray-300",
    SSN: "bg-pink-500 text-white border-pink-300",
    UR: "bg-indigo-600 text-white border-indigo-400",
};

export function ShikigamiCard({ data }: ShikigamiCardProps) {
    return (
        <Link to={`/shikigami/${data.id}`} className="group block no-underline hover:no-underline">
            <div className="relative overflow-hidden rounded-xl border border-solid border-gray-200 dark:border-gray-700 bg-card transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="aspect-square bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-muted-foreground relative overflow-hidden">
                    {data.icon || data.image ? (
                        <img
                            src={data.icon || data.image}
                            alt={data.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    ) : (
                        <span className="text-4xl font-bold opacity-20">{data.name[0]}</span>
                    )}
                </div>

                <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className={`${rarityColors[data.rarity]} font-bold border-none`}>
                            {data.rarity}
                        </Badge>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors m-0">
                        {data.name}
                    </h3>
                    <div className="flex gap-1 mt-2 flex-wrap">
                        {data.role.map((role) => (
                            <span key={role} className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                                {role}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
