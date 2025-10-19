'use client'

import { useEffect, useState } from 'react'
import { CheckCircle, AlertTriangle, XCircle, MinusCircle, MessageSquare, ChevronDown, ChevronUp, Network } from 'lucide-react'
import { NetworkDiagram } from './NetworkDiagram'

interface Comment {
  comment_id: string
  author: string
  body: string
  score: number
  created_utc: string
  parent_id: string
}

interface Post {
  post_id: string
  title: string
  selftext: string
  author: string
  created_utc: string
  score: number
  num_comments: number
  annotation_type: string
  accuracy_label: string
  severity: number
  community_response: string
  notes: string
  comments: Comment[]
}

const accuracyConfig = {
  accurate: { icon: CheckCircle, color: 'text-cadet-blue', bg: 'bg-baby-powder', border: 'border-cadet-blue' },
  partially_accurate: { icon: AlertTriangle, color: 'text-medium-vermilion', bg: 'bg-baby-powder', border: 'border-medium-vermilion' },
  inaccurate: { icon: XCircle, color: 'text-deep-carrot-orange', bg: 'bg-baby-powder', border: 'border-deep-carrot-orange' },
  not_applicable: { icon: MinusCircle, color: 'text-slate-gray', bg: 'bg-baby-powder', border: 'border-slate-gray' }
}

const severityColors = ['bg-cadet-blue', 'bg-cadet-blue', 'bg-medium-vermilion', 'bg-deep-carrot-orange', 'bg-deep-carrot-orange', 'bg-tigers-eye']

