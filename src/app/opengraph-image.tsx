import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const alt = 'Pavcon — Toronto Construction & Custom Home Builder'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const [iconBuffer, fontData] = await Promise.all([
    readFile(join(process.cwd(), 'src/app/icon.png')),
    fetch('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap', {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible)' },
    })
      .then((r) => r.text())
      .then((css) => {
        const url = css.match(/src: url\((.+?)\)/)?.[1]
        return url ? fetch(url).then((r) => r.arrayBuffer()) : null
      }),
  ])

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
          background: '#0f1f2b',
          position: 'relative',
        }}
      >
        {/* Top gold bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: '#b39f79', display: 'flex' }} />

        {/* Logo — transparent background shows dark bg directly */}
        <img src={iconSrc} width={110} height={110} style={{ objectFit: 'contain', display: 'flex', marginBottom: '32px' }} />

        {/* Company name */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 600,
            letterSpacing: '0.22em',
            color: '#ffffff',
            fontFamily: 'Inter',
            display: 'flex',
            marginBottom: '22px',
          }}
        >
          PAVCON
        </div>

        {/* Gold divider */}
        <div style={{ width: '64px', height: '2px', background: '#b39f79', display: 'flex', marginBottom: '22px' }} />

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            color: '#b39f79',
            fontFamily: 'Inter',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
          }}
        >
          Toronto Construction & Custom Home Builder
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.4)',
            fontFamily: 'Inter',
            marginTop: '14px',
            display: 'flex',
          }}
        >
          Serving Southern Ontario for over 10 years
        </div>

        {/* Bottom gold bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '6px', background: '#b39f79', display: 'flex' }} />
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [{ name: 'Inter', data: fontData, style: 'normal', weight: 600 }]
        : [],
    }
  )
}
