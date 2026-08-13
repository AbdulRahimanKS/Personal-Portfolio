import React from 'react';
import Layout from '../components/Layout';

const PlaceholderPage = ({ title }) => {
  return (
    <Layout>
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ marginBottom: '16px' }}>{title}</h1>
          <p style={{ color: 'var(--on-surface-variant)' }}>This page is under construction.</p>
        </div>
      </section>
    </Layout>
  );
};

export const About = () => <PlaceholderPage title="About Me" />;
export const Skills = () => <PlaceholderPage title="My Skills" />;
export const Projects = () => <PlaceholderPage title="My Projects" />;
export const Experience = () => <PlaceholderPage title="My Experience" />;
export const Contact = () => <PlaceholderPage title="Contact Me" />;
