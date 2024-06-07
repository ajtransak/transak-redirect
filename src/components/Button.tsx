type Props = {
  hrefURL?: string;
  text: string;
  onClick?: () => void;
};

function Button({ hrefURL, text, onClick }: Props) {
  return (
    <a
      href={hrefURL && hrefURL}
      target="_blank"
      rel="noopener noreferrer"
      className="transak"
      onClick={onClick && onClick}
    >
      {text}
    </a>
  );
}

export default Button;
