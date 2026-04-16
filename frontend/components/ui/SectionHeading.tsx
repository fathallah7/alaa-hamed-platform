type SectionHeadingProps = {
  title: string;
  description: string;
};

const SectionHeading = ({ title, description }: SectionHeadingProps) => {
  return (
    <>
      <h4 className={`text-5xl font-semibold text-center text-primary2`}>
        {title}
      </h4>
      <p className={`text-zinc-700 text-center text-xl`}>{description}</p>
    </>
  );
};

export default SectionHeading;
