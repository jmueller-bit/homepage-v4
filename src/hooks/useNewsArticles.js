import { useState, useEffect, useCallback } from 'react'
import { getNewsArticles } from '../services/contentful'
import { mapNewsArticle } from '../services/contentfulMapper'

export const useNewsArticles = (initialLimit = 10) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pagination, setPagination] = useState({
    total: 0,
    skip: 0,
    limit: initialLimit,
    hasMore: false
  })

  const fetchArticles = useCallback(async (skip = 0, limit = initialLimit) => {
    setLoading(true)
    setError(null)

    try {
      const response = await getNewsArticles(limit, skip)
      const mappedArticles = response.articles.map(mapNewsArticle)

      setArticles(prev => skip === 0 ? mappedArticles : [...prev, ...mappedArticles])
      setPagination({
        total: response.total,
        skip: response.skip,
        limit: response.limit,
        hasMore: response.skip + response.limit < response.total
      })
    } catch (err) {
      setError(err.message || 'Failed to load news articles')
    } finally {
      setLoading(false)
    }
  }, [initialLimit])

  const loadMore = useCallback(() => {
    if (pagination.hasMore && !loading) {
      fetchArticles(pagination.skip + pagination.limit, pagination.limit)
    }
  }, [pagination, loading, fetchArticles])

  const refresh = useCallback(() => {
    fetchArticles(0, initialLimit)
  }, [fetchArticles, initialLimit])

  useEffect(() => {
    fetchArticles()
  }, [fetchArticles])

  return {
    articles,
    loading,
    error,
    pagination,
    loadMore,
    refresh
  }
}

export default useNewsArticles
