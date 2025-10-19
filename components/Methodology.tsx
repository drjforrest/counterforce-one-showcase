import { Database, Network, Brain, Users } from 'lucide-react'

const steps = [
  {
    icon: Database,
    title: 'Data Collection',
    points: [
      'Reddit API (PRAW) for public health discussions',
      'PostgreSQL with pgvector for semantic search',
      'Multilingual content support (4 languages)',
      'Time period: 2024-2025'
    ]
  },
  {
    icon: Brain,
    title: 'Classification',
    points: [
      'LGBTQ+ content classifier',
      'Health misinformation scorer',
      'Language detection',
      'Vector embeddings for similarity'
    ]
  },
  {
    icon: Network,
    title: 'Network Analysis',
    points: [
      'User interaction graphs',
      'Community detection algorithms',
      'Centrality metrics for knowledge brokers',
      'Reply relationship mapping'
    ]
  },
  {
    icon: Users,
    title: 'Human Annotation',
    points: [
      'Ground truth dataset (4 key posts)',
      'Accuracy labeling',
      'Severity assessment',
      'Community response coding'
    ]
  }
]

export function Methodology() {
  return (
    <section id="methodology" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-maastricht-blue">
          Methodology
        </h2>
        <p className="text-center text-slate-gray mb-12 max-w-2xl mx-auto">
          A multi-stage research pipeline combining automated analysis with human expertise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border border-slate-gray hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                <div className="bg-yankees-blue w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-maastricht-blue mb-3">
                  {step.title}
                </h3>
                <ul className="space-y-2">
                  {step.points.map((point, pidx) => (
                    <li key={pidx} className="text-sm text-ebony flex gap-2">
                      <span className="text-yankees-blue mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-gray">
          <h3 className="text-xl font-semibold mb-4 text-maastricht-blue">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { name: 'Python', color: 'bg-yankees-blue text-white' },
              { name: 'PostgreSQL', color: 'bg-cadet-blue text-white' },
              { name: 'pgvector', color: 'bg-medium-vermilion text-white' },
              { name: 'NetworkX', color: 'bg-deep-carrot-orange text-white' },
              { name: 'PRAW', color: 'bg-tigers-eye text-white' },
              { name: 'Transformers', color: 'bg-maastricht-blue text-white' },
              { name: 'Sentence-Transformers', color: 'bg-yankees-blue text-white' },
              { name: 'Plotly', color: 'bg-cadet-blue text-white' },
              { name: 'Next.js', color: 'bg-ebony text-white' },
              { name: 'TypeScript', color: 'bg-slate-gray text-white' }
            ].map(tech => (
              <span key={tech.name} className={`${tech.color} px-3 py-1 rounded-full text-sm font-medium`}>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
