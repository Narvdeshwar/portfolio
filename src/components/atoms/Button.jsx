export default function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  onClick,
  className = "",
  target,
  rel,
  type = "button",
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-plex-btn transition-colors duration-200 cursor-pointer select-none no-underline border";

  const sizeStyles = {
    default: "h-[41px] px-[35px] rounded-[3px] text-[12px] tracking-[0.84px]",
    sm: "h-[35px] px-[24px] rounded-[2px] text-[11px] tracking-[0.72px]",
  };

  const variantStyles = {
    primary:
      "bg-[#4BE1C4] text-[#000000] border-[#4BE1C4] hover:bg-[#FFFFFF] hover:border-[#FFFFFF] hover:text-[#000000] active:opacity-60",
    secondary:
      "bg-transparent text-[#FFFFFF] border-[#C9C9C9]/30 hover:border-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] active:opacity-60",
    ghost:
      "bg-transparent text-[#FFFFFF] border-transparent hover:text-[#4BE1C4] active:opacity-60",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
