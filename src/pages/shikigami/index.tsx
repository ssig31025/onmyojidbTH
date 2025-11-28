import React, { useMemo } from 'react';
import Layout from '@theme/Layout';
import { shikigamiData } from '@site/src/data/shikigami';
import { ShikigamiCard } from '@site/src/components/shikigami/ShikigamiCard';
import { Rarity } from '@site/src/types/shikigami';

const RARITY_ORDER: Rarity[] = ["UR", "SP", "SSR", "SR", "R", "N", "SSN", "M"];

export default function ShikigamiList(): JSX.Element {
  const [selectedLetter, setSelectedLetter] = React.useState<string | null>(null);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [selectedRarity, setSelectedRarity] = React.useState<Rarity | 'All'>('All');

  const alphabet = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const filterRarities: (Rarity | 'All')[] = ['All', 'UR', 'SP', 'SSR', 'SR', 'R', 'N', 'SSN', 'M'];

  const groupedShikigami = useMemo(() => {
    // 1. Filter data first
    let filteredData = [...shikigamiData];

    if (selectedLetter) {
      if (selectedLetter === '#') {
        filteredData = filteredData.filter(s => !/^[A-Z]/i.test(s.name));
      } else {
        filteredData = filteredData.filter(s => s.name.toUpperCase().startsWith(selectedLetter));
      }
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredData = filteredData.filter(s => s.name.toLowerCase().includes(query));
    }

    if (selectedRarity !== 'All') {
      filteredData = filteredData.filter(s => s.rarity === selectedRarity);
    }

    // 2. Sort alphabetically
    filteredData.sort((a, b) => a.name.localeCompare(b.name));

    // 3. Group by Rarity
    const groups: Record<string, typeof shikigamiData> = {};
    RARITY_ORDER.forEach(rarity => {
      groups[rarity] = [];
    });

    filteredData.forEach(shikigami => {
      if (groups[shikigami.rarity]) {
        groups[shikigami.rarity].push(shikigami);
      } else {
        if (!groups['Other']) groups['Other'] = [];
        groups['Other'].push(shikigami);
      }
    });

    return groups;
  }, [selectedLetter, searchQuery, selectedRarity]);

  return (
    <Layout
      title="Shikigami List"
      description="List of all Shikigami">
      <main className="container py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Shikigami Library</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Browse all Shikigami by Rarity
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <input
              type="text"
              placeholder="Search Shikigami..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Rarity Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {filterRarities.map((rarity) => (
              <button
                key={rarity}
                onClick={() => setSelectedRarity(rarity)}
                className={`px-4 py-2 rounded-lg font-bold transition-colors ${selectedRarity === rarity
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {rarity === 'All' ? 'All Rarities' : rarity}
              </button>
            ))}
          </div>

          {/* A-Z Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedLetter(null)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${selectedLetter === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              All
            </button>
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter === selectedLetter ? null : letter)}
                className={`w-8 h-8 rounded-md text-sm font-medium transition-colors flex items-center justify-center ${selectedLetter === letter
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {RARITY_ORDER.map((rarity) => {
            const shikigamiList = groupedShikigami[rarity];
            if (!shikigamiList || shikigamiList.length === 0) return null;

            return (
              <section key={rarity}>
                <h2 className="text-3xl font-bold mb-6 border-b pb-2 flex items-center gap-2">
                  <span className={`
                    px-3 py-1 rounded text-white text-lg
                    ${rarity === 'UR' ? 'bg-gradient-to-r from-red-600 to-purple-600' : ''}
                    ${rarity === 'SP' ? 'bg-red-600' : ''}
                    ${rarity === 'SSR' ? 'bg-orange-500' : ''}
                    ${rarity === 'SR' ? 'bg-purple-500' : ''}
                    ${rarity === 'R' ? 'bg-blue-500' : ''}
                    ${rarity === 'N' ? 'bg-gray-500' : ''}
                    ${rarity === 'SSN' ? 'bg-gray-400' : ''}
                    ${rarity === 'M' ? 'bg-teal-500' : ''}
                  `}>
                    {rarity}
                  </span>
                  <span className="text-gray-500 text-lg font-normal">({shikigamiList.length})</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {shikigamiList.map((shikigami) => (
                    <ShikigamiCard key={shikigami.id} data={shikigami} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}
