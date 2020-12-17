const TitlePage = ({ title, subtitle, className }) => {
  return (
    <div className={`${className && className}`}>
      <h2 className="text-3xl text-cyan-500 font-bold tracking-wider">
        {title}
      </h2>
      <p className="text-gray-500 text-lg dark:text-gray-400">{subtitle}</p>
    </div>
  );
};

TitlePage.defaultProps = {
  className: "mt-20 mb-10",
};
export default TitlePage;
