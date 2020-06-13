import React, { useState } from 'react';
import './App.css';

function App() {

  const [playing, setPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const [bpm, setBpm] = useState(100);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);

  this.handleBpmChange = event => {
    setBpm({ bpm })
  }

  return (
    <div className="metronome">
      <div className="bpm-slider">
        <div>{bpm} BPM</div>
        <input type="range" min="60" max="240" value={bpm} onChange={this.handleBpmChange}/>
      </div>
      <button>{playing ? 'Stop' : 'Start'}</button>
    </div>
  );
}

export default App;