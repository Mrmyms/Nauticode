"use client";

import { useState, useTransition } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";
import { useAudio, useWindowSize, useMount } from "react-use";
import { toast } from "sonner";

import { upsertChallengeProgress } from "@/actions/challenge-progress";
import { reduceHearts } from "@/actions/user-progress";
import { MAX_HEARTS } from "@/constants";
import { challengeOptions, challenges, userSubscription } from "@/db/schema";
import { useHeartsModal } from "@/store/use-hearts-modal";
import { usePracticeModal } from "@/store/use-practice-modal";

import { Challenge } from "./challenge";
import { Footer } from "./footer";
import { Header } from "./header";
import { QuestionBubble } from "./question-bubble";
import { ResultCard } from "./result-card";
import { TheoryCard } from "./theory-card";
import { CodeFillCard } from "./code-fill-card";
import { CodeTestCard } from "./code-test-card";
import { DebugCard } from "./debug-card";
import { CodeOrderCard } from "./code-order-card";
import { CodeWriteCard } from "./code-write-card";
import { PredictOutputCard } from "./predict-output-card";
import { MatchingCard } from "./matching-card";

type QuizProps = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  userSubscription:
    | (typeof userSubscription.$inferSelect & {
        isActive: boolean;
      })
    | null;
};

export const Quiz = ({
  initialPercentage,
  initialHearts,
  initialLessonId,
  initialLessonChallenges,
  userSubscription,
}: QuizProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [correctAudio, _c, correctControls] = useAudio({ src: "/correct.wav" });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [incorrectAudio, _i, incorrectControls] = useAudio({
    src: "/incorrect.wav",
  });
  const [finishAudio] = useAudio({
    src: "/finish.mp3",
    autoPlay: true,
  });
  const { width, height } = useWindowSize();

  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const { open: openHeartsModal } = useHeartsModal();
  const { open: openPracticeModal } = usePracticeModal();

  useMount(() => {
    if (initialPercentage === 100) openPracticeModal();
  });

  const [lessonId] = useState(initialLessonId);
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(() => {
    return initialPercentage === 100 ? 0 : initialPercentage;
  });
  const [challenges] = useState(initialLessonChallenges);
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex(
      (challenge) => !challenge.completed
    );

    return uncompletedIndex === -1 ? 0 : uncompletedIndex;
  });

  const [selectedOption, setSelectedOption] = useState<number>();
  const [status, setStatus] = useState<"none" | "wrong" | "correct">("none");

  const challenge = challenges[activeIndex];
  const options = challenge?.challengeOptions ?? [];

  const onNext = () => {
    setActiveIndex((current) => current + 1);
  };

  const onSelect = (id: number | undefined) => {
    if (status !== "none") return;

    setSelectedOption(id);
  };

  const onContinue = () => {
    if (!selectedOption) return;

    if (status === "wrong") {
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }

    if (status === "correct") {
      onNext();
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }

    const correctOption = options.find((option) => option.correct);

    if (!correctOption) return;

    if (correctOption.id === selectedOption) {
      startTransition(() => {
        upsertChallengeProgress(challenge.id)
          .then((response) => {
            if (response?.error === "hearts") {
              openHeartsModal();
              return;
            }

            void correctControls.play();
            setStatus("correct");
            setPercentage((prev) => prev + 100 / challenges.length);

            // This is a practice
            if (initialPercentage === 100) {
              setHearts((prev) => Math.min(prev + 1, MAX_HEARTS));
            }
          })
          .catch(() => toast.error("Something went wrong. Please try again."));
      });
    } else {
      startTransition(() => {
        reduceHearts(challenge.id)
          .then((response) => {
            if (response?.error === "hearts") {
              openHeartsModal();
              return;
            }

            void incorrectControls.play();
            setStatus("wrong");

            if (!response?.error) setHearts((prev) => Math.max(prev - 1, 0));
          })
          .catch(() => toast.error("Something went wrong. Please try again."));
      });
    }
  };

  if (!challenge) {
    return (
      <>
        {finishAudio}
        {incorrectAudio}
        {correctAudio}
        <Confetti
          recycle={false}
          numberOfPieces={500}
          tweenDuration={10_000}
          width={width}
          height={height}
        />
        <div className="mx-auto flex h-full max-w-lg flex-col items-center justify-center gap-y-4 text-center lg:gap-y-8">
          <Image
            src="/finish.svg"
            alt="Finish"
            className="hidden lg:block"
            height={100}
            width={100}
          />

          <Image
            src="/finish.svg"
            alt="Finish"
            className="block lg:hidden"
            height={100}
            width={100}
          />

          <h1 className="text-lg font-bold text-neutral-700 lg:text-3xl">
            Great job! <br /> You&apos;ve completed the lesson.
          </h1>

          <div className="flex w-full items-center gap-x-4">
            <ResultCard variant="points" value={challenges.length * 10} />
            <ResultCard
              variant="hearts"
              value={userSubscription?.isActive ? Infinity : hearts}
            />
          </div>
        </div>

        <Footer
          lessonId={lessonId}
          status="completed"
          onCheck={() => router.push("/learn")}
        />
      </>
    );
  }

  const title =
    challenge.type === "ASSIST"
      ? "Select the correct meaning"
      : challenge.question;

  return (
    <>
      {incorrectAudio}
      {correctAudio}
      {finishAudio}
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />

      <div className="flex-1 flex flex-col lg:flex-row h-full overflow-hidden w-full max-w-[1200px] mx-auto">
        {challenge.lessonText && (
          <div className="lg:w-1/3 lg:border-r-2 border-b-2 lg:border-b-0 border-slate-800 p-6 overflow-y-auto bg-slate-900/30">
            <h2 className="text-2xl font-bold text-white mb-6">Instructions</h2>
            <div className="prose prose-invert">
              {challenge.lessonText.split("\n").map((line, i) => {
                if (line.startsWith("# ")) return <h1 key={i} className="text-2xl font-bold mt-4 mb-2 text-white">{line.replace("# ", "")}</h1>;
                if (line.startsWith("## ")) return <h2 key={i} className="text-xl font-bold mt-4 mb-2 text-slate-200">{line.replace("## ", "")}</h2>;
                if (line.trim() === "") return <br key={i} />;
                
                // Handle basic markdown for bold and inline code
                const parts = line.split(/(\*\*.*?\*\*|`.*?`)/g);
                return (
                  <p key={i} className="text-base text-slate-300 mb-2 leading-relaxed">
                    {parts.map((part, index) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={index} className="text-white">{part.slice(2, -2)}</strong>;
                      }
                      if (part.startsWith('`') && part.endsWith('`')) {
                        return <code key={index} className="bg-slate-800 text-slate-200 px-1 rounded">{part.slice(1, -1)}</code>;
                      }
                      return part;
                    })}
                  </p>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex-1 flex items-center justify-center p-6 overflow-y-auto">
          <div className="flex w-full flex-col gap-y-12 lg:min-h-[350px] lg:w-[600px]">
            <h1 className="text-center text-lg font-bold text-white lg:text-start lg:text-3xl">
              {title}
            </h1>

            <div>
              {challenge.type === "ASSIST" && (
                <QuestionBubble question={challenge.question} />
              )}

              {(challenge.type === "SELECT" || challenge.type === "ASSIST") && (
                <Challenge
                  options={options}
                  onSelect={onSelect}
                  status={status}
                  selectedOption={selectedOption}
                  disabled={pending}
                  type={challenge.type}
                />
              )}

              {challenge.type === "THEORY" && (
                <TheoryCard
                  question={challenge.question}
                  options={options}
                  onSelect={onSelect}
                  status={status}
                  selectedOption={selectedOption}
                  disabled={pending}
                />
              )}

              {challenge.type === "CODE_FILL" && (
                <CodeFillCard
                  question={challenge.question}
                  codeSnippet={challenge.codeSnippet}
                  options={options}
                  onSelect={onSelect}
                  status={status}
                  selectedOption={selectedOption}
                  disabled={pending}
                />
              )}

              {challenge.type === "CODE_TEST" && (
                <CodeTestCard
                  question={challenge.question}
                  codeSnippet={challenge.codeSnippet}
                  options={options}
                  onSelect={onSelect}
                  status={status}
                  selectedOption={selectedOption}
                  disabled={pending}
                />
              )}

              {challenge.type === "DEBUG" && (
                <DebugCard
                  question={challenge.question}
                  codeSnippet={challenge.codeSnippet}
                  options={options}
                  onSelect={onSelect}
                  status={status}
                  selectedOption={selectedOption}
                  disabled={pending}
                />
              )}

              {challenge.type === "CODE_ORDER" && (
                <CodeOrderCard
                  question={challenge.question}
                  options={options}
                  onSelect={onSelect}
                  status={status}
                  selectedOption={selectedOption}
                  disabled={pending}
                />
              )}

              {challenge.type === "CODE_WRITE" && (
                <CodeWriteCard
                  question={challenge.question}
                  codeSnippet={challenge.codeSnippet}
                  options={options}
                  onSelect={onSelect}
                  status={status}
                  selectedOption={selectedOption}
                  disabled={pending}
                />
              )}

              {challenge.type === "PREDICT_OUTPUT" && (
                <PredictOutputCard
                  question={challenge.question}
                  codeSnippet={challenge.codeSnippet}
                  options={options}
                  onSelect={onSelect}
                  status={status}
                  selectedOption={selectedOption}
                  disabled={pending}
                />
              )}

              {challenge.type === "MATCHING" && (
                <MatchingCard
                  options={options}
                  onSelect={onSelect}
                  status={status}
                  disabled={pending}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer
        disabled={pending || !selectedOption}
        status={status}
        onCheck={onContinue}
      />
    </>
  );
};
