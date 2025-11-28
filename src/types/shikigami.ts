export type Rarity = "SP" | "SSR" | "SR" | "R" | "N" | "SSN" | "UR" | "A" | "M";

export interface LevelUpEffect {
    level: number;
    description: string;
}

export interface Skill {
    name: string;
    icon: string; // URL or placeholder
    type: "Normal" | "Passive" | "Active";
    orbCost: number;
    cooldown?: number;
    description: string;
    levelUpEffects: LevelUpEffect[];
}

export interface Stats {
    attack: string; // e.g. "S"
    health: string;
    defense: string;
    speed: string; // e.g. "119"
    crit: string; // e.g. "10%"
    critDmg: string; // e.g. "150%"
    effectHit: string; // e.g. "0%"
    effectRes: string; // e.g. "0%"
}

export interface Shikigami {
    id: string;
    name: string;
    rarity: Rarity;
    role: string[]; // e.g. ["DPS", "Control"]
    icon: string; // URL
    image: string; // Full body art URL
    bio: string;
    stats: Stats;
    skills: Skill[];
}
