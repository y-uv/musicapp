import React, { useState, useEffect } from "react";
import * as Tone from "tone";
import "./App.css";

function App() {
  const [synth, setSynth] = useState(null);

  const handlePlayNote = (note) => {
    // Create a new synth instance and start the AudioContext
    if (!synth) {
      Tone.start();
      const newSynth = new Tone.PolySynth().toDestination();
      setSynth(newSynth);
    }

    switch (note) {
      case "A":
        synth.triggerAttackRelease("C4", "32n");
        break;
      case "W":
        synth.triggerAttackRelease("C#4", "32n");
        break;
      case "S":
        synth.triggerAttackRelease("D4", "32n");
        break;
      case "E":
        synth.triggerAttackRelease("D#4", "32n");
        break;
      case "D":
        synth.triggerAttackRelease("E4", "32n");
        break;
      case "F":
        synth.triggerAttackRelease("F4", "32n");
        break;
      case "T":
        synth.triggerAttackRelease("F#4", "32n");
        break;
      case "G":
        synth.triggerAttackRelease("G4", "32n");
        break;
      case "Y":
        synth.triggerAttackRelease("G#4", "32n");
        break;
      case "H":
        synth.triggerAttackRelease("A4", "32n");
        break;
      case "U":
        synth.triggerAttackRelease("A#4", "32n");
        break;
      case "J":
        synth.triggerAttackRelease("B4", "32n");
        break;
      case "K":
        synth.triggerAttackRelease("C5", "32n");
        break;
      case "O":
        synth.triggerAttackRelease("C#5", "32n");
        break;
      case "L":
        synth.triggerAttackRelease("D5", "32n");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.code) {
        case "KeyA":
          handlePlayNote("A");
          break;
        case "KeyW":
          handlePlayNote("W");
          break;
        case "KeyS":
          handlePlayNote("S");
          break;
        case "KeyE":
          handlePlayNote("E");
          break;
        case "KeyD":
          handlePlayNote("D");
          break;
        case "KeyF":
          handlePlayNote("F");
          break;
        case "KeyT":
          handlePlayNote("T");
          break;
        case "KeyG":
          handlePlayNote("G");
          break;
        case "KeyY":
          handlePlayNote("Y");
          break;
        case "KeyH":
          handlePlayNote("H");
          break;
        case "KeyU":
          handlePlayNote("U");
          break;
        case "KeyJ":
          handlePlayNote("J");
          break;
        case "KeyK":
          handlePlayNote("K");
          break;
        case "KeyO":
          handlePlayNote("O");
          break;
        case "KeyL":
          handlePlayNote("L");
          break;
        default:
          break;
      }
    };

    const handleKeyUp = () => {
      // Release the note when the key is released
      synth?.triggerRelease();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [synth]);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container" />
        <h1 className="text-center text-5xl text-white font-mono font-bold tracking-widest">
          Yuval's piano
        </h1>
        <div className="container" />
        <div className="container" />
        <div className="keyboard flex justify-center">
          <div className="key-white" onClick={() => handlePlayNote("A")}>
            <span className="label">A</span>
          </div>
          <div className="key-black" onClick={() => handlePlayNote("W")}>
            <span className="label">W</span>
          </div>
          <div className="key-white" onClick={() => handlePlayNote("S")}>
            <span className="label">S</span>
          </div>
          <div className="key-black" onClick={() => handlePlayNote("E")}>
            <span className="label">E</span>
          </div>
          <div
            className="key-white"
            onClick={() => handlePlayNote("D")}
            style={{ marginRight: "25px" }}
          >
            <span className="label">D</span>
          </div>
          <div className="key-white" onClick={() => handlePlayNote("F")}>
            <span className="label">F</span>
          </div>
          <div className="key-black" onClick={() => handlePlayNote("T")}>
            <span className="label">T</span>
          </div>
          <div className="key-white" onClick={() => handlePlayNote("G")}>
            <span className="label">G</span>
          </div>
          <div className="key-black" onClick={() => handlePlayNote("Y")}>
            <span className="label">Y</span>
          </div>
          <div className="key-white" onClick={() => handlePlayNote("H")}>
            <span className="label">H</span>
          </div>
          <div className="key-black" onClick={() => handlePlayNote("U")}>
            <span className="label">U</span>
          </div>
          <div
            className="key-white"
            onClick={() => handlePlayNote("J")}
            style={{ marginRight: "25px" }}
          >
            <span className="label">J</span>
          </div>
          <div className="key-white" onClick={() => handlePlayNote("K")}>
            <span className="label">K</span>
          </div>
          <div className="key-black" onClick={() => handlePlayNote("O")}>
            <span className="label">O</span>
          </div>
          <div className="key-white" onClick={() => handlePlayNote("L")}>
            <span className="label">L</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
