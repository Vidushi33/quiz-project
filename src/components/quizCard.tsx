import { FaClock, FaQuestionCircle } from "react-icons/fa";

interface IProps {
  image: any;
  title: string;
  totalQuestions: number;
  totalTime: string;
}

export default function QuizCard({
  image,
  title,
  totalQuestions,
  totalTime,
}: IProps) {

    console.log(image)
  return (
    <div className="relative group rounded-lg overflow-hidden shadow-md cursor-pointer transform hover:scale-105 transition-all duration-500 bg-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FCE4EC] via-white to-[#FCE4EC] opacity-70 z-0"></div>

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover  transition-transform duration-500 z-10 relative"
      />

      {/* Content */}
      <div className="p-5 relative z-10">
        <h3 className="text-2xl font-bold text-[#D55A96] mb-3">{title}</h3>
        <div className="flex items-center justify-between text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <FaQuestionCircle className="text-[#D55A96]" />
            <span>{totalQuestions} Questions</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-[#D55A96]" />
            <span>{totalTime} min</span>
          </div>
        </div>
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-[#D55A96] opacity-0 group-hover:opacity-10 transition duration-500 rounded-lg"></div>
    </div>
  );
}
