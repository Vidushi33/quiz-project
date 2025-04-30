import { createFileRoute } from "@tanstack/react-router";
import QuizCard from "../components/quizCard";
import { QUIZ_DATA } from "../utils/constants";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-[#FCE4EC]  py-10 px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
      {QUIZ_DATA.map((quiz, index) => (
        <QuizCard
          key={index}
          image={quiz.image}
          title={quiz.title}
          totalQuestions={quiz.totalQuestions}
          totalTime={quiz.totalTime}
        />
      ))}
    </div>
  );
}
