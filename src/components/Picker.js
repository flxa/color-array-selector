import { CirclePicker } from "react-color";

const Picker = ({ onChange }) => (
  <>
    <h2>Select Your Colours</h2>
    <div className="picker-container">
      <CirclePicker onChange={onChange} />
    </div>
  </>
);

export default Picker;
