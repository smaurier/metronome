import React, { useState } from 'react';
import './App.css';
import sound1 from './sound/beat1.wav';
import sound2 from './sound/beat2.wav';

function App() {

  const beat1 = new Audio(sound1);
  const beat2 = new Audio(sound2);

  const [playing, setPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const [bpm, setBpm] = useState(100);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);

  let timer = null

  const handleBPM = event => {
    setBpm(event.target.value);
  };

  const playClick = () => {
    // Change le son du premier beat
    if (count % beatsPerMeasure === 0) {
      beat2.play();
    } else {
      beat1.play();
    }
    setCount(count+1)
    console.log("count", count);
  };

  const startStop = () => {
    if (playing) {
      // Timer stop
      clearInterval(timer);
      setPlaying(false)
    } else {
      // Timer Start
      timer = setInterval(
        playClick,
        (60 / bpm) * 1000
      );
      setPlaying(true)
    }
  };

  return (
    <div className="metronome">
      <div className="bpm-slider">
        <div>{bpm} BPM</div>
        <input type="range" min="60" max="240" defaultValue={bpm} onMouseUp={handleBPM} />
      </div>
      <button onClick={startStop}>{playing ? 'Stop' : 'Start'}</button>
    </div>
  );
}

export default App;