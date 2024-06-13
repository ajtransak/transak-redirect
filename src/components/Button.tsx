type Props = {
  hrefURL?: string;
  text: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  onClick?: () => void;
};

function Button({ hrefURL, text, target = "_blank", onClick }: Props) {
  return (
    <a
      href={hrefURL}
      target={target || "_blank"}
      rel="noopener noreferrer"
      className="transak"
      onClick={onClick}
    >
      {text}
    </a>
  );
}

export default Button;
