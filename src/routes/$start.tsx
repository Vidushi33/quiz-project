import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/$start")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FCE4EC] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#D55A96] text-center mb-6">
          Science Wonders
        </h1>

        <ul className="space-y-4 text-gray-700 text-lg">
          <li>
            <strong>Total Questions:</strong> 10
          </li>
          <li>
            <strong>Total Time:</strong> 50 min
          </li>
          <li>
            <strong>Mode:</strong> Must be completed in one go.
          </li>
          <li>
            <strong>Marking:</strong> +4 for correct, -1 for wrong answers.
          </li>
          <li>
            <strong>Tab Switching:</strong> Switching tabs will auto-submit.
          </li>
          <li>
            <strong>Review:</strong> No review during quiz.
          </li>
          <li>
            <strong>Internet:</strong> Ensure a stable connection.
          </li>
        </ul>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate({ to: "/quiz" })}
            className="bg-[#D55A96] hover:bg-pink-700 text-white px-6 py-3 rounded-full text-lg transition-transform hover:scale-105"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
