/**
 * 나만의 추구미 & 패션 스타일링 (중학교 1학년 가정과 패션 수업용 인터랙티브 웹앱)
 * Pure Vanilla JavaScript Implementation
 * Full Vector SVG Fashion Illustration Engine & GitHub Pages 정적 구동
 */

// ==========================================
// 1. DATA DEFINITIONS (UNIFIED CHUGUMI & VISUAL MOOD)
// ==========================================

const CHUGUMI_DATA = [
  {
    id: 'classic',
    name: '클래식',
    visualMood: '품격 있고 단정한 타임리스 클래식 무드 🏛️',
    emoji: '🏛️',
    badge: '#전통 #단정 #신뢰',
    tagline: '시대를 초월하여 변하지 않는 기품과 신뢰감을 주는 전통적인 스타일',
    palette: [
      { name: '클래식 네이비', hex: '#1E3A8A' },
      { name: '딥 차콜', hex: '#334155' },
      { name: '펄 아이보리', hex: '#F8FAFC' },
      { name: '버건디 와인', hex: '#881337' }
    ],
    silhouetteText: '각이 잡힌 테일러드 셔츠, 주름선이 곧은 슬랙스, 단정한 페니 로퍼',
    keywords: ['전통', '품격', '신뢰', '단정함', '테일러드'],
    defaultMotto: '기본에 충실하며 언제 어디서나 신뢰받는 사람이 될래요.',
    recommendTip: '💡 코디 팁: 화이트 셔츠에 단정한 슬랙스와 로퍼를 매치해 단정한 품격을 살려보세요.',
    topDefault: 't1',
    bottomDefault: 'b1',
    shoesDefault: 's3',
    accDefault: ['a1']
  },
  {
    id: 'modern',
    name: '모던',
    visualMood: '도시적이고 세련된 샤프 모던 무드 🏙️',
    emoji: '🏙️',
    badge: '#도시적 #샤프 #세련미',
    tagline: '직선적이고 깔끔한 실루엣과 차가운 모노톤이 주는 도회적인 세련미',
    palette: [
      { name: '젯 블랙', hex: '#0F172A' },
      { name: '스틸 그레이', hex: '#64748B' },
      { name: '쿨 화이트', hex: '#F8FAFC' },
      { name: '메탈릭 실버', hex: '#CBD5E1' }
    ],
    silhouetteText: '군더더기 없는 직선 라인, 모노톤 컬러 블록, 세련된 스마트워치',
    keywords: ['도회적', '샤프', '모노톤', '세련미', '하이테크'],
    defaultMotto: '군더더기 없이 깔끔하고 스마트하게 나다운 길을 걸어갈래요.',
    recommendTip: '💡 코디 팁: 모노톤 블랙 앤 화이트 조합에 스마트워치로 샤프한 느낌을 완성하세요.',
    topDefault: 't1',
    bottomDefault: 'b1',
    shoesDefault: 's1',
    accDefault: ['a4']
  },
  {
    id: 'casual',
    name: '캐주얼',
    visualMood: '편안하고 친근한 데일리 캐주얼 무드 👕',
    emoji: '👕',
    badge: '#편안함 #친근 #데일리',
    tagline: '격식에 얽매이지 않고 누구에게나 친근하고 편안한 일상적인 스타일',
    palette: [
      { name: '인디고 블루', hex: '#2563EB' },
      { name: '애쉬 그레이', hex: '#CBD5E1' },
      { name: '코튼 화이트', hex: '#FFFFFF' },
      { name: '데일리 베이지', hex: '#FDE68A' }
    ],
    silhouetteText: '편안한 무지 맨투맨, 활동적인 클래식 청바지, 화이트 스니커즈',
    keywords: ['편안함', '친근함', '데님', '일상', '자연스러움'],
    defaultMotto: '자연스럽고 편안한 나만의 매력으로 친구들과 다정하게 어울릴래요!',
    recommendTip: '💡 코디 팁: 포근한 그레이 맨투맨과 클래식 청바지, 화이트 스니커즈의 만능 조합!',
    topDefault: 't2',
    bottomDefault: 'b3',
    shoesDefault: 's1',
    accDefault: ['a1']
  },
  {
    id: 'sporty',
    name: '스포티',
    visualMood: '역동적이고 활기찬 액티브 스포티 무드 ⚡',
    emoji: '⚡',
    badge: '#활동성 #건강미 #에너지',
    tagline: '달리고 땀 흘리는 순간이 빛나는 건강한 체력과 에너지 넘치는 생동감',
    palette: [
      { name: '로열 블루', hex: '#2563EB' },
      { name: '네온 에메랄드', hex: '#10B981' },
      { name: '에너지 오렌지', hex: '#EA580C' },
      { name: '클린 화이트', hex: '#FFFFFF' }
    ],
    silhouetteText: '가벼운 트랙 윈드브레이커, 사이드라인 트레이닝 팬츠, 쿠셔닝 러닝화',
    keywords: ['활동적', '스포츠', '체력왕', '에너지', '생동감'],
    defaultMotto: '지치지 않는 열정과 건강한 체력으로 어떤 도전도 이겨낼래요!',
    recommendTip: '💡 코디 팁: 가볍고 바람을 막아주는 윈드브레이커에 편안한 트레이닝 팬츠를 추천해요.',
    topDefault: 't5',
    bottomDefault: 'b6',
    shoesDefault: 's2',
    accDefault: ['a4', 'a3']
  },
  {
    id: 'elegance',
    name: '엘레강스',
    visualMood: '우아하고 기품 있는 소프트 엘레강스 무드 🕊️',
    emoji: '🕊️',
    badge: '#우아함 #품위 #부드러움',
    tagline: '부드러운 곡선과 차분한 색조가 어우러져 은은하게 전해지는 우아함',
    palette: [
      { name: '로즈 베이지', hex: '#FBCFE8' },
      { name: '소프트 크림', hex: '#FEF3C7' },
      { name: '더스티 핑크', hex: '#F472B6' },
      { name: '펄 그레이', hex: '#E2E8F0' }
    ],
    silhouetteText: '단정한 카라 셔링 셔츠 원피스 또는 소프트 카디건, 우아한 롱스커트',
    keywords: ['우아함', '기품', '부드러움', '단아함', '소프트'],
    defaultMotto: '은은하고 고운 마음씨로 주변을 따뜻하고 우아하게 밝힐래요.',
    recommendTip: '💡 코디 팁: 찰랑거리는 플레어 롱치마나 단정한 셔츠 원피스로 우아한 무드를 완성해 보세요.',
    topDefault: 't10',
    bottomDefault: 'b9',
    shoesDefault: 's3',
    accDefault: ['a6']
  },
  {
    id: 'exotic',
    name: '이그조틱',
    visualMood: '신비롭고 독창적인 이국적 에스닉 무드 🌴',
    emoji: '🌴',
    badge: '#이국적 #독창성 #에스닉',
    tagline: '세계의 다양한 전통 문화와 자연에서 영감을 받은 독특하고 매혹적인 정취',
    palette: [
      { name: '테라코타 오렌지', hex: '#C2410C' },
      { name: '딥 터콰이즈', hex: '#0891B2' },
      { name: '샌드 옐로', hex: '#F59E0B' },
      { name: '올리브 그린', hex: '#4D7C0F' }
    ],
    silhouetteText: '독특한 에스닉 컬러 배색, 카고 포켓, 개성 있는 스트랩 목걸이',
    keywords: ['이국적', '에스닉', '독특함', '자연친화', '글로벌'],
    defaultMotto: '넓은 세상을 품은 열린 마음으로 나만의 독창적인 색채를 뽐낼래요.',
    recommendTip: '💡 코디 팁: 카키 카고팬츠에 비즈 목걸이와 에코백을 매치해 이국적인 감성을 더해보세요.',
    topDefault: 't8',
    bottomDefault: 'b4',
    shoesDefault: 's6',
    accDefault: ['a8', 'a6']
  },
  {
    id: 'romantic',
    name: '로맨틱',
    visualMood: '사랑스럽고 화사한 스위트 로맨틱 무드 🌸',
    emoji: '🌸',
    badge: '#사랑스러움 #달콤함 #소녀감성',
    tagline: '달콤한 파스텔 컬러와 아기자기한 디테일로 사랑스러움을 극대화한 스타일',
    palette: [
      { name: '베이비 핑크', hex: '#F472B6' },
      { name: '파스텔 피치', hex: '#FDBA74' },
      { name: '슈가 화이트', hex: '#FFFFFF' },
      { name: '라벤더 퍼플', hex: '#C084FC' }
    ],
    silhouetteText: '살랑살랑 플레어 롱스커트, 러블리 블라우스 또는 파스텔 카디건',
    keywords: ['사랑스러움', '소녀감성', '파스텔', '플레어스커트', '러블리'],
    defaultMotto: '다정하고 밝은 미소로 친구들에게 사랑스러운 행복을 선물할래요!',
    recommendTip: '💡 코디 팁: 살랑거리는 플레어 롱치마나 뷔스티에 원피스에 곰인형 키링을 달아보세요.',
    topDefault: 't7',
    bottomDefault: 'b9',
    shoesDefault: 's1',
    accDefault: ['a2', 'a6']
  },
  {
    id: 'bohemian',
    name: '보헤미안',
    visualMood: '자유롭고 낭만적인 어스 보헤미안 무드 🌾',
    emoji: '🌾',
    badge: '#자유분방 #낭만 #어스톤',
    tagline: '자연을 사랑하고 얽매이지 않는 자유로운 방랑자의 따스한 낭만',
    palette: [
      { name: '어스 브라운', hex: '#78350F' },
      { name: '웜 올리브', hex: '#65A30D' },
      { name: '머스타드', hex: '#EAB308' },
      { name: '린넨 베이지', hex: '#F5F5F4' }
    ],
    silhouetteText: '루즈한 오버핏 롱티, 캔버스 에코백, 내추럴 캔버스화',
    keywords: ['자유분방', '자연주의', '어스톤', '낭만', '여유'],
    defaultMotto: '자연처럼 은은하고 자유로운 마음으로 나만의 리듬을 지킬래요.',
    recommendTip: '💡 코디 팁: 내추럴 코튼 에코백과 캔버스 로우탑 슈즈로 편안한 낭만을 연출하세요.',
    topDefault: 't6',
    bottomDefault: 'b5',
    shoesDefault: 's4',
    accDefault: ['a6']
  },
  {
    id: 'minimal',
    name: '미니멀',
    visualMood: '군더더기 없는 절제미의 클린 미니멀 무드 ⚪',
    emoji: '⚪',
    badge: '#절제미 #심플 #간결함',
    tagline: '화려한 장식을 덜어내고 본질에 집중한 단순하고 정돈된 아름다움',
    palette: [
      { name: '퓨어 화이트', hex: '#FFFFFF' },
      { name: '소프트 그레이', hex: '#E2E8F0' },
      { name: '차콜 블랙', hex: '#1E293B' },
      { name: '클린 네이비', hex: '#0F172A' }
    ],
    silhouetteText: '깔끔한 무지 셔츠, 심플 슬랙스, 올화이트 스니커즈',
    keywords: ['절제미', '심플함', '단순함', '깔끔함', '미니멀'],
    defaultMotto: '복잡함보다 단순하고 정직한 마음으로 깊이 있게 성장할래요.',
    recommendTip: '💡 코디 팁: 군더더기 없는 화이트 셔츠와 슬랙스, 백팩 하나로 깔끔함을 극대화하세요.',
    topDefault: 't1',
    bottomDefault: 'b1',
    shoesDefault: 's1',
    accDefault: ['a1']
  },
  {
    id: 'edgy',
    name: '에지',
    visualMood: '강렬하고 카리스마 넘치는 록시크 에지 무드 🕶️',
    emoji: '🕶️',
    badge: '#카리스마 #강렬함 #락시크',
    tagline: '강렬한 흑백 대비와 날카로운 포인트로 시선을 사로잡는 당당한 개성',
    palette: [
      { name: '딥 젯블랙', hex: '#020617' },
      { name: '다크 차콜', hex: '#1E293B' },
      { name: '크롬 실버', hex: '#E2E8F0' },
      { name: '크림슨 레드', hex: '#BE123C' }
    ],
    silhouetteText: '워싱 흑청 와이드진, 스트릿 블랙 후드, 청키 어글리 슈즈, 비즈 목걸이',
    keywords: ['카리스마', '강렬함', '개성파', '록시크', '당당함'],
    defaultMotto: '남들과 똑같지 않아도 좋아! 나만의 독보적인 카리스마로 빛날래요.',
    recommendTip: '💡 코디 팁: 흑청 와이드진과 블랙 후드, 청키 슈즈로 강렬한 존재감을 완성해 보세요.',
    topDefault: 't3',
    bottomDefault: 'b7',
    shoesDefault: 's5',
    accDefault: ['a8']
  },
  {
    id: 'preppy',
    name: '프레피',
    visualMood: '지적이고 스마트한 명문 스쿨룩 프레피 무드 📚',
    emoji: '📚',
    badge: '#스마트 #스쿨룩 #신뢰',
    tagline: '명문 학교 스쿨룩의 전통을 이어받은 지적이고 예의 바른 단정함',
    palette: [
      { name: '딥 네이비', hex: '#1E3A8A' },
      { name: '헌터 그린', hex: '#14532D' },
      { name: '옥스퍼드 옐로', hex: '#F59E0B' },
      { name: '크림 화이트', hex: '#FFFFFF' }
    ],
    silhouetteText: '단정한 니트조끼 셔츠 세트, 테니스 플리츠스커트 or 치노팬츠, 클래식 로퍼',
    keywords: ['스마트', '스쿨룩', '지적임', '신뢰', '프레피'],
    defaultMotto: '지성과 예의를 갖추고 매일매일 알차게 성장하는 모범생이 될래요.',
    recommendTip: '💡 코디 팁: 니트조끼 셔츠에 테니스 플리츠스커트나 단정한 치노팬츠를 매치해 보세요!',
    topDefault: 't4',
    bottomDefault: 'b8',
    shoesDefault: 's3',
    accDefault: ['a7', 'a1']
  },
  {
    id: 'vintage',
    name: '빈티지',
    visualMood: '아날로그 감성이 깃든 따스한 레트로 빈티지 무드 📻',
    emoji: '📻',
    badge: '#아날로그 #레트로 #시간의멋',
    tagline: '오랜 시간의 멋과 손때 묻은 아날로그적 온기를 품은 편안한 스타일',
    palette: [
      { name: '페이디드 인디고', hex: '#3B82F6' },
      { name: '빈티지 오렌지', hex: '#EA580C' },
      { name: '앤틱 베이지', hex: '#FEF08A' },
      { name: '세피아 브라운', hex: '#78350F' }
    ],
    silhouetteText: '빈티지 보더 스트라이프 티, 워싱 데님, 캔버스 스니커즈, 뿔테 안경',
    keywords: ['레트로', '아날로그', '빈티지', '워싱', '추억'],
    defaultMotto: '빠르게 변하는 유행보다 나만의 따뜻한 감성과 추억을 소중히 여길래요.',
    recommendTip: '💡 코디 팁: 보더 스트라이프 티에 워싱 데님, 클래식 안경을 매치해 아날로그 무드 완성!',
    topDefault: 't6',
    bottomDefault: 'b3',
    shoesDefault: 's4',
    accDefault: ['a7', 'a6']
  },
  {
    id: 'boyish',
    name: '보이시',
    visualMood: '쾌활하고 장난기 가득한 톰보이 보이시 무드 🛹',
    emoji: '🛹',
    badge: '#쾌활함 #털털함 #오버핏',
    tagline: '소년처럼 씩씩하고 털털하며 꾸밈없이 활동적인 중성적 매력',
    palette: [
      { name: '올리브 카키', hex: '#4D7C0F' },
      { name: '멜란지 그레이', hex: '#94A3B8' },
      { name: '섀도우 블랙', hex: '#1E293B' },
      { name: '썬 옐로', hex: '#FACC15' }
    ],
    silhouetteText: '박시한 오버핏 후드티, 밴딩 조거팬츠, 볼캡 모자, 백팩',
    keywords: ['쾌활함', '털털함', '오버핏', '보이시', '자유로움'],
    defaultMotto: '씩씩하고 털털하게, 솔직하고 당당한 나의 모습이 가장 좋아요!',
    recommendTip: '💡 코디 팁: 넉넉한 핏의 후드티와 밴딩 조거팬츠, 볼캡 모자를 푹 눌러써 보세요.',
    topDefault: 't3',
    bottomDefault: 'b2',
    shoesDefault: 's5',
    accDefault: ['a3', 'a1']
  },
  {
    id: 'fantasy',
    name: '판타지',
    visualMood: '신비롭고 몽환적인 드림 판타지 무드 🦄',
    emoji: '🦄',
    badge: '#몽환적 #오로라 #신비로움',
    tagline: '동화 속 상상과 신비로운 은하수처럼 반짝이는 환상적인 스타일',
    palette: [
      { name: '오로라 퍼플', hex: '#A855F7' },
      { name: '미스틱 시안', hex: '#06B6D4' },
      { name: '드림 마젠타', hex: '#EC4899' },
      { name: '스타 화이트', hex: '#FFFFFF' }
    ],
    silhouetteText: '화사한 레이어드 롱티, 비즈 목걸이, 무선 헤드폰, 청키 슈즈',
    keywords: ['신비로움', '몽환적', '오로라', '상상력', '유니콘'],
    defaultMotto: '반짝이는 밤하늘의 별처럼 나만의 무한한 상상력과 꿈을 펼칠래요!',
    recommendTip: '💡 코디 팁: 감각적인 레이어드 탑과 무선 헤드폰, 반짝이는 비즈 목걸이로 몽환적인 포인트를!',
    topDefault: 't8',
    bottomDefault: 'b8',
    shoesDefault: 's5',
    accDefault: ['a5', 'a8']
  }
];

