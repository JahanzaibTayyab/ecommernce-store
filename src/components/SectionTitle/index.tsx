interface Props {
  title: string;
}
const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <h2 className="my-4 md:my-8 lg:mt-10 mx-auto text-3xl">{`${title}`}</h2>
  );
};

export default SectionTitle;
