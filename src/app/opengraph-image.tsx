import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const alt = 'Pavcon — Toronto Construction & Custom Home Builder'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const iconBuffer = await readFile(join(process.cwd(), 'src/app/icon.png'))
  const iconSrc = `data:image/png;base64,${iconBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#153243',
        }}
      >
        <img
          src={iconSrc}
          width={180}
          height={180}
          style={{ objectFit: 'contain' }}
        />
        <div
          style={{
            marginTop: 28,
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: '0.18em',
            color: '#b39f79',
            fontFamily: 'sans-serif',
          }}
        >
          PAVCON
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 26,
            color: 'rgba(255,255,255,0.65)',
            fontFamily: 'sans-serif',
            letterSpacing: '0.06em',
          }}
        >
          Toronto Construction &amp; Custom Home Builder
        </div>
      </div>
    ),
    { ...size }
  )
}