// ==========================================
// 2. WARDROBE ITEMS DATA (WITH SVG ILLUSTRATION CONFIGS)
// ==========================================

const TOPS_DATA = [
  {
    id: 't1',
    name: '깔끔한 오버핏 화이트 셔츠',
    type: 'shirt',
    tag: '#퓨어화이트 #오버핏 #코튼100%',
    colorHex: '#FFFFFF',
    accentHex: '#E2E8F0',
    borderHex: '#94A3B8',
    fit: '단정하고 정갈한 옥스퍼드 칼라 셔츠'
  },
  {
    id: 't2',
    name: '포근한 무지 그레이 맨투맨',
    type: 'sweatshirt',
    tag: '#애쉬그레이 #데일리 #기모안감',
    colorHex: '#CBD5E1',
    accentHex: '#94A3B8',
    borderHex: '#64748B',
    fit: '어깨선이 넉넉한 래글런 루즈핏'
  },
  {
    id: 't3',
    name: '편안한 스트릿 블랙 후드티',
    type: 'hoodie',
    tag: '#차콜블랙 #포켓디테일 #스트릿',
    colorHex: '#1E293B',
    accentHex: '#334155',
    borderHex: '#0F172A',
    fit: '캥거루 주머니와 후드 스트링'
  },
  {
    id: 't4',
    name: '단정한 네이비 니트조끼 세트',
    type: 'vest',
    tag: '#딥네이비 #프레피룩 #단정함',
    colorHex: '#1E3A8A',
    accentHex: '#FFFFFF',
    borderHex: '#172554',
    fit: '브이넥 케이블 니트조끼 + 셔츠'
  },
  {
    id: 't5',
    name: '스포티 트랙 윈드브레이커',
    type: 'windbreaker',
    tag: '#오션블루 #방풍소재 #지퍼집업',
    colorHex: '#0284C7',
    accentHex: '#F8FAFC',
    borderHex: '#0369A1',
    fit: '스포티 배색 패널과 하이넥 집업'
  },
  {
    id: 't6',
    name: '빈티지 보더 스트라이프 티',
    type: 'stripe',
    tag: '#블루스트라이프 #아날로그 #코튼',
    colorHex: '#FFFFFF',
    accentHex: '#2563EB',
    borderHex: '#64748B',
    fit: '경쾌한 가로 단가라 보더 라인'
  },
  {
    id: 't7',
    name: '부드러운 버터 옐로 카디건',
    type: 'cardigan',
    tag: '#버터옐로 #포근한니트 #따뜻함',
    colorHex: '#FDE047',
    accentHex: '#CA8A04',
    borderHex: '#EAB308',
    fit: '포근한 단추 디테일의 루즈 카디건'
  },
  {
    id: 't8',
    name: '트렌디 레터링 레이어드 롱티',
    type: 'layered',
    tag: '#포인트레드 #Y2K레터링 #트렌디',
    colorHex: '#F43F5E',
    accentHex: '#FFFFFF',
    borderHex: '#BE123C',
    fit: '그래픽 프린트 반팔 + 긴팔 레이어드'
  },
  {
    id: 't9',
    name: '로맨틱 플라워 뷔스티에 원피스 세트',
    type: 'bustier_dress',
    tag: '#잔꽃원피스 #반팔레이어드 #소녀감성',
    colorHex: '#FCE7F3',
    accentHex: '#E11D48',
    borderHex: '#BE123C',
    fit: '화이트 반팔티 위에 잔꽃 뷔스티에 원피스를 레이어드'
  },
  {
    id: 't10',
    name: '단정한 카라 셔링 셔츠 원피스',
    type: 'shirt_dress',
    tag: '#셔츠원피스 #허리스트링 #단정청순',
    colorHex: '#DBEAFE',
    accentHex: '#3B82F6',
    borderHex: '#1D4ED8',
    fit: '단정한 칼라와 허리 리본 셔링의 롱 셔츠 원피스'
  },
  {
    id: 't11',
    name: '러블리 세일러 프릴 리본 블라우스',
    type: 'frill_blouse',
    tag: '#세일러카라 #리본타이 #러블리',
    colorHex: '#FFF1F2',
    accentHex: '#FB7185',
    borderHex: '#E11D48',
    fit: '넓은 세일러 프릴 칼라와 앙증맞은 리본 타이'
  }
];

const BOTTOMS_DATA = [
  {
    id: 'b1',
    name: '세련된 세미와이드 슬랙스',
    type: 'slacks',
    tag: '#차콜슬랙스 #구김적음 #찰랑핏',
    colorHex: '#334155',
    accentHex: '#475569',
    borderHex: '#1E293B',
    fit: '중앙 핀턱 주름선의 단정한 와이드핏'
  },
  {
    id: 'b2',
    name: '편안한 그레이 밴딩 조거팬츠',
    type: 'jogger',
    tag: '#멜란지그레이 #밑단시보리 #활동성',
    colorHex: '#CBD5E1',
    accentHex: '#94A3B8',
    borderHex: '#64748B',
    fit: '허리 밴딩과 발목 리브 시보리'
  },
  {
    id: 'b3',
    name: '클래식 미디엄 블루 데님 청바지',
    type: 'denim',
    tag: '#정통데님 #자연스러운워싱 #만능',
    colorHex: '#2563EB',
    accentHex: '#60A5FA',
    borderHex: '#1D4ED8',
    fit: '오렌지 스티치와 캣브러시 워싱'
  },
  {
    id: 'b4',
    name: '트렌디 와이드 멀티 카고팬츠',
    type: 'cargo',
    tag: '#카키올리브 #입체포켓 #스트릿',
    colorHex: '#3F6212',
    accentHex: '#4D7C0F',
    borderHex: '#1A2E05',
    fit: '양쪽 사이드 입체 플랩 포켓'
  },
  {
    id: 'b5',
    name: '단정한 베이지 코튼 치노팬츠',
    type: 'chino',
    tag: '#소프트베이지 #순면100% #댄디',
    colorHex: '#FDE68A',
    accentHex: '#FBBF24',
    borderHex: '#B45309',
    fit: '구김 없는 탄탄한 코튼 치노'
  },
  {
    id: 'b6',
    name: '스포티 사이드라인 트레이닝팬츠',
    type: 'track',
    tag: '#사이드화이트라인 #신축성 #스포티',
    colorHex: '#1E293B',
    accentHex: '#FFFFFF',
    borderHex: '#0F172A',
    fit: '옆선 배색 라인과 활동적인 트랙핏'
  },
  {
    id: 'b7',
    name: '빈티지 워싱 흑청 와이드진',
    type: 'blackdenim',
    tag: '#애쉬블랙데님 #페이딩워싱 #유니크',
    colorHex: '#475569',
    accentHex: '#64748B',
    borderHex: '#1E293B',
    fit: '자연스러운 물빠짐 워싱 흑청'
  },
  {
    id: 'b8',
    name: '발랄한 하이틴 테니스 플리츠스커트',
    type: 'pleats',
    tag: '#칼주름플리츠 #스쿨룩치마 #발랄상큼',
    colorHex: '#1E3A8A',
    accentHex: '#FFFFFF',
    borderHex: '#172554',
    fit: '단정한 칼주름이 잡힌 네이비 테니스 미니 치마'
  },
  {
    id: 'b9',
    name: '로맨틱 살랑살랑 플레어 롱스커트',
    type: 'flare_skirt',
    tag: '#찰랑찰랑A라인 #소프트핑크 #체형커버',
    colorHex: '#FBCFE8',
    accentHex: '#F472B6',
    borderHex: '#DB2777',
    fit: '움직일 때마다 부드럽게 살랑거리는 롱 플레어 치마'
  },
  {
    id: 'b10',
    name: '클래식 버튼 H라인 데님 스커트',
    type: 'denim_skirt',
    tag: '#앞단추디테일 #인디고데님 #캐주얼롱',
    colorHex: '#2563EB',
    accentHex: '#93C5FD',
    borderHex: '#1D4ED8',
    fit: '앞단추 세로 라인과 스티치가 돋보이는 H라인 롱 데님 치마'
  },
  {
    id: 'b11',
    name: '빈티지 서스펜더 멜빵 원피스',
    type: 'suspender_dress',
    tag: '#멜빵원피스 #레이어드룩 #소녀감성',
    colorHex: '#78350F',
    accentHex: '#FDE68A',
    borderHex: '#451A03',
    fit: '어깨 멜빵 스트랩과 플레어 스커트가 이어진 원피스'
  },
  {
    id: 'b12',
    name: '화사한 티어드 캉캉 프릴 롱스커트',
    type: 'tiered_skirt',
    tag: '#캉캉프릴 #풍성한실루엣 #보헤미안',
    colorHex: '#FEF3C7',
    accentHex: '#F59E0B',
    borderHex: '#D97706',
    fit: '3단 주름으로 풍성한 볼륨감을 주는 캉캉 프릴 치마'
  }
];

const SHOES_DATA = [
  {
    id: 's1',
    name: '베이직 올화이트 스니커즈',
    type: 'sneakers',
    tag: '#올화이트레더 #만능기본템 #깔끔',
    colorHex: '#FFFFFF',
    accentHex: '#E2E8F0',
    soleHex: '#CBD5E1'
  },
  {
    id: 's2',
    name: '쿠셔닝 러닝 & 에어 운동화',
    type: 'runner',
    tag: '#형광포인트 #발편한메쉬 #충격흡수',
    colorHex: '#0284C7',
    accentHex: '#22C55E',
    soleHex: '#F8FAFC'
  },
  {
    id: 's3',
    name: '단정한 클래식 페니 로퍼',
    type: 'loafer',
    tag: '#블랙글로시 #클래식단화 #신뢰감',
    colorHex: '#1E293B',
    accentHex: '#334155',
    soleHex: '#0F172A'
  },
  {
    id: 's4',
    name: '편안한 캔버스 로우탑 스니커즈',
    type: 'canvas',
    tag: '#블랙캔버스 #화이트토캡 #캐주얼',
    colorHex: '#0F172A',
    accentHex: '#FFFFFF',
    soleHex: '#FFFFFF'
  },
  {
    id: 's5',
    name: '트렌디 청키 볼드 어글리 슈즈',
    type: 'chunky',
    tag: '#두툼한오버솔 #비율보정 #힙스터',
    colorHex: '#CBD5E1',
    accentHex: '#64748B',
    soleHex: '#475569'
  },
  {
    id: 's6',
    name: '활동적인 하이탑 레트로 농구화',
    type: 'hitop',
    tag: '#레트로컬러블록 #발목보호 #스트릿',
    colorHex: '#EA580C',
    accentHex: '#FFFFFF',
    soleHex: '#1E293B'
  }
];

const ACCESSORIES_DATA = [
  {
    id: 'a1',
    name: '수납왕 대용량 블랙 백팩',
    type: 'backpack',
    tag: '#가방 #대용량책가방',
    colorHex: '#1E293B',
    accentHex: '#475569'
  },
  {
    id: 'a2',
    name: '가방에 단 몽글몽글 인형 키링',
    type: 'keyring',
    tag: '#포인트 #곰인형키링',
    colorHex: '#D97706',
    accentHex: '#FDE68A'
  },
  {
    id: 'a3',
    name: '심플 무지 코튼 볼캡 모자',
    type: 'cap',
    tag: '#머리 #꾸안꾸볼캡',
    colorHex: '#334155',
    accentHex: '#64748B'
  },
  {
    id: 'a4',
    name: '스마트워치 & 데일리 시계',
    type: 'watch',
    tag: '#손목 #시간관리갓생',
    colorHex: '#0F172A',
    accentHex: '#38BDF8'
  },
  {
    id: 'a5',
    name: '집중력 UP 무선 헤드폰',
    type: 'headphones',
    tag: '#귀 #무선헤드폰',
    colorHex: '#CBD5E1',
    accentHex: '#64748B'
  },
  {
    id: 'a6',
    name: '감성 내추럴 코튼 에코백',
    type: 'totebag',
    tag: '#가방 #자연친화에코',
    colorHex: '#FEF3C7',
    accentHex: '#78350F'
  },
  {
    id: 'a7',
    name: '지적인 분위기 클래식 뿔테 안경',
    type: 'glasses',
    tag: '#얼굴 #스마트지성미',
    colorHex: '#0F172A',
    accentHex: '#334155'
  },
  {
    id: 'a8',
    name: '비즈 & 실버 포인트 스트랩 목걸이',
    type: 'necklace',
    tag: '#소품 #키치반짝포인트',
    colorHex: '#93C5FD',
    accentHex: '#F472B6'
  }
];

// ==========================================
// 3. SVG FASHION ILLUSTRATION RENDERING ENGINE
// ==========================================

// A. Thumbnail SVG for Item Selection Cards
function generateItemThumbnailSVG(category, item) {
  if (category === 'top') {
    return generateTopThumbSVG(item);
  } else if (category === 'bottom') {
    return generateBottomThumbSVG(item);
  } else if (category === 'shoes') {
    return generateShoesThumbSVG(item);
  } else if (category === 'acc') {
    return generateAccThumbSVG(item);
  }
  return '';
}

