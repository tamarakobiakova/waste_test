/*import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
*/
import UpperMenu from "./components/UpperMenu/UpperMenu";
import SkipSelector from "./components/SkipSelector/SkipSelector";
import "./styles/styles.scss";
import skips from "./sampledata/skips";

function App() {
  return (
    <>
      <UpperMenu />
      <SkipSelector skips={skips} />
    </>
  );
  // return <div>Hi1</div>;
}

export default App;
