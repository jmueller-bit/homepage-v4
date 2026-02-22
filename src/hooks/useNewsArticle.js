import { useState, useEffect, useCallback } from 'react'
import { getNewsArticleBySlug } from '../services/contentful'
import { mapNewsArticle } from '../services/contentfulMapper'

export const useNewsArticle = (slug) => {
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchArticle = useCallback(async () => {
    if (!slug) {
      setError('No slug provided')
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)

    try {
      const entry = await getNewsArticleBySlug(slug)
      if (!entry) {
        setError('Article not found')
        setArticle(null)
      } else {
        setArticle(mapNewsArticle(entry))
      }
    } catch (err) {
      setError(err.message || 'Failed to load article')
      setArticle(null)
    } finally {
      setLoading(false)
    }
  }, [slug])

  const refresh = useCallback(() => {
    fetchArticle()
  }, [fetchArticle])

  useEffect(() => {
    fetchArticle()
  }, [fetchArticle])

  return {
    article,
    loading,
    error,
    refresh
  }
}

export default useNewsArticle
