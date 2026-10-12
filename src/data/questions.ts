import { Question } from '@/types/quiz';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    category: '계획 & 시작',
    question: '시험 2주 전, 나의 공부 상태는?',
    emoji: '🗓️',
    options: [
      {
        id: 'A',
        text: '이미 과목별 분량과 일자별 목표를 플래너에 적어두었다.',
        subText: '일단 계획이 서야 안심이 돼요',
        scores: { planner: 3 },
      },
      {
        id: 'B',
        text: '"아직 2주나 남았네!" 슬슬 시험 범위만 가볍게 훑어본다.',
        subText: '진짜 집중은 며칠 전부터 시작이죠',
        scores: { sprinter: 3 },
      },
    ],
  },
  {
    id: 2,
    category: '공부 환경',
    question: '집중하기 위해 가장 선호하는 공부 장소는?',
    emoji: '📍',
    options: [
      {
        id: 'A',
        text: '외부 소음 없이 나 혼자만의 공간인 1인 독서실이나 방',
        subText: '온전히 내 생각에만 깊이 잠길 수 있는 곳',
        scores: { scholar: 3 },
      },
      {
        id: 'B',
        text: '적당한 백색소음과 열심히 공부하는 사람들이 보이는 카페',
        subText: '사람들의 열기 속에서 시너지와 동기부여를 얻어요',
        scores: { social: 3 },
      },
    ],
  },
  {
    id: 3,
    category: '난관 극복',
    question: '도저히 이해되지 않는 어려운 개념이나 문제를 마주쳤다면?',
    emoji: '🤔',
    options: [
      {
        id: 'A',
        text: '이해될 때까지 기본 원리와 개념 유도 과정을 끝까지 파고든다.',
        subText: '원리를 납득하지 못하면 다음으로 못 넘어가요',
        scores: { scholar: 3 },
      },
      {
        id: 'B',
        text: '당장 시험에 자주 나오는 대표 풀이 패턴과 족보부터 암기한다.',
        subText: '효율적인 점수 획득이 최우선이에요',
        scores: { sprinter: 3 },
      },
    ],
  },
  {
    id: 4,
    category: '스터디 방식',
    question: '친구에게 "같이 스터디 모임 할래?"라는 제안을 받았다면?',
    emoji: '👥',
    options: [
      {
        id: 'A',
        text: '"완전 좋아!" 서로 질문하고 진도 체크해주면 훨씬 집중 잘 돼.',
        subText: '서로를 러닝메이트 삼아 윈윈!',
        scores: { social: 3 },
      },
      {
        id: 'B',
        text: '"마음은 고맙지만..." 혼자 내 페이스대로 공부하는 게 편해.',
        subText: '남들과 맞추다 보면 내 흐름이 깨져요',
        scores: { planner: 1, scholar: 2 },
      },
    ],
  },
  {
    id: 5,
    category: '목표 달성',
    question: '오늘 계획했던 공부 분량을 다 못 채운 채 밤이 되었다면?',
    emoji: '⏰',
    options: [
      {
        id: 'A',
        text: '찜찜해서 잠이 안 오고, 내일 일정에 반영해 어떻게든 메꾼다.',
        subText: '계획이 틀어지면 마음이 너무 불편해요',
        scores: { planner: 3 },
      },
      {
        id: 'B',
        text: '"내일의 내가 하겠지!" 쿨하게 닫고 일단 편히 잔다.',
        subText: '벼락치기 때 한 방에 집중하면 충분해요',
        scores: { sprinter: 3 },
      },
    ],
  },
  {
    id: 6,
    category: '암기 노하우',
    question: '방대한 분량의 암기 과목을 공부할 때 더 효과적인 방법은?',
    emoji: '💡',
    options: [
      {
        id: 'A',
        text: '친구에게 가르쳐주듯 소리 내어 말하거나 토론하며 외우기',
        subText: '입으로 설명할 때 뇌에 가장 강하게 각인돼요',
        scores: { social: 3 },
      },
      {
        id: 'B',
        text: '노트에 표와 마인드맵으로 일목요연하게 구조화하며 외우기',
        subText: '시각적 체계와 논리적 맥락으로 정리해요',
        scores: { planner: 2, scholar: 1 },
      },
    ],
  },
  {
    id: 7,
    category: '공부 루틴',
    question: '본격적으로 책상에 앉아 공부를 시작하기 전 나의 행동은?',
    emoji: '📝',
    options: [
      {
        id: 'A',
        text: '책상을 깔끔히 치우고, 오늘 할 일 순서(To-Do)를 정렬한다.',
        subText: '시작 전 완벽한 환경 세팅이 필수!',
        scores: { planner: 3 },
      },
      {
        id: 'B',
        text: '일단 책 펴고 가장 급하거나 눈에 띄는 것부터 시작한다.',
        subText: '의식 따위 생략하고 바로 본론으로 돌진!',
        scores: { sprinter: 3 },
      },
    ],
  },
  {
    id: 8,
    category: '성취감',
    question: '공부하면서 가장 큰 쾌감과 희열을 느끼는 순간은?',
    emoji: '✨',
    options: [
      {
        id: 'A',
        text: '복잡하고 심오했던 지식의 원리를 완벽하게 깨우쳤을 때',
        subText: '"아, 이래서 이렇구나!" 지적 카타르시스',
        scores: { scholar: 3 },
      },
      {
        id: 'B',
        text: '단시간에 엄청난 문제 수와 기출을 정복해 정답률을 올렸을 때',
        subText: '점수로 즉각 증명되는 압도적 스피드',
        scores: { sprinter: 2, planner: 1 },
      },
    ],
  },
  {
    id: 9,
    category: '집중력 저하',
    question: '공부하다가 갑자기 멍해지고 집중력이 뚝 떨어졌을 때?',
    emoji: '⚡',
    options: [
      {
        id: 'A',
        text: '공부 인증 단톡방을 보거나 친구에게 연락해 동기부여를 받는다.',
        subText: '"다른 애들도 열심히 하네!" 자극 충전',
        scores: { social: 3 },
      },
      {
        id: 'B',
        text: '타이머를 멈추고 15분 파워냅을 자거나 가볍게 스트레칭한다.',
        subText: '혼자 뇌를 리셋하고 다시 내 리듬을 찾아요',
        scores: { planner: 1, scholar: 2 },
      },
    ],
  },
  {
    id: 10,
    category: '디데이 전야',
    question: '시험 바로 전날 밤 11시, 나의 현실적인 모습은?',
    emoji: '🌙',
    options: [
      {
        id: 'A',
        text: '계획한 복습을 차분히 마치고, 최상의 컨디션을 위해 취침 준비',
        subText: '이미 준비는 끝났으니 실전 컨디션이 핵심',
        scores: { planner: 3 },
      },
      {
        id: 'B',
        text: '"지금부터가 진짜 승부다!" 핫식스 따고 초인적 뇌 풀가동',
        subText: '전날 밤에 본 게 내일 시험에 나온다!',
        scores: { sprinter: 3 },
      },
    ],
  },
  {
    id: 11,
    category: '스트레스',
    question: '공부할 때 나를 가장 지치게 하고 분노하게 만드는 것은?',
    emoji: '💢',
    options: [
      {
        id: 'A',
        text: '논리적 이유나 인과관계 없이 무작정 외우라고 강요받는 것',
        subText: '이해 없는 암기는 뇌가 거부해요',
        scores: { scholar: 3 },
      },
      {
        id: 'B',
        text: '대화할 사람 한 명 없이 종일 사방이 막힌 곳에 갇혀있는 것',
        subText: '고립되어 있으면 기운이 쭉 빠져요',
        scores: { social: 3 },
      },
    ],
  },
  {
    id: 12,
    category: '마인드셋',
    question: '내가 생각하는 이상적인 공부의 본질은?',
    emoji: '🎯',
    options: [
      {
        id: 'A',
        text: '새로운 세상의 지식과 원리를 탐험하며 내면을 채우는 여정',
        subText: '깊이 있는 배움 그 자체의 가치',
        scores: { scholar: 2, planner: 1 },
      },
      {
        id: 'B',
        text: '동료들과 함께 도전하고 목표를 달성해 나가는 팀 레이스',
        subText: '함께 성장하고 나누는 기쁨',
        scores: { social: 3 },
      },
    ],
  },
];
