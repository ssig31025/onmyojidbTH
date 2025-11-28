import React from 'react';
import Layout from '@theme/Layout';

export default function SoulsIndex(): JSX.Element {
  return (
    <Layout title="Soul Database" description="Catalog of all Souls">
      <main className="container py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Soul Database</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Complete catalog of souls with drop locations and set effects.
          </p>
        </div>
        <div className="p-8 text-center border rounded-xl bg-card">
          <p className="text-lg text-gray-500">Soul database is under construction.</p>
        </div>
      </main>
    </Layout>
  );
}
