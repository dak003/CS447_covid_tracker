import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="row">
          <div class="column-heatmap" style={{backgroundColor: "#aaa"}}>
            <div id="heatmap"></div>
          </div>
          <div class="column-statistics" style={{backgroundColor: "#4287f5"}}>
            <div id="statistics"></div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
