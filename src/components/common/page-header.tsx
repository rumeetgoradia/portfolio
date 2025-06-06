const PageHeader: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      <h1 className="text-4xl font-semibold mt-1">{text}</h1>
      <hr className="mt-4 w-10 border-[1px] border-foreground" />
    </div>
  );
};

export default PageHeader;
