interface IconBUttonProps {
  alt: string;
  iconPath: string;
  // onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function IconButton({
  alt,
  iconPath,
  onClick,
}: IconBUttonProps) {
  return (
    <button onClick={onClick}>
      <img src={iconPath} alt={alt} />
    </button>
  );
}
