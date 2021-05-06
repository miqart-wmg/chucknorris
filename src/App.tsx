import {useEffect} from "react";
import {dispatch} from "./store";
import {fetchJokes} from "./store/reducers/general";

function App() {
    useEffect(() => {
        dispatch(fetchJokes())
    }, [])
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
