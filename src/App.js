import Header from "./components/Header/Header";
import SkipSelector from "./components/SkipSelector/SkipSelector";
import skips from "./sampledata/skips";
import "./styles/styles.scss";

function App() {
  return (
    <>
      <Header />
      <SkipSelector skips={skips} />
    </>
  );
}

export default App;