function generateTopThumbSVG(item) {
  const c = item.colorHex;
  const a = item.accentHex;
  const b = item.borderHex;

  if (item.type === 'shirt') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <!-- Shirt Body -->
        <path d="M 22 25 L 10 38 L 18 44 L 25 35 L 25 65 Q 25 68 28 68 L 52 68 Q 55 68 55 65 L 55 35 L 62 44 L 70 38 L 58 25 Z" fill="${c}" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
        <!-- Placket & Buttons -->
        <line x1="40" y1="24" x2="40" y2="68" stroke="${b}" stroke-width="1.5"/>
        <circle cx="40" cy="33" r="1.5" fill="${b}"/>
        <circle cx="40" cy="42" r="1.5" fill="${b}"/>
        <circle cx="40" cy="51" r="1.5" fill="${b}"/>
        <circle cx="40" cy="60" r="1.5" fill="${b}"/>
        <!-- Pocket -->
        <rect x="44" y="34" width="7" height="9" rx="1" fill="${a}" stroke="${b}" stroke-width="1"/>
        <!-- Collar -->
        <path d="M 33 22 L 40 28 L 29 28 Z" fill="${a}" stroke="${b}" stroke-width="1.5"/>
        <path d="M 47 22 L 40 28 L 51 28 Z" fill="${a}" stroke="${b}" stroke-width="1.5"/>
      </svg>
    `;
  } else if (item.type === 'hoodie') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <!-- Hood behind -->
        <path d="M 28 20 Q 40 12 52 20 Q 56 26 52 28 Q 40 25 28 28 Q 24 26 28 20 Z" fill="${a}" stroke="${b}" stroke-width="1.5"/>
        <!-- Body -->
        <path d="M 22 26 L 10 38 L 18 45 L 25 36 L 25 64 Q 25 68 28 68 L 52 68 Q 55 68 55 64 L 55 36 L 62 45 L 70 38 L 58 26 Z" fill="${c}" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
        <!-- Kangaroo pocket -->
        <path d="M 30 48 L 50 48 L 47 62 L 33 62 Z" fill="${a}" stroke="${b}" stroke-width="1.5"/>
        <!-- Drawstrings -->
        <line x1="37" y1="26" x2="36" y2="38" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="43" y1="26" x2="44" y2="38" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    `;
  } else if (item.type === 'vest') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <!-- Inner Shirt Sleeves -->
        <path d="M 22 25 L 10 38 L 18 44 L 25 35 Z" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.5"/>
        <path d="M 58 25 L 70 38 L 62 44 L 55 35 Z" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.5"/>
        <!-- Shirt Collar -->
        <path d="M 34 20 L 40 26 L 30 26 Z" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.5"/>
        <path d="M 46 20 L 40 26 L 50 26 Z" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.5"/>
        <!-- Knit Vest Body -->
        <path d="M 26 24 L 35 24 L 40 33 L 45 24 L 54 24 L 54 66 L 26 66 Z" fill="${c}" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
        <!-- V-neck Trim -->
        <path d="M 35 24 L 40 33 L 45 24" fill="none" stroke="${a}" stroke-width="2"/>
        <line x1="26" y1="62" x2="54" y2="62" stroke="${b}" stroke-width="1.5"/>
      </svg>
    `;
  } else if (item.type === 'windbreaker') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <!-- Windbreaker Body -->
        <path d="M 24 24 L 10 37 L 18 44 L 26 35 L 26 65 L 54 65 L 54 35 L 62 44 L 70 37 L 56 24 Z" fill="${c}" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
        <!-- Contrast Panels -->
        <path d="M 24 24 L 40 38 L 56 24 Z" fill="${a}" stroke="${b}" stroke-width="1"/>
        <line x1="40" y1="22" x2="40" y2="65" stroke="#FFFFFF" stroke-width="2"/>
        <!-- High Collar -->
        <rect x="33" y="19" width="14" height="6" rx="2" fill="${c}" stroke="${b}" stroke-width="1.5"/>
      </svg>
    `;
  } else if (item.type === 'stripe') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <defs>
          <pattern id="pat-stripe" width="80" height="8" patternUnits="userSpaceOnUse">
            <rect width="80" height="4" fill="${c}"/>
            <rect y="4" width="80" height="4" fill="${a}"/>
          </pattern>
        </defs>
        <path d="M 23 25 L 10 38 L 18 44 L 26 35 L 26 66 L 54 66 L 54 35 L 62 44 L 70 38 L 57 25 Z" fill="url(#pat-stripe)" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M 32 23 Q 40 27 48 23" fill="none" stroke="${b}" stroke-width="2.5"/>
      </svg>
    `;
  } else if (item.type === 'bustier_dress') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <!-- Inner T-shirt -->
        <path d="M 22 25 L 12 36 L 19 41 L 25 34 L 25 65 L 55 65 L 55 34 L 61 41 L 68 36 L 58 25 Z" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.5"/>
        <!-- Bustier Bodice with floral details -->
        <path d="M 26 34 Q 33 28 40 35 Q 47 28 54 34 L 56 66 Q 40 69 24 66 Z" fill="${c}" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
        <!-- Straps -->
        <line x1="30" y1="26" x2="30" y2="34" stroke="${b}" stroke-width="2"/>
        <line x1="50" y1="26" x2="50" y2="34" stroke="${b}" stroke-width="2"/>
        <!-- Floral Accents -->
        <circle cx="34" cy="42" r="1.8" fill="${a}"/>
        <circle cx="46" cy="42" r="1.8" fill="${a}"/>
        <circle cx="40" cy="52" r="1.8" fill="${a}"/>
        <circle cx="32" cy="58" r="1.8" fill="${a}"/>
        <circle cx="48" cy="58" r="1.8" fill="${a}"/>
      </svg>
    `;
  } else if (item.type === 'shirt_dress') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <path d="M 23 25 L 10 38 L 18 44 L 25 35 L 24 67 Q 40 70 56 67 L 55 35 L 62 44 L 70 38 L 57 25 Z" fill="${c}" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
        <!-- Collar -->
        <path d="M 33 22 L 40 28 L 29 28 Z" fill="#FFFFFF" stroke="${b}" stroke-width="1.5"/>
        <path d="M 47 22 L 40 28 L 51 28 Z" fill="#FFFFFF" stroke="${b}" stroke-width="1.5"/>
        <line x1="40" y1="24" x2="40" y2="67" stroke="${b}" stroke-width="1.5"/>
        <!-- Waist ribbon -->
        <rect x="25" y="44" width="30" height="4" fill="${a}" stroke="${b}" stroke-width="1.2"/>
        <path d="M 39 45 L 36 53 M 41 45 L 44 53" stroke="${a}" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    `;
  } else if (item.type === 'frill_blouse') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <!-- Puffy Sleeves -->
        <ellipse cx="17" cy="38" rx="7" ry="11" fill="${c}" stroke="${b}" stroke-width="1.8"/>
        <ellipse cx="63" cy="38" rx="7" ry="11" fill="${c}" stroke="${b}" stroke-width="1.8"/>
        <!-- Body -->
        <path d="M 24 25 L 24 66 L 56 66 L 56 25 Z" fill="${c}" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
        <!-- Sailor Frill Collar -->
        <path d="M 28 24 Q 18 34 22 45 Q 32 48 40 38 Q 48 48 58 45 Q 62 34 52 24 Z" fill="${c}" stroke="${b}" stroke-width="1.8"/>
        <!-- Bow -->
        <circle cx="40" cy="38" r="2.5" fill="${b}"/>
        <path d="M 38 39 L 34 46 M 42 39 L 46 46" stroke="${a}" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `;
  } else {
    // Default sweatshirt / cardigan / layered
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <path d="M 24 25 L 10 38 L 18 44 L 26 35 L 26 65 Q 26 67 29 67 L 51 67 Q 54 67 54 65 L 54 35 L 62 44 L 70 38 L 56 25 Z" fill="${c}" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
        <circle cx="40" cy="24" r="6" fill="${a}" stroke="${b}" stroke-width="1.5"/>
        <line x1="26" y1="62" x2="54" y2="62" stroke="${b}" stroke-width="1.5"/>
        <line x1="12" y1="39" x2="17" y2="44" stroke="${b}" stroke-width="1.5"/>
        <line x1="68" y1="39" x2="63" y2="44" stroke="${b}" stroke-width="1.5"/>
      </svg>
    `;
  }
}

function generateBottomThumbSVG(item) {
  const c = item.colorHex;
  const a = item.accentHex;
  const b = item.borderHex;

  if (item.type === 'cargo') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <!-- Pants Body -->
        <path d="M 26 18 L 54 18 L 52 68 L 43 68 L 40 38 L 37 68 L 28 68 Z" fill="${c}" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
        <!-- Waistband -->
        <rect x="26" y="17" width="28" height="5" fill="${a}" stroke="${b}" stroke-width="1.5"/>
        <!-- Cargo Flap Pockets -->
        <rect x="24" y="36" width="6" height="11" rx="1.5" fill="${a}" stroke="${b}" stroke-width="1.5"/>
        <rect x="50" y="36" width="6" height="11" rx="1.5" fill="${a}" stroke="${b}" stroke-width="1.5"/>
      </svg>
    `;
  } else if (item.type === 'jogger') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <path d="M 27 18 L 53 18 L 50 63 L 42 63 L 40 36 L 38 63 L 30 63 Z" fill="${c}" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
        <!-- Elastic Rib Cuffs -->
        <rect x="29" y="63" width="6" height="5" rx="1" fill="${a}" stroke="${b}" stroke-width="1.5"/>
        <rect x="45" y="63" width="6" height="5" rx="1" fill="${a}" stroke="${b}" stroke-width="1.5"/>
        <!-- Drawstring -->
        <line x1="40" y1="21" x2="38" y2="28" stroke="#FFFFFF" stroke-width="1.5"/>
        <line x1="40" y1="21" x2="42" y2="28" stroke="#FFFFFF" stroke-width="1.5"/>
      </svg>
    `;
  } else if (item.type === 'denim' || item.type === 'blackdenim') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <path d="M 26 18 L 54 18 L 53 68 L 43 68 L 40 38 L 37 68 L 27 68 Z" fill="${c}" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
        <!-- Denim Stitching & Pockets -->
        <path d="M 29 23 Q 34 26 38 23" fill="none" stroke="${a}" stroke-width="1.5"/>
        <path d="M 42 23 Q 46 26 51 23" fill="none" stroke="${a}" stroke-width="1.5"/>
        <!-- Whiskers/Fading highlight -->
        <line x1="31" y1="32" x2="37" y2="34" stroke="${a}" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
        <line x1="49" y1="32" x2="43" y2="34" stroke="${a}" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
      </svg>
    `;
  } else if (item.type === 'pleats') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <!-- Pleated Skirt -->
        <path d="M 28 20 L 52 20 L 62 58 L 18 58 Z" fill="${c}" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
        <line x1="26" y1="23" x2="23" y2="58" stroke="${b}" stroke-width="1.5"/>
        <line x1="33" y1="23" x2="32" y2="58" stroke="${b}" stroke-width="1.5"/>
        <line x1="40" y1="23" x2="40" y2="58" stroke="${b}" stroke-width="1.5"/>
        <line x1="47" y1="23" x2="48" y2="58" stroke="${b}" stroke-width="1.5"/>
        <line x1="54" y1="23" x2="57" y2="58" stroke="${b}" stroke-width="1.5"/>
        <rect x="28" y="18" width="24" height="4" fill="${a}" stroke="${b}" stroke-width="1.5"/>
      </svg>
    `;
  } else if (item.type === 'flare_skirt') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <!-- Flowing A-Line Flare Skirt -->
        <path d="M 28 20 L 52 20 Q 64 42 66 64 Q 50 67 40 65 Q 30 67 14 64 Q 16 42 28 20 Z" fill="${c}" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
        <rect x="28" y="18" width="24" height="4" rx="1" fill="${a}" stroke="${b}" stroke-width="1.5"/>
        <path d="M 34 23 Q 32 44 28 65" fill="none" stroke="${b}" stroke-width="1.5" opacity="0.6"/>
        <path d="M 46 23 Q 48 44 52 65" fill="none" stroke="${b}" stroke-width="1.5" opacity="0.6"/>
      </svg>
    `;
  } else if (item.type === 'denim_skirt') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <!-- H-Line Button Denim Skirt -->
        <path d="M 27 20 L 53 20 L 55 64 Q 40 66 25 64 Z" fill="${c}" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
        <rect x="27" y="18" width="26" height="5" rx="1.5" fill="${a}" stroke="${b}" stroke-width="1.5"/>
        <line x1="40" y1="23" x2="40" y2="64" stroke="${b}" stroke-width="1.8"/>
        <circle cx="40" cy="29" r="1.5" fill="#F59E0B" stroke="${b}" stroke-width="0.8"/>
        <circle cx="40" cy="38" r="1.5" fill="#F59E0B" stroke="${b}" stroke-width="0.8"/>
        <circle cx="40" cy="47" r="1.5" fill="#F59E0B" stroke="${b}" stroke-width="0.8"/>
        <circle cx="40" cy="56" r="1.5" fill="#F59E0B" stroke="${b}" stroke-width="0.8"/>
      </svg>
    `;
  } else if (item.type === 'suspender_dress') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <!-- Suspender Pinafore Dress -->
        <rect x="31" y="14" width="4" height="24" fill="${c}" stroke="${b}" stroke-width="1.2"/>
        <rect x="45" y="14" width="4" height="24" fill="${c}" stroke="${b}" stroke-width="1.2"/>
        <circle cx="33" cy="36" r="1.5" fill="${a}" stroke="${b}" stroke-width="0.8"/>
        <circle cx="47" cy="36" r="1.5" fill="${a}" stroke="${b}" stroke-width="0.8"/>
        <rect x="33" y="24" width="14" height="13" rx="1" fill="${c}" stroke="${b}" stroke-width="1.5"/>
        <path d="M 27 36 L 53 36 Q 64 52 65 66 Q 40 69 15 66 Q 16 52 27 36 Z" fill="${c}" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
        <rect x="26" y="35" width="28" height="4" fill="${a}" stroke="${b}" stroke-width="1.2"/>
      </svg>
    `;
  } else if (item.type === 'tiered_skirt') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <!-- Tiered Ruffle Skirt -->
        <path d="M 28 20 L 52 20 L 55 35 L 25 35 Z" fill="${c}" stroke="${b}" stroke-width="1.8"/>
        <rect x="28" y="18" width="24" height="4" fill="${a}" stroke="${b}" stroke-width="1.2"/>
        <path d="M 23 35 L 57 35 L 61 50 L 19 50 Z" fill="${c}" stroke="${b}" stroke-width="1.8"/>
        <path d="M 17 50 L 63 50 L 67 66 Q 40 69 13 66 Z" fill="${c}" stroke="${b}" stroke-width="2"/>
      </svg>
    `;
  } else {
    // Wide Slacks / Chinos / Track
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <path d="M 27 18 L 53 18 L 53 68 L 43 68 L 40 37 L 37 68 L 27 68 Z" fill="${c}" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
        <!-- Front Crease Line -->
        <line x1="33" y1="23" x2="33" y2="67" stroke="${a}" stroke-width="1.2"/>
        <line x1="47" y1="23" x2="47" y2="67" stroke="${a}" stroke-width="1.2"/>
        <rect x="27" y="17" width="26" height="5" fill="${a}" stroke="${b}" stroke-width="1.5"/>
      </svg>
    `;
  }
}

function generateShoesThumbSVG(item) {
  const c = item.colorHex;
  const a = item.accentHex;
  const s = item.soleHex;

  if (item.type === 'loafer') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <!-- Loafer Profile -->
        <path d="M 12 50 Q 18 36 34 38 Q 50 36 68 45 Q 72 48 72 54 L 12 54 Z" fill="${c}" stroke="#0F172A" stroke-width="2" stroke-linejoin="round"/>
        <!-- Sole & Low Heel -->
        <rect x="12" y="54" width="60" height="6" rx="1.5" fill="${s}" stroke="#0F172A" stroke-width="1.5"/>
        <rect x="15" y="60" width="16" height="4" fill="#0F172A"/>
        <!-- Penny Keeper Strap -->
        <rect x="36" y="38" width="14" height="6" rx="1" fill="${a}" stroke="#0F172A" stroke-width="1"/>
      </svg>
    `;
  } else {
    // Sneakers / Runners / Chunky
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <!-- Upper -->
        <path d="M 14 50 Q 18 34 35 34 Q 48 34 68 44 Q 72 47 72 53 L 14 53 Z" fill="${c}" stroke="#334155" stroke-width="2" stroke-linejoin="round"/>
        <!-- Thick Sole -->
        <path d="M 12 53 L 74 53 Q 74 62 70 62 L 14 62 Q 12 62 12 53 Z" fill="${s}" stroke="#334155" stroke-width="2"/>
        <!-- Swoosh / Accent -->
        <path d="M 28 44 Q 45 38 58 48" fill="none" stroke="${a}" stroke-width="3" stroke-linecap="round"/>
        <!-- Laces -->
        <line x1="38" y1="36" x2="44" y2="40" stroke="#FFFFFF" stroke-width="2"/>
        <line x1="44" y1="38" x2="50" y2="42" stroke="#FFFFFF" stroke-width="2"/>
      </svg>
    `;
  }
}

