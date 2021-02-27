import { useState } from "react";
import { CirclePicker } from "react-color";
import { ReactComponent as Flower } from "./flower.svg";
import "./styles.css";

const Preview = ({ colors, onReset }) => {
  let index = 0;
  return (
    <div class="preview">
      <div className="heading--toolbar">
        <h2 className="heading">Colors</h2>
        <button className="button--reset" onClick={onReset}>
          Reset
        </button>
      </div>
      <div className="preview-area">
        {colors?.map((color) => (
          <Flower
            className="doily"
            key={index++}
            style={{
              color: color,
              left: `${index * 2}0px`,
              transform: `rotate(${index * 20}deg)`
              // scale(-${1 / index})
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [colors, setColors] = useState([]);
  const handleChange = (color) => {
    setColors([...colors, color.hex]);
  };
  return (
    <div className="App">
      <h1>Select Color</h1>
      <div className="picker-container">
        <CirclePicker onChange={handleChange} />
      </div>
      <Preview colors={colors} onReset={() => setColors([])} />
    </div>
  );
}
