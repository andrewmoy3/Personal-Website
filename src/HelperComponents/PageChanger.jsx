import "./PageChanger.css";

const PageChanger = ({
  PageState,
  setPageState,
  numPages,
  selectedGroup,
  up = true,
}) => {
  function nextPage() {
    setPageState((prev) => {
      return up ? Math.min(prev + 1, numPages - 1) : Math.max(prev - 1, 0);
    });
  }

  const placeholder = up ? PageState >= numPages - 1 : PageState <= 0;

  if (placeholder) {
    return <div className="arrow-placeholder page-changer"></div>;
  }

  return (
    <button
      onClick={nextPage}
      className={`arrow ${up ? "right" : "left"} page-changer`}
    ></button>
  );
};

export default PageChanger;
