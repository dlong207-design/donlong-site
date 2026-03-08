import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllSlugs, getArticleBySlug } from '@/lib/articles'
import { mdxComponents } from '@/components/mdx'
import NewsletterSignup from '@/components/newsletter/NewsletterSignup'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}

  return {
    title: article.frontmatter.title,
    description: article.frontmatter.excerpt,
    openGraph: {
      title: article.frontmatter.title,
      description: article.frontmatter.excerpt,
      type: 'article',
      publishedTime: article.frontmatter.date,
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) notFound()

  const date = new Date(article.frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-navy-700 mb-10 transition-colors group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Articles
          </Link>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-navy-50 text-navy-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              {article.frontmatter.title}
            </h1>
            <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
              <span>Don Long</span>
              <span>·</span>
              <time>{date}</time>
              <span>·</span>
              <span>{article.frontmatter.readingTime}</span>
            </div>
            <p className="mt-6 text-slate-500 text-lg leading-relaxed max-w-2xl">
              {article.frontmatter.excerpt}
            </p>
            <div className="mt-8 border-b border-slate-200" />
          </header>

          {/* Article Body */}
          <div className="prose prose-slate prose-lg max-w-none
            prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900
            prose-p:text-slate-600 prose-p:leading-[1.8]
            prose-a:text-navy-700 prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-4 prose-blockquote:border-navy-600 prose-blockquote:pl-5 prose-blockquote:text-slate-600 prose-blockquote:not-italic prose-blockquote:font-medium
            prose-strong:text-slate-900
            prose-li:text-slate-600 prose-li:leading-relaxed
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:mb-6
          ">
            <MDXRemote source={article.content} components={mdxComponents} />
          </div>

          {/* Divider */}
          <div className="my-16 h-px bg-slate-200" />

          {/* Author */}
          <div className="flex items-start gap-4 mb-16 p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="w-12 h-12 bg-navy-700 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">DL</span>
            </div>
            <div>
              <p className="font-semibold text-slate-900 mb-1">Don Long</p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Don Long writes The 5-Minute Manager—practical leadership frameworks for managers
                responsible for real execution.{' '}
                <Link href="/about" className="text-navy-700 hover:underline">
                  Learn more →
                </Link>
              </p>
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="bg-navy-700 text-white rounded-2xl p-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-navy-200 mb-2">Newsletter</p>
            <h3 className="text-2xl font-bold text-white mb-3">Enjoyed this? Get the next one.</h3>
            <p className="text-navy-200 mb-6 text-sm leading-relaxed">
              Subscribe to The 5-Minute Manager. Each issue delivers one practical leadership idea
              in about five minutes.
            </p>
            <NewsletterSignup variant="footer" />
          </div>
        </div>
      </div>
    </div>
  )
}
