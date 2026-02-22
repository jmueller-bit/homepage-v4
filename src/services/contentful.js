import { createClient } from 'contentful'

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master'
})

export const getNewsArticles = async (limit = 10, skip = 0) => {
  try {
    const response = await client.getEntries({
      content_type: 'newsArticle',
      order: '-fields.publishDate',
      limit,
      skip,
      include: 1
    })
    return {
      articles: response.items,
      total: response.total,
      skip: response.skip,
      limit: response.limit
    }
  } catch (error) {
    console.error('Error fetching news articles:', error)
    throw error
  }
}

export const getNewsArticleBySlug = async (slug) => {
  try {
    const response = await client.getEntries({
      content_type: 'newsArticle',
      'fields.slug': slug,
      limit: 1,
      include: 2
    })
    return response.items[0] || null
  } catch (error) {
    console.error('Error fetching news article by slug:', error)
    throw error
  }
}

export const getNewsArticlesByCategory = async (category, limit = 10, skip = 0) => {
  try {
    const response = await client.getEntries({
      content_type: 'newsArticle',
      'fields.category': category,
      order: '-fields.publishDate',
      limit,
      skip
    })
    return {
      articles: response.items,
      total: response.total,
      skip: response.skip,
      limit: response.limit
    }
  } catch (error) {
    console.error('Error fetching news by category:', error)
    throw error
  }
}

export default client
