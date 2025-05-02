import { useNavigate } from "@tanstack/react-router";
import AnimatedButton from "./animatedButton";
import { useState } from "react";

interface IProps{
  id:number
}

export default function StartPage({id}:IProps) {
  const navigate = useNavigate();
  
  const [data, setData] = useState([])
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Science Wonders
        </h1>

        <ul className="space-y-4 text-lg">
          <li className="text-primary">
            <strong className="text-active">Total Questions:</strong> 10
          </li>
          <li className="text-primary">
            <strong className="text-active">Total Time:</strong> 50 min
          </li>
          <li className="text-primary">
            <strong className="text-active">Mode:</strong> Must be completed in
            one go.
          </li>
          <li className="text-primary">
            <strong className="text-active">Marking:</strong> +4 for correct, -1
            for wrong answers.
          </li>
          <li className="text-primary">
            <strong className="text-active">Question Switching:</strong>{" "}
            Switching question will auto-submit the current one. You can attempt
            every question only once.
          </li>
          <li className="text-primary">
            <strong className="text-active">Review:</strong> Submitting each
            question will display its answer.
          </li>
          <li className="text-primary">
            <strong className="text-active">Internet:</strong> Ensure a stable
            connection.
          </li>
        </ul>

        <div className="mt-8">
          {/* <button
            onClick={() => navigate({ to: "/quiz" })}
            className="bg-active hover:bg-brand text-white cursor-pointer px-10 py-2 rounded text-lg transition-transform hover:scale-105"
          >
            Start Quiz
          </button> */}
          <AnimatedButton
            text="Start Quiz"
            onClick={() => navigate({ to: "/quiz" })}
          />
        </div>
      </div>
    </div>
  );
}
