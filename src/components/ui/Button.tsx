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
  return (
    <button
      className={`${className} bg-primary cursor-pointer rounded-md px-4 py-2 text-white hover:opacity-80 ${
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
