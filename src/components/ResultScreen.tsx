'use client';

import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import {
  RotateCcw,
  Share2,
  Copy,
  Lightbulb,
  MapPin,
  Headphones,
  HeartHandshake,
  ShieldAlert,
  MessageCircle,
} from 'lucide-react';
import { StudyResult } from '@/types/quiz';
import ShareToast from './ShareToast';

interface ResultScreenProps {
  result: StudyResult;
  onRestart: () => void;
}

export default function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    // 화려한 결과 축하 콘페티 효과
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#a855f7', '#ec4899', '#f59e0b', '#10b981'],
      });
    } catch {
      // canvas-confetti error fallback
    }
  }, []);

  // 링크 복사 핸들러
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setToastMessage('결과 링크가 클립보드에 복사되었습니다! 🎉');
    } catch {
      setToastMessage('링크를 복사했습니다!');
    }
  };

  // 카카오톡 공유 핸들러 (Kakao SDK or Web Share API or 클립보드 복사 폴백)
  const handleKakaoShare = async () => {
    const shareTitle = `[공성태] 나의 공부 성향은 '${result.title}'!`;
    const shareText = `${result.summary}\n\n너의 [공성태] 결과도 지금 바로 확인해봐!`;
    const shareUrl = window.location.href;

    // 모바일 브라우저의 Web Share API 지원 시 바로 공유 시트 띄우기 (카카오톡 포함 모든 앱 선택 가능)
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: `${shareTitle}\n${shareText}`,
          url: shareUrl,
        });
        setToastMessage('공유창이 열렸습니다!');
        return;
      } catch (err) {
        // 사용자가 취소한 경우는 무시, 에러일 경우 클립보드 복사로 폴백
        if ((err as Error).name === 'AbortError') return;
      }
    }

    // fallback: 카카오톡 공유용 텍스트 복사 안내
    try {
      await navigator.clipboard.writeText(`${shareTitle}\n${shareUrl}`);
      setToastMessage('카카오톡에 바로 공유할 수 있도록 링크를 복사했어요!');
    } catch {
      setToastMessage('링크가 복사되었습니다!');
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-6 max-w-md mx-auto relative bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 text-slate-800">
      {toastMessage && (
        <ShareToast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}

      {/* 상단 결과 헤더 카드 */}
      <div className="pt-2 pb-4 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-semibold tracking-wider mb-3 shadow-xs">
          MY STUDY TYPE
        </span>

        <p className="text-xs font-semibold text-slate-600 mb-1">
          {result.badge}
        </p>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-1">
          {result.title}
        </h1>

        <p className="text-xs font-mono text-slate-600">
          {result.subtitle}
        </p>

        {/* 대형 이모지 뱃지 */}
        <div className="my-5 flex justify-center">
          <div
            className={`w-28 h-28 rounded-3xl bg-gradient-to-tr ${result.gradient} flex items-center justify-center text-5xl shadow-xl shadow-indigo-500/20 ring-4 ring-white animate-scale-up`}
          >
            {result.emoji}
          </div>
        </div>

        {/* 해시태그 뱃지 목록 */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2">
          {result.traits.map((trait, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-xl bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>

      {/* 성향 상세 요약 카드 */}
      <div className="my-3 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-indigo-600" />
          한 줄로 보는 나의 공부 DNA
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed break-keep">
          {result.summary}
        </p>
      </div>

      {/* 맞춤 꿀팁 3선 */}
      <div className="my-3 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5">
          <Lightbulb className="w-4 h-4 text-amber-500" />
          {result.title}를 위한 실전 꿀팁
        </h3>

        <div className="space-y-3">
          {result.tips.map((tip, index) => (
            <div key={index} className="flex items-start gap-2.5 text-left">
              <span className="flex items-center justify-center w-5 h-5 rounded-lg bg-indigo-50 text-indigo-700 text-[11px] font-bold shrink-0 mt-0.5">
                {index + 1}
              </span>
              <div>
                <div className="text-xs font-bold text-slate-800">{tip.title}</div>
                <div className="text-[11px] text-slate-600 mt-0.5 leading-relaxed break-keep">
                  {tip.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 스터디 파트너 궁합 */}
      <div className="my-3 grid grid-cols-2 gap-2.5">
        {/* 찰떡 궁합 */}
        <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/70 text-left">
          <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-800 mb-1">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
            <span>찰떡 궁합 파트너</span>
          </div>
          <div className="flex items-center gap-1.5 my-1">
            <span className="text-xl">{result.bestPartner.emoji}</span>
            <span className="text-xs font-bold text-slate-800">
              {result.bestPartner.name}
            </span>
          </div>
          <p className="text-[11px] text-slate-600 leading-tight mt-1 line-clamp-3">
            {result.bestPartner.reason}
          </p>
        </div>

        {/* 상극 궁합 */}
        <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200/70 text-left">
          <div className="flex items-center gap-1 text-[11px] font-bold text-rose-800 mb-1">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
            <span>주의할 상극 파트너</span>
          </div>
          <div className="flex items-center gap-1.5 my-1">
            <span className="text-xl">{result.worstPartner.emoji}</span>
            <span className="text-xs font-bold text-slate-800">
              {result.worstPartner.name}
            </span>
          </div>
          <p className="text-[11px] text-slate-600 leading-tight mt-1 line-clamp-3">
            {result.worstPartner.reason}
          </p>
        </div>
      </div>

      {/* 추천 공부 환경 & BGM */}
      <div className="my-3 p-4 rounded-2xl bg-slate-100/70 border border-slate-200/60 space-y-2 text-left">
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-bold text-slate-800">추천 공부 장소: </span>
            <span className="text-slate-600">{result.studySpot}</span>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Headphones className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-bold text-slate-800">추천 집중 사운드: </span>
            <span className="text-slate-600">{result.bgmRecommendation}</span>
          </div>
        </div>
      </div>

      {/* 하단 공유 & 재시작 액션 버튼 */}
      <div className="mt-6 mb-4 space-y-2.5">
        {/* 카카오톡 공유 버튼 (카카오 고유 옐로우 컬러 #FEE500) */}
        <button
          onClick={handleKakaoShare}
          id="kakao-share-button"
          className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-sm shadow-md active:scale-[0.98] transition-all cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-[#191919]" />
          <span>카카오톡으로 결과 공유하기</span>
        </button>

        {/* 링크 복사하기 & 다시하기 */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleCopyLink}
            id="copy-link-button"
            className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-2xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs active:scale-[0.98] transition-all cursor-pointer shadow-xs"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>링크 복사</span>
          </button>

          <button
            onClick={onRestart}
            id="restart-test-button"
            className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-2xl bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 text-indigo-700 font-semibold text-xs active:scale-[0.98] transition-all cursor-pointer shadow-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>다시 테스트하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}
