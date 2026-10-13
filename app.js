const itinerary = [
  {
    phase: 'FIXED 01',
    date: '1.30 토',
    city: '나트랑',
    title: '세 가족, 같은 비행기로 출발',
    pace: '확정 · 국제선',
    status: 'confirmed',
    statusLabel: '확정',
    moments: ['TW033 · ICN 20:10 출발', 'CXR 23:55 도착', '예약번호는 공개 페이지에 표시하지 않기'],
  },
  {
    phase: 'GROUP 02',
    date: '1.30 — 2.02',
    city: '나트랑',
    title: '아빠어디가, 시내에서 3박',
    pace: '계획 · 숙소 미정',
    status: 'group',
    statusLabel: '그룹',
    moments: ['아빠 3명 + 아이 4명', '시내호텔 객실 2개 예약', '커넥팅룸 우선 · 없으면 같은 층 옆방'],
  },
  {
    phase: 'GROUP 03',
    date: '2.02 — 2.04',
    city: '나트랑',
    title: '윈덤가든에서 함께 2박',
    pace: '계획 · 객실 예약 전',
    status: 'group',
    statusLabel: '그룹',
    moments: ['일곱 명이 함께 쓰는 큰 객실 1개', '2월 4일 두 가족은 저녁 귀국', '아빠와 아들은 시내 여행 계속'],
  },
  {
    phase: 'BOOKED 04',
    date: '2.04 — 2.09',
    city: '나트랑',
    title: '르모어 호텔에서 5박',
    pace: '예약 완료 · 결제 예정',
    status: 'confirmed',
    statusLabel: '예약',
    moments: ['아빠와 아들의 첫 시내 베이스', '2027년 1월 19일 결제 예정', '러닝·카페·게임 만들기를 느슨하게'],
  },
  {
    phase: 'BOOKED 05',
    date: '2.09 — 2.13',
    city: '나트랑',
    title: '시에스타 호텔에서 4박',
    pace: '예약·결제 완료',
    status: 'confirmed',
    statusLabel: '결제',
    moments: ['나트랑의 두 번째 시내 베이스', '2월 13일 체크아웃', '달랏 이동 차량은 별도 예약'],
  },
  {
    phase: 'BOOKED 06',
    date: '2.13 — 2.16',
    city: '달랏',
    title: '달랏 TTR Central Apart에서 3박',
    pace: '예약 완료 · 결제 예정',
    status: 'confirmed',
    statusLabel: '예약',
    moments: ['2월 13일 나트랑에서 차량 이동', '호수·소나무·카페 중심', '2027년 2월 4일 결제 예정'],
  },
  {
    phase: 'FIXED 07',
    date: '2.16 화',
    city: '호치민',
    title: '베트남항공으로 호치민 이동',
    pace: '확정 · 국내선',
    status: 'confirmed',
    statusLabel: '확정',
    moments: ['VN1383 · DLI 11:35 출발', 'SGN 12:30 도착', '호치민 숙소와 관광·휴양 일정은 아직 미정'],
  },
  {
    phase: 'OPEN 08',
    date: '2.16 — 2.21',
    city: '호치민',
    title: '관광과 휴양으로 마무리하는 5박',
    pace: '숙소·세부 일정 미정',
    status: 'pending',
    statusLabel: '채우기',
    moments: ['2월 16일 도착·체크인 후 휴식', '2월 17—20일 오전 관광 + 오후 호텔·카페', '2월 21일 체크아웃 후 SGN 공항 이동'],
  },
  {
    phase: 'FIXED 09',
    date: '2.21 일',
    city: '호치민',
    title: '호치민에서 인천으로',
    pace: '확정 · 귀국',
    status: 'confirmed',
    statusLabel: '확정',
    moments: ['KE472 · SGN 14:05 출발', 'ICN 21:15 도착', '호텔에서 공항까지 이동시간 역산'],
  },
];

const runningRoutes = [
  {
    city: '나트랑',
    dates: '2.04 — 2.13 · 선택',
    route: '호텔 러닝머신',
    distance: '30—40분',
    time: '조식 전 또는 오후',
    access: '르모어·시에스타 헬스장',
    detail: '그룹 여행이 끝난 뒤 컨디션이 좋은 날만 가볍게 달립니다. 관광이나 게임 만들기가 길어진 날에는 운동을 건너뜁니다.',
    plan: '걷기 5분 · 이지런 20—30분 · 정리 5분',
    note: '2—3회면 충분',
  },
  {
    city: '달랏·호치민',
    dates: '2.13 — 2.21 · 여유 있을 때',
    route: '산책 또는 호텔 러닝머신',
    distance: '20—40분',
    time: '날씨·컨디션 따라',
    access: '숙소 시설 또는 가까운 산책로',
    detail: '달랏과 호치민에서는 별도 러닝 일정을 만들지 않습니다. 많이 걷는 날은 그것으로 충분하고, 몸이 가벼운 날에만 짧게 운동합니다.',
    plan: '여행 우선 · 피곤하면 휴식 · 러닝은 보너스',
    note: '0—1회도 괜찮음',
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
    caption: '2월 13일부터 16일까지 3박입니다. 자연과 카페를 섞고, 산악도로 이동 첫날은 일정을 가볍게 둡니다.',
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

function externalLink(href, label, className = '') {
  return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="${className}">${label}</a>`;
}

function renderDays(city = '전체') {
  const root = document.querySelector('#day-grid');
  const visible = city === '전체' ? itinerary : itinerary.filter((item) => item.city === city);
  root.innerHTML = visible.map((item) => `
    <article class="day-card ${item.status === 'confirmed' ? 'status-card-confirmed' : 'status-card-pending'}">
      <div class="day-card-head"><span>${item.phase}</span><strong>${item.date}</strong></div>
      <div class="day-card-body">
        <div class="day-meta"><span>${item.city}</span><small>${item.pace}</small></div>
        <h3>${item.title}</h3>
        <ul>${item.moments.map((moment) => `<li>${moment}</li>`).join('')}</ul>
      </div>
      <div class="status-tab ${item.status}">${item.statusLabel}</div>
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
      ${run.map ? `<div class="run-links no-print">${externalLink(run.map, '출발점 지도 ↗')}</div>` : ''}
    </article>`).join('');
}

function renderGuide(city = '나트랑') {
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

document.addEventListener('DOMContentLoaded', () => {
  renderDays();
  renderRuns();
  renderGuide();

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

  document.querySelector('[data-print]').addEventListener('click', () => window.print());
});
