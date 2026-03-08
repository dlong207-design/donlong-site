import Link from 'next/link'
import type { Article } from '@/lib/articles'

interface ArticleCardProps {
  article: Article
  variant?: 'default' | 'featured' | 'compact'
}

export default function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  const { slug, frontmatter } = article
  const date = new Date(frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  if (variant === 'compact') {
    return (
      <Link href={`/articles/${slug}`} className="group block">
        <article className="flex items-start gap-4 py-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 -mx-3 px-3 rounded-lg transition-colors">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-slate-400 mb-1">{date} · {frontmatter.readingTime}</p>
            <h3 className="text-sm font-semibold text-slate-800 group-hover:text-navy-700 transition-colors line-clamp-2 leading-snug">
              {frontmatter.title}
            </h3>
          </div>
          <svg className="w-4 h-4 text-slate-300 group-hover:text-navy-600 flex-shrink-0 mt-1 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/articles/${slug}`} className="group block h-full">
      <article className={`h-full bg-white border border-slate-200 rounded-xl p-6 transition-all duration-200 hover:border-navy-200 hover:shadow-md hover:-translate-y-0.5 ${variant === 'featured' ? 'lg:p-8' : ''}`}>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {frontmatter.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="inline-flex text-[10px] font-semibold tracking-wider uppercase px-2 py-1 bg-navy-50 text-navy-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className={`font-bold text-slate-900 leading-snug mb-3 group-hover:text-navy-700 transition-colors ${variant === 'featured' ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
          {frontmatter.title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
          {frontmatter.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <time>{date}</time>
            <span>·</span>
            <span>{frontmatter.readingTime}</span>
          </div>
          <span className="text-xs font-semibold text-navy-600 group-hover:text-navy-700 flex items-center gap-1 transition-colors">
            Read
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  )
}
