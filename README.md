# 법무법인 이준 강북 분사무소 - 공식 홈페이지

Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn-style 컴포넌트 + framer-motion으로
구축된 자급자족형(self-contained) 정적 웹사이트입니다. `npm install && npm run dev` 한 번으로
바로 실행되며, 별도 데이터베이스 없이 `/content/*.json` 파일로 모든 콘텐츠를 관리합니다.

---

## 1분 안에 보는 법

```bash
npm install
npm run dev
# http://localhost:3000 에서 확인
```

빌드 / 배포 미리보기:

```bash
npm run build
npm run start
```

타입체크 / 린트:

```bash
npm run type-check
npm run lint
```

---

## 폴더 구조

```
output-lawfirm-yijun/
├── app/
│   ├── layout.tsx                 글로벌 레이아웃, 폰트(Noto Sans KR), Header/Footer, JSON-LD
│   ├── page.tsx                   홈 (Hero → Values → 업무분야 → 사례 → 공지/언론 → CTA)
│   ├── about/page.tsx             법인 소개 (미션/연혁/핵심가치)
│   ├── about/partners/page.tsx    업무협력 · 법률자문 기업
│   ├── lawyers/page.tsx           구성원 소개
│   ├── location/page.tsx          오시는 길 (Google Maps embed)
│   ├── testimonials/page.tsx      고객의 소리
│   ├── practice/[slug]/page.tsx   업무분야 5종 (회생/민사/형사/가사/외국인)
│   ├── cases/                     주요 사례, 사례분석, 법률정보(법인/개인), 법률지식인, 후기
│   ├── news/
│   │   ├── press/                 언론보도 (썸네일 카드 그리드)
│   │   ├── notice/[slug]/         공지사항 + 상세 페이지
│   │   ├── blog/                  법률 블로그
│   │   ├── forms/                 법률서식 다운로드
│   │   ├── newsletter/            뉴스레터 · 브로슈어
│   │   └── seminar/               세미나
│   ├── contact/page.tsx           법률 상담 신청
│   ├── api/contact/route.ts       폼 수신 placeholder (Resend 연결 가이드 포함)
│   ├── opengraph-image.tsx        동적 OG 이미지 자동 생성
│   ├── icon.svg / not-found.tsx   파비콘 · 404 페이지
│   ├── sitemap.ts / robots.ts     SEO 자동 생성
│
├── components/
│   ├── ui/             Button, Card, Input, Badge, SectionHeading, PageHero, BoardList
│   ├── layout/         Header (스크롤 sticky · 모바일 햄버거), Footer, PageContainer
│   └── sections/       Hero, Values, PracticeAreas, FeaturedCases, NewsHighlight, CTA, PartnerStrip, ContactForm
│
├── content/            cases, notices, press, lawyers, testimonials, practice, partners,
│                       blog, forms, seminars, newsletter, faq (정적 콘텐츠 JSON)
├── lib/                utils, seo, nav 헬퍼
├── public/             logo.svg, logo-dark.svg, images/ (자유 추가)
├── styles/globals.css  Tailwind base + 디자인 토큰
├── tailwind.config.ts  브랜드 컬러(navy/gold/cream) 정의
├── next.config.mjs     외부 이미지 도메인 화이트리스트
├── package.json / tsconfig.json / .env.example / vercel.json
```

---

## GitHub 푸시 → Vercel 배포 (3단계)

1. **GitHub 리포지토리 생성**
   - `https://github.com/new` 에서 새 빈 리포지토리 생성.
   - 본 폴더에서 다음 명령 실행:
     ```bash
     git init && git add . && git commit -m "init: law firm yijun gangbuk site"
     git branch -M main
     git remote add origin https://github.com/<your-account>/<repo-name>.git
     git push -u origin main
     ```
2. **Vercel에서 임포트**
   - `https://vercel.com/new` 접속 → 위 GitHub 리포지토리 선택 → Import.
   - Framework Preset: **Next.js** (자동 감지됨), Root Directory: **그대로**, Build Command: `next build`.
3. **환경변수 등록 후 Deploy**
   - Project → Settings → Environment Variables 에서 `.env.example` 의 키들을 그대로 등록.
   - "Deploy" 버튼 클릭, 약 1~2분 뒤 자동 배포 완료.

---

## 환경변수 (`.env.example` 기준)

| 키 | 용도 | 필수 여부 |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | 사이트 절대 URL (SEO/Sitemap/OG) | 권장 |
| `NEXT_PUBLIC_SITE_NAME` | 사이트 이름 표시 | 선택 |
| `RESEND_API_KEY` | 문의 폼 메일 발송 (Resend 사용 시) | 선택 |
| `CONTACT_EMAIL` | 문의 폼 수신 메일 | 선택 |
| `NEXT_PUBLIC_KAKAO_MAP_KEY` | 카카오맵 API로 교체 시 | 선택 |

> 비밀 키는 항상 `.env.local`에만 두고, 절대로 Git에 커밋하지 마세요.

---

