import type { Metadata } from 'next'
import { getAllArticles } from '@/lib/articles'
import ArticleCard from '@/components/articles/ArticleCard'

export const metadata: Metadata = {
  title: 'Articles',
  description: 'All leadership insights from The 5-Minute Manager, sorted newest first.',
}

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-navy-600 mb-3">Archive</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            All Articles
          </h1>
          <p className="text-slate-500 max-w-xl leading-relaxed">
            Short, practical frameworks on leadership, execution, and organizational systems.
            New articles published regularly.
          </p>
        </div>

        {articles.length === 0 ? (
          <p className="text-slate-400 text-center py-16">No articles yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
