
import './App.css';
import List from './list'

function App() {
    const dataItems = [
        {word: "bluejay", color: "red"},
        {word: "Orinoco", color: "green"},
        {word: "politico", color: "whitesmoke"},
        {word: "night", color: "goldenrod"},
        {word: "purple", color: "yellow"},
        {word: "pinto", color: "skyblue"},
        {word: "19", color: "darkred"},
        {word: "Allegheny", color: "chocolate"},
        {word: "Mercedes", color: "darkslategrey"},
        {word: "WILL", color: "darkred"},
        {word: "dreams", color: "whitesmoke"},
        {word: "faith", color: "black"},
        {word: "blue", color: "darkred"}]
  return (
    <div className="App">

          <List items={dataItems} />

    </div>
  );
}

export default App;
