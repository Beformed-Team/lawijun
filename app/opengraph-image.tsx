import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '법무법인 이준 강북 분사무소';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #091B30 0%, #0F2C4A 60%, #1E456E 100%)',
          color: '#fff',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 16,
            alignItems: 'center',
            fontSize: 22,
            color: '#B89461',
            letterSpacing: 4,
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          <span>LAW FIRM YIJUN</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>강북 분사무소</span>
        </div>
        <h1
          style={{
            fontSize: 80,
            fontWeight: 800,
            lineHeight: 1.15,
            margin: '24px 0 0',
            maxWidth: 980,
          }}
        >
          신뢰할 수 있는 법률 파트너,
          <br />
          법무법인 이준
        </h1>
        <p
          style={{
            fontSize: 28,
            marginTop: 32,
            color: 'rgba(255,255,255,0.78)',
            maxWidth: 900,
          }}
        >
          회생·파산, 민사, 형사, 가사, 외국인 업무 종합 자문
        </p>
        <div
          style={{
            position: 'absolute',
            bottom: 70,
            left: 80,
            display: 'flex',
            gap: 24,
            alignItems: 'center',
            fontSize: 22,
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          <span>lawfirmyijun.com</span>
          <span style={{ width: 6, height: 6, background: '#B89461', borderRadius: 99 }} />
          <span>강북 분사무소</span>
        </div>
      </div>
    ),
    size,
  );
}
