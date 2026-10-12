'use client';

import React, { useEffect, useState } from 'react';
import { Sparkles, Brain, Compass, BookCheck } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const STEPS = [
  { text: '12가지 답변 패턴을 분석하고 있습니다...', icon: Brain },
  { text: '집중 방식과 마감 반응도를 계산 중입니다...', icon: Compass },
  { text: '최적의 공부 유형과 추천 학습법을 완성하는 중!', icon: BookCheck },
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setStepIndex((prev) => (prev < STEPS.length - 1 ? prev + 1 : prev));
    }, 550);

    const finishTimer = setTimeout(() => {
      onComplete();
    }, 1750);

    return () => {
      clearInterval(stepTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  const CurrentIcon = STEPS[stepIndex].icon;

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-6 max-w-md mx-auto relative bg-gradient-to-b from-indigo-50/80 via-white to-slate-50 text-center">
      {/* 펄스 애니메이션 링 */}
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-indigo-400/20 animate-ping" />
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white shadow-xl shadow-indigo-500/30 relative">
          <CurrentIcon className="w-10 h-10 animate-bounce" />
        </div>
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
        <Sparkles className="w-3.5 h-3.5" />
        <span>성향 분석 중</span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 tracking-tight transition-all duration-300">
        {STEPS[stepIndex].text}
      </h3>

      <p className="text-xs text-slate-600 mt-2">
        잠시만 기다려주세요. 나만의 공부 DNA 결과가 곧 공개됩니다!
      </p>

      {/* 로딩 바 */}
      <div className="w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden mt-8">
        <div className="h-full bg-indigo-600 rounded-full animate-pulse w-full" />
      </div>
    </div>
  );
}
