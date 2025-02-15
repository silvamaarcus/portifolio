import { useThemeSwitcher } from "../../stores/useThemeSwitcher";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  className,
  onClick,
  variant = "primary",
}: ButtonProps) => {
  const theme = useThemeSwitcher((state) => state.theme);

  return (
    <button
      className={`${className} ${theme === "dark" ? "text-soft-white" : "text-background"} bg-primary cursor-pointer rounded-md px-4 py-2 font-semibold hover:opacity-80 ${
        variant === "primary"
          ? "bg-gradient-primary transition-all duration-300"
          : "border-gradient-primary border-2 bg-transparent"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
