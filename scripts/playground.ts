/* eslint-disable no-console */

// import { pathQueue, push } from './lib/state/pathQueue'
// const { spotifySearchSongInfo } = require('./lib/spotify')
// const { getMusixMatch, getMusixLyrics } = require('./lib/musixmatch')
// const { getLyrics } = require('./lib/jlyricnet')
// import songs from './lib/anisonDb'

// const { getImageLinks } = require('./lib/customImageSearch')
// const { getAlbum } = require('./lib/itunes')
// import { readFileSync } from 'fs'
// readFileSync('./scripts/read.ts', 'utf8')

// const obj = {
//   '花咲く☆最強レジェンドDays': 'find',
// }

// console.log(songs['花咲く☆最強レジェンドdays'])
// console.log(obj['花咲く☆最強レジェンドDays'])

// spotifySearchSongInfo('ココロオドル', 'nobodyknows+').then(console.log)

// spotifySearchSongInfo('空蝉', '志方あきこ').then(console.log)
// spotifySearchSongInfo('I swear ', 'sweet arms').then(console.log)
// spotifySearchSongInfo('マッチョアネーム?', '街雄鳴造(CV:石川界人)').then(
//   console.log
// )
// spotifySearchSongInfo('タチアガレ！', 'Wake Up, Girls!').then(console.log)

// getMusixLyrics('snowdrop', '春奈るな,河野マリナ').then(console.log)
// getLyrics('snowdrop', '春奈るな,河野マリナ').then(console.log)

// getAlbum('コスモルミナ - 芹澤優').then(console.log)

// const q = 'OxT - 君じゃなきゃダメみたい -OxT ver.- - 月刊少女野崎くん'

// getImageLinks(q).then(console.log)

// getAllIcy().then(console.log)

// import { uploadByUrlAll } from '../lib/firebase'
// const url = 'http://genka-market.jp/genka-pics/10032004.jpg'
// uploadByUrlAll([url]).then(console.log)

// pathQueue.watch(console.log)

// console.log(1)
// push(1)
// console.log(2)
// push(2)
// console.log(3)
// push(3)
// console.log(4)
// push(4)
// console.log(songs)

// import { downloadOptimize } from '../lib/download'
// const url =
//   'https://storage.googleapis.com/rekka-haikei.appspot.com/img/2021obon/1628425925010_2.png'
// downloadOptimize(url).then(console.log)

import { imageMin } from '../src/lib/imagemin'
imageMin('tmp/tmp.png').then(console.log)

// import { state } from './../src/lib/state/state'
// const s = state
// setInterval(() => {
//   s.incN()
//   p(s.n)
// }, 1000)
