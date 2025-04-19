import FadeLoader from "react-spinners/FadeLoader";

const Spinner = () => {
  return (
    <>
      <div
        style={{
          height: "450px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: "0.7",
        }}
        className="sweet-loading"
      >
        <FadeLoader
          cssOverride={{ display: "block", margin: "2px" }}
          color="#198754"
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
};

export default Spinner;
