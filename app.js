const itinerary = [
  {
    day: 1,
    date: '1.30 토',
    city: '호치민',
    title: '학원 뒤, 천천히 출발',
    pace: '이동 · 늦은 체크인',
    moments: ['14시 학원 종료 후 인천공항으로', '19:20 전후 직항편 우선', '호텔에는 늦은 체크인을 미리 알리기'],
  },
  {
    day: 2,
    date: '1.31 일',
    city: '호치민',
    title: '여행의 속도를 맞추는 날',
    pace: '아주 가볍게',
    moments: ['늦잠과 호텔 조식', '숙소 주변·타오단공원 산책', '카페에서 게임 아이디어 세 가지 적기'],
  },
  {
    day: 3,
    date: '2.01 월',
    city: '호치민',
    title: '사이공의 오래된 중심',
    pace: '오전 관광 · 오후 휴식',
    moments: ['통일궁', '중앙우체국·책거리', '한낮에는 호텔 또는 카페로'],
  },
  {
    day: 4,
    date: '2.02 화',
    city: '호치민',
    title: '강변 러닝과 첫 프로토타입',
    pace: '러닝 · 만들기',
    moments: ['투티엠·살라 4—6km 이지런', '게임 장르와 조작 방식 정하기', '다음 날 국내선·픽업 확인'],
  },
  {
    day: 5,
    date: '2.03 수',
    city: '나트랑',
    title: '설 혼잡 전에 바다로',
    pace: '핵심 이동일',
    moments: ['SGN → CXR 오전·낮 직항', '장기 숙소 체크인', '해변과 마트 위치만 확인'],
    tet: true,
  },
  {
    day: 6,
    date: '2.04 목',
    city: '나트랑',
    title: '바다 도시의 생활 반경',
    pace: '가볍게',
    moments: ['2/4광장—쩐푸 해변 적응주', '카페·세탁·약국 찾기', '오후는 수영장과 자유시간'],
    tet: true,
  },
  {
    day: 7,
    date: '2.05 금',
    city: '나트랑',
    title: 'Tết 전날, 준비하고 쉬기',
    pace: '가볍게 · 재확인',
    moments: ['물·과일·간식·상비약 확보', '프런트에 영업 식당 문의', '게임 캐릭터를 한 명만 만들기'],
    tet: true,
  },
  {
    day: 8,
    date: '2.06 토',
    city: '나트랑',
    title: 'Tết 1일, 완전한 쉼표',
    pace: '호텔 데이',
    moments: ['호텔 조식', '수영장·해변 산책', '관광보다 함께 쉬는 날'],
    tet: true,
  },
  {
    day: 9,
    date: '2.07 일',
    city: '나트랑',
    title: '몸을 천천히 깨우는 날',
    pace: '산책 · 선택',
    moments: ['늦은 조식', '헬스장 30분 또는 해변 산책', '문 연 식당은 프런트에서 확인'],
    tet: true,
  },
  {
    day: 10,
    date: '2.08 월',
    city: '나트랑',
    title: '온천 또는 만드는 오후',
    pace: '선택 일정',
    moments: ['영업 확인 후 I-Resort', '피곤하면 카페·호텔로 변경', '움직이는 첫 게임 화면 만들기'],
    tet: true,
  },
  {
    day: 11,
    date: '2.09 화',
    city: '나트랑',
    title: '참파 문화와 점수 시스템',
    pace: '오전 관광 · 오후 만들기',
    moments: ['포나가르 참탑', '롱선사 또는 해변', '게임 규칙·점수 시스템 구현'],
    tet: true,
  },
  {
    day: 12,
    date: '2.10 수',
    city: '나트랑',
    title: '큰 하루는 하나만',
    pace: '선택 · 완충',
    moments: ['빈원더스 또는 해양박물관', '둘 다 가지 않기', '달랏용 작은 가방 준비'],
    tet: true,
  },
  {
    day: 13,
    date: '2.11 목',
    city: '달랏',
    title: '큰 짐을 두고 고원으로',
    pace: '육로 이동',
    moments: ['잠근 캐리어를 나트랑 호텔에 보관', '작은 가방만 들고 전용차·리무진 이동', '달랏 체크인 후 따뜻한 저녁'],
  },
  {
    day: 14,
    date: '2.12 금',
    city: '달랏',
    title: '호수와 소나무의 하루',
    pace: '보통',
    moments: ['쑤언흐엉호 산책', '달랏역 또는 꽃정원', '전망 좋은 카페에서 쉬기'],
  },
  {
    day: 15,
    date: '2.13 토',
    city: '달랏',
    title: '이야기를 만드는 날',
    pace: '선택 관광 · 만들기',
    moments: ['죽림선원·다딴라 중 하나', '게임 배경·스토리·효과음 구상', '저녁은 뜨거운 전골'],
  },
  {
    day: 16,
    date: '2.14 일',
    city: '나트랑',
    title: '우리의 베이스로 돌아오기',
    pace: '육로 이동 · 회복',
    moments: ['달랏 → 나트랑', '같은 호텔 재체크인', '캐리어 수령 후 세탁·휴식'],
  },
  {
    day: 17,
    date: '2.15 월',
    city: '나트랑',
    title: '다시 바다의 리듬',
    pace: '러닝 · 휴식',
    moments: ['해변 4—5km 이지런', '호텔 조식과 수영장', '오후 일정은 비워 두기'],
  },
  {
    day: 18,
    date: '2.16 화',
    city: '나트랑',
    title: '바다 체험은 하나만',
    pace: '선택 일정',
    moments: ['섬 투어·머드배스 중 하나', '파도가 높으면 박물관·카페', '저녁은 가까운 식당'],
  },
  {
    day: 19,
    date: '2.17 수',
    city: '나트랑',
    title: '부자 플레이테스트',
    pace: '만들기 · 느린 하루',
    moments: ['게임 난이도와 버그 수정', '서로 세 번씩 플레이', '완성 화면을 영상으로 남기기'],
  },
  {
    day: 20,
    date: '2.18 목',
    city: '나트랑',
    title: '여행의 마지막 여백',
    pace: '완충일',
    moments: ['못 한 것 하나만 선택', '작은 게임 발표회와 여행 회고', '짐·수하물·공항차량 확인'],
  },
  {
    day: 21,
    date: '2.19 금',
    city: '나트랑',
    title: '베트남을 떠나는 날',
    pace: '귀국',
    moments: ['체크아웃 후 호텔에 짐 보관', 'CXR 출발 3시간 전 도착', '야간 직항으로 인천으로'],
  },
  {
    day: 22,
    date: '2.20 토',
    city: '귀국',
    title: '우리 게임과 함께 집으로',
    pace: '한국 도착',
    moments: ['인천공항 도착', '무리한 일정 없이 귀가', '사진과 게임 파일 백업'],
  },
];

