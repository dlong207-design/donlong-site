import { getFeaturedArticles, getAllArticles } from '@/lib/articles'
import ArticleCard from '@/components/articles/ArticleCard'
import NewsletterSignup from '@/components/newsletter/NewsletterSignup'
import Hero from '@/components/Hero'
import Topics from '@/components/Topics'
import FeaturedInsight from '@/components/FeaturedInsight'
import CoreIdeas from '@/components/CoreIdeas'
import RecruiterSection from '@/components/RecruiterSection'

export default async function HomePage() {
  const featured = getFeaturedArticles()
  const allArticles = getAllArticles()
  const displayArticles = featured.length >= 3 ? featured.slice(0, 3) : allArticles.slice(0, 3)

  return (
    <>
      <Hero />
      <Topics />
      <FeaturedInsight />
      <CoreIdeas />

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-4">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-slate-500">Latest Insights</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Recent thinking on execution, leadership, and systems
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Essays anchored in operating reality—written for leaders responsible for translating strategy into repeatable delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {displayArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} variant="default" />
            ))}
          </div>
        </div>
      </section>

      <RecruiterSection />

      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-navy-200">Newsletter</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Read in five minutes. Shape decisions that last.
          </h2>
          <p className="mt-4 text-base text-navy-100 leading-relaxed">
            The newsletter distills current work on organizational execution into concise memos. Each issue highlights one decision point,
            the system behind it, and the leadership behaviors required to move it forward.
          </p>
          <div className="mt-8 max-w-xl">
            <NewsletterSignup variant="footer" />
          </div>
        </div>
      </section>
    </>
  )
}