function generateAccThumbSVG(item) {
  const c = item.colorHex;
  const a = item.accentHex;

  if (item.type === 'backpack') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <!-- Backpack Dome -->
        <path d="M 24 24 Q 40 14 56 24 L 60 62 Q 60 66 56 66 L 24 66 Q 20 66 20 62 Z" fill="${c}" stroke="#0F172A" stroke-width="2" stroke-linejoin="round"/>
        <!-- Front Pocket -->
        <rect x="27" y="42" width="26" height="18" rx="3" fill="${a}" stroke="#0F172A" stroke-width="1.5"/>
        <line x1="27" y1="47" x2="53" y2="47" stroke="#FFFFFF" stroke-width="1.5"/>
        <!-- Top Handle -->
        <path d="M 33 20 Q 40 12 47 20" fill="none" stroke="#0F172A" stroke-width="2.5"/>
      </svg>
    `;
  } else if (item.type === 'cap') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <!-- 6-Panel Dome -->
        <path d="M 22 45 Q 26 22 46 22 Q 62 24 64 45 Z" fill="${c}" stroke="#0F172A" stroke-width="2" stroke-linejoin="round"/>
        <!-- Visor Brim -->
        <path d="M 12 48 Q 28 38 64 45 Q 68 52 56 52 Q 24 53 12 48 Z" fill="${a}" stroke="#0F172A" stroke-width="2"/>
        <!-- Top Button -->
        <circle cx="44" cy="22" r="2.5" fill="#0F172A"/>
      </svg>
    `;
  } else if (item.type === 'headphones') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <!-- Headband -->
        <path d="M 22 44 Q 22 18 40 18 Q 58 18 58 44" fill="none" stroke="#475569" stroke-width="4" stroke-linecap="round"/>
        <!-- Earcups -->
        <rect x="16" y="38" width="10" height="20" rx="4" fill="${c}" stroke="#0F172A" stroke-width="2"/>
        <rect x="54" y="38" width="10" height="20" rx="4" fill="${c}" stroke="#0F172A" stroke-width="2"/>
      </svg>
    `;
  } else if (item.type === 'glasses') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <!-- Rims -->
        <rect x="16" y="32" width="20" height="16" rx="4" fill="none" stroke="#0F172A" stroke-width="3"/>
        <rect x="44" y="32" width="20" height="16" rx="4" fill="none" stroke="#0F172A" stroke-width="3"/>
        <!-- Bridge -->
        <line x1="36" y1="39" x2="44" y2="39" stroke="#0F172A" stroke-width="3"/>
        <!-- Temples -->
        <line x1="16" y1="37" x2="8" y2="35" stroke="#0F172A" stroke-width="2.5"/>
        <line x1="64" y1="37" x2="72" y2="35" stroke="#0F172A" stroke-width="2.5"/>
      </svg>
    `;
  } else if (item.type === 'keyring') {
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <!-- Ring -->
        <circle cx="40" cy="20" r="6" fill="none" stroke="#CBD5E1" stroke-width="2.5"/>
        <!-- Teddy Bear Head -->
        <circle cx="32" cy="34" r="5" fill="${c}"/>
        <circle cx="48" cy="34" r="5" fill="${c}"/>
        <circle cx="40" cy="42" r="14" fill="${c}" stroke="#92400E" stroke-width="1.5"/>
        <!-- Bear Snout & Eyes -->
        <circle cx="40" cy="45" r="5" fill="${a}"/>
        <circle cx="36" cy="40" r="1.5" fill="#000000"/>
        <circle cx="44" cy="40" r="1.5" fill="#000000"/>
        <circle cx="40" cy="44" r="1" fill="#000000"/>
      </svg>
    `;
  } else {
    // Watch / Tote / Necklace
    return `
      <svg viewBox="0 0 80 80" width="100%" height="100%" class="drop-shadow-xs">
        <rect x="24" y="32" width="32" height="36" rx="3" fill="${c}" stroke="#78350F" stroke-width="2"/>
        <path d="M 32 32 Q 40 18 48 32" fill="none" stroke="#78350F" stroke-width="2.5"/>
      </svg>
    `;
  }
}

// ==========================================
// B. FULL-BODY FASHION CHARACTER ILLUSTRATION ENGINE
// ==========================================

function renderFullCharacterSVG(genderOrChugumiId, chugumiIdOrTopId, topIdOrBottomId, bottomIdOrShoesId, shoesIdOrAccSet, maybeAccSet) {
  let gender = 'girl';
  let chugumiId, topId, bottomId, shoesId, accSet;

  if (genderOrChugumiId === 'boy' || genderOrChugumiId === 'girl') {
    gender = genderOrChugumiId;
    chugumiId = chugumiIdOrTopId;
    topId = topIdOrBottomId;
    bottomId = bottomIdOrShoesId;
    shoesId = shoesIdOrAccSet;
    accSet = maybeAccSet || new Set();
  } else {
    gender = state.characterGender || 'girl';
    chugumiId = genderOrChugumiId;
    topId = chugumiIdOrTopId;
    bottomId = topIdOrBottomId;
    shoesId = bottomIdOrShoesId;
    accSet = shoesIdOrAccSet || new Set();
  }

  const isBoy = (gender === 'boy');
  const chosenMood = CHUGUMI_DATA.find(c => c.id === chugumiId) || CHUGUMI_DATA[0];
  const top = TOPS_DATA.find(t => t.id === topId) || TOPS_DATA[0];
  const bottom = BOTTOMS_DATA.find(b => b.id === bottomId) || BOTTOMS_DATA[0];
  const shoes = SHOES_DATA.find(s => s.id === shoesId) || SHOES_DATA[0];

  const hasBackpack = accSet.has('a1');
  const hasTotebag = accSet.has('a6');
  const hasKeyring = accSet.has('a2');
  const hasCap = accSet.has('a3');
  const hasWatch = accSet.has('a4');
  const hasHeadphones = accSet.has('a5');
  const hasGlasses = accSet.has('a7');
  const hasNecklace = accSet.has('a8');

  const auraColor = chosenMood.palette[0].hex;
  const auraColor2 = chosenMood.palette[1].hex;

  return `
    <svg viewBox="0 0 240 330" width="100%" height="100%" class="transition-all duration-300">
      <defs>
        <!-- Soft Mood Backdrop Glow -->
        <radialGradient id="mood-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${auraColor}" stop-opacity="0.25"/>
          <stop offset="70%" stop-color="${auraColor2}" stop-opacity="0.1"/>
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- 1. Background Glow & Floor Shadow -->
      <circle cx="120" cy="150" r="110" fill="url(#mood-glow)"/>
      <ellipse cx="120" cy="318" rx="65" ry="8" fill="#E2E8F0"/>

      <!-- 2. Backpack (Behind Body) -->
      ${hasBackpack ? `
        <g id="char-backpack" class="transition-all">
          <rect x="74" y="95" width="92" height="95" rx="20" fill="#1E293B" stroke="#0F172A" stroke-width="2.5"/>
          <rect x="85" y="130" width="70" height="48" rx="8" fill="#334155" stroke="#0F172A" stroke-width="2"/>
          <line x1="88" y1="138" x2="152" y2="138" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="4 2"/>
        </g>
      ` : ''}

      <!-- 3. Legs & Skin -->
      <g id="char-legs-skin">
        <rect x="94" y="205" width="16" height="92" rx="6" fill="#FED7AA"/>
        <rect x="130" y="205" width="16" height="92" rx="6" fill="#FED7AA"/>
      </g>

      <!-- 4. Bottom Garment (Pants/Skirt) -->
      <g id="char-bottom">
        ${renderCharacterBottomSVG(bottom)}
      </g>

      <!-- 5. Shoes (Feet) -->
      <g id="char-shoes">
        ${renderCharacterShoesSVG(shoes)}
      </g>

      <!-- 6. Arms & Hands -->
      <g id="char-arms">
        <!-- Left Arm -->
        <path d="M 84 105 Q 68 145 74 175" fill="none" stroke="#FED7AA" stroke-width="12" stroke-linecap="round"/>
        <!-- Right Arm -->
        <path d="M 156 105 Q 172 145 166 175" fill="none" stroke="#FED7AA" stroke-width="12" stroke-linecap="round"/>
        <!-- Watch on left wrist -->
        ${hasWatch ? `
          <rect x="68" y="162" width="10" height="6" rx="2" fill="#0F172A" stroke="#38BDF8" stroke-width="1"/>
        ` : ''}
      </g>

      <!-- 7. Top Garment (Shirt/Hoodie/Knit/Blouse/Dress) -->
      <g id="char-top">
        ${renderCharacterTopSVG(top)}
      </g>

      ${bottom.type === 'suspender_dress' ? `
        <!-- Suspender Pinafore Overlay over Top -->
        <g id="char-suspenders-overlay">
          <!-- Straps over shoulders -->
          <rect x="100" y="96" width="7" height="68" rx="2" fill="${bottom.colorHex}" stroke="${bottom.borderHex}" stroke-width="2"/>
          <rect x="133" y="96" width="7" height="68" rx="2" fill="${bottom.colorHex}" stroke="${bottom.borderHex}" stroke-width="2"/>
          <circle cx="103.5" cy="158" r="2" fill="${bottom.accentHex}" stroke="${bottom.borderHex}" stroke-width="1"/>
          <circle cx="136.5" cy="158" r="2" fill="${bottom.accentHex}" stroke="${bottom.borderHex}" stroke-width="1"/>
          <!-- Bib chest panel -->
          <rect x="104" y="132" width="32" height="34" rx="3" fill="${bottom.colorHex}" stroke="${bottom.borderHex}" stroke-width="2"/>
          <rect x="108" y="140" width="24" height="12" rx="2" fill="${bottom.accentHex}" stroke="${bottom.borderHex}" stroke-width="1.2"/>
        </g>
      ` : ''}

      <!-- 8. Necklace -->
      ${hasNecklace ? `
        <path d="M 108 92 Q 120 108 132 92" fill="none" stroke="#F472B6" stroke-width="2.5"/>
        <circle cx="120" cy="107" r="3.5" fill="#38BDF8"/>
      ` : ''}

      <!-- 9. Neck & Head -->
      <g id="char-head">
        <!-- Neck -->
        <rect x="112" y="76" width="16" height="18" rx="4" fill="#FED7AA"/>
        
        ${isBoy ? `
          <!-- Boy Hair (Back volume) -->
          <ellipse cx="120" cy="54" rx="31" ry="28" fill="#1E293B"/>
          <!-- Boy Left & Right Ears -->
          <circle cx="94" cy="60" r="5" fill="#FFEDD5" stroke="#FDBA74" stroke-width="1.2"/>
          <circle cx="146" cy="60" r="5" fill="#FFEDD5" stroke="#FDBA74" stroke-width="1.2"/>
        ` : `
          <!-- Girl Hair (Back) -->
          <circle cx="120" cy="56" r="33" fill="#334155"/>
          <!-- Girl Shoulder Hair Strands (Left & Right) -->
          <path d="M 88 56 Q 84 82 91 100 Q 97 104 101 96 Q 94 76 95 56 Z" fill="#334155"/>
          <path d="M 88 60 Q 86 82 91 98" fill="none" stroke="#1E293B" stroke-width="1.5"/>
          <path d="M 152 56 Q 156 82 149 100 Q 143 104 139 96 Q 146 76 145 56 Z" fill="#334155"/>
          <path d="M 152 60 Q 154 82 149 98" fill="none" stroke="#1E293B" stroke-width="1.5"/>
        `}

        <!-- Face Shape -->
        <circle cx="120" cy="58" r="26" fill="#FFEDD5" stroke="#FDBA74" stroke-width="1"/>
        
        ${isBoy ? `
          <!-- Boy Eyebrows (Neat, confident) -->
          <path d="M 104 50 L 115 49" stroke="#334155" stroke-width="2.2" stroke-linecap="round"/>
          <path d="M 125 49 L 136 50" stroke="#334155" stroke-width="2.2" stroke-linecap="round"/>
          
          <!-- Boy Cheeks (Fresh peach) -->
          <circle cx="105" cy="65" r="3.5" fill="#FB923C" opacity="0.28"/>
          <circle cx="135" cy="65" r="3.5" fill="#FB923C" opacity="0.28"/>

          <!-- Eyes & Smile -->
          <circle cx="110" cy="57.5" r="2.8" fill="#1E293B"/>
          <circle cx="130" cy="57.5" r="2.8" fill="#1E293B"/>
          <circle cx="111" cy="56.5" r="0.9" fill="#FFFFFF"/>
          <circle cx="131" cy="56.5" r="0.9" fill="#FFFFFF"/>
          <path d="M 115 67 Q 120 72 125 67" fill="none" stroke="#1E293B" stroke-width="2" stroke-linecap="round"/>

          <!-- Boy Hair (Front Dandy Bangs with Texture) -->
          <path d="M 89 52 Q 120 25 151 52 Q 142 32 120 30 Q 98 32 89 52 Z" fill="#334155"/>
          <path d="M 89 50 Q 102 43 110 52 Q 118 39 128 52 Q 138 42 151 50 Q 140 33 120 31 Q 100 33 89 50 Z" fill="#1E293B"/>
          <path d="M 108 34 Q 116 38 114 46" fill="none" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
        ` : `
          <!-- Girl Eyebrows (Soft arch) -->
          <path d="M 104 51 Q 110 49 115 51" fill="none" stroke="#64748B" stroke-width="1.6" stroke-linecap="round"/>
          <path d="M 125 51 Q 130 49 136 51" fill="none" stroke="#64748B" stroke-width="1.6" stroke-linecap="round"/>

          <!-- Girl Blushing Cheeks (Rose) -->
          <circle cx="105" cy="65" r="4.5" fill="#F43F5E" opacity="0.38"/>
          <circle cx="135" cy="65" r="4.5" fill="#F43F5E" opacity="0.38"/>

          <!-- Girl Eyes with lashes -->
          <path d="M 106 54 Q 110 52 114 54" fill="none" stroke="#1E293B" stroke-width="1.8"/>
          <path d="M 126 54 Q 130 52 134 54" fill="none" stroke="#1E293B" stroke-width="1.8"/>
          <circle cx="110" cy="57" r="2.8" fill="#1E293B"/>
          <circle cx="130" cy="57" r="2.8" fill="#1E293B"/>
          <circle cx="111" cy="56" r="1.1" fill="#FFFFFF"/>
          <circle cx="131" cy="56" r="1.1" fill="#FFFFFF"/>
          <circle cx="109" cy="58.5" r="0.6" fill="#FFFFFF"/>
          <circle cx="129" cy="58.5" r="0.6" fill="#FFFFFF"/>
          <path d="M 115 67 Q 120 72 125 67" fill="none" stroke="#E11D48" stroke-width="2" stroke-linecap="round"/>

          <!-- Girl Hair (Front see-through bangs) -->
          <path d="M 92 48 Q 120 32 148 48 Q 138 30 120 28 Q 102 30 92 48 Z" fill="#334155"/>
          <path d="M 92 48 Q 106 58 114 49 Q 120 59 128 49 Q 136 58 148 48 Q 138 35 120 33 Q 102 35 92 48 Z" fill="#1E293B"/>
          <path d="M 102 36 Q 120 40 138 36" fill="none" stroke="#475569" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
        `}
      </g>

      <!-- 10. Face Accessories (Glasses & Cap & Headphones) -->
      ${hasGlasses ? `
        <g id="char-glasses">
          <rect x="102" y="50" width="15" height="12" rx="3" fill="none" stroke="#0F172A" stroke-width="2.5"/>
          <rect x="123" y="50" width="15" height="12" rx="3" fill="none" stroke="#0F172A" stroke-width="2.5"/>
          <line x1="117" y1="56" x2="123" y2="56" stroke="#0F172A" stroke-width="2"/>
        </g>
      ` : ''}

      ${hasHeadphones ? `
        <g id="char-headphones">
          <path d="M 94 56 Q 94 28 120 28 Q 146 28 146 56" fill="none" stroke="#64748B" stroke-width="5" stroke-linecap="round"/>
          <rect x="88" y="48" width="8" height="18" rx="4" fill="#CBD5E1" stroke="#0F172A" stroke-width="2"/>
          <rect x="144" y="48" width="8" height="18" rx="4" fill="#CBD5E1" stroke="#0F172A" stroke-width="2"/>
        </g>
      ` : ''}

      ${hasCap ? `
        <g id="char-cap">
          <path d="M 94 42 Q 98 22 120 22 Q 142 22 146 42 Z" fill="#334155" stroke="#0F172A" stroke-width="2"/>
          <!-- Cap Visor -->
          <path d="M 96 42 Q 120 48 152 40 Q 155 46 142 47 Q 115 48 96 42 Z" fill="#1E293B" stroke="#0F172A" stroke-width="2"/>
        </g>
      ` : ''}

      <!-- 11. Bags & Side Items (Tote / Keyring) -->
      ${hasTotebag ? `
        <g id="char-totebag">
          <path d="M 148 102 Q 170 140 166 172" fill="none" stroke="#78350F" stroke-width="3"/>
          <rect x="156" y="165" width="28" height="34" rx="3" fill="#FEF3C7" stroke="#78350F" stroke-width="2"/>
        </g>
      ` : ''}

      ${hasKeyring ? `
        <g id="char-keyring" transform="translate(148, 172)">
          <circle cx="8" cy="8" r="7" fill="#D97706" stroke="#92400E" stroke-width="1.5"/>
          <circle cx="4" cy="4" r="2.5" fill="#D97706"/>
          <circle cx="12" cy="4" r="2.5" fill="#D97706"/>
          <circle cx="8" cy="9" r="3" fill="#FDE68A"/>
        </g>
      ` : ''}

    </svg>
  `;
}

function renderCharacterTopSVG(top) {
  const c = top.colorHex;
  const a = top.accentHex;
  const b = top.borderHex;

  if (top.type === 'shirt') {
    return `
      <!-- Shirt sleeves -->
      <path d="M 80 100 L 68 135 L 80 140 L 92 110 Z" fill="${c}" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M 160 100 L 172 135 L 160 140 L 148 110 Z" fill="${c}" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
      <!-- Body -->
      <path d="M 88 95 L 152 95 L 154 165 Q 154 170 150 170 L 90 170 Q 86 170 86 165 Z" fill="${c}" stroke="${b}" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Center Placket & Buttons -->
      <line x1="120" y1="95" x2="120" y2="170" stroke="${b}" stroke-width="1.5"/>
      <circle cx="120" cy="110" r="1.5" fill="${b}"/>
      <circle cx="120" cy="125" r="1.5" fill="${b}"/>
      <circle cx="120" cy="140" r="1.5" fill="${b}"/>
      <circle cx="120" cy="155" r="1.5" fill="${b}"/>
      <!-- Collar -->
      <path d="M 106 88 L 120 102 L 104 98 Z" fill="${a}" stroke="${b}" stroke-width="2"/>
      <path d="M 134 88 L 120 102 L 136 98 Z" fill="${a}" stroke="${b}" stroke-width="2"/>
    `;
  } else if (top.type === 'hoodie') {
    return `
      <!-- Hoodie Hood behind neck -->
      <path d="M 100 86 Q 120 74 140 86 Q 146 94 140 98 Q 120 94 100 98 Q 94 94 100 86 Z" fill="${a}" stroke="${b}" stroke-width="2"/>
      <!-- Sleeves (Oversized) -->
      <path d="M 80 98 L 64 142 L 78 146 L 90 112 Z" fill="${c}" stroke="${b}" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M 160 98 L 176 142 L 162 146 L 150 112 Z" fill="${c}" stroke="${b}" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Body -->
      <rect x="84" y="96" width="72" height="74" rx="8" fill="${c}" stroke="${b}" stroke-width="2.5"/>
      <!-- Kangaroo pocket -->
      <path d="M 98 140 L 142 140 L 138 165 L 102 165 Z" fill="${a}" stroke="${b}" stroke-width="2"/>
      <!-- Strings -->
      <line x1="114" y1="96" x2="112" y2="118" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
      <line x1="126" y1="96" x2="128" y2="118" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
    `;
  } else if (top.type === 'vest') {
    return `
      <!-- White shirt sleeves -->
      <path d="M 80 100 L 68 135 L 80 140 L 92 110 Z" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2"/>
      <path d="M 160 100 L 172 135 L 160 140 L 148 110 Z" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2"/>
      <!-- Shirt Collar -->
      <path d="M 108 86 L 120 98 L 104 94 Z" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2"/>
      <path d="M 132 86 L 120 98 L 136 94 Z" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2"/>
      <!-- Knit Vest Body -->
      <path d="M 88 95 L 106 95 L 120 115 L 134 95 L 152 95 L 150 166 L 90 166 Z" fill="${c}" stroke="${b}" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M 106 95 L 120 115 L 134 95" fill="none" stroke="${a}" stroke-width="2.5"/>
      <line x1="90" y1="160" x2="150" y2="160" stroke="${b}" stroke-width="2"/>
    `;
  } else if (top.type === 'windbreaker') {
    return `
      <!-- Sleeves -->
      <path d="M 80 98 L 66 138 L 78 143 L 90 110 Z" fill="${c}" stroke="${b}" stroke-width="2.5"/>
      <path d="M 160 98 L 174 138 L 162 143 L 150 110 Z" fill="${c}" stroke="${b}" stroke-width="2.5"/>
      <!-- Body -->
      <rect x="85" y="94" width="70" height="72" rx="6" fill="${c}" stroke="${b}" stroke-width="2.5"/>
      <path d="M 85 94 L 120 120 L 155 94 Z" fill="${a}" stroke="${b}" stroke-width="1.5"/>
      <line x1="120" y1="90" x2="120" y2="166" stroke="#FFFFFF" stroke-width="2.5"/>
      <rect x="110" y="86" width="20" height="9" rx="2" fill="${c}" stroke="${b}" stroke-width="2"/>
    `;
  } else if (top.type === 'stripe') {
    return `
      <!-- Sleeves -->
      <path d="M 80 98 L 68 136 L 80 140 L 92 110 Z" fill="${c}" stroke="${b}" stroke-width="2"/>
      <path d="M 160 98 L 172 136 L 160 140 L 148 110 Z" fill="${c}" stroke="${b}" stroke-width="2"/>
      <!-- Body with stripes -->
      <rect x="86" y="94" width="68" height="72" rx="6" fill="${c}" stroke="${b}" stroke-width="2.5"/>
      <line x1="86" y1="106" x2="154" y2="106" stroke="${a}" stroke-width="4"/>
      <line x1="86" y1="118" x2="154" y2="118" stroke="${a}" stroke-width="4"/>
      <line x1="86" y1="130" x2="154" y2="130" stroke="${a}" stroke-width="4"/>
      <line x1="86" y1="142" x2="154" y2="142" stroke="${a}" stroke-width="4"/>
      <line x1="86" y1="154" x2="154" y2="154" stroke="${a}" stroke-width="4"/>
      <!-- Boatneck Collar -->
      <path d="M 104 92 Q 120 98 136 92" fill="none" stroke="${b}" stroke-width="3"/>
    `;
  } else if (top.type === 'bustier_dress') {
    return `
      <!-- Inner White T-shirt Sleeves -->
      <path d="M 80 98 L 68 128 L 82 133 L 92 110 Z" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2"/>
      <path d="M 160 98 L 172 128 L 158 133 L 148 110 Z" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2"/>
      <path d="M 106 90 Q 120 98 134 90" fill="none" stroke="#94A3B8" stroke-width="2"/>
      <!-- Bustier Bodice with floral details -->
      <path d="M 90 106 Q 105 98 120 108 Q 135 98 150 106 L 154 170 Q 120 174 86 170 Z" fill="${c}" stroke="${b}" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Straps -->
      <line x1="98" y1="96" x2="98" y2="106" stroke="${b}" stroke-width="2.5"/>
      <line x1="142" y1="96" x2="142" y2="106" stroke="${b}" stroke-width="2.5"/>
      <!-- Floral Accents -->
      <circle cx="106" cy="122" r="2.5" fill="${a}"/>
      <circle cx="134" cy="122" r="2.5" fill="${a}"/>
      <circle cx="120" cy="140" r="2.5" fill="${a}"/>
      <circle cx="102" cy="154" r="2.5" fill="${a}"/>
      <circle cx="138" cy="154" r="2.5" fill="${a}"/>
      <path d="M 120 108 L 120 170" stroke="${b}" stroke-width="1.2" stroke-dasharray="3 2"/>
    `;
  } else if (top.type === 'shirt_dress') {
    return `
      <!-- Sleeves -->
      <path d="M 80 98 L 68 136 L 80 140 L 92 110 Z" fill="${c}" stroke="${b}" stroke-width="2"/>
      <path d="M 160 98 L 172 136 L 160 140 L 148 110 Z" fill="${c}" stroke="${b}" stroke-width="2"/>
      <!-- Body -->
      <path d="M 88 95 L 152 95 L 156 174 Q 120 178 84 174 Z" fill="${c}" stroke="${b}" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Collar -->
      <path d="M 106 88 L 120 102 L 104 98 Z" fill="#FFFFFF" stroke="${b}" stroke-width="2"/>
      <path d="M 134 88 L 120 102 L 136 98 Z" fill="#FFFFFF" stroke="${b}" stroke-width="2"/>
      <!-- Placket & Buttons -->
      <line x1="120" y1="95" x2="120" y2="174" stroke="${b}" stroke-width="1.5"/>
      <circle cx="120" cy="112" r="1.5" fill="${b}"/>
      <circle cx="120" cy="126" r="1.5" fill="${b}"/>
      <circle cx="120" cy="154" r="1.5" fill="${b}"/>
      <!-- Waist Sash Ribbon -->
      <rect x="86" y="136" width="68" height="6" rx="2" fill="${a}" stroke="${b}" stroke-width="1.5"/>
      <path d="M 116 138 L 112 152 M 124 138 L 128 152" stroke="${a}" stroke-width="2.5" stroke-linecap="round"/>
    `;
  } else if (top.type === 'frill_blouse') {
    return `
      <!-- Puffy Sleeves -->
      <path d="M 78 98 Q 62 118 70 138 Q 78 140 82 136 L 90 110 Z" fill="${c}" stroke="${b}" stroke-width="2"/>
      <path d="M 162 98 Q 178 118 170 138 Q 162 140 158 136 L 150 110 Z" fill="${c}" stroke="${b}" stroke-width="2"/>
      <!-- Blouse Body -->
      <path d="M 88 95 L 152 95 L 150 166 Q 120 170 90 166 Z" fill="${c}" stroke="${b}" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Sailor Frill Collar -->
      <path d="M 98 94 Q 84 105 88 122 Q 106 126 120 112 Q 134 126 152 122 Q 156 105 142 94 Z" fill="${c}" stroke="${b}" stroke-width="2"/>
      <path d="M 88 122 Q 106 126 120 112 Q 134 126 152 122" fill="none" stroke="${a}" stroke-width="1.5"/>
      <!-- Ribbon Bow -->
      <circle cx="120" cy="110" r="2.5" fill="${b}"/>
      <path d="M 117 112 L 114 124 M 123 112 L 126 124" stroke="${a}" stroke-width="2" stroke-linecap="round"/>
    `;
  } else {
    // Sweatshirt / Cardigan / Layered
    return `
      <!-- Sleeves -->
      <path d="M 80 98 L 68 136 L 80 140 L 92 110 Z" fill="${c}" stroke="${b}" stroke-width="2"/>
      <path d="M 160 98 L 172 136 L 160 140 L 148 110 Z" fill="${c}" stroke="${b}" stroke-width="2"/>
      <!-- Body -->
      <rect x="86" y="94" width="68" height="72" rx="6" fill="${c}" stroke="${b}" stroke-width="2.5"/>
      <circle cx="120" cy="94" r="8" fill="${a}" stroke="${b}" stroke-width="2"/>
      <line x1="86" y1="160" x2="154" y2="160" stroke="${b}" stroke-width="2"/>
    `;
  }
}

function renderCharacterBottomSVG(bottom) {
  const c = bottom.colorHex;
  const a = bottom.accentHex;
  const b = bottom.borderHex;

  if (bottom.type === 'cargo') {
    return `
      <!-- Wide Cargo Pants Legs -->
      <path d="M 88 164 L 152 164 L 148 258 L 126 258 L 120 188 L 114 258 L 92 258 Z" fill="${c}" stroke="${b}" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Flap Cargo Pockets on Thighs -->
      <rect x="84" y="196" width="10" height="20" rx="2" fill="${a}" stroke="${b}" stroke-width="2"/>
      <rect x="146" y="196" width="10" height="20" rx="2" fill="${a}" stroke="${b}" stroke-width="2"/>
    `;
  } else if (bottom.type === 'jogger') {
    return `
      <path d="M 90 164 L 150 164 L 144 252 L 128 252 L 120 188 L 112 252 L 96 252 Z" fill="${c}" stroke="${b}" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Rib Ankle Cuffs -->
      <rect x="94" y="252" width="16" height="8" rx="2" fill="${a}" stroke="${b}" stroke-width="2"/>
      <rect x="130" y="252" width="16" height="8" rx="2" fill="${a}" stroke="${b}" stroke-width="2"/>
    `;
  } else if (bottom.type === 'pleats') {
    return `
      <!-- Pleated Tennis Skirt -->
      <path d="M 94 164 L 146 164 L 162 220 L 78 220 Z" fill="${c}" stroke="${b}" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Waistband -->
      <rect x="94" y="162" width="52" height="6" rx="2" fill="${a}" stroke="${b}" stroke-width="1.5"/>
      <!-- Pleat Lines -->
      <line x1="90" y1="168" x2="84" y2="220" stroke="${b}" stroke-width="1.5"/>
      <line x1="102" y1="168" x2="98" y2="220" stroke="${b}" stroke-width="1.5"/>
      <line x1="114" y1="168" x2="112" y2="220" stroke="${b}" stroke-width="1.5"/>
      <line x1="126" y1="168" x2="128" y2="220" stroke="${b}" stroke-width="1.5"/>
      <line x1="138" y1="168" x2="142" y2="220" stroke="${b}" stroke-width="1.5"/>
      <line x1="150" y1="168" x2="156" y2="220" stroke="${b}" stroke-width="1.5"/>
      <!-- Hem Stripe -->
      <path d="M 80 216 Q 120 220 160 216" fill="none" stroke="${a}" stroke-width="2"/>
    `;
  } else if (bottom.type === 'flare_skirt') {
    return `
      <!-- Flowing A-Line Flare Midi/Long Skirt -->
      <path d="M 94 164 L 146 164 Q 166 206 172 250 Q 146 256 120 252 Q 94 256 68 250 Q 74 206 94 164 Z" fill="${c}" stroke="${b}" stroke-width="2.5" stroke-linejoin="round"/>
      <rect x="94" y="162" width="52" height="6" rx="2" fill="${a}" stroke="${b}" stroke-width="1.5"/>
      <path d="M 108 168 Q 102 210 96 252" fill="none" stroke="${b}" stroke-width="1.5" opacity="0.6"/>
      <path d="M 132 168 Q 138 210 144 252" fill="none" stroke="${b}" stroke-width="1.5" opacity="0.6"/>
      <path d="M 120 168 Q 120 210 120 252" fill="none" stroke="${b}" stroke-width="1.2" opacity="0.4"/>
    `;
  } else if (bottom.type === 'denim_skirt') {
    return `
      <!-- H-Line Button Denim Skirt -->
      <path d="M 92 164 L 148 164 L 152 245 Q 120 248 88 245 Z" fill="${c}" stroke="${b}" stroke-width="2.5" stroke-linejoin="round"/>
      <rect x="92" y="162" width="56" height="6" rx="2" fill="${a}" stroke="${b}" stroke-width="1.5"/>
      <!-- Buttons -->
      <line x1="120" y1="168" x2="120" y2="245" stroke="${b}" stroke-width="2"/>
      <circle cx="120" cy="178" r="2" fill="#F59E0B" stroke="${b}" stroke-width="1"/>
      <circle cx="120" cy="194" r="2" fill="#F59E0B" stroke="${b}" stroke-width="1"/>
      <circle cx="120" cy="210" r="2" fill="#F59E0B" stroke="${b}" stroke-width="1"/>
      <circle cx="120" cy="226" r="2" fill="#F59E0B" stroke="${b}" stroke-width="1"/>
      <!-- Slit at Hem -->
      <line x1="120" y1="234" x2="120" y2="246" stroke="#FFFFFF" stroke-width="2.5"/>
      <!-- Pockets -->
      <path d="M 94 172 Q 104 178 108 172" fill="none" stroke="${a}" stroke-width="1.5"/>
      <path d="M 146 172 Q 136 178 132 172" fill="none" stroke="${a}" stroke-width="1.5"/>
    `;
  } else if (bottom.type === 'suspender_dress') {
    return `
      <!-- Suspender Dress Skirt -->
      <path d="M 92 164 L 148 164 Q 165 204 168 242 Q 120 248 72 242 Q 75 204 92 164 Z" fill="${c}" stroke="${b}" stroke-width="2.5" stroke-linejoin="round"/>
      <rect x="91" y="162" width="58" height="6" rx="2" fill="${a}" stroke="${b}" stroke-width="1.5"/>
      <line x1="106" y1="168" x2="102" y2="243" stroke="${b}" stroke-width="1.5"/>
      <line x1="134" y1="168" x2="138" y2="243" stroke="${b}" stroke-width="1.5"/>
    `;
  } else if (bottom.type === 'tiered_skirt') {
    return `
      <!-- Tiered Ruffle Skirt -->
      <path d="M 94 164 L 146 164 L 152 192 L 88 192 Z" fill="${c}" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
      <rect x="94" y="162" width="52" height="5" fill="${a}" stroke="${b}" stroke-width="1.5"/>
      <path d="M 86 190 L 154 190 L 162 222 L 78 222 Z" fill="${c}" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M 86 190 Q 120 196 154 190" fill="none" stroke="${b}" stroke-width="1.5"/>
      <path d="M 76 220 L 164 220 L 172 254 Q 120 258 68 254 Z" fill="${c}" stroke="${b}" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M 76 220 Q 120 226 164 220" fill="none" stroke="${b}" stroke-width="1.5"/>
      <line x1="104" y1="222" x2="100" y2="255" stroke="${a}" stroke-width="1.5"/>
      <line x1="136" y1="222" x2="140" y2="255" stroke="${a}" stroke-width="1.5"/>
    `;
  } else {
    // Wide Slacks / Denim / Chino
    return `
      <path d="M 88 164 L 152 164 L 150 258 L 127 258 L 120 188 L 113 258 L 90 258 Z" fill="${c}" stroke="${b}" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Crease lines / Stitching -->
      <line x1="102" y1="172" x2="102" y2="256" stroke="${a}" stroke-width="1.5"/>
      <line x1="138" y1="172" x2="138" y2="256" stroke="${a}" stroke-width="1.5"/>
    `;
  }
}

function renderCharacterShoesSVG(shoes) {
  const c = shoes.colorHex;
  const a = shoes.accentHex;
  const s = shoes.soleHex;

  if (shoes.type === 'loafer') {
    return `
      <!-- Left Loafer -->
      <path d="M 84 296 Q 92 284 104 284 Q 112 284 114 298 L 84 298 Z" fill="${c}" stroke="#0F172A" stroke-width="2"/>
      <rect x="83" y="298" width="32" height="6" rx="2" fill="${s}" stroke="#0F172A" stroke-width="1.5"/>
      <!-- Right Loafer -->
      <path d="M 126 298 L 126 284 Q 138 284 146 284 Q 154 286 156 298 Z" fill="${c}" stroke="#0F172A" stroke-width="2"/>
      <rect x="125" y="298" width="32" height="6" rx="2" fill="${s}" stroke="#0F172A" stroke-width="1.5"/>
    `;
  } else {
    // Sneakers / Runners / Chunky
    return `
      <!-- Left Sneaker -->
      <path d="M 84 294 Q 92 280 105 280 Q 112 280 114 295 L 84 295 Z" fill="${c}" stroke="#334155" stroke-width="2"/>
      <path d="M 82 295 L 116 295 Q 116 304 112 304 L 84 304 Q 82 304 82 295 Z" fill="${s}" stroke="#334155" stroke-width="2"/>
      <path d="M 90 288 Q 98 284 108 290" fill="none" stroke="${a}" stroke-width="2.5"/>

      <!-- Right Sneaker -->
      <path d="M 126 295 Q 128 280 135 280 Q 148 280 156 294 L 126 295 Z" fill="${c}" stroke="#334155" stroke-width="2"/>
      <path d="M 124 295 L 158 295 Q 158 304 156 304 L 128 304 Q 124 304 124 295 Z" fill="${s}" stroke="#334155" stroke-width="2"/>
      <path d="M 132 290 Q 142 284 150 288" fill="none" stroke="${a}" stroke-width="2.5"/>
    `;
  }
}

// ==========================================
// 4. APP STATE
// ==========================================

const state = {
  currentStep: 1,
  characterGender: 'girl', // 'boy' | 'girl'
  studentClass: '',
  studentName: '',
  selectedChugumiId: null,
  selectedTopId: null,
  selectedBottomId: null,
  selectedShoesId: null,
  selectedAccessories: new Set(),
  motto: '',
  feedbackVariationIndex: 0
};

// ==========================================
// 5. INITIALIZATION & DOM CACHE
// ==========================================

let dom = {};

document.addEventListener('DOMContentLoaded', () => {
  initElements();
  updateGenderButtons();
  renderStep1Chugumi();
  renderStep2Categories();
  bindGlobalEvents();
  updateStepView();
});

function initElements() {
  dom = {
    // Navigation
    nav1: document.getElementById('step-nav-1'),
    nav2: document.getElementById('step-nav-2'),
    nav3: document.getElementById('step-nav-3'),

    // Sections
    step1: document.getElementById('step-1'),
    step2: document.getElementById('step-2'),
    step3: document.getElementById('step-3'),

    // Student Info & Character Gender
    inputClass: document.getElementById('student-class'),
    inputName: document.getElementById('student-name'),
    inputMotto: document.getElementById('student-motto'),
    headerGenderBoy: document.getElementById('header-gender-boy'),
    headerGenderGirl: document.getElementById('header-gender-girl'),
    btnCharBoy: document.getElementById('btn-char-boy'),
    btnCharGirl: document.getElementById('btn-char-girl'),
    cardGenderBadge: document.getElementById('card-gender-badge'),

    // Step 1
    chugumiGrid: document.getElementById('chugumi-grid'),
    step1Status: document.getElementById('step-1-status'),
    btnToStep2: document.getElementById('btn-to-step-2'),

    // Step 2
    btnBackToStep1: document.getElementById('btn-back-to-step-1'),
    selectedChugumiBadge: document.getElementById('selected-chugumi-badge'),
    previewUserTag: document.getElementById('preview-user-tag'),
    characterVibePill: document.getElementById('character-vibe-pill'),
    previewPaletteChips: document.getElementById('preview-palette-chips'),
    characterSvgContainer: document.getElementById('character-svg-container'),
    chugumiRecommendTip: document.getElementById('chugumi-recommend-tip'),

    // Live slot summary chips
    slotChipTopText: document.getElementById('slot-chip-top-text'),
    slotChipBottomText: document.getElementById('slot-chip-bottom-text'),
    slotChipShoesText: document.getElementById('slot-chip-shoes-text'),
    slotAccList: document.getElementById('slot-acc-list'),

    // Category labels
    topSelectedLabel: document.getElementById('top-selected-label'),
    bottomSelectedLabel: document.getElementById('bottom-selected-label'),
    shoesSelectedLabel: document.getElementById('shoes-selected-label'),
    accCountLabel: document.getElementById('acc-count-label'),

    // Category grids
    categoryTops: document.getElementById('category-tops'),
    categoryBottoms: document.getElementById('category-bottoms'),
    categoryShoes: document.getElementById('category-shoes'),
    categoryAccessories: document.getElementById('category-accessories'),
    btnToResult: document.getElementById('btn-to-result'),

    // Step 3 Result Card
    cardStudentTag: document.getElementById('card-student-tag'),
    cardDateTag: document.getElementById('card-date-tag'),
    cardMoodName: document.getElementById('card-mood-name'),
    cardMoodPalette: document.getElementById('card-mood-palette'),
    cardCharacterStage: document.getElementById('card-character-stage'),
    cardChugumiName: document.getElementById('card-chugumi-name'),
    cardChugumiBadge: document.getElementById('card-chugumi-badge'),
    cardChugumiDesc: document.getElementById('card-chugumi-desc'),
    cardChugumiKeywords: document.getElementById('card-chugumi-keywords'),
    cardTopSummary: document.getElementById('card-top-summary'),
    cardBottomSummary: document.getElementById('card-bottom-summary'),
    cardShoesSummary: document.getElementById('card-shoes-summary'),
    cardAccSummary: document.getElementById('card-acc-summary'),
    cardStudentMotto: document.getElementById('card-student-motto'),
    cardTeacherFeedback: document.getElementById('card-teacher-feedback'),
    btnRefreshFeedback: document.getElementById('btn-refresh-feedback'),

    // Buttons
    btnDownloadCard: document.getElementById('btn-download-card'),
    btnCopyText: document.getElementById('btn-copy-text'),
    btnPrint: document.getElementById('btn-print'),
    btnRestart: document.getElementById('btn-restart'),

    // Toast
    toast: document.getElementById('toast'),
    toastIcon: document.getElementById('toast-icon'),
    toastMessage: document.getElementById('toast-message')
  };
}

// ==========================================
// 6. STEP 1: RENDER CHUGUMI & VISUAL MOODS
// ==========================================

function renderStep1Chugumi() {
  dom.chugumiGrid.innerHTML = '';

  CHUGUMI_DATA.forEach(item => {
    const isSelected = state.selectedChugumiId === item.id;
    const card = document.createElement('div');
    card.className = `chugumi-card cursor-pointer rounded-2xl p-5 border-2 transition-all duration-200 bg-white flex flex-col justify-between relative group ${
      isSelected
        ? 'border-indigo-600 bg-indigo-50/40 ring-4 ring-indigo-100 shadow-md transform -translate-y-1'
        : 'border-slate-200 hover:border-indigo-300'
    }`;

    // Color swatches HTML
    const chipsHtml = item.palette
      .map(p => `<span class="w-4 h-4 rounded-full border border-slate-300 shadow-2xs inline-block" style="background-color: ${p.hex};" title="${p.name}"></span>`)
      .join('');

    // Keywords badges HTML
    const keywordsHtml = item.keywords
      .map(kw => `<span class="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">#${kw}</span>`)
      .join('');

    card.innerHTML = `
      <div>
        <!-- Top row: Avatar & Badge -->
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2.5">
            <div class="w-13 h-13 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-3xl shadow-xs group-hover:scale-110 transition-transform">
              ${item.emoji}
            </div>
            <div>
              <span class="text-[11px] font-bold text-indigo-600 block">${item.visualMood}</span>
              <h3 class="text-lg font-black text-slate-800">${item.name}</h3>
            </div>
          </div>
          <span class="text-xs font-bold px-2.5 py-1 rounded-full ${
            isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
          }">
            ${isSelected ? '✓ 선택됨' : item.badge}
          </span>
        </div>

        <!-- Tagline & Visual Silhouette Description -->
        <p class="text-xs text-slate-600 leading-relaxed font-normal mb-3">
          ${item.tagline}
        </p>

        <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-100 mb-3 text-[11px] text-slate-700 leading-tight flex items-start gap-1.5">
          <span class="text-indigo-500 font-bold shrink-0">👗 일러스트 룩:</span>
          <span>${item.silhouetteText}</span>
        </div>
      </div>

      <div>
        <!-- Palette Swatches bar -->
        <div class="pt-3 border-t border-slate-100 flex items-center justify-between mb-2">
          <span class="text-[11px] font-semibold text-slate-400">대표 컬러 팔레트:</span>
          <div class="flex items-center gap-1.5">
            ${chipsHtml}
          </div>
        </div>

        <!-- Keyword Tags -->
        <div class="flex flex-wrap gap-1">
          ${keywordsHtml}
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      selectChugumi(item.id);
    });

    dom.chugumiGrid.appendChild(card);
  });
}

function selectChugumi(id) {
  state.selectedChugumiId = id;
  const chosen = CHUGUMI_DATA.find(c => c.id === id);

  // Auto populate default outfit recommendations if not chosen yet
  if (!state.selectedTopId) state.selectedTopId = chosen.topDefault;
  if (!state.selectedBottomId) state.selectedBottomId = chosen.bottomDefault;
  if (!state.selectedShoesId) state.selectedShoesId = chosen.shoesDefault;
  if (state.selectedAccessories.size === 0 && chosen.accDefault) {
    chosen.accDefault.forEach(a => state.selectedAccessories.add(a));
  }

  // Motto
  if (!state.motto || state.motto.trim() === '') {
    dom.inputMotto.value = chosen.defaultMotto;
    state.motto = chosen.defaultMotto;
  }

  dom.btnToStep2.disabled = false;
  dom.btnToStep2.className = 'w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-indigo-600 text-white cursor-pointer shadow-md hover:bg-indigo-700 active:scale-95 transition-all flex items-center justify-center gap-2';

  dom.step1Status.innerHTML = `
    <span class="text-slate-800 font-bold">선택 완료:</span> 
    <span class="text-indigo-600 font-extrabold">${chosen.emoji} ${chosen.name}</span> 
    <span class="text-slate-500 text-xs ml-1">(${chosen.visualMood})</span>
  `;

  renderStep1Chugumi();
  renderStep2Categories();
  updateVisualMannequin();
}

// ==========================================
// 7. STEP 2: RENDER CATEGORIES WITH SVG THUMBNAILS
// ==========================================

function renderStep2Categories() {
  renderTopsCategory();
  renderBottomsCategory();
  renderShoesCategory();
  renderAccessoriesCategory();
}

function renderTopsCategory() {
  dom.categoryTops.innerHTML = '';

  TOPS_DATA.forEach(item => {
    const isSelected = state.selectedTopId === item.id;
    const card = document.createElement('div');
    card.className = `item-card cursor-pointer p-3 rounded-xl border-2 transition-all flex items-center justify-between gap-3 ${
      isSelected
        ? 'border-indigo-600 bg-indigo-50/50 shadow-xs ring-2 ring-indigo-200'
        : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50 bg-white'
    }`;

    // SVG Illustration thumbnail
    const svgThumb = generateItemThumbnailSVG('top', item);

    card.innerHTML = `
      <div class="flex items-center gap-3 overflow-hidden">
        <div class="item-svg-thumb shadow-2xs">
          ${svgThumb}
        </div>
        <div class="overflow-hidden">
          <div class="text-xs sm:text-sm font-bold text-slate-800 truncate">${item.name}</div>
          <div class="text-[10px] text-indigo-600 font-semibold truncate mt-0.5">${item.tag}</div>
          <div class="text-[10px] text-slate-400 truncate">${item.fit}</div>
        </div>
      </div>
      <div class="shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-xs ${
        isSelected ? 'bg-indigo-600 border-indigo-600 text-white font-bold' : 'border-slate-300 text-transparent'
      }">
        ✓
      </div>
    `;

    card.addEventListener('click', () => {
      state.selectedTopId = item.id;
      dom.topSelectedLabel.textContent = item.name;
      dom.topSelectedLabel.className = 'text-xs font-bold text-indigo-600';
      renderTopsCategory();
      updateVisualMannequin();
      validateStep2();
    });

    dom.categoryTops.appendChild(card);
  });
}

function renderBottomsCategory() {
  dom.categoryBottoms.innerHTML = '';

  BOTTOMS_DATA.forEach(item => {
    const isSelected = state.selectedBottomId === item.id;
    const card = document.createElement('div');
    card.className = `item-card cursor-pointer p-3 rounded-xl border-2 transition-all flex items-center justify-between gap-3 ${
      isSelected
        ? 'border-indigo-600 bg-indigo-50/50 shadow-xs ring-2 ring-indigo-200'
        : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50 bg-white'
    }`;

    const svgThumb = generateItemThumbnailSVG('bottom', item);

    card.innerHTML = `
      <div class="flex items-center gap-3 overflow-hidden">
        <div class="item-svg-thumb shadow-2xs">
          ${svgThumb}
        </div>
        <div class="overflow-hidden">
          <div class="text-xs sm:text-sm font-bold text-slate-800 truncate">${item.name}</div>
          <div class="text-[10px] text-indigo-600 font-semibold truncate mt-0.5">${item.tag}</div>
          <div class="text-[10px] text-slate-400 truncate">${item.fit}</div>
        </div>
      </div>
      <div class="shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-xs ${
        isSelected ? 'bg-indigo-600 border-indigo-600 text-white font-bold' : 'border-slate-300 text-transparent'
      }">
        ✓
      </div>
    `;

    card.addEventListener('click', () => {
      state.selectedBottomId = item.id;
      dom.bottomSelectedLabel.textContent = item.name;
      dom.bottomSelectedLabel.className = 'text-xs font-bold text-indigo-600';
      renderBottomsCategory();
      updateVisualMannequin();
      validateStep2();
    });

    dom.categoryBottoms.appendChild(card);
  });
}

function renderShoesCategory() {
  dom.categoryShoes.innerHTML = '';

  SHOES_DATA.forEach(item => {
    const isSelected = state.selectedShoesId === item.id;
    const card = document.createElement('div');
    card.className = `item-card cursor-pointer p-3 rounded-xl border-2 transition-all flex items-center justify-between gap-3 ${
      isSelected
        ? 'border-indigo-600 bg-indigo-50/50 shadow-xs ring-2 ring-indigo-200'
        : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50 bg-white'
    }`;

    const svgThumb = generateItemThumbnailSVG('shoes', item);

    card.innerHTML = `
      <div class="flex items-center gap-3 overflow-hidden">
        <div class="item-svg-thumb shadow-2xs">
          ${svgThumb}
        </div>
        <div class="overflow-hidden">
          <div class="text-xs sm:text-sm font-bold text-slate-800 truncate">${item.name}</div>
          <div class="text-[10px] text-indigo-600 font-semibold truncate mt-0.5">${item.tag}</div>
        </div>
      </div>
      <div class="shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-xs ${
        isSelected ? 'bg-indigo-600 border-indigo-600 text-white font-bold' : 'border-slate-300 text-transparent'
      }">
        ✓
      </div>
    `;

    card.addEventListener('click', () => {
      state.selectedShoesId = item.id;
      dom.shoesSelectedLabel.textContent = item.name;
      dom.shoesSelectedLabel.className = 'text-xs font-bold text-indigo-600';
      renderShoesCategory();
      updateVisualMannequin();
      validateStep2();
    });

    dom.categoryShoes.appendChild(card);
  });
}

function renderAccessoriesCategory() {
  dom.categoryAccessories.innerHTML = '';

  ACCESSORIES_DATA.forEach(item => {
    const isSelected = state.selectedAccessories.has(item.id);
    const card = document.createElement('div');
    card.className = `item-card cursor-pointer p-3 rounded-xl border-2 transition-all flex items-center justify-between gap-2.5 ${
      isSelected
        ? 'border-indigo-600 bg-indigo-50/60 shadow-xs ring-2 ring-indigo-200'
        : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50 bg-white'
    }`;

    const svgThumb = generateItemThumbnailSVG('acc', item);

    card.innerHTML = `
      <div class="flex items-center gap-2.5 overflow-hidden">
        <div class="item-svg-thumb shadow-2xs w-12 h-12">
          ${svgThumb}
        </div>
        <div class="overflow-hidden">
          <div class="text-xs font-bold text-slate-800 truncate">${item.name}</div>
          <div class="text-[10px] text-indigo-600 font-semibold mt-0.5 truncate">${item.tag}</div>
        </div>
      </div>
      <span class="shrink-0 w-4 h-4 rounded-full border text-[10px] flex items-center justify-center ${
        isSelected ? 'bg-indigo-600 border-indigo-600 text-white font-bold' : 'border-slate-300 text-transparent'
      }">✓</span>
    `;

    card.addEventListener('click', () => {
      if (state.selectedAccessories.has(item.id)) {
        state.selectedAccessories.delete(item.id);
      } else {
        state.selectedAccessories.add(item.id);
      }

      dom.accCountLabel.textContent = `${state.selectedAccessories.size}개 선택됨`;
      renderAccessoriesCategory();
      updateVisualMannequin();
    });

    dom.categoryAccessories.appendChild(card);
  });
}

// ==========================================
// 8. UPDATE LIVE FULL-BODY FASHION CHARACTER
// ==========================================

function setCharacterGender(gender) {
  state.characterGender = gender;
  updateGenderButtons();
  if (state.currentStep === 2) {
    updateVisualMannequin();
  } else if (state.currentStep === 3) {
    buildResultLookbook();
  }
  showToast(gender === 'boy' ? '👦 남학생 캐릭터 모델로 변경되었습니다!' : '👧 여학생 캐릭터 모델로 변경되었습니다!');
}

function updateGenderButtons() {
  const isBoy = state.characterGender === 'boy';

  // Header buttons
  if (dom.headerGenderBoy && dom.headerGenderGirl) {
    if (isBoy) {
      dom.headerGenderBoy.className = 'px-2 py-0.5 rounded text-xs font-bold transition-all flex items-center gap-0.5 cursor-pointer bg-indigo-600 text-white shadow-2xs';
      dom.headerGenderGirl.className = 'px-2 py-0.5 rounded text-xs font-bold transition-all flex items-center gap-0.5 cursor-pointer text-slate-600 hover:text-slate-900';
    } else {
      dom.headerGenderBoy.className = 'px-2 py-0.5 rounded text-xs font-bold transition-all flex items-center gap-0.5 cursor-pointer text-slate-600 hover:text-slate-900';
      dom.headerGenderGirl.className = 'px-2 py-0.5 rounded text-xs font-bold transition-all flex items-center gap-0.5 cursor-pointer bg-pink-600 text-white shadow-2xs';
    }
  }

  // Step 2 mannequin switcher buttons
  if (dom.btnCharBoy && dom.btnCharGirl) {
    if (isBoy) {
      dom.btnCharBoy.className = 'char-gender-btn px-3 py-1 rounded-md text-xs font-bold transition-all flex items-center gap-1 cursor-pointer bg-indigo-600 text-white shadow-xs';
      dom.btnCharGirl.className = 'char-gender-btn px-3 py-1 rounded-md text-xs font-bold transition-all flex items-center gap-1 cursor-pointer text-slate-600 hover:bg-slate-200/70';
    } else {
      dom.btnCharBoy.className = 'char-gender-btn px-3 py-1 rounded-md text-xs font-bold transition-all flex items-center gap-1 cursor-pointer text-slate-600 hover:bg-slate-200/70';
      dom.btnCharGirl.className = 'char-gender-btn px-3 py-1 rounded-md text-xs font-bold transition-all flex items-center gap-1 cursor-pointer bg-pink-600 text-white shadow-xs';
    }
  }
}

function updateVisualMannequin() {
  const chosen = CHUGUMI_DATA.find(c => c.id === state.selectedChugumiId) || CHUGUMI_DATA[0];
  const chosenTop = TOPS_DATA.find(t => t.id === state.selectedTopId);
  const chosenBottom = BOTTOMS_DATA.find(b => b.id === state.selectedBottomId);
  const chosenShoes = SHOES_DATA.find(s => s.id === state.selectedShoesId);

  const studentName = dom.inputName.value.trim() || '홍길동';
  const studentClass = dom.inputClass.value.trim() || '1학년 3반';

  dom.previewUserTag.textContent = `${studentClass} ${studentName} (${state.characterGender === 'boy' ? '👦 남' : '👧 여'})`;
  dom.selectedChugumiBadge.innerHTML = `<span>${chosen.emoji}</span> <span>${chosen.name}</span> <span class="text-xs text-indigo-500 font-normal">(${chosen.visualMood})</span>`;
  dom.characterVibePill.innerHTML = `${chosen.emoji} ${chosen.visualMood}`;

  // Palette Chips
  dom.previewPaletteChips.innerHTML = chosen.palette
    .map(p => `<span class="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-2xs inline-block" style="background-color: ${p.hex};" title="${p.name}"></span>`)
    .join('');

  dom.chugumiRecommendTip.innerHTML = chosen.recommendTip;

  // Render Full-Body Vector Character SVG with selected gender
  dom.characterSvgContainer.innerHTML = renderFullCharacterSVG(
    state.characterGender,
    chosen.id,
    state.selectedTopId,
    state.selectedBottomId,
    state.selectedShoesId,
    state.selectedAccessories
  );

  // Update Mini slot chips
  if (chosenTop) {
    dom.slotChipTopText.textContent = chosenTop.name;
    dom.slotChipTopText.className = 'font-bold text-indigo-700 truncate block';
    dom.topSelectedLabel.textContent = chosenTop.name;
    dom.topSelectedLabel.className = 'text-xs font-bold text-indigo-600';
  } else {
    dom.slotChipTopText.textContent = '미선택';
  }

  if (chosenBottom) {
    dom.slotChipBottomText.textContent = chosenBottom.name;
    dom.slotChipBottomText.className = 'font-bold text-indigo-700 truncate block';
    dom.bottomSelectedLabel.textContent = chosenBottom.name;
    dom.bottomSelectedLabel.className = 'text-xs font-bold text-indigo-600';
  } else {
    dom.slotChipBottomText.textContent = '미선택';
  }

  if (chosenShoes) {
    dom.slotChipShoesText.textContent = chosenShoes.name;
    dom.slotChipShoesText.className = 'font-bold text-indigo-700 truncate block';
    dom.shoesSelectedLabel.textContent = chosenShoes.name;
    dom.shoesSelectedLabel.className = 'text-xs font-bold text-indigo-600';
  } else {
    dom.slotChipShoesText.textContent = '미선택';
  }

  // Accessories Slot Badges
  dom.slotAccList.innerHTML = '';
  if (state.selectedAccessories.size === 0) {
    dom.slotAccList.innerHTML = '<span class="text-[11px] text-slate-400 italic">선택된 소품 없음 (미니멀)</span>';
  } else {
    state.selectedAccessories.forEach(accId => {
      const acc = ACCESSORIES_DATA.find(a => a.id === accId);
      if (acc) {
        const badge = document.createElement('span');
        badge.className = 'text-[10px] px-2 py-0.5 rounded-md bg-white border border-slate-200 text-indigo-700 font-semibold shadow-2xs flex items-center gap-1';
        badge.textContent = `${acc.name.split(' ')[0]}`;
        dom.slotAccList.appendChild(badge);
      }
    });
  }
}

function validateStep2() {
  const isComplete = state.selectedTopId && state.selectedBottomId && state.selectedShoesId;
  if (isComplete) {
    dom.btnToResult.disabled = false;
    dom.btnToResult.className = 'w-full py-4 rounded-xl font-bold text-base bg-indigo-600 text-white cursor-pointer shadow-lg hover:bg-indigo-700 active:scale-95 transition-all flex items-center justify-center gap-2';
  } else {
    dom.btnToResult.disabled = true;
    dom.btnToResult.className = 'w-full py-4 rounded-xl font-bold text-base bg-slate-200 text-slate-400 cursor-not-allowed shadow-md transition-all flex items-center justify-center gap-2';
  }
}

// ==========================================
// 9. DIVERSE TEACHER FEEDBACK GENERATOR
// ==========================================

const TEACHER_FEEDBACK_BANK = {
  classic: [
    (name) => `유행을 뛰어넘는 단정함과 기품을 중요하게 생각하는 ${name} 학생의 반듯한 안목이 참 훌륭합니다. 정돈된 태도와 신뢰감을 주는 모습이 학교생활에서도 큰 모범이 될 거예요.`,
    (name) => `클래식한 멋은 시간이 지나도 변하지 않는 소중한 가치를 지니죠. 기본에 충실하며 스스로를 가꾸는 ${name} 학생의 성실한 성장을 언제나 응원합니다!`,
    (name) => `단정하고 정갈한 옷차림 속에 스스로를 존중하고 예의를 지키려는 성숙한 마음이 돋보여요. 주변 친구들에게도 차분하고 신뢰받는 멋진 친구가 되어줄 거예요.`,
    (name) => `깔끔하고 세련된 기본 아이템의 조화가 ${name} 학생의 차분한 분위기와 아주 잘 어울립니다. 단단한 내면을 가진 멋진 중학생으로 성장하길 바라요!`
  ],
  modern: [
    (name) => `도시적이고 세련된 감각으로 깔끔한 직선미를 살린 코디가 무척 인상적입니다! 군더더기 없는 명확함과 스마트한 분위기가 ${name} 학생의 지적인 매력을 더욱 빛내주네요.`,
    (name) => `간결함 속에서 세련미를 찾아내는 높은 안목이 돋보여요. 상황과 장소에 맞게 스마트하게 자신을 표현할 줄 아는 멋진 감각을 칭찬합니다!`,
    (name) => `모던한 흑백 대비와 정돈된 실루엣이 신선하고 프로페셔널한 느낌을 줍니다. 자신의 생각과 취향을 명료하게 가꿔나가는 ${name} 학생을 응원해요.`,
    (name) => `심플하지만 결코 평범하지 않은 세련미가 느껴집니다! 명쾌하고 똑 부러지는 ${name} 학생의 매력적인 학교생활을 언제나 응원할게요.`
  ],
  casual: [
    (name) => `누구에게나 편안하게 다가가는 친근함과 자연스러운 멋이 가득합니다! 친구들과 함께 웃고 어울리며 밝은 에너지를 나누는 ${name} 학생의 다정한 매력이 돋보여요.`,
    (name) => `편안함과 활동성을 살리면서도 스타일리시함을 놓치지 않은 센스가 대단해요. 일상의 작은 순간도 즐겁고 소중하게 누릴 줄 아는 멋진 학생입니다!`,
    (name) => `자연스러운 데일리 룩처럼, 꾸밈없이 솔직하고 긍정적인 ${name} 학생의 마음씨가 반 친구들에게 큰 편안함을 선물해 줄 거예요.`,
    (name) => `언제 어디서든 활동적이고 자유롭게 움직일 수 있는 최적의 스타일링이에요. 활기찬 중학교 1학년의 하루하루를 신나게 채워가길 응원합니다!`
  ],
  sporty: [
    (name) => `생동감 넘치는 에너지와 건강한 활력이 온몸으로 전해지는 멋진 스타일입니다! 어떤 도전 앞에서도 당당하고 씩씩하게 부딪히는 ${name} 학생의 열정을 응원해요.`,
    (name) => `활동성과 쾌적함을 극대화한 스포티 코디에서 규칙을 지키고 정정당당하게 땀 흘리는 멋진 스포츠맨 정신이 느껴집니다. 몸과 마음 모두 튼튼하게 자라나요!`,
    (name) => `지치지 않는 긍정 에너지와 빠른 행동력이 옷차림 속에서도 뿜어져 나오네요! 활기찬 발걸음으로 교실과 운동장을 누빌 ${name} 학생의 활약을 기대합니다.`,
    (name) => `군더더기 없는 스트리트 스포티 무드가 정말 시원시원하고 당차 보여요! 매사에 자신감을 갖고 건강한 도전을 이어가는 멋진 중학생이 되어주세요.`
  ],
  elegance: [
    (name) => `부드럽고 우아한 곡선미와 차분한 품격이 느껴지는 아름다운 코디입니다. 말과 행동에서도 타인을 배려하고 온화함을 잃지 않는 ${name} 학생의 고운 성품이 엿보여요.`,
    (name) => `은은하고 고급스러운 색채 조화가 보는 사람의 마음까지 편안하게 만들어주네요. 품위 있고 성숙한 태도로 자신의 개성을 가꿔가는 모습이 참 대견합니다.`,
    (name) => `우아함은 스스로를 귀하게 여기고 아끼는 마음에서 시작되죠. 자신만의 고유한 빛깔을 소중히 다루며 반짝반짝 성장해 갈 ${name} 학생을 따뜻하게 응원해요.`,
    (name) => `부드러운 카디건과 정갈한 실루엣이 참 조화롭습니다. 차분한 미소와 다정한 온기로 주변을 밝혀주는 우아한 학생이 될 거예요.`
  ],
  exotic: [
    (name) => `넓은 세상을 향한 호기심과 남다른 예술적 감각이 눈부시게 빛납니다! 독특한 색채와 패턴을 조화롭게 소화해내는 ${name} 학생의 열린 마음과 풍부한 상상력이 멋져요.`,
    (name) => `남들과 다른 새로움에 주저 없이 도전하는 용기가 돋보이는 개성 만점 스타일링입니다. 다채로운 문화와 아름다움을 포용하는 멋진 눈을 가졌군요!`,
    (name) => `이국적이고 풍부한 어스톤과 에스닉 포인트가 ${name} 학생만의 특별한 분위기를 완성했어요. 세상의 다양한 빛깔을 탐험하며 마음의 키를 쑥쑥 키워가길 바라요.`,
    (name) => `틀에 갇히지 않고 자유롭게 개성을 표현하는 감각이 탁월합니다! 나만의 독창적인 아이디어와 개성을 학교생활 속에서도 멋지게 꽃피워보세요.`
  ],
  romantic: [
    (name) => `봄날의 꽃처럼 사랑스럽고 다정한 미소가 절로 피어나는 스위트 코디입니다! 따뜻하고 보드라운 감성으로 친구들을 배려하고 아껴주는 ${name} 학생의 고운 마음이 느껴져요.`,
    (name) => `파스텔톤의 달콤한 색감과 귀여운 디테일이 참 사랑스럽습니다. 일상의 소소한 예쁨을 발견하고 감동할 줄 아는 ${name} 학생의 순수한 감수성이 참 귀해요.`,
    (name) => `동화 속 주인공처럼 맑고 화사한 온기를 품고 있네요! ${name} 학생의 다정다감한 친절이 우리 교실을 한층 더 따뜻하고 행복하게 만들어줄 거예요.`,
    (name) => `아기자기한 포인트와 사랑스러운 실루엣이 완벽한 조화를 이룹니다. 매일매일 행복한 웃음이 가득한 즐거운 학교생활이 되길 진심으로 응원해요!`
  ],
  bohemian: [
    (name) => `자연을 닮은 따스한 온기와 얽매이지 않는 자유로운 영혼이 돋보입니다! 나만의 고유한 속도와 리듬을 소중히 지키며 살아가는 ${name} 학생의 편안한 태도가 멋져요.`,
    (name) => `인위적이지 않고 내추럴한 어스톤의 조화가 깊은 여유와 낭만을 줍니다. 남의 시선에 흔들리지 않고 자연스럽고 진실하게 성장할 ${name} 학생을 응원합니다.`,
    (name) => `편안한 실루엣 속에서 느껴지는 온화함과 예술적 감성이 참 인상적이에요. 소박하지만 따스한 낭만을 품고 세상을 풍요롭게 바라보는 멋진 눈을 가졌군요!`,
    (name) => `자유분방함과 편안함이 어우러져 ${name} 학생만의 독보적인 낭만 무드를 완성했습니다. 바람처럼 자유롭고 푸른 나무처럼 든든하게 자라나길 바라요.`
  ],
  minimal: [
    (name) => `불필요한 과장을 덜어내고 본질에 집중하는 깊이 있는 안목이 돋보입니다! 군더더기 없는 심플함 속에서 ${name} 학생의 정직하고 명료한 태도가 빛을 발하네요.`,
    (name) => `간결함이야말로 가장 세련된 표현이라는 것을 멋지게 보여준 코디입니다. 차분하고 깔끔하게 자신의 중심을 지켜가는 성실한 모습을 높이 칭찬해요.`,
    (name) => `깔끔한 화이트와 모노톤의 조화가 주는 신뢰감과 안정감이 대단합니다. 맑고 깨끗한 마음으로 매일의 배움에 집중할 ${name} 학생의 성장을 응원합니다.`,
    (name) => `단순함 속에 깃든 당당한 자신감이 참 멋져요. 복잡한 것들에 휘둘리지 않고 나에게 진짜 중요한 가치를 소중히 지키는 멋진 중학생이 되어주세요!`
  ],
  edgy: [
    (name) => `남들의 시선이나 정형화된 틀에 갇히지 않고 나만의 당당한 존재감을 드러내는 용기가 아주 멋집니다! 카리스마 넘치는 개성이 ${name} 학생을 더욱 돋보이게 하네요.`,
    (name) => `강렬한 대비와 개성 있는 아이템을 과감하게 매치해낸 센스가 대단해요! 자신감 있게 나다운 멋을 주장할 줄 아는 주도적인 태도를 칭찬합니다.`,
    (name) => `남들과 똑같지 않아도 나만의 독창성으로 빛날 수 있음을 멋지게 증명했습니다. 당차고 솔직한 자신감으로 학교생활의 멋진 주인공이 되어보세요!`,
    (name) => `시크하고 쿨한 무드 속에서 ${name} 학생만의 단단한 주관과 열정이 느껴집니다. 나만의 독보적인 색채를 지키며 세상에 당당하게 서길 응원해요!`
  ],
  preppy: [
    (name) => `지성과 예의를 겸비한 단정하고 스마트한 스쿨룩의 정석을 보여주었습니다! 매일의 수업과 친구 관계에서도 성실함과 믿음을 보여주는 ${name} 학생의 모범적인 태도가 돋보여요.`,
    (name) => `단정한 깃과 클래식한 조끼의 조화에서 학업에 대한 진지한 열정과 바른 품성이 고스란히 묻어납니다. 스스로를 잘 가꾸고 목표를 향해 나아가는 모습이 참 대견해요.`,
    (name) => `신뢰감을 주는 반듯한 인상과 지적인 분위기가 무척 돋보입니다. 기본을 지키며 깊이 있게 탐구하는 ${name} 학생의 배움의 여정을 열렬히 응원할게요!`,
    (name) => `정갈하고 지적인 코디처럼, 지혜와 따뜻한 마음을 골고루 갖추어 친구들에게 든든한 힘이 되어주는 멋진 리더로 성장하길 응원합니다.`
  ],
  vintage: [
    (name) => `시간이 빚어낸 아날로그 감성과 따스한 온기를 사랑하는 깊은 감수성이 느껴집니다! 빠르게 흘러가는 유행보다 소중한 추억과 멋을 간직할 줄 아는 ${name} 학생의 안목이 훌륭해요.`,
    (name) => `편안하고 정겨운 레트로 무드가 ${name} 학생의 따뜻하고 차분한 매력과 찰떡같이 어울리네요. 옛것의 아름다움과 이야기들을 소중히 여길 줄 아는 섬세한 마음을 칭찬해요.`,
    (name) => `자연스러운 워싱과 아날로그 감성의 소품 매치가 참 센스 있습니다. 일상 속에서도 따뜻한 추억을 차곡차곡 쌓아가며 깊이 있는 사람으로 자라나길 바랍니다.`,
    (name) => `세월이 흘러도 변치 않는 클래식한 멋과 따스한 감성을 옷차림으로 표현해냈군요! 잔잔하지만 오래도록 기억되는 멋진 친구가 되어줄 거예요.`
  ],
  boyish: [
    (name) => `꾸밈없이 솔직하고 털털하며 씩씩한 에너지가 보는 사람까지 기분 좋게 만듭니다! 편안한 오버핏처럼 넓고 시원시원한 마음씨를 가진 ${name} 학생의 매력이 돋보여요.`,
    (name) => `자유롭고 활동적인 실루엣 속에서 장난기 가득한 유쾌함과 당당함이 묻어납니다. 친구들과 격의 없이 어울리며 긍정적인 웃음을 나누는 멋진 에너지를 응원해요!`,
    (name) => `어떤 격식에도 얽매이지 않고 자유롭게 뛰어놀 수 있는 활동적인 코디예요. 솔직하고 씩씩한 태도로 학교생활의 즐거운 모험들을 맘껏 즐기길 바랍니다.`,
    (name) => `쾌활하고 털털한 멋이 ${name} 학생의 밝은 성격과 아주 잘 어우러지네요! 나 자신을 솔직하게 표현할 줄 아는 당당함으로 언제나 멋지게 빛나주세요.`
  ],
  fantasy: [
    (name) => `동화 속 은하수처럼 반짝이는 무한한 상상력과 신비로운 감각이 감탄을 자아냅니다! 세상에 하나뿐인 독창적인 꿈과 환상을 표현해낸 ${name} 학생의 예술적 영감이 눈부셔요.`,
    (name) => `오로라처럼 몽환적이고 아름다운 색채 매치에서 남다른 창의성과 풍부한 감성이 돋보입니다. 틀에 얽매이지 않고 넓은 우주처럼 자유롭게 꿈을 펼쳐나가길 응원해요!`,
    (name) => `환상적이고 신비로운 포인트 아이템 조화가 정말 매력적이에요! 세상을 마법처럼 흥미롭고 다채로운 시선으로 바라보는 ${name} 학생의 특별함을 소중히 간직하세요.`,
    (name) => `빛나는 별처럼 자신만의 특별한 꿈과 상상력을 당당히 표현한 멋진 스타일입니다! 어디서든 나만의 특별한 빛을 잃지 않는 독보적인 학생이 되어주세요.`
  ]
};

function getDynamicTeacherFeedback(chugumiId, studentName, top, bottom, shoes, accSet, offset = 0) {
  const bank = TEACHER_FEEDBACK_BANK[chugumiId] || TEACHER_FEEDBACK_BANK.classic;
  const baseFn = bank[offset % bank.length];
  const baseText = baseFn(studentName);

  // Dynamic outfit detail compliment
  let outfitTip = '';
  if (accSet.has('a2')) {
    outfitTip = ` 가방에 귀여운 인형 키링 포인트를 달아 다정하고 사랑스러운 매력을 위트 있게 더한 센스가 참 좋아요.`;
  } else if (accSet.has('a7')) {
    outfitTip = ` 클래식 안경을 매치해 지적이고 사색적인 분위기를 한 스푼 더한 스타일링 감각이 돋보입니다.`;
  } else if (accSet.has('a5')) {
    outfitTip = ` 무선 헤드폰 소품에서 나만의 취향과 생각에 멋지게 몰입하는 학생다운 여유가 느껴져요.`;
  } else if (accSet.has('a3')) {
    outfitTip = ` 볼캡 모자로 꾸안꾸 감성의 세련된 포인트를 살린 점이 코디의 완성도를 한껏 높여주네요.`;
  } else if (accSet.has('a1')) {
    outfitTip = ` 든든한 백팩을 함께 코디한 모습에서 매일의 학교생활을 성실하게 채워가려는 멋진 태도가 엿보입니다.`;
  } else if (top.type === 'shirt' || top.type === 'vest') {
    outfitTip = ` 단정한 깃과 정갈한 상의 매치가 신뢰감과 깔끔한 인상을 한층 더 살려줍니다.`;
  } else if (top.type === 'hoodie' || bottom.type === 'jogger') {
    outfitTip = ` 편안한 오버핏과 조거팬츠의 매치로 활동성과 자연스러운 멋을 완벽하게 살렸어요.`;
  } else if (bottom.type === 'cargo') {
    outfitTip = ` 트렌디한 카고 포켓 디테일로 실용성과 힙한 개성을 동시에 챙긴 점이 훌륭합니다.`;
  } else if (bottom.type === 'denim' || bottom.type === 'blackdenim') {
    outfitTip = ` 자연스러운 데님 워싱을 선택해 자유롭고 편안한 청소년기의 활기를 잘 담아냈어요.`;
  }

  return baseText + (outfitTip ? outfitTip : '');
}

// ==========================================
// 10. STEP 3: RESULT & LOOKBOOK CARD
// ==========================================

function buildResultLookbook() {
  const chosen = CHUGUMI_DATA.find(c => c.id === state.selectedChugumiId) || CHUGUMI_DATA[0];
  const chosenTop = TOPS_DATA.find(t => t.id === state.selectedTopId) || TOPS_DATA[0];
  const chosenBottom = BOTTOMS_DATA.find(b => b.id === state.selectedBottomId) || BOTTOMS_DATA[0];
  const chosenShoes = SHOES_DATA.find(s => s.id === state.selectedShoesId) || SHOES_DATA[0];

  const studentName = dom.inputName.value.trim() || '중1 학생';
  const studentClass = dom.inputClass.value.trim() || '1학년';
  const studentMotto = dom.inputMotto.value.trim() || chosen.defaultMotto;

  const now = new Date();
  const dateStr = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;

  // Populate Meta & Gender
  dom.cardStudentTag.textContent = `${studentClass} ${studentName} (${state.characterGender === 'boy' ? '👦 남학생' : '👧 여학생'})`;
  dom.cardDateTag.textContent = dateStr;
  if (dom.cardGenderBadge) {
    dom.cardGenderBadge.innerHTML = state.characterGender === 'boy'
      ? '<span>👦</span> 남학생 모델'
      : '<span>👧</span> 여학생 모델';
  }

  // Mood & Palette in Result Card
  dom.cardMoodName.textContent = `${chosen.visualMood}`;
  dom.cardMoodPalette.innerHTML = chosen.palette
    .map(p => `<span class="w-4 h-4 rounded-full border border-slate-300 shadow-2xs inline-block" style="background-color: ${p.hex};" title="${p.name}"></span>`)
    .join('');

  // Inject Full-Body Character SVG into Result Card with selected gender
  dom.cardCharacterStage.innerHTML = renderFullCharacterSVG(
    state.characterGender,
    chosen.id,
    state.selectedTopId,
    state.selectedBottomId,
    state.selectedShoesId,
    state.selectedAccessories
  );

  // Chugumi Info
  dom.cardChugumiName.textContent = chosen.name;
  dom.cardChugumiBadge.textContent = chosen.badge;
  dom.cardChugumiDesc.textContent = chosen.tagline;

  dom.cardChugumiKeywords.innerHTML = chosen.keywords
    .map(kw => `<span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">#${kw}</span>`)
    .join('');

  // Outfit summaries
  dom.cardTopSummary.textContent = `${chosenTop.name} (${chosenTop.fit})`;
  dom.cardBottomSummary.textContent = `${chosenBottom.name} (${chosenBottom.fit})`;
  dom.cardShoesSummary.textContent = chosenShoes.name;

  const accNames = Array.from(state.selectedAccessories)
    .map(id => ACCESSORIES_DATA.find(a => a.id === id)?.name)
    .filter(Boolean)
    .join(', ') || '선택 없음 (미니멀 코디)';
  dom.cardAccSummary.textContent = accNames;

  // Student Motto & Dynamic Teacher Feedback
  dom.cardStudentMotto.textContent = `"${studentMotto}"`;
  state.feedbackVariationIndex = 0;
  dom.cardTeacherFeedback.textContent = getDynamicTeacherFeedback(
    chosen.id,
    studentName,
    chosenTop,
    chosenBottom,
    chosenShoes,
    state.selectedAccessories,
    state.feedbackVariationIndex
  );

  // Celebration Confetti
  triggerConfetti();
}

