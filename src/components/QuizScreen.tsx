'use client';

import React, { useState } from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Question, OptionId } from '@/types/quiz';

interface QuizScreenProps {
  questions: Question[];
  currentIndex: number;
  selectedOption: OptionId | null;
  onSelectOption: (optionId: OptionId) => void;
  onPrev: () => void;
}

export default function QuizScreen({
  questions,
  currentIndex,
  selectedOption,
  onSelectOption,
  onPrev,
}: QuizScreenProps) {
  const currentQuestion = questions[currentIndex];
  const total = questions.length;
  const progressPercent = Math.round(((currentIndex + 1) / total) * 100);
  const [clickedOption, setClickedOption] = useState<OptionId | null>(null);

  const handleSelect = (optionId: OptionId) => {
    setClickedOption(optionId);
    onSelectOption(optionId);
    setTimeout(() => {
      setClickedOption(null);
    }, 250);
  };

  return (
    <div className="flex flex-col min-h-screen justify-between p-5 sm:p-6 max-w-md mx-auto relative bg-gradient-to-b from-indigo-50/50 via-white to-slate-50">
      {/* 상단 네비게이션 & 프로그레스 바 */}
      <div className="pt-1">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className={`p-2 rounded-xl transition-all ${
              currentIndex === 0
                ? 'opacity-0 pointer-events-none'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white active:scale-95 border border-slate-200/60 shadow-xs'
            }`}
            aria-label="이전 질문"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold text-indigo-700">
            <Sparkles className="w-3 h-3 text-indigo-500" />
            <span>
              Q.{currentIndex + 1} <span className="text-indigo-600 font-normal">/ {total}</span>
            </span>
          </div>

          <div className="text-xs font-bold text-slate-600 w-8 text-right">
            {progressPercent}%
          </div>
        </div>

        {/* 게이지 바 */}
        <div className="w-full h-2.5 bg-slate-200/70 rounded-full overflow-hidden p-0.5 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out shadow-xs"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* 질문 본문 영역 */}
      <div className="my-auto py-4 sm:py-6">
        <div className="inline-block px-2.5 py-1 rounded-lg bg-indigo-100/70 text-indigo-700 text-[11px] font-semibold mb-2">
          {currentQuestion.category}
        </div>

        <div className="text-3xl mb-2">{currentQuestion.emoji}</div>

        <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug break-keep">
          {currentQuestion.question}
        </h2>
      </div>

      {/* 4지선다 (A, B, C, D) 선택지 카드 영역 */}
      <div className="space-y-2.5 pb-4">
        {currentQuestion.options.map((option) => {
          const isSelected = (clickedOption || selectedOption) === option.id;

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              id={`option-${option.id.toLowerCase()}`}
              className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-150 relative cursor-pointer group active:scale-[0.98] ${
                isSelected
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-500/25'
                  : 'bg-white border-slate-200/90 hover:border-indigo-300 text-slate-800 shadow-xs hover:shadow-sm'
              }`}
            >
              <div className="flex items-start gap-2.5">
                <span
                  className={`flex items-center justify-center w-6 h-6 rounded-lg text-xs font-bold shrink-0 transition-colors mt-0.5 ${
                    isSelected
                      ? 'bg-white text-indigo-700'
                      : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100'
                  }`}
                >
                  {option.id}
                </span>

                <div className="flex-1 min-w-0">
                  <p
                    className={`text-xs sm:text-sm font-semibold leading-snug break-keep ${
                      isSelected ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {option.text}
                  </p>
                  {option.subText && (
                    <p
                      className={`text-[11px] mt-0.5 leading-tight truncate ${
                        isSelected ? 'text-indigo-100' : 'text-slate-600'
                      }`}
                    >
                      {option.subText}
                    </p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
