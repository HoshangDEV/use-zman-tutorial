import "./App.css";
import { useZman } from "use-zman";
import { SocialIcons, CodeBlock } from "./extra";

function App() {
  const { texts, setZman } = useZman();

  return (
    <div>
      {/* ignore 👇 */}
      <CodeBlock />
      {/* ignore ☝️ */}

      <h1>{texts.hello}</h1>
      <p>{texts.content}</p>

      <button onClick={() => setZman("en")}>English</button>
      <button onClick={() => setZman("ku")}>کوردی</button>

      {/* ignore 👇 */}
      <SocialIcons />
      {/* ignore ☝️ */}
    </div>
  );
}

export default App;
