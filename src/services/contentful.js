import { createClient } from 'contentful'

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master'
})

// Helper function to get image URL from asset
const getImageUrl = (asset) => {
  if (!asset?.fields?.file?.url) return null
  const url = asset.fields.file.url
  return url.startsWith('http') ? url : `https:${url}`
}

// Helper function to get image dimensions
const getImageDimensions = (asset) => {
  if (!asset?.fields?.file?.details?.image) return { width: undefined, height: undefined }
  return {
    width: asset.fields.file.details.image.width,
    height: asset.fields.file.details.image.height
  }
}

// News Articles
export const getNewsArticles = async (limit = 10, skip = 0) => {
  try {
    const response = await client.getEntries({
      content_type: 'newsArtikel',
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
      content_type: 'newsArtikel',
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
      content_type: 'newsArtikel',
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

// Team Members
export const getTeamMembers = async (limit = 50) => {
  try {
    const response = await client.getEntries({
      content_type: 'teamMitglied',
      order: 'fields.reihenfolge',
      limit,
      include: 1
    })
    
    return response.items.map(item => {
      const fields = item.fields
      const photoAsset = fields.foto
      const { width, height } = getImageDimensions(photoAsset)
      
      return {
        id: item.sys.id,
        name: fields.name || fields.titel,
        role: fields.funktion || fields.role,
        bio: fields.bio || fields.beschreibung,
        order: fields.reihenfolge || 0,
        photo: photoAsset ? {
          url: getImageUrl(photoAsset),
          width,
          height
        } : null
      }
    }).sort((a, b) => a.order - b.order)
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}

// Gallery Images
export const getGalleryImages = async (limit = 50) => {
  try {
    const response = await client.getEntries({
      content_type: 'galleryImage',
      order: 'fields.reihenfolge',
      limit,
      include: 1
    })
    
    return response.items.map(item => {
      const fields = item.fields
      const imageAsset = fields.bild?.[0] || fields.bild
      const { width, height } = getImageDimensions(imageAsset)
      
      return {
        id: item.sys.id,
        title: fields.titel,
        src: getImageUrl(imageAsset),
        alt: fields.titel,
        category: fields.kategorie || 'Allgemein',
        description: fields.beschreibung || '',
        order: fields.reihenfolge || 0,
        width,
        height
      }
    }).sort((a, b) => a.order - b.order)
  } catch (error) {
    console.error('Error fetching gallery images:', error)
    return []
  }
}

export default client
