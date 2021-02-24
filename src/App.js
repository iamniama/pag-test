
import './App.css';
import List from './list'

function App() {
    const dataItems = [
        {word: "bluejay", color: "red"},
        {word: "Orinoco", color: "green"},
        {word: "politico", color: "whitesmoke"},
        {word: "night", color: "lightpurple"},
        {word: "purple", color: "goldenrod"},
        {word: "pinto", color: "skyblue"},
        {word: "19", color: "darkred"},
        {word: "Allegheny", color: "chocolate"}]
  return (
    <div className="App">
      <header className="App-header">
          <List items={dataItems} />
      </header>
    </div>
  );
}

export default App;
