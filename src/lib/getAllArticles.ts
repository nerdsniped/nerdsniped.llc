import glob from 'fast-glob'
import * as path from 'path'
import type { ArticleLayout } from '@/components/ArticleLayout'

export type Article = {
  author: string
  date: string
  title: string
  description: string

  slug: string
  component: React.FC<Parameters<typeof ArticleLayout>[0]>
}

async function importArticle(articleFilename: string): Promise<Article> {
  let {
    meta,
    default: component,
  }: {
    meta: Omit<Article, 'slug' | 'component'>
    default: Article['component']
  } = await import(`../pages/articles/${articleFilename}`)
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort(
    (a, z) => new Date(z.date).getTime() - new Date(a.date).getTime()
  )
}
