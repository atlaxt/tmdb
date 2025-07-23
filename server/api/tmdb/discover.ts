import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { apiKey, apiUrl } = useRuntimeConfig().public

  const type = query.type === 'tv' ? 'tv' : 'movie'
  const page = query.page || 1

  const url
  = `${apiUrl}/discover/${type}?api_key=${apiKey}&language=tr-TR&page=${page}`

  const res = await $fetch(url)
  return res
})
