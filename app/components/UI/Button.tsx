import Link from "next/link";

type ButtonProps = {
  text: string;
  disabled?: boolean;
  classNames?: string;
  outline?: boolean;
  buttonType: "button" | "submit" | "reset";
  to?: string;
  onClick?: () => void;
};

const Button = ({
  text,
  disabled,
  buttonType,
  outline,
  classNames,
  to,
  onClick
}: ButtonProps) => {
  if (outline) {
    return (
      <button
        type={buttonType}
        onClick={onClick}
        className={`border border-primary px-10 py-5 text-primary hover:text-white bg-transparent rounded-md hover:bg-primary ${classNames}`}
      >
        {text}
      </button>
    );
  };

  if (to) {
    return (
      <Link
        href={to}
        className={`bg-primary rounded-md p-5 text-center text-white ${classNames}`}
      >
        {text}
      </Link>
    );
  };

  return (
    <button
      type={buttonType}
      className={`bg-primary rounded-md px-10 py-5 text-white ${classNames}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  buttonType: "button",
};

export default Button;
