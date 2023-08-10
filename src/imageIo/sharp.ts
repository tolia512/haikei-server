import sharp from 'sharp'

const enableMobileImg = process.env.ENABLE_MOBILE_IMG === '1'

const fitOption = { fit: 'inside', withoutEnlargement: true } as const

export async function sharpMin(path: string) {
  const buffer = await sharp(path).resize(1500, 1500, fitOption).toBuffer()
  if (enableMobileImg) {
    const minPath = path + '_m'
    const buffer = await sharp(path).resize(400, 1500, fitOption).toBuffer()
    await sharp(buffer).toFile(minPath)
  }
  return await sharp(buffer).toFile(path)
}
