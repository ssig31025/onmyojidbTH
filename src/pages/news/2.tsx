import React from 'react';
import Layout from '@theme/Layout';

export default function NewsDetail(): JSX.Element {
  return (
    <Layout title="Patch Notes: Skill Balance Adjustments">
      <main className="container py-8">
        <article className="prose dark:prose-invert max-w-none">
          <h1>Patch Notes: Skill Balance Adjustments</h1>
          <p className="text-gray-500">2023-10-18 | Patch Notes</p>
          <hr />
          <p>Several Shikigami have received balance changes in this update.</p>
          <p>(This is a placeholder for the full news article content.)</p>
        </article>
      </main>
    </Layout>
  );
}
