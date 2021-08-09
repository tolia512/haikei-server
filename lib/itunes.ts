import axios from 'axios'

const iTunesSearchSong = (term: string) =>
  axios.request({
    method: 'GET',
    url: 'https://itunes.apple.com/search',
    params: {
      country: 'jp',
      'media	': 'music',
      entity: 'musicTrack',
      term,
      lang: 'ja_jp',
    },
  })

export async function getAlbum(term: string) {
  const res = await iTunesSearchSong(term).catch((e) => {
    console.error(e)
    return false as const
  })
  if (!res || res.data.resultCount === 0) return {}
  const {
    collectionName,
    copyright,
    artworkUrl100,
    trackTimeMillis,
    collectionViewUrl,
  } = res.data.results[0]
  return {
    albumName: collectionName,
    copyright,
    artworkUrl100,
    trackTimeMillis,
    itunesUrl: collectionViewUrl,
  }
}