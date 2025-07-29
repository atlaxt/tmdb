export function useMedias(type: MediaType, id: string | number) {
  return useFetch<Media>('/api/medias', {
    params: { type, id },
    key: `medias-${type}-${id}`,
  })
}