function PostCard({ post }: { post: Post; index: number }) {
  const [showComments, setShowComments] = useState(false)
  const [showFullPost, setShowFullPost] = useState(false)
  const [showNetwork, setShowNetwork] = useState(false)
  const config = accuracyConfig[post.accuracy_label as keyof typeof accuracyConfig] || accuracyConfig.not_applicable
  const Icon = config.icon

  // Check if post is long (over 400 characters)
  const POST_PREVIEW_LENGTH = 400
  const isLongPost = post.selftext && post.selftext.length > POST_PREVIEW_LENGTH
  const displayText = (isLongPost && !showFullPost)
    ? post.selftext.substring(0, POST_PREVIEW_LENGTH) + '...'
    : post.selftext

  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className={`bg-white rounded-xl shadow-lg border-2 ${config.border} p-6 hover:shadow-2xl transition-shadow duration-300`}>
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`${config.bg} ${config.color} p-3 rounded-lg border ${config.border}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-maastricht-blue mb-2">
            {post.title}
          </h3>
          <div className="flex gap-4 text-sm text-slate-gray mb-2">
            <span className="font-medium">u/{post.author}</span>
            <span>•</span>
            <span>{formatDate(post.created_utc)}</span>
          </div>
          <div className="flex gap-4 text-sm text-slate-gray">
            <span>↑ {post.score.toLocaleString()} upvotes</span>
            <MessageSquare className="w-4 h-4 inline mr-1" />
            <span>{post.num_comments} comments</span>
          </div>
        </div>
      </div>

      {/* Original Post Content */}
      <div className="bg-baby-powder rounded-lg p-4 mb-4 border border-slate-gray hover:shadow-md transition-all duration-200">
        <div className="text-xs font-semibold text-slate-gray mb-2">Original Post</div>
        <p className="text-sm text-ebony leading-relaxed whitespace-pre-wrap">
          {displayText}
        </p>
        {isLongPost && (
          <button
            onClick={() => setShowFullPost(!showFullPost)}
            className="mt-3 text-sm font-semibold text-yankees-blue hover:text-maastricht-blue transition-colors flex items-center gap-1"
          >
            {showFullPost ? (
              <>Show less <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>Show more <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        )}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-baby-powder rounded-lg p-3 border border-slate-gray hover:shadow-md transition-all duration-200">
          <div className="text-xs text-slate-gray mb-1">Accuracy</div>
          <div className={`text-sm font-semibold ${config.color}`}>
            {post.accuracy_label.replace(/_/g, ' ')}
          </div>
        </div>
        <div className="bg-baby-powder rounded-lg p-3 border border-slate-gray hover:shadow-md transition-all duration-200">
          <div className="text-xs text-slate-gray mb-1">Severity</div>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${severityColors[post.severity]}`} />
            <span className="text-sm font-semibold text-ebony">{post.severity}/5</span>
          </div>
        </div>
      </div>

      <div className="bg-baby-powder rounded-lg p-3 mb-4 border border-slate-gray hover:shadow-md transition-all duration-200">
        <div className="text-xs text-slate-gray mb-1">Community Response</div>
        <div className="text-sm font-medium text-ebony capitalize">
          {post.community_response}
        </div>
      </div>

      {/* Analysis Notes */}
      <div className="bg-baby-powder border border-yankees-blue rounded-lg p-4 mb-4 hover:shadow-md transition-all duration-200">
        <div className="text-xs font-semibold text-maastricht-blue mb-2">Analysis Notes</div>
        <p className="text-sm text-ebony leading-relaxed">
          {post.notes}
        </p>
      </div>

      {/* Comments Toggle */}
      {post.comments && post.comments.length > 0 && (
        <div className="mb-4">
          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center justify-between w-full bg-baby-powder hover:bg-gray-100 hover:shadow-md border border-slate-gray rounded-lg p-3 transition-all duration-200"
          >
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-yankees-blue" />
              <span className="text-sm font-semibold text-yankees-blue">
                Top Comments ({post.comments.length})
              </span>
            </div>
            {showComments ? (
              <ChevronUp className="w-4 h-4 text-yankees-blue" />
            ) : (
              <ChevronDown className="w-4 h-4 text-yankees-blue" />
            )}
          </button>

          {/* Comments Section */}
          {showComments && (
            <div className="mt-3 space-y-3">
              {post.comments.map((comment) => (
                <div
                  key={comment.comment_id}
                  className="bg-baby-powder border border-slate-gray rounded-lg p-4 hover:shadow-md hover:border-yankees-blue transition-all duration-200"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex items-center gap-2 text-xs text-slate-gray">
                      <span className="font-semibold text-yankees-blue">u/{comment.author}</span>
                      <span>•</span>
                      <span>↑ {comment.score.toLocaleString()}</span>
                      <span>•</span>
                      <span>{formatDate(comment.created_utc)}</span>
                    </div>
                  </div>
                  <p className="text-sm text-ebony leading-relaxed whitespace-pre-wrap">
                    {comment.body}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Network Diagram Toggle */}
      <div className="mb-4">
        <button
          onClick={() => setShowNetwork(!showNetwork)}
          className="flex items-center justify-between w-full bg-baby-powder hover:bg-gray-100 hover:shadow-md border border-slate-gray rounded-lg p-3 transition-all duration-200"
        >
          <div className="flex items-center gap-2">
            <Network className="w-4 h-4 text-yankees-blue" />
            <span className="text-sm font-semibold text-yankees-blue">
              Comment Network Diagram
            </span>
          </div>
          {showNetwork ? (
            <ChevronUp className="w-4 h-4 text-yankees-blue" />
          ) : (
            <ChevronDown className="w-4 h-4 text-yankees-blue" />
          )}
        </button>

        {/* Network Diagram */}
        {showNetwork && (
          <div className="mt-3">
            <NetworkDiagram postId={post.post_id} />
          </div>
        )}
      </div>
    </div>
  )
}

export function CaseStudies() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetch('/data/posts_full.json')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-maastricht-blue">
          Featured Case Studies
        </h2>
        <p className="text-center text-slate-gray mb-12 max-w-3xl mx-auto">
          Four carefully annotated posts demonstrating different types of health information challenges
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, idx) => (
            <PostCard key={post.post_id} post={post} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
