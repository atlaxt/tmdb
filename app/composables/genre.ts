export function useGenre(type: MediaType, page = 1) {
  return useFetch<{ genres: Genre[] }>('/api/genre', {
    params: { type, page },
    key: `genre-${type}-${page}`,
  })
}
