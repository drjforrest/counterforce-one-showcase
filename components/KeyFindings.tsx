import { CheckCircle, AlertTriangle, Heart, BookOpen } from 'lucide-react'

const findings = [
  {
    icon: CheckCircle,
    color: 'text-cadet-blue',
    bg: 'bg-baby-powder',
    title: 'Communities Self-Correct Effectively',
    description: 'Even posts with 2,000+ upvotes receive constructive criticism. The "U=U" post shows accurate science reinforced by community adding context about trust and adherence.',
    impact: 'Community adds protective context to health claims'
  },
  {
    icon: AlertTriangle,
    color: 'text-deep-carrot-orange',
    bg: 'bg-baby-powder',
    title: 'Subtle Misinformation is Challenging',
    description: 'The "HIV is life altering" post contains real science with legitimate citations, but alarmist framing suggests treatment failure.',
    impact: 'Hard to debunk "partially true" claims - mixed community response'
  },
  {
    icon: Heart,
    color: 'text-medium-vermilion',
    bg: 'bg-baby-powder',
    title: 'Peer Support Networks Are Powerful',
    description: '30+ year HIV survivors mentor newly diagnosed individuals, combining practical advice with emotional support.',
    impact: 'Knowledge flows naturally through community relationships'
  },
  {
    icon: BookOpen,
    color: 'text-yankees-blue',
    bg: 'bg-baby-powder',
    title: 'Knowledge Gaps Persist',
    description: 'PrEP/condoms discussion reveals some don\'t know PrEP only prevents HIV. Community self-educates about drug-resistant gonorrhea.',
    impact: 'Ongoing health literacy need, but community fills gaps'
  }
]

export function KeyFindings() {
  return (
    <section id="findings" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-maastricht-blue">
          Key Findings
        </h2>
        <p className="text-center text-slate-gray mb-12 max-w-2xl mx-auto">
          Preliminary insights from analyzing 11,000+ comments across health discussions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {findings.map((finding, idx) => {
            const Icon = finding.icon
            return (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border border-slate-gray hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                <div className={`${finding.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-4 border ${finding.color.replace('text-', 'border-')}`}>
                  <Icon className={`w-7 h-7 ${finding.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-maastricht-blue mb-3">
                  {finding.title}
                </h3>
                <p className="text-ebony mb-4 leading-relaxed">
                  {finding.description}
                </p>
                <div className="bg-baby-powder rounded-lg p-3 border border-slate-gray">
                  <div className="text-xs font-semibold text-slate-gray mb-1">Impact</div>
                  <div className="text-sm text-maastricht-blue">{finding.impact}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
