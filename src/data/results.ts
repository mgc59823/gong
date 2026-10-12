import { StudyResult, StudyType } from '@/types/quiz';

export const RESULTS: Record<StudyType, StudyResult> = {
  planner: {
    type: 'planner',
    title: '철저한 전략적 계획러',
    subtitle: 'The Strategic Architect',
    badge: '규칙과 루틴의 완벽주의자',
    emoji: '📐',
    gradient: 'from-blue-600 via-indigo-600 to-sky-500',
    accentColor: 'bg-indigo-600 text-white',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-200',
    summary:
      '계획이 잘 짜여 있어야 뇌가 편안해지는 스타일입니다. 시험 범위와 기간을 일자별, 시간별로 분배하고, 체크리스트를 하나씩 지워갈 때 최고의 쾌감을 느낍니다. 꾸준함과 체계성이 당신의 가장 강력한 무기입니다.',
    traits: [
      '#플래너_장인',
      '#체계적인_루틴',
      '#체크리스트_희열',
      '#예측_가능한_하루',
      '#철저한_예습복습',
    ],
    tips: [
      {
        title: '포모도로 타임 블록 기법',
        description:
          '25분 집중 + 5분 휴식의 타이머 주기를 스케줄러에 적용해 하루 시간 블록을 구조화해보세요.',
      },
      {
        title: '계획의 20%는 여유 버퍼 두기',
        description:
          '예상치 못한 변수로 계획이 어긋나면 스트레스를 받기 쉽습니다. 하루에 1~2시간은 비어있는 보충 시간을 확보하세요.',
      },
      {
        title: '우선순위 매트릭스(Eisenhower) 활용',
        description:
          '모든 걸 완벽히 하려다 지치지 않도록, 중요도와 긴급도에 따라 핵심 과목부터 공략하세요.',
      },
    ],
    bestPartner: {
      name: '벼락치기 마스터',
      reason: '당신의 탄탄한 스케줄이 상대방을 잡아주고, 상대방의 순발력이 당신의 완벽주의 부담을 덜어줍니다.',
      emoji: '⚡',
    },
    worstPartner: {
      name: '분위기파 즉흥러',
      reason: '약속 시간도 안 지키고 계획 없이 그때그때 기분대로 공부하는 모습에 스트레스를 받을 수 있습니다.',
      emoji: '🌪️',
    },
    studySpot: '정돈된 1인 스터디룸 또는 조용하고 지정석이 있는 독서실',
    bgmRecommendation: '잔잔한 클래식 피아노 or 템포 일정한 로파이(Lo-Fi) 비트',
  },

  sprinter: {
    type: 'sprinter',
    title: '번뜩이는 벼락치기 마스터',
    subtitle: 'The Deadline Sprinter',
    badge: '마감 직전 초인적 각성러',
    emoji: '⚡',
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    accentColor: 'bg-orange-500 text-white',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    summary:
      '평소엔 느긋하다가도 마감 D-Day가 눈앞에 다가오면 초인적인 아드레날린과 폭발적 집중력을 발휘합니다. 질질 끄는 장기전보다 압축적인 단기전에서 최대 효율을 뽑아내며, 핵심만 콕 짚어내는 감각이 뛰어납니다.',
    traits: [
      '#마감직전_각성모드',
      '#압축공부_장인',
      '#족보_핵심_스나이퍼',
      '#위기_극복_전문가',
      '#단기전_최강자',
    ],
    tips: [
      {
        title: '의도적인 인공 마감(Fake Deadline) 설정',
        description:
          '시험 당일이 아니라 시험 3일 전을 최종 마감일로 뇌를 속이는 타이머와 챌린지를 걸어보세요.',
      },
      {
        title: '기출문제 역추적(Reverse-Engineering) 학습법',
        description:
          '방대한 기본서를 처음부터 다 읽지 말고, 족보와 기출문제에 나온 핵심 개념 위주로 역방향 정복하세요.',
      },
      {
        title: '초단기 45분 집중 챌린지',
        description:
          '"지금부터 45분 안에 단원 1개 무조건 끝낸다" 식의 스프린트 세션을 반복하면 긴장감이 유지됩니다.',
      },
    ],
    bestPartner: {
      name: '철저한 전략적 계획러',
      reason: '내가 미루지 않도록 시작 타이밍과 범위를 통제해주는 최고의 길잡이가 되어줍니다.',
      emoji: '📐',
    },
    worstPartner: {
      name: '끝없는 질문러',
      reason: '발등에 불 떨어져서 핵심만 빠르게 돌파해야 하는데 지나치게 세부 원리를 물어보면 멘붕이 옵니다.',
      emoji: '🤯',
    },
    studySpot: '24시간 운영되는 스터디카페 or 긴장감이 유지되는 오픈 라운지',
    bgmRecommendation: '심장 박통수를 올려주는 Synthwave or 빠른 템포의 EDM 집중 음악',
  },

  scholar: {
    type: 'scholar',
    title: '원리 파고드는 몰입형 탐구자',
    subtitle: 'The Deep-dive Scholar',
    badge: '지적 호기심의 학자형',
    emoji: '🔍',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    accentColor: 'bg-teal-600 text-white',
    textColor: 'text-teal-600',
    borderColor: 'border-teal-200',
    summary:
      '"왜 그런 공식이 나왔을까?" 배경과 인과관계를 스스로 납득해야 다음 진도로 나아가는 진정한 학자 스타일입니다. 단순 암기를 가장 싫어하며, 한 번 이해한 개념은 머릿속에 장기 기억으로 깊이 각인됩니다.',
    traits: [
      '#원리주의자',
      '#지적_카타르시스',
      '#단순암기_거부',
      '#마인드맵_단권화',
      '#몰입의_즐거움',
    ],
    tips: [
      {
        title: '파인만 기법 (Feynman Technique)',
        description:
          '내가 이해한 원리를 초등학생도 알아들을 수 있을 만큼 쉬운 언어로 백지에 설명해보며 빈틈을 찾으세요.',
      },
      {
        title: '시험용 암기와 탐구의 시간 분리',
        description:
          '원리를 파고들다 시험 범위를 다 못 볼 수 있으니, "오전은 시험용 문제풀이, 오후는 심층 탐구"로 분리하세요.',
      },
      {
        title: '나만의 백과사전 단권화 노트',
        description:
          '흩어진 개념들을 유기적인 흐름으로 연결하는 한 권의 요약 정리 노트를 만들면 효과가 극대화됩니다.',
      },
    ],
    bestPartner: {
      name: '시너지 스터디메이트',
      reason: '내가 깊게 연구한 내용을 설명해주며 생각을 정리할 수 있고, 상대방의 질문이 새로운 통찰을 줍니다.',
      emoji: '💬',
    },
    worstPartner: {
      name: '답만 외우라는 주입식 러너',
      reason: '"원리는 몰라도 되고 답만 외워!"라고 강요하는 순간 학습 의욕이 완전히 꺾입니다.',
      emoji: '😴',
    },
    studySpot: '서가 냄새가 나는 대학 도서관 or 조용한 1인 북카페',
    bgmRecommendation: '자연의 빗소리, 장작 타는 소리 or 432Hz 뇌파 자극 앰비언트',
  },

  social: {
    type: 'social',
    title: '시너지 폭발 스터디메이트',
    subtitle: 'The Social Catalyst',
    badge: '함께할 때 강해지는 러닝메이트',
    emoji: '🤝',
    gradient: 'from-violet-600 via-purple-600 to-pink-500',
    accentColor: 'bg-purple-600 text-white',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    summary:
      '혼자 방에 갇혀 있으면 쉽게 처지고 지치지만, 열정적인 동료들과 함께 있을 때 에너지가 샘솟는 타입입니다. 서로 모르는 것을 묻고 답하며, 서로의 러닝메이트가 되어줄 때 학습 효과가 배가됩니다.',
    traits: [
      '#스터디_에너자이저',
      '#함께하는_힘',
      '#말하면서_외우기',
      '#동기부여_비타민',
      '#선한_영향력',
    ],
    tips: [
      {
        title: '말하면서 외우는 셀프 티칭(Teaching)',
        description:
          '친구에게 가르쳐주거나, 혼자 있을 땐 인형이나 카메라를 켜두고 스스로 강의하듯 말해보세요.',
      },
      {
        title: '캠스터디 & 열품타 그룹 챌린지',
        description:
          '온라인에서도 서로의 공부 시간을 인증하고 실시간으로 자극받는 커뮤니티형 도구를 적극 활용하세요.',
      },
      {
        title: '잡담 방지용 스터디 룰 정하기',
        description:
          '모임이 친목 도모로 변질되지 않도록, "50분 침묵 공부 후 10분 질의응답"처럼 단호한 규칙을 두세요.',
      },
    ],
    bestPartner: {
      name: '원리 탐구자',
      reason: '내가 질문을 던지면 원리 탐구자가 명쾌하게 설명해주고, 나는 그에게 활기찬 에너지를 채워줍니다.',
      emoji: '🔍',
    },
    worstPartner: {
      name: '잠수 타는 프리라이더',
      reason: '서로 으쌰으쌰해야 하는데 연락 두절되거나 불성실한 태도를 보이면 큰 실망과 배신감을 느낍니다.',
      emoji: '🕳️',
    },
    studySpot: '대화형 스터디룸, 그룹 토론이 가능한 개방형 스터디카페',
    bgmRecommendation: '감성적인 어쿠스틱 카페 플레이리스트 or 재즈 피아노 BGM',
  },
};
