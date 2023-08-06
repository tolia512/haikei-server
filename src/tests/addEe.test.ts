import { Song } from '../types'
import { addEe } from '../utils/addEe'

test('convertTimeTags', () => {
  expect(addEe(({ icy: 'a - b' } as Song))).toMatchInlineSnapshot(`
{
  "icy": "a - b",
}
`)
  expect(addEe(({ icy: 'KING of SPADE - abc' } as Song))).toMatchInlineSnapshot(`
{
  "hedwig": "mts10:00010",
  "icy": "KING of SPADE - abc",
}
`)
})