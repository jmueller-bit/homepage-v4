export const mapNewsArticle = (entry) => {
  if (!entry) return null

  const { fields } = entry

  return {
    id: entry.sys.id,
    title: fields.title || '',
    slug: fields.slug || '',
    excerpt: fields.excerpt || '',
    content: fields.content || null,
    category: fields.category || 'Allgemein',
    publishDate: fields.publishDate ? new Date(fields.publishDate) : null,
    author: fields.author || 'ALZ Team',
    image: fields.featuredImage ? mapAsset(fields.featuredImage) : null
  }
}

export const mapAsset = (asset) => {
  if (!asset || !asset.fields) return null

  return {
    url: asset.fields.file?.url ? `https:${asset.fields.file.url}` : null,
    title: asset.fields.title || '',
    description: asset.fields.description || '',
    width: asset.fields.file?.details?.image?.width,
    height: asset.fields.file?.details?.image?.height,
    contentType: asset.fields.file?.contentType
  }
}

export const formatDate = (date) => {
  if (!date) return ''

  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date)
}

export const formatDateShort = (date) => {
  if (!date) return ''

  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date)
}
