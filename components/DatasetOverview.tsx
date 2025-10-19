'use client'

import { useEffect, useState } from 'react'
import { BarChart3, MessageSquare, Users, Globe } from 'lucide-react'

interface Stats {
  total_posts: number
  total_comments: number
  subreddits: number
  languages: number
}

export function DatasetOverview() {
  const [stats, setStats] = useState<Stats | null>(null)

  useEffect(() => {
    fetch('/data/dataset_stats.json')
      .then(res => res.json())
      .then(data => setStats(data))
  }, [])

  if (!stats) return null

  const statCards = [
    {
      icon: BarChart3,
      value: stats.total_posts.toLocaleString(),
      label: 'Reddit Posts',
      color: 'bg-yankees-blue'
    },
    {
      icon: MessageSquare,
      value: stats.total_comments.toLocaleString(),
      label: 'Comments Analyzed',
      color: 'bg-cadet-blue'
    },
    {
      icon: Users,
      value: stats.subreddits,
      label: 'Communities',
      color: 'bg-deep-carrot-orange'
    },
    {
      icon: Globe,
      value: stats.languages,
      label: 'Languages',
      color: 'bg-slate-gray'
    }
  ]

  return (
    <section id="overview" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-maastricht-blue">
          Dataset Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statCards.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 border border-slate-gray hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
              >
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-maastricht-blue mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-gray">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-baby-powder rounded-xl p-8 border border-slate-gray hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold mb-4 text-maastricht-blue">Research Questions</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <div className="text-yankees-blue font-bold">1.</div>
              <p className="text-ebony">How do online communities self-correct health misinformation?</p>
            </div>
            <div className="flex gap-3">
              <div className="text-yankees-blue font-bold">2.</div>
              <p className="text-ebony">Who are the &quot;knowledge brokers&quot; providing accurate health information?</p>
            </div>
            <div className="flex gap-3">
              <div className="text-yankees-blue font-bold">3.</div>
              <p className="text-ebony">What patterns of peer support emerge in vulnerable communities?</p>
            </div>
            <div className="flex gap-3">
              <div className="text-yankees-blue font-bold">4.</div>
              <p className="text-ebony">Can we detect misinformation early through network analysis?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
