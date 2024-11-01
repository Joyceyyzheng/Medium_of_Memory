import React, { useState } from "react";
// import Draggable from "react-draggable";
import { DndContext, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";


const PhotoComponent = ({imagePath,degree}) => {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);
  const [angle, setAngle] = useState(degree);

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    // Add mousemove and mouseup listeners to the window
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    // Remove the event listeners when dragging ends
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  const handleOpacityChange = (e) => {
    setOpacity(e.target.value);
  };

  const handleScaleChange = (e) => {
    setScale(e.target.value);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: "move",
        textAlign: "center",
        width: `${250 * scale}px`,
      }}
    >
      <img
        src={imagePath}
        alt="placeholder"
        style={{ width: "100%", opacity }}
        draggable="false"
      />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={opacity}
        className="opacity-slider"
        onChange={handleOpacityChange}
        onMouseDown={(e) => e.stopPropagation()}
        style={{  transform: `rotate(${angle}deg)` }}
      />
      <input
        type="range"
        min="0.1"
        max="4"
        step="0.01"
        value={scale}
        className="scale-slider"
        onChange={handleScaleChange}
        onMouseDown={(e) => e.stopPropagation()}
        style={{ transform: `rotate(${angle}deg)` }}
      />
    </div>
  );
};

export default PhotoComponent;
