import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const type = query.type ?? 'movie'
  const id = query.id

  if (!id) {
    return { error: 'ID is required' }
  }

  const url = getTmdbUrl(`/${type}/${id}`, {
    language: 'tr-TR',
  })

  const res = await $fetch(url)
  return res
})
