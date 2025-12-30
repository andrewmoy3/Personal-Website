const PageChanger = ({ prev, setPageState, numPages, up = true }) => {
  function nextPage() {
    console.log("num pages: " + numPages);
    console.log(up ? Math.min(0 + 1, numPages - 1) : Math.max(0 - 1, 0));
    setPageState((prev) => {
      return up ? Math.min(prev + 1, numPages - 1) : Math.max(prev - 1, 0);
    });
  }

  return <button onClick={nextPage}>Next</button>;
};

export default PageChanger;
