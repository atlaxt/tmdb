export function getTmdbUrl(path: string, query: Record<string, any> = {}) {
  const { apiKey, apiUrl } = useRuntimeConfig().public

  const queryParams = new URLSearchParams({
    api_key: apiKey,
    language: 'tr-TR',
    ...query,
  })

  return `${apiUrl}${path}?${queryParams.toString()}`
}
