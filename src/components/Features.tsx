import React from 'react';
import { LineChart, Map, Shield, Bell } from 'lucide-react';

const features = [
  {
    icon: LineChart,
    title: 'Real-time Analytics',
    description: 'Monitor and analyze crime patterns as they emerge with our advanced real-time tracking system.'
  },
  {
    icon: Map,
    title: 'Predictive Mapping',
    description: 'Visualize high-risk areas and predict potential criminal activities using AI-powered heat maps.'
  },
  {
    icon: Shield,
    title: 'Threat Assessment',
    description: 'Comprehensive risk analysis and threat assessment tools for proactive crime prevention.'
  },
  {
    icon: Bell,
    title: 'Instant Alerts',
    description: 'Receive immediate notifications about incidents in your area of interest.'
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features for Enhanced Security
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our comprehensive suite of tools empowers law enforcement and security professionals with data-driven insights.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-colors">
              <feature.icon className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}