import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Hero } from '@site/src/components/features/Hero';
import { FeatureGrid } from '@site/src/components/features/FeatureGrid';
import { LatestUpdates } from '@site/src/components/features/LatestUpdates';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Onmyoji Shikigami Database">
      <main>
        <Hero />
        <FeatureGrid />
        <LatestUpdates />
      </main>
    </Layout>
  );
}
