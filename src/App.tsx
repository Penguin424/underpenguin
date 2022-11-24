import logo from "./assets/images/logo.png";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${logo})`,
          width: 500,
          height: 500,
          backgroundSize: "cover",
          borderRadius: 10,
        }}
      ></div>

      <h1
        style={{
          fontSize: "3rem",
        }}
      >
        UNDERPENGUIN
      </h1>
    </div>
  );
};

export default App;
