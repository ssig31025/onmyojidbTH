import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const updates = [
  {
    id: 1,
    title: "New SSR Shikigami: Amaterasu Arrives",
    date: "2023-10-25",
    category: "New Arrival",
    excerpt: "The Goddess of the Sun has descended. Learn more about her skills and lore."
  },
  {
    id: 2,
    title: "Patch Notes: Skill Balance Adjustments",
    date: "2023-10-18",
    category: "Patch Notes",
    excerpt: "Several Shikigami have received balance changes in this update."
  },
  {
    id: 3,
    title: "Event Guide: Six Realms Gate",
    date: "2023-10-15",
    category: "Event",
    excerpt: "A comprehensive guide to the new Six Realms Gate event."
  },
];

export default function NewsIndex(): JSX.Element {
  return (
    <Layout title="News" description="Latest updates and news">
      <main className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Latest News</h1>
        <div className="grid gap-6">
          {updates.map((update) => (
            <div key={update.id} className="border p-6 rounded-lg shadow-sm bg-card">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold">
                  {update.category}
                </span>
                <span>{update.date}</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                <Link to={`/news/${update.id}`} className="hover:text-primary transition-colors">
                  {update.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {update.excerpt}
              </p>
              <Link to={`/news/${update.id}`} className="text-primary font-bold hover:underline">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
