import { useState, useEffect } from "react"
import "../App.css"

function Spinner({ names }) {
  const [selectedName, setSelectedName] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const spinWheel = () => {
    setSpinning(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * names.length);
      setSelectedName(names[randomIndex]);
      setSpinning(false);
    }, 1000);
  };

  useEffect(() => {
    setSelectedName(null);
  }, [names]);

  const calculatePosition = (index, totalItems) => {
    const angle = (2 * Math.PI * index) / totalItems;
    const radius = 120; // Adjust the radius as needed
    const centerX = 150; // Adjust the center X-coordinate of the circle
    const centerY = 150; // Adjust the center Y-coordinate of the circle

    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    return { x, y };
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <svg className={`spinner ${spinning ? "spinning" : ""}`} viewBox="0 0 300 300" onClick={spinWheel}>
        {names.map((name, index) => {
          const { x, y } = calculatePosition(index, names.length);
          return (
            <text key={index} x={x} y={y} className="name" transform={`rotate(${(360 / names.length) * index}, ${x}, ${y})`}>
              {name}
            </text>
          );
        })}
      </svg>
      <button
        onClick={spinWheel}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        disabled={spinning}
      >
        {spinning ? "Spinning..." : "Spin"}
      </button>
      {selectedName && (
        <div className="mt-4 text-xl font-semibold">
          Selected Name: {selectedName}
        </div>
      )}
    </div>
  );
}

export default Spinner