const runningRoutes = [
  {
    city: '호치민',
    dates: '1.30 — 2.03',
    route: '타오단공원 + 투티엠·살라',
    distance: '4km / 6—8km',
    time: '05:30—07:00',
    access: '1군에서는 타오단 도보 · 투티엠은 GrabCar',
    detail: '첫날은 타오단 반복주, 공간이 필요한 날은 투티엠 강변으로 갑니다. 신호가 있어도 오토바이를 다시 확인합니다.',
    plan: '1.31 산책 · 2.02 투티엠 4—6km',
    map: 'https://www.google.com/maps/search/?api=1&query=Saigon+Riverside+Park+Thu+Thiem',
    note: '더위보다 교통을 먼저 주의',
  },
  {
    city: '나트랑',
    dates: '2.03 — 2.11 · 2.14 — 2.19',
    route: '2/4광장 — 쩐푸 해변 — 혼총',
    distance: '3 · 5 · 8—10km',
    time: '05:30—07:00',
    access: 'Grand Tourane에서 해변 도보권',
    detail: '중앙 산책로는 회복주, 혼총 방향은 컨디션 좋은 날의 롱런으로 씁니다. 설날과 이동 다음 날에는 거리를 줄입니다.',
    plan: '2.04 3km · 2.09 5km · 2.15 4—5km · 2.18 8km 선택',
    map: 'https://www.google.com/maps/search/?api=1&query=2%2F4+Square+Nha+Trang',
    note: '여행의 메인 러닝 베이스',
  },
  {
    city: '달랏',
    dates: '2.11 — 2.14',
    route: '쑤언흐엉호 한 바퀴',
    distance: '약 5km',
    time: '06:15—07:30',
    access: '중심가 호텔에서 호수까지 도보 또는 짧은 Grab',
    detail: '나트랑보다 서늘하지만 언덕과 도로 가장자리의 오토바이를 주의합니다. 첫 아침은 산책으로 시작해도 충분합니다.',
    plan: '2.12 5km 이지런 · 비나 안개면 호텔 헬스장',
    map: 'https://www.google.com/maps/search/?api=1&query=Xuan+Huong+Lake+Da+Lat',
    note: '얇은 긴팔을 챙기기',
  },
];

