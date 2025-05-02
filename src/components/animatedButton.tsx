import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { JSX } from "react";

type BaseProps = {
  onClick?: () => void;
  text: string;
  className?: string;
  disabled?: boolean;
};

type IProps =
  | (BaseProps & {
      icon?: never;
      iconSide?: never;
    })
  | (BaseProps & {
      icon: JSX.Element;
      iconSide: "prefix" | "suffix";
    });

const AnimatedButton: React.FC<IProps> = ({
  className,
  iconSide,
  onClick,
  text,
  icon,
  disabled,
  ...props
}: IProps) => {
  const isNext = text === "Next";
  const isPrevious = text === "Previous";

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      {...props}
      className={`${className} ${
        disabled
          ? "bg-gray-700 text-gray-400 border-gray-600 !cursor-not-allowed opacity-60"
          : "bg-secondary text-black border-pink-300 hover:bg-pink-500 active:bg-pink-600 active:scale-95 cursor-pointer"
      } group relative flex items-center px-8 py-1 border-2 rounded-md overflow-hidden font-dm-sans font-semibold text-sm tracking-wide transition-all duration-500 transform`}
    >
      {iconSide === "prefix" && icon && (
        <div className="inline-block pr-1 text-base">{icon}</div>
      )}

      <div className="group inline-block justify-center items-center align-middle">
        {text.split("").map((char, index) => (
          <span key={index} className="inline-block relative">
            <span
              className="inline-block transition-transform group-hover:-translate-y-6 duration-200 transform"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              {char === " " ? (
                <div className="inline-block px-0.5">{char}</div>
              ) : (
                <div>
                  <div
                    className="inline-block transition-transform group-hover:-translate-y-6 duration-200 transform"
                    style={{ transitionDelay: `${index * 40}ms` }}
                  >
                    {char}
                  </div>
                </div>
              )}
            </span>
            {!isNext && !isPrevious && (
              <span
                className="inline-block absolute transition-transform translate-y-full group-hover:translate-y-[0px] duration-200 transform"
                style={{ left: 0, transitionDelay: `${index * 40}ms` }}
              >
                {char}
              </span>
            )}
          </span>
        ))}
      </div>

      {iconSide === "suffix" && icon && (
        <div className="inline-block pl-1 text-base">{icon}</div>
      )}

      {(isNext || isPrevious) && (
        <div className="inline-block left-0 absolute place-content-center place-items-center w-full text-xl scale-200 transition-transform translate-y-8 group-hover:translate-y-0 duration-200 transform">
          {isNext ? <IoIosArrowRoundForward /> : <IoIosArrowRoundBack />}
        </div>
      )}
    </button>
  );
};

export default AnimatedButton;