## 색상 · 폰트 · 로고 · 이미지 교체 위치

| 항목 | 파일 / 위치 | 비고 |
| --- | --- | --- |
| 메인 컬러 (네이비 · 골드) | `tailwind.config.ts` → `theme.extend.colors.brand` | `navy`, `navy-dark`, `gold`, `cream` |
| 글로벌 폰트 | `app/layout.tsx` → `Noto_Sans_KR` (next/font/google) | Pretendard 사용 시 next/font/local 로 교체 |
| 로고 (라이트, 헤더) | `public/logo.svg` | 권장 사이즈 260×56 |
| 로고 (다크, 푸터) | `public/logo-dark.svg` | 권장 사이즈 260×56 |
| 파비콘 | `app/icon.svg` | Next.js가 자동 메타 태그 생성 |
| OG 이미지 | `app/opengraph-image.tsx` | 1200×630, 빌드 시 자동 PNG 변환 |
| Hero 배경 이미지 | `components/sections/Hero.tsx` 내 `<Image src=...>` | Unsplash URL → 자체 이미지로 교체 시 `next.config.mjs`에 도메인 등록 |
| 변호사 사진 | `content/lawyers.json` 각 항목의 `photo` | 1:1.25 비율 권장 |
| 사례 / 언론보도 / 블로그 | `content/cases.json`, `press.json`, `blog.json` 등 | 모두 JSON 편집만으로 수정 가능 |
| 회사 정보 (전화/주소/이메일) | `lib/seo.ts` 의 `SITE_INFO` 객체 | 한곳에서만 수정하면 헤더/푸터/문의/구조화데이터 모두 반영 |

---

## 자리표시자 체크리스트 (사용자가 직접 채울 항목)

- ⬜ `lib/seo.ts` → `SITE_INFO.phone` 에 대표 전화 입력
- ⬜ `lib/seo.ts` → `SITE_INFO.address` 에 실제 분사무소 주소 입력
- ⬜ `lib/seo.ts` → `SITE_INFO.email` 에 운영 이메일 입력
- ⬜ `content/lawyers.json` → 5명의 변호사 성함, 학력, 경력, 사진 교체
- ⬜ `content/partners.json` → 실제 협력사 명단으로 교체 (또는 익명 처리 유지)
- ⬜ `content/cases.json` → 실제 업무사례로 교체 (현재는 샘플 6건)
- ⬜ `content/notices.json` → 실제 공지로 교체 (현재는 샘플 6건)
- ⬜ `content/press.json` → 실제 언론보도 링크 및 썸네일로 교체
- ⬜ `content/testimonials.json` → 실제 고객후기 또는 빈 배열로 변경
- ⬜ `content/blog.json` → 첫 블로그 글 작성 또는 비활성화
- ⬜ `content/forms.json` → 실제 양식 파일 업로드 후 다운로드 링크 연결
- ⬜ `content/seminars.json` → 다가오는 세미나 일정으로 교체
- ⬜ `app/layout.tsx` → JSON-LD `LegalService` 정보 (주소, 영업시간 등) 점검
- ⬜ `app/location/page.tsx` 의 Google Maps `<iframe src="...">` 실제 주소 좌표로 교체
- ⬜ `components/layout/Header.tsx`, `components/sections/Hero.tsx`, `ContactForm.tsx` 의 `tel:000-0000-0000` 값을 실제 대표 전화번호로 교체 (전역 검색·치환 권장)
- ⬜ `app/api/contact/route.ts` → Resend(또는 EmailJS/SendGrid) API 키 연결 후 실제 메일 발송

---

## 디자인 결정

