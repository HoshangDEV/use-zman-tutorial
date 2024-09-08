import "./App.css";
import { useZman } from "use-zman";
import { SocialIcons, CodeBlock } from "./extra";

function App() {
  const { texts, setZman, currentZman } = useZman();

  return (
    <div>
      {/* ignore 👇 */}
      <CodeBlock />
      {/* ignore ☝️ */}

      <h1>{texts.hello}</h1>
      <p>{texts.content}</p>

      {/* ignore 👇 */}
      <p style={{ direction: currentZman === "ku" ? "rtl" : "ltr" }}>
        {texts.selectedZman} {currentZman}
      </p>
      {/* ignore 👆 */}

      <button onClick={() => setZman("en")}>English</button>
      <button onClick={() => setZman("ku")}>کوردی</button>

      {/* ignore 👇 */}
      <SocialIcons />
      {/* ignore ☝️ */}
    </div>
  );
}

export default App;
