'use client';

import React from 'react';
import { ArrowRight, Sparkles, BookOpen, Clock, Users, Award } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col min-h-screen justify-between p-6 max-w-md mx-auto relative overflow-hidden bg-gradient-to-b from-indigo-50/70 via-white to-slate-50">
      {/* 장식용 배경 블러 원 */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-56 h-56 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />

      {/* 헤더 섹션 */}
      <div className="relative pt-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-100/80 border border-indigo-200 text-indigo-700 text-xs font-semibold tracking-wide mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>2026 최신 개정판 공부 DNA 검사</span>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-600 text-white shadow-xs">
            공성태
          </span>
          <span className="text-xs font-semibold text-indigo-600 tracking-wide">
            공부 성향 테스트
          </span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 tracking-tight leading-none my-1 flex items-baseline gap-2">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-xs">
            공성태
          </span>
          <span className="text-base font-bold text-slate-400">
            : STUDY DNA
          </span>
        </h1>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed font-medium">
          <span className="text-indigo-600 font-bold">[공]</span>부{' '}
          <span className="text-purple-600 font-bold">[성]</span>향{' '}
          <span className="text-pink-600 font-bold">[태]</span>스트로 알아보는 
          나의 진짜 공부 성향과 찰떡 공부법!
        </p>

        {/* 핵심 통계 뱃지 바 */}
        <div className="grid grid-cols-3 gap-2 mt-5 p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-xs">
          <div className="flex flex-col items-center justify-center py-1 border-r border-slate-100">
            <span className="flex items-center gap-1 text-[11px] text-slate-600 font-medium">
              <Clock className="w-3 h-3 text-indigo-500" /> 소요 시간
            </span>
            <span className="text-xs font-bold text-slate-800 mt-0.5">약 3분</span>
          </div>
          <div className="flex flex-col items-center justify-center py-1 border-r border-slate-100">
            <span className="flex items-center gap-1 text-[11px] text-slate-600 font-medium">
              <BookOpen className="w-3 h-3 text-purple-500" /> 문항 수
            </span>
            <span className="text-xs font-bold text-slate-800 mt-0.5">12문항 (A/B)</span>
          </div>
          <div className="flex flex-col items-center justify-center py-1">
            <span className="flex items-center gap-1 text-[11px] text-slate-600 font-medium">
              <Users className="w-3 h-3 text-pink-500" /> 누적 참여
            </span>
            <span className="text-xs font-bold text-slate-800 mt-0.5">48,290명</span>
          </div>
        </div>
      </div>

      {/* 중앙 캐릭터/유형 프리뷰 카드 */}
      <div className="my-6 relative">
        <div className="text-xs font-semibold text-slate-600 mb-2.5 px-1 flex items-center justify-between">
          <span>발견할 수 있는 4가지 공부 유형</span>
          <Award className="w-3.5 h-3.5 text-indigo-500" />
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-indigo-300 transition-all">
            <div className="text-2xl mb-1.5">📐</div>
            <div className="text-xs font-bold text-slate-800">철저한 전략적 계획러</div>
            <div className="text-[11px] text-slate-600 mt-0.5 line-clamp-1">스텝바이스텝 루틴 마스터</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-orange-300 transition-all">
            <div className="text-2xl mb-1.5">⚡</div>
            <div className="text-xs font-bold text-slate-800">번뜩이는 벼락치기러</div>
            <div className="text-[11px] text-slate-600 mt-0.5 line-clamp-1">마감 직전 초인적 각성</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-teal-300 transition-all">
            <div className="text-2xl mb-1.5">🔍</div>
            <div className="text-xs font-bold text-slate-800">몰입형 원리 탐구자</div>
            <div className="text-[11px] text-slate-600 mt-0.5 line-clamp-1">원리 파고드는 학자 스타일</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-purple-300 transition-all">
            <div className="text-2xl mb-1.5">🤝</div>
            <div className="text-xs font-bold text-slate-800">시너지 스터디메이트</div>
            <div className="text-[11px] text-slate-600 mt-0.5 line-clamp-1">함께할 때 강해지는 러너</div>
          </div>
        </div>
      </div>

      {/* 하단 CTA 버튼 */}
      <div className="pb-6 relative">
        <button
          onClick={onStart}
          id="start-test-button"
          className="w-full group relative flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 text-white font-bold text-base shadow-lg shadow-indigo-500/25 active:scale-[0.98] hover:shadow-indigo-500/40 transition-all cursor-pointer"
        >
          <span>테스트 시작하기</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-center text-[11px] text-slate-600 mt-3">
          로그인 없이 무료로 바로 확인할 수 있습니다.
        </p>
      </div>
    </div>
  );
}
