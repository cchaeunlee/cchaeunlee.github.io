# Chaeeun Lee · Portfolio

피아니스트이자 뷰티·패션 크리에이터 이채은(Chaeeun Lee)의 포트폴리오 사이트입니다.
Astro로 만든 정적 사이트이며 GitHub Pages(`https://cchaeunlee.github.io`)에 배포할 예정입니다.

## 로컬에서 보기

```bash
npm install
npm run dev      # http://localhost:4321/ko/
```

## 구조

| 경로 | 내용 |
|---|---|
| `src/config/site.ts` | 이름, 누적 조회수, 이메일·SNS, 유튜브 ID 등 기본 정보 |
| `src/i18n/ui.ts` | 한국어/영어 문구 |
| `src/data/works.json` | 협업 목록 (현재 노션 캡처 기반 샘플 데이터) |
| `src/components/` | 섹션별 화면 (Hero, Stats, About, Works, Brands, Piano, Contact) |
| `public/video/` | 첫 화면 배경 영상 (원본 23:10~23:35 구간, 흑백 처리는 CSS) |

## 진행 상황

- [x] 1단계: 배경 영상 추출·압축
- [x] 2단계: 디자인 시안 (블랙 & 화이트, 오른쪽 세로 릴스 흐름, 한/영)
- [ ] 디자인 피드백 반영, 이메일·인스타그램·소개 문구 채우기
- [ ] 3단계: 노션 연동 (`scripts/sync-notion.mjs` → `src/data/works.json`, 썸네일 다운로드)
- [ ] 4단계: GitHub Actions 자동 배포 (6시간마다 + 수동 실행)
- [ ] 전체 연주 영상 유튜브 업로드 후 `pianoYoutubeId` 입력
