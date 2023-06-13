interface Props {
  content: string;
  className: string;
}

const Title = ({ content, className }: Props) => {
  return <h2 className={className}>{content}</h2>;
};

export default Title;
