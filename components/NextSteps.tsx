import { Clock, TrendingUp, Rocket } from 'lucide-react'

const phases = [
  {
    icon: Clock,
    title: 'Short Term (2-4 Weeks)',
    color: 'bg-cadet-blue',
    items: [
      'Annotate 20-30 posts for robust ground truth',
      'Train ML classifier on annotated data',
      'Expand network analysis to all 30 top posts',
      'Calculate inter-rater reliability'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Medium Term (1-2 Months)',
    color: 'bg-yankees-blue',
    items: [
      'Temporal analysis: how does misinformation spread over time?',
      'Knowledge broker analysis: identify key educators at scale',
      'Intervention design recommendations',
      'Cross-community comparison'
    ]
  },
  {
    icon: Rocket,
    title: 'Long Term (3-6 Months)',
    color: 'bg-deep-carrot-orange',
    items: [
      'Cross-platform comparison (Reddit vs other social media)',
      'Automated early warning system for misinformation',
      'Partnership with public health organizations',
      'Academic publication and conference presentations'
    ]
  }
]

export function NextSteps() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-maastricht-blue">
          Research Roadmap
        </h2>
        <p className="text-center text-slate-gray mb-12 max-w-2xl mx-auto">
          Clear milestones for expanding this research
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase, idx) => {
            const Icon = phase.icon
            return (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border border-slate-gray hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                <div className={`${phase.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-maastricht-blue mb-4">
                  {phase.title}
                </h3>
                <ul className="space-y-3">
                  {phase.items.map((item, iidx) => (
                    <li key={iidx} className="flex gap-2 text-sm text-ebony">
                      <input type="checkbox" className="mt-1 rounded text-yankees-blue" disabled />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
