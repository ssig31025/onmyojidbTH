import React from 'react';
import Layout from '@theme/Layout';

export default function ToolsIndex(): JSX.Element {
  return (
    <Layout title="Tools" description="Onmyoji Tools and Calculators">
      <main className="container py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Tools & Calculators</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Team builder, speed tuner, and damage calculators.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 border rounded-xl bg-card hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Team Builder</h3>
            <p className="text-gray-500">Create and share team compositions.</p>
          </div>
          <div className="p-6 border rounded-xl bg-card hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Speed Calculator</h3>
            <p className="text-gray-500">Tune your team's speed order.</p>
          </div>
          <div className="p-6 border rounded-xl bg-card hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Damage Simulator</h3>
            <p className="text-gray-500">Calculate expected damage output.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
