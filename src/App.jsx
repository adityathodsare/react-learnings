// to import chat app to App.jsx
import Chat from "./chat";

function App() {
  const name = "aditya";
  return (
    <>
      <Chat />
      <h1>we have successfully returned chat {name} </h1>
      <h2></h2>
    </>
  );
}

export default App;
