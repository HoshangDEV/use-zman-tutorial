import "./App.css";
import { useZman } from "use-zman";

function App() {
  const { texts, setZman } = useZman();

  return (
    <div>
      <h1>{texts.hello}</h1>
      <p>{texts.content}</p>

      <button onClick={() => setZman("en")}>English</button>
      <button onClick={() => setZman("ku")}>کوردی</button>
    </div>
  );
}

export default App;
