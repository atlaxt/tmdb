export function useDiscover(type: MediaType, page = 1) {
  return useFetch<PageResult<Media>>('/api/discover', {
    params: { type, page },
    key: `discover-${type}-${page}`,
  })
}
