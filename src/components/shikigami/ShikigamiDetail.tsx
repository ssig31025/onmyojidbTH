import React from 'react';
import Layout from '@theme/Layout';
import { Shikigami } from '@site/src/types/shikigami';
import { Badge } from '@site/src/components/ui/badge';

interface ShikigamiDetailProps {
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

import { TermPopup } from '@site/src/components/ui/TermPopup';

// Helper to parse description with custom term syntax: [[Term|Description]]
const parseDescription = (text: string) => {
    const parts = text.split(/(\[\[.*?\|.*?\]\])/g);
    return parts.map((part, index) => {
        const match = part.match(/^\[\[(.*?)\|(.*?)\]\]$/);
        if (match) {
            return <TermPopup key={index} term={match[1]} description={match[2]} />;
        }
        return <span key={index}>{part}</span>;
    });
};

export default function ShikigamiDetail({ data }: ShikigamiDetailProps): JSX.Element {
    return (
        <Layout title={data.name} description={data.bio}>
            <main className="container py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column: Image and Basic Info */}
                    <div className="md:col-span-1">
                        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-card shadow-sm">
                            <div className="aspect-[3/4] relative bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                {data.image ? (
                                    <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-6xl font-bold opacity-20">{data.name[0]}</span>
                                )}
                            </div>
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <h1 className="text-2xl font-bold m-0">{data.name}</h1>
                                    <Badge variant="outline" className={`${rarityColors[data.rarity]} font-bold border-none`}>
                                        {data.rarity}
                                    </Badge>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {data.role.map((role) => (
                                        <Badge key={role} variant="secondary">
                                            {role}
                                        </Badge>
                                    ))}
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 italic">{data.bio}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Stats and Skills */}
                    <div className="md:col-span-2 space-y-8">
                        {/* Stats */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 border-b pb-2">Stats</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {Object.entries(data.stats).map(([key, value]) => (
                                    <div key={key} className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center">
                                        <div className="text-sm text-gray-500 uppercase font-semibold">{key}</div>
                                        <div className="font-mono font-bold text-lg">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Skills */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 border-b pb-2">Skills</h2>
                            <div className="space-y-6">
                                {data.skills.map((skill, index) => (
                                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-card">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-md flex-shrink-0 flex items-center justify-center">
                                                {skill.icon ? (
                                                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-cover rounded-md" />
                                                ) : (
                                                    <span className="text-xs font-bold opacity-50">{skill.type[0]}</span>
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-lg font-bold m-0">{skill.name}</h3>
                                                    <Badge variant={skill.type === 'Passive' ? 'secondary' : 'default'}>
                                                        {skill.type}
                                                    </Badge>
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600 dark:text-gray-300 mb-2 whitespace-pre-wrap"
                                                    dangerouslySetInnerHTML={{ __html: skill.description }}
                                                />
                                                {skill.orbCost > 0 && (
                                                    <div className="text-xs font-semibold text-blue-500 mb-2">
                                                        Orb Cost: {skill.orbCost}
                                                    </div>
                                                )}
                                                {skill.cooldown !== undefined && (
                                                    <div className="text-xs font-semibold text-gray-500 mb-2">
                                                        Cooldown: {skill.cooldown} turns
                                                    </div>
                                                )}
                                                {skill.levelUpEffects && skill.levelUpEffects.length > 0 && (
                                                    <div className="mt-3 bg-gray-50 dark:bg-gray-800/50 p-3 rounded text-sm">
                                                        <div className="font-semibold mb-1">Level Up:</div>
                                                        <ul className="list-disc list-inside space-y-1 m-0 p-0">
                                                            {skill.levelUpEffects.map((effect, i) => (
                                                                <li key={i}>
                                                                    <span className="font-medium">Lv.{effect.level}:</span> {parseDescription(effect.description)}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
