import { useState } from "react";
import Picker from "./components/Picker";
import Preview from "./components/Preview";
import "./styles.css";

export default function App() {
  const [colors, setColors] = useState([]);
  const handleChange = (color) => {
    setColors([...colors, color.hex]);
  };
  return (
    <div className="App">
      <h1>Colour Designer</h1>
      <Picker onChange={handleChange} />
      <Preview colors={colors} onReset={() => setColors([])} />
    </div>
  );
}
