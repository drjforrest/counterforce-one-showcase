'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Plotly to avoid SSR issues
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

interface NetworkDiagramProps {
  postId: string
}

// Use Record for flexible Plotly data structure
interface PlotlyData {
  data: Record<string, unknown>[]
  layout: Record<string, unknown>
}

type NetworkType = 'topic_cluster' | 'temporal_flow' | 'stance_sentiment'

const networkTypes: { value: NetworkType; label: string; description: string }[] = [
  {
    value: 'topic_cluster',
    label: 'Topic Clustering',
    description: 'Comments grouped by semantic similarity'
  },
  {
    value: 'temporal_flow',
    label: 'Temporal Flow',
    description: 'Conversation evolution over time'
  },
  {
    value: 'stance_sentiment',
    label: 'Stance & Sentiment',
    description: 'Agreement/disagreement patterns'
  }
]

export function NetworkDiagram({ postId }: NetworkDiagramProps) {
  const [networkData, setNetworkData] = useState<PlotlyData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<NetworkType>('topic_cluster')

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(`/data/network_${postId}_${selectedType}.json`)
      .then(res => {
        if (!res.ok) throw new Error('Network data not found')
        return res.json()
      })
      .then(data => {
        setNetworkData(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [postId, selectedType])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96 bg-baby-powder rounded-lg">
        <div className="text-slate-gray">Loading network diagram...</div>
      </div>
    )
  }

  // Render network selector and diagram
  return (
    <div className="bg-baby-powder rounded-lg border border-slate-gray overflow-hidden">
      {/* Network Type Selector */}
      <div className="p-4 border-b border-slate-gray bg-white">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-slate-gray">
            Network Visualization Type
          </label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as NetworkType)}
            className="px-3 py-2 border border-slate-gray rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cadet-blue"
          >
            {networkTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label} - {type.description}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Network Diagram or Error */}
      {error || !networkData ? (
        <div className="flex items-center justify-center h-96 bg-baby-powder">
          <div className="text-slate-gray">
            {error ? `Error: ${error}` : 'Network diagram not available'}
          </div>
        </div>
      ) : (
        <Plot
          data={networkData.data as any}
          layout={{
            ...networkData.layout,
            paper_bgcolor: '#fcfcfc',
            plot_bgcolor: '#fcfcfc',
            font: {
              ...(networkData.layout.font as any),
              family: 'inherit'
            },
            margin: {
              l: 20,
              r: 20,
              t: 60,
              b: 20
            }
          } as any}
          config={{
            responsive: true,
            displayModeBar: true,
            displaylogo: false,
            modeBarButtonsToRemove: ['toImage', 'sendDataToCloud', 'lasso2d', 'select2d']
          }}
          style={{ width: '100%', height: '600px' }}
        />
      )}
    </div>
  )
}
