function Home() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem" }}>Welcome to the Home Page</h1>

      <p style={{ fontSize: "2rem" }}>
        Testing the React Router! Click any link in the header and test it!
      </p>

      <img
        src="https://miro.medium.com/v2/resize:fit:572/1*Mo-09Vngs5t_oWGqHZuPtg.png"
        alt="Router"
        srcset=""
        style={{ width: "60%", margin: "0 auto" }}
      />
    </main>
  );
}

export default Home;
