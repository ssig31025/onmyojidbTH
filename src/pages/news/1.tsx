import React from 'react';
import Layout from '@theme/Layout';

export default function NewsDetail(): JSX.Element {
  return (
    <Layout title="New SSR Shikigami: Amaterasu Arrives">
      <main className="container py-8">
        <article className="prose dark:prose-invert max-w-none">
          <h1>New SSR Shikigami: Amaterasu Arrives</h1>
          <p className="text-gray-500">2023-10-25 | New Arrival</p>
          <hr />
          <p>The Goddess of the Sun has descended. Learn more about her skills and lore.</p>
          <p>(This is a placeholder for the full news article content.)</p>
        </article>
      </main>
    </Layout>
  );
}
