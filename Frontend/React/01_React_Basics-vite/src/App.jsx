import MyName from "./MyName.jsx";

// Empty HTML tags are fragments, Components can only return 1 Fragment. Multiple elements within that fragment does not matter until and unless the elements exist outside of the fragment independently !
function App() {
  return (
    <>
      <MyName />
      <h1>An H1 !</h1>
    </>
  );
}

export default App;
