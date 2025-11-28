import React from 'react';
import Layout from '@theme/Layout';

export default function NewsDetail(): JSX.Element {
  return (
    <Layout title="Event Guide: Six Realms Gate">
      <main className="container py-8">
        <article className="prose dark:prose-invert max-w-none">
          <h1>Event Guide: Six Realms Gate</h1>
          <p className="text-gray-500">2023-10-15 | Event</p>
          <hr />
          <p>A comprehensive guide to the new Six Realms Gate event.</p>
          <p>(This is a placeholder for the full news article content.)</p>
        </article>
      </main>
    </Layout>
  );
}