- **브랜드 톤**: 신뢰감을 주는 **"전문적·신뢰감"** 톤(Navy `#0F2C4A` + White + Gold 포인트 `#B89461`)을
  선택했습니다. 클라이언트가 제공한 기존 로고와 기존 홈페이지(http://lawijun.com)의 시각 언어가
  진중한 네이비 계열을 사용하고 있으며, 법률 서비스 특성상 가장 일반적이고 안정적인 톤입니다.
- **레퍼런스(다른법무법인 daeryunlaw.com)** 처럼 풀스크린 히어로 + 카드 그리드 + 보드형 리스트
  레이아웃을 차용하되, 직접 카피하지 않고 법무법인 이준의 정체성에 맞춰 재구성했습니다.

## 구성 결정 사항 (자율 추가 페이지/섹션)

- 메뉴 참고 파일 외에 **`/contact` (법률 상담 신청)** 을 추가했습니다. 신청서 본문에서 "상담
  신청 업무 진행" 이 핵심 목적이라고 명시되어 있어, 헤더 CTA · 푸터 · 각 페이지 하단에서 항상
  접근 가능한 별도 페이지로 분리했습니다.
- 홈 페이지 하단에 **`PartnerStrip`** 섹션과 **`NewsHighlight`** 섹션을 추가해, 공지/언론보도
  영역으로 자연스럽게 진입할 수 있도록 했습니다.
- 업무분야는 `/practice/[slug]` 형태의 단일 동적 라우트로 통합해, 콘텐츠를 `content/practice.json`
  하나로 관리할 수 있도록 했습니다.

---

## 이미지 출처 표

| 사용 위치 | URL | 라이선스 |
| --- | --- | --- |
| Hero 배경 | https://images.unsplash.com/photo-1589994965851-a8f479c573a9 | Unsplash License (무료, 상업적 사용 가능) |
| About 본문 | https://images.unsplash.com/photo-1497366216548-37526070297c | Unsplash License |
| 회생·파산 | https://images.unsplash.com/photo-1554224155-6726b3ff858f | Unsplash License |
| 민사 | https://images.unsplash.com/photo-1450101499163-c8848c66ca85 | Unsplash License |
| 형사 | https://images.unsplash.com/photo-1589994965851-a8f479c573a9 | Unsplash License |
| 가사 | https://images.unsplash.com/photo-1505664194779-8beaceb93744 | Unsplash License |
| 외국인 | https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13 | Unsplash License |
| 변호사 프로필(5) | unsplash.com/photo-1560250097-0b93528c311a 외 4 | Unsplash License |
| 언론보도 썸네일(6) | unsplash.com 다수 | Unsplash License |
| 블로그 썸네일(5) | unsplash.com 다수 | Unsplash License |
| 뉴스레터 썸네일(3) | unsplash.com 다수 | Unsplash License |

> Unsplash 라이선스는 "출처 표기 없이 자유롭게 상업적/비상업적 사용 가능"이지만,
> 가능하다면 사진 작가 크레딧을 명시해 주시는 것이 좋은 관행입니다. 실제 운영 시에는
> 가급적 자체 촬영 이미지로 교체할 것을 권장합니다.

---

## 폼 처리 (api/contact)

`app/api/contact/route.ts` 에 placeholder 가 구현되어 있고, 클라이언트 폼은
`react-hook-form` + `zod` 로 검증합니다. 라우트 호출 실패 시 자동으로 사용자 메일 클라이언트의
`mailto:` 로 fallback 됩니다.

실 운영 연결 옵션:

- **Resend** (추천): `npm i resend` → `.env.local`에 `RESEND_API_KEY`, `CONTACT_EMAIL` 등록 후
  `route.ts`의 주석 처리된 예시 코드 활성화.
- **EmailJS**: 클라이언트 사이드 전송 (React에서 직접 호출). API 라우트 없이 동작 가능.
- **Nodemailer + SMTP**: 사내 메일 서버를 쓰는 경우 가장 안정적.

---

## 확장 시 고려

- **DB 도입 시**: 본 사이트는 정적 JSON으로 충분하지만, 공지/블로그가 월 10건 이상으로 증가하면
  Supabase 또는 Vercel Postgres 도입을 권장합니다. 기존 JSON 구조를 그대로 테이블로 옮길 수
  있도록 컬럼명을 맞춰 두었습니다 (예: notices → posts(slug, title, body, category, date)).
  관리자 페이지는 Vercel과 잘 통합되는 `next-auth + Drizzle` 조합이 무난합니다.
- **i18n (한국어 + 영어)**: 외국인 의뢰인 유입이 늘어나면 `app/[locale]/...` 구조로 i18n 라우팅을
  도입할 수 있습니다. 현재는 한국어 단일 언어로만 구현되어 있습니다.
- **예약 캘린더**: 별도의 캘린더 UI는 두지 않았습니다. 운영 단계에서는 [Calendly], [네이버 예약],
  [Cal.com] 등을 임베드하거나, `/contact` 페이지 하단에 일정 슬롯 컴포넌트를 추가할 수 있습니다.
- **결제·쇼핑몰 기능**: 본 사이트의 정적 + DB 미사용 범위를 넘어섭니다. 필요 시 Stripe + Next.js
  결제 라우트, 또는 Cafe24·Shopify 등 별도 솔루션 도입을 권장합니다.

---

## 접근성 / 성능 / SEO 셀프 체크

- **반응형**: 360 / 768 / 1280 모두 검증 완료. 모바일 햄버거 메뉴, `min-height` 보존.
- **접근성**: 모든 이미지에 한국어 alt, 폼 라벨 `htmlFor` + `aria-invalid`, 키보드 포커스 링,
  "본문 바로가기(skip link)" 제공.
- **성능**: `next/image` + `next/font/google` + 코드 스플리팅, 동적 임포트 없는 최소한의 클라
  컴포넌트(헤더 · Hero · 폼 · 일부 motion 섹션)만 클라이언트로 표시.
- **SEO**: 페이지별 `metadata`, `app/sitemap.ts`, `app/robots.ts`, JSON-LD `LegalService`,
  OG 이미지 자동 생성.

---

문의: 본 사이트는 **법무법인 이준 강북 분사무소** 의 의뢰로 비폼드(Beformed.ai)가 제작했습니다.
운영 중 개선/추가 요청은 별도 채널로 문의 주세요.
