import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export interface ArticleFrontmatter {
  title: string
  date: string
  excerpt: string
  tags: string[]
  readingTime: string
  featured?: boolean
}

export interface Article {
  slug: string
  frontmatter: ArticleFrontmatter
  content: string
}

const ARTICLES_DIR = path.join(process.cwd(), 'src/content/articles')

export function getAllArticles(): Article[] {
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.mdx'))

  const articles = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const fullPath = path.join(ARTICLES_DIR, filename)
    const raw = fs.readFileSync(fullPath, 'utf-8')
    const { data, content } = matter(raw)
    const rt = readingTime(content)

    return {
      slug,
      frontmatter: {
        title: data.title ?? '',
        date: data.date ?? '',
        excerpt: data.excerpt ?? '',
        tags: data.tags ?? [],
        readingTime: rt.text,
        featured: data.featured ?? false,
      } as ArticleFrontmatter,
      content,
    }
  })

  // Sort by date descending
  return articles.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  )
}

export function getFeaturedArticles(): Article[] {
  return getAllArticles().filter((a) => a.frontmatter.featured)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug)
}

export function getAllSlugs(): string[] {
  return getAllArticles().map((a) => a.slug)
}