function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 110,
      spread: 75,
      origin: { y: 0.6 }
    });
  }
}

// ==========================================
// 10. STEP VIEW CONTROLLER
// ==========================================

function setStep(stepNum) {
  state.currentStep = stepNum;
  updateStepView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateStepView() {
  dom.step1.classList.add('hidden');
  dom.step2.classList.add('hidden');
  dom.step3.classList.add('hidden');

  const navs = [dom.nav1, dom.nav2, dom.nav3];
  navs.forEach((nav, idx) => {
    const step = idx + 1;
    const badge = nav.querySelector('span:first-child');
    if (step === state.currentStep) {
      nav.className = 'py-1.5 border-b-2 border-indigo-600 text-indigo-600 font-bold flex items-center justify-center gap-1.5 transition-all';
      if (badge) badge.className = 'w-4 h-4 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center';
    } else if (step < state.currentStep) {
      nav.className = 'py-1.5 border-b-2 border-emerald-500 text-emerald-600 font-semibold flex items-center justify-center gap-1.5 transition-all';
      if (badge) badge.className = 'w-4 h-4 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center';
    } else {
      nav.className = 'py-1.5 border-b-2 border-transparent text-slate-400 flex items-center justify-center gap-1.5 transition-all';
      if (badge) badge.className = 'w-4 h-4 rounded-full bg-slate-200 text-slate-600 text-[10px] flex items-center justify-center';
    }
  });

  if (state.currentStep === 1) {
    dom.step1.classList.remove('hidden');
  } else if (state.currentStep === 2) {
    dom.step2.classList.remove('hidden');
    updateVisualMannequin();
    validateStep2();
  } else if (state.currentStep === 3) {
    dom.step3.classList.remove('hidden');
    buildResultLookbook();
  }
}

// ==========================================
// 11. EVENT LISTENERS & USER ACTIONS
// ==========================================

function bindGlobalEvents() {
  // Step 1 to 2
  dom.btnToStep2.addEventListener('click', () => {
    if (state.selectedChugumiId) {
      setStep(2);
    }
  });

  // Step 2 to 1 (Back)
  dom.btnBackToStep1.addEventListener('click', () => {
    setStep(1);
  });

  // Quick motto suggestions
  document.querySelectorAll('.quick-motto-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      dom.inputMotto.value = btn.textContent.trim();
      state.motto = btn.textContent.trim();
      showToast('다짐 문구가 적용되었습니다! ✨');
    });
  });

  // Step 2 to 3 (Complete)
  dom.btnToResult.addEventListener('click', () => {
    setStep(3);
  });

  // Download Card as PNG via html2canvas
  dom.btnDownloadCard.addEventListener('click', () => {
    const card = document.getElementById('profile-result-card');
    if (!card) return;

    if (typeof html2canvas !== 'function') {
      showToast('이미지 저장 라이브러리를 불러오는 중입니다. 잠시 후 다시 시도해 주세요.');
      return;
    }

    showToast('📸 고화질 룩북 카드 이미지를 생성하고 있습니다...');

    html2canvas(card, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false
    }).then(canvas => {
      const link = document.createElement('a');
      const studentName = dom.inputName.value.trim() || '중1학생';
      link.download = `나만의_추구미_일러스트_룩북_${studentName}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      showToast('🎉 이미지가 성공적으로 저장되었습니다!');
    }).catch(err => {
      console.error(err);
      showToast('이미지 저장 중 오류가 발생했습니다. 화면 캡처 기능을 이용해 주세요.');
    });
  });

  // Refresh diverse feedback button
  if (dom.btnRefreshFeedback) {
    dom.btnRefreshFeedback.addEventListener('click', () => {
      const chosen = CHUGUMI_DATA.find(c => c.id === state.selectedChugumiId) || CHUGUMI_DATA[0];
      const chosenTop = TOPS_DATA.find(t => t.id === state.selectedTopId) || TOPS_DATA[0];
      const chosenBottom = BOTTOMS_DATA.find(b => b.id === state.selectedBottomId) || BOTTOMS_DATA[0];
      const chosenShoes = SHOES_DATA.find(s => s.id === state.selectedShoesId) || SHOES_DATA[0];
      const studentName = dom.inputName.value.trim() || '학생';

      state.feedbackVariationIndex = (state.feedbackVariationIndex || 0) + 1;
      const newFeedback = getDynamicTeacherFeedback(
        chosen.id,
        studentName,
        chosenTop,
        chosenBottom,
        chosenShoes,
        state.selectedAccessories,
        state.feedbackVariationIndex
      );

      dom.cardTeacherFeedback.textContent = newFeedback;
      dom.cardTeacherFeedback.classList.remove('animate-fade-in');
      void dom.cardTeacherFeedback.offsetWidth; // trigger reflow
      dom.cardTeacherFeedback.classList.add('animate-fade-in');
      showToast('새로운 응원 피드백으로 변경되었습니다! 👩‍🏫');
    });
  }

  // Copy Result Text for Homework Submission
  dom.btnCopyText.addEventListener('click', () => {
    const chosen = CHUGUMI_DATA.find(c => c.id === state.selectedChugumiId) || CHUGUMI_DATA[0];
    const chosenTop = TOPS_DATA.find(t => t.id === state.selectedTopId) || TOPS_DATA[0];
    const chosenBottom = BOTTOMS_DATA.find(b => b.id === state.selectedBottomId) || BOTTOMS_DATA[0];
    const chosenShoes = SHOES_DATA.find(s => s.id === state.selectedShoesId) || SHOES_DATA[0];

    const studentName = dom.inputName.value.trim() || '학생';
    const studentClass = dom.inputClass.value.trim() || '1학년';
    const studentMotto = dom.inputMotto.value.trim() || chosen.defaultMotto;

    const accNames = Array.from(state.selectedAccessories)
      .map(id => ACCESSORIES_DATA.find(a => a.id === id)?.name)
      .filter(Boolean)
      .join(', ') || '없음';

    const genderLabel = state.characterGender === 'boy' ? '남학생' : '여학생';
    const textToCopy = `[중학교 가정 수업 | 나만의 추구미 & 패션 스타일링 보고서]
• 학생 정보: ${studentClass} ${studentName} (${genderLabel})
• 나의 추구미 & 시각적 무드: ${chosen.name} (${chosen.visualMood})
• 스타일링 조합:
  - 상의: ${chosenTop.name} (${chosenTop.fit})
  - 하의: ${chosenBottom.name} (${chosenBottom.fit})
  - 신발: ${chosenShoes.name}
  - 소품: ${accNames}
• 나의 패션 & 가치관 한마디: "${studentMotto}"
• 가정 선생님의 응원 피드백: ${dom.cardTeacherFeedback.textContent}`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast('📋 과제 제출용 텍스트가 클립보드에 복사되었습니다!');
    }).catch(() => {
      showToast('클립보드 복사에 실패했습니다.');
    });
  });

  // Print Dialog
  dom.btnPrint.addEventListener('click', () => {
    window.print();
  });

  // Character Model Gender Selection Buttons
  if (dom.headerGenderBoy) dom.headerGenderBoy.addEventListener('click', () => setCharacterGender('boy'));
  if (dom.headerGenderGirl) dom.headerGenderGirl.addEventListener('click', () => setCharacterGender('girl'));
  if (dom.btnCharBoy) dom.btnCharBoy.addEventListener('click', () => setCharacterGender('boy'));
  if (dom.btnCharGirl) dom.btnCharGirl.addEventListener('click', () => setCharacterGender('girl'));

  // Restart
  dom.btnRestart.addEventListener('click', () => {
    if (confirm('처음부터 다시 시작하시겠습니까?')) {
      state.characterGender = 'girl';
      state.selectedChugumiId = null;
      state.selectedTopId = null;
      state.selectedBottomId = null;
      state.selectedShoesId = null;
      state.selectedAccessories.clear();
      state.motto = '';

      dom.btnToStep2.disabled = true;
      dom.btnToStep2.className = 'w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-slate-200 text-slate-400 cursor-not-allowed transition-all shadow-xs flex items-center justify-center gap-2';
      dom.step1Status.textContent = '마음에 드는 추구미 무드보드 카드를 1개 클릭해 주세요.';

      updateGenderButtons();
      renderStep1Chugumi();
      renderStep2Categories();
      setStep(1);
      showToast('처음 단계로 초기화되었습니다. 새로운 스타일을 탐색해 보세요!');
    }
  });

  // Auto-update student names in live preview
  dom.inputName.addEventListener('input', updateVisualMannequin);
  dom.inputClass.addEventListener('input', updateVisualMannequin);
}

// ==========================================
// 12. TOAST NOTIFICATION UTILITY
// ==========================================

let toastTimer = null;
function showToast(message, icon = '✨') {
  if (!dom.toast) return;

  dom.toastIcon.textContent = icon;
  dom.toastMessage.textContent = message;

  dom.toast.classList.remove('opacity-0', 'pointer-events-none');
  dom.toast.classList.add('opacity-100');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    dom.toast.classList.remove('opacity-100');
    dom.toast.classList.add('opacity-0', 'pointer-events-none');
  }, 3000);
}