const guideData = {
  '호치민': {
    weather: '건기 · 한낮 더움',
    caption: '오전에는 역사와 거리를 걷고, 가장 더운 시간은 냉방되는 박물관·카페·호텔에서 보냅니다.',
    sights: [
      ['통일궁', '07:00~18:00. 첫날부터 무리하지 않고 오전 핵심 일정으로.', '40,000—80,000₫', 'https://www.google.com/maps/search/?api=1&query=Independence+Palace+Ho+Chi+Minh+City'],
      ['전쟁박물관', '전시 강도가 높아 아이와 볼 범위를 먼저 상의합니다.', '성인 40,000₫', 'https://www.google.com/maps/search/?api=1&query=War+Remnants+Museum+Ho+Chi+Minh+City'],
      ['중앙우체국·책거리', '관광과 카페 휴식을 한 구역에서 연결하기 좋은 코스.', '거리 산책 무료', 'https://www.google.com/maps/search/?api=1&query=Ho+Chi+Minh+City+Book+Street'],
    ],
    eats: [
      ['Cơm Tấm Ba Ghiền', '돼지갈비 껌땀', '70,000—150,000₫', '미쉐린 빕 구르망', 'https://www.google.com/maps/search/?api=1&query=Com+Tam+Ba+Ghien+Ho+Chi+Minh'],
      ['Phở Lệ', '진한 남부식 소고기 퍼', '80,000—140,000₫', '아침 또는 이른 저녁', 'https://www.google.com/maps/search/?api=1&query=Pho+Le+413+Nguyen+Trai+Ho+Chi+Minh'],
      ['Bánh Xèo 46A', '큰 남부식 반쎄오', '80,000—180,000₫', '두 명이 나눠 먹기 좋음', 'https://www.google.com/maps/search/?api=1&query=Banh+Xeo+46A+Ho+Chi+Minh'],
    ],
  },
  '나트랑': {
    weather: '대체로 건기 · 바람과 파도 확인',
    caption: '설 연휴에는 호텔·해변을 안전망으로 두고, 장기체류답게 하루 한두 가지만 선택합니다.',
    sights: [
      ['포나가르 참탑', '오전 방문. 어깨와 무릎을 가리는 복장을 준비합니다.', '약 30,000₫', 'https://www.google.com/maps/search/?api=1&query=Po+Nagar+Cham+Towers+Nha+Trang'],
      ['국립해양박물관', '비·강풍으로 바다 일정이 취소될 때 좋은 대안.', '성인 40,000₫', 'https://www.google.com/maps/search/?api=1&query=Museum+of+Oceanography+Nha+Trang'],
      ['I-Resort', '머드배스와 온천. 설 특별영업과 시간을 예약 전 확인합니다.', '약 170,000—400,000₫/인', 'https://www.google.com/maps/search/?api=1&query=I-Resort+Nha+Trang'],
    ],
    eats: [
      ['Nem Ninh Hòa Đặng Văn Quyên', '넴느엉 세트', '40,000—80,000₫', '채소와 라이스페이퍼를 함께', 'https://www.google.com/maps/search/?api=1&query=Nem+Ninh+Hoa+Dang+Van+Quyen+Nha+Trang'],
      ['Bún Cá Mịn', '생선·해파리국수', '40,000—60,000₫', '가벼운 아침 또는 점심', 'https://www.google.com/maps/search/?api=1&query=Bun+Ca+Min+Nha+Trang'],
      ['Lạc Cảnh', '숯불 소고기·구이', '150,000—300,000₫', '저녁 피크 대기 가능', 'https://www.google.com/maps/search/?api=1&query=Lac+Canh+Nha+Trang'],
    ],
  },
  '달랏': {
    weather: '아침·밤 서늘함 · 얇은 겉옷',
    caption: '3박만 작은 가방으로 다녀옵니다. 자연과 카페를 섞고, 산악도로 이동 다음 날은 일정을 가볍게 둡니다.',
    sights: [
      ['쑤언흐엉호', '아침 러닝과 저녁 산책을 모두 할 수 있는 달랏의 중심.', '무료', 'https://www.google.com/maps/search/?api=1&query=Xuan+Huong+Lake+Da+Lat'],
      ['달랏 기차역', '짧게 둘러보기 좋은 프랑스 식민지 시대 건축.', '현장 확인', 'https://www.google.com/maps/search/?api=1&query=Da+Lat+Railway+Station'],
      ['죽림선원', '케이블카 운행과 안개를 확인하고 방문. 긴 이동일에는 생략합니다.', '입장 무료 · 이동 별도', 'https://www.google.com/maps/search/?api=1&query=Truc+Lam+Buddhist+Monastery+Da+Lat'],
    ],
    eats: [
      ['Bánh Căn Nhà Chung', '달랏식 미니 쌀전병', '40,000—80,000₫', '아침·점심, 대기 가능', 'https://www.google.com/maps/search/?api=1&query=Banh+Can+Nha+Chung+Da+Lat'],
      ['Lẩu Gà Lá É Tao Ngộ', '닭고기 라에 전골', '200,000—400,000₫', '서늘한 저녁에 둘이 나눠 먹기', 'https://www.google.com/maps/search/?api=1&query=Lau+Ga+La+E+Tao+Ngo+Da+Lat'],
      ['An Cafe', '정원형 카페·가벼운 식사', '중간 가격대', '게임 스케치하기 좋은 휴식', 'https://www.google.com/maps/search/?api=1&query=An+Cafe+Da+Lat'],
    ],
  },
};

