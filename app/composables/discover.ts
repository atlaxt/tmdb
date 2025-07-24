export function useDiscover(type: MediaType, page = 1) {
  return useFetch<PageResult<Media>>('/api/tmdb/discover', {
    params: { type, page },
    key: `discover-${type}-${page}`,
  })
}
