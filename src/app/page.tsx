'use client';

import React, { useState } from 'react';
import StartScreen from '@/components/StartScreen';
import QuizScreen from '@/components/QuizScreen';
import LoadingScreen from '@/components/LoadingScreen';
import ResultScreen from '@/components/ResultScreen';
import { QUESTIONS } from '@/data/questions';
import { RESULTS } from '@/data/results';
import { StudyType } from '@/types/quiz';

type ScreenStep = 'start' | 'quiz' | 'loading' | 'result';

export default function Home() {
  const [step, setStep] = useState<ScreenStep>('start');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B'>>({});
  const [finalResultType, setFinalResultType] = useState<StudyType>('planner');

  // 테스트 시작
  const handleStart = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setStep('quiz');
  };

  // 점수 집계 및 결과 유형 판별 로직
  const calculateResult = (answers: Record<number, 'A' | 'B'>): StudyType => {
    const scores: Record<StudyType, number> = {
      planner: 0,
      sprinter: 0,
      scholar: 0,
      social: 0,
    };

    QUESTIONS.forEach((q) => {
      const selectedId = answers[q.id];
      if (!selectedId) return;

      const chosenOption = q.options.find((opt) => opt.id === selectedId);
      if (chosenOption && chosenOption.scores) {
        Object.entries(chosenOption.scores).forEach(([type, val]) => {
          scores[type as StudyType] += val ?? 0;
        });
      }
    });

    // 가장 높은 점수의 유형 산출
    let highestType: StudyType = 'planner';
    let maxScore = -1;

    (Object.keys(scores) as StudyType[]).forEach((type) => {
      if (scores[type] > maxScore) {
        maxScore = scores[type];
        highestType = type;
      }
    });

    return highestType;
  };

  // 옵션 선택 시
  const handleSelectOption = (optionId: 'A' | 'B') => {
    const nextAnswers = { ...userAnswers, [QUESTIONS[currentIndex].id]: optionId };
    setUserAnswers(nextAnswers);

    // 마지막 문제일 경우
    if (currentIndex >= QUESTIONS.length - 1) {
      const resultType = calculateResult(nextAnswers);
      setFinalResultType(resultType);
      setTimeout(() => {
        setStep('loading');
      }, 200);
    } else {
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 200);
    }
  };

  // 이전 질문으로 이동
  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // 테스트 다시하기
  const handleRestart = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setStep('start');
  };

  return (
    <main className="min-h-screen bg-slate-900/5 sm:bg-slate-100 flex items-center justify-center p-0 sm:py-8 sm:px-4">
      {/* 모바일 폰 뷰포트 컨테이너 */}
      <div className="w-full max-w-md min-h-screen sm:min-h-[820px] bg-white sm:rounded-3xl sm:shadow-2xl sm:border sm:border-slate-200/80 overflow-hidden flex flex-col relative">
        {step === 'start' && <StartScreen onStart={handleStart} />}

        {step === 'quiz' && (
          <QuizScreen
            questions={QUESTIONS}
            currentIndex={currentIndex}
            selectedOption={userAnswers[QUESTIONS[currentIndex]?.id] || null}
            onSelectOption={handleSelectOption}
            onPrev={handlePrevQuestion}
          />
        )}

        {step === 'loading' && (
          <LoadingScreen onComplete={() => setStep('result')} />
        )}

        {step === 'result' && (
          <ResultScreen
            result={RESULTS[finalResultType]}
            onRestart={handleRestart}
          />
        )}
      </div>
    </main>
  );
}