const budgets = {
  fit: {
    title: '합리적 균형안',
    subtitle: '조식·헬스장·짐 보관을 지키고 비싼 체험은 골라서',
    total: 590,
    items: [
      ['국제선 다구간 · 2인', 150],
      ['SGN→CXR 국내선 · 2인', 20],
      ['조식·헬스장 숙박 20박', 180],
      ['식비·카페 · 2인', 85],
      ['현지 교통·달랏 왕복', 45],
      ['명소·체험', 45],
      ['보험·통신·세탁', 20],
      ['Tết·변동 예비비', 45],
    ],
  },
  roomy: {
    title: '편안함 우선안',
    subtitle: '호텔 한 단계 업그레이드와 달랏 전용차량까지 여유롭게',
    total: 735,
    items: [
      ['국제선 다구간 · 2인', 170],
      ['SGN→CXR 국내선 · 2인', 25],
      ['조식·헬스장 숙박 20박', 275],
      ['식비·카페 · 2인', 95],
      ['현지 교통·달랏 왕복', 60],
      ['명소·체험', 55],
      ['보험·통신·세탁', 25],
      ['변동 예비비', 30],
    ],
  },
};

function externalLink(href, label, className = '') {
  return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="${className}">${label}</a>`;
}

function renderDays(city = '전체') {
  const root = document.querySelector('#day-grid');
  const visible = city === '전체' ? itinerary : itinerary.filter((item) => item.city === city);
  root.innerHTML = visible.map((item) => `
    <article class="day-card${item.tet ? ' tet-day' : ''}">
      <div class="day-card-head"><span>DAY ${String(item.day).padStart(2, '0')}</span><strong>${item.date}</strong></div>
      <div class="day-card-body">
        <div class="day-meta"><span>${item.city}</span><small>${item.pace}</small></div>
        <h3>${item.title}</h3>
        <ul>${item.moments.map((moment) => `<li>${moment}</li>`).join('')}</ul>
      </div>
      ${item.tet ? '<div class="tet-tab">TẾT</div>' : ''}
    </article>`).join('');
}

function renderRuns() {
  document.querySelector('#run-grid').innerHTML = runningRoutes.map((run, index) => `
    <article class="run-card">
      <div class="run-card-top"><span>RUN ${String(index + 1).padStart(2, '0')}</span><small>${run.dates}</small></div>
      <div class="run-city-row"><strong>${run.city}</strong><span>${run.note}</span></div>
      <h3>${run.route}</h3>
      <p>${run.detail}</p>
      <dl class="run-stats"><div><dt>거리</dt><dd>${run.distance}</dd></div><div><dt>시간</dt><dd>${run.time}</dd></div></dl>
      <div class="run-access"><span>START</span><strong>${run.access}</strong></div>
      <div class="run-plan"><span>수첩에 넣은 리듬</span><strong>${run.plan}</strong></div>
      <div class="run-links no-print">${externalLink(run.map, '출발점 지도 ↗')}</div>
    </article>`).join('');
}

function renderGuide(city = '호치민') {
  const guide = guideData[city];
  document.querySelector('#guide-city').textContent = city;
  document.querySelector('#guide-caption').textContent = guide.caption;
  document.querySelector('#guide-weather').textContent = guide.weather;
  document.querySelector('#guide-sights').innerHTML = guide.sights.map(([name, detail, price, map]) => `
    <article>
      <div class="guide-card-head"><h4>${name}</h4><span>일정 전 재확인</span></div>
      <p>${detail}</p><strong>${price}</strong>
      <div class="guide-links no-print">${externalLink(map, '지도 ↗')}</div>
    </article>`).join('');
  document.querySelector('#guide-eats').innerHTML = guide.eats.map(([name, menu, price, note, map]) => `
    <article>
      <div class="guide-card-head"><h4>${name}</h4><span>${price}</span></div>
      <p>${menu}</p><small>${note}</small>
      <div class="guide-links no-print">${externalLink(map, '지도 열기 ↗')}</div>
    </article>`).join('');
}

function renderBudget(mode = 'fit') {
  const budget = budgets[mode];
  document.querySelector('#budget-title').textContent = budget.title;
  document.querySelector('#budget-total').innerHTML = `${budget.total}<small>만원</small>`;
  document.querySelector('#budget-subtitle').textContent = budget.subtitle;
  document.querySelector('#budget-bars').innerHTML = budget.items.map(([label, amount]) => `
    <div>
      <div><span>${label}</span><strong>${amount}만원</strong></div>
      <div class="bar-track"><span style="width:${(amount / 285) * 100}%"></span></div>
    </div>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderDays();
  renderRuns();
  renderGuide();
  renderBudget();

  document.querySelectorAll('[data-day-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-day-filter]').forEach((item) => {
        item.classList.toggle('active', item === button);
        item.setAttribute('aria-pressed', String(item === button));
      });
      renderDays(button.dataset.dayFilter);
    });
  });

  document.querySelectorAll('[data-guide-city]').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-guide-city]').forEach((item) => {
        item.classList.toggle('active', item === button);
        item.setAttribute('aria-selected', String(item === button));
      });
      renderGuide(button.dataset.guideCity);
    });
  });

  document.querySelectorAll('[data-budget]').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-budget]').forEach((item) => {
        item.classList.toggle('active', item === button);
        item.setAttribute('aria-pressed', String(item === button));
      });
      renderBudget(button.dataset.budget);
    });
  });

  document.querySelector('[data-print]').addEventListener('click', () => window.print());
});
