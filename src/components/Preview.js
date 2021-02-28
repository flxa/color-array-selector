import { ReactComponent as Flower } from "./flower.svg";

const Preview = ({ colors, onReset }) => {
  let index = 0;
  return (
    <div class="preview">
      <div className="heading--toolbar">
        <h2 className="heading">See The Results</h2>
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

export default Preview;
