import { defineEventHandler, getQuery } from 'h3'
import { getTmdbUrl } from '~~/server/utils/tmdb'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const type = query.type ?? 'movie'
  const page = query.page || '1'

  const url = getTmdbUrl(`/genre/${type}/list`, { page })

  const res = await $fetch(url)
  return res
})
