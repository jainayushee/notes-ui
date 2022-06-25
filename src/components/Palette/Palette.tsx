import React, { useEffect, useState } from "react";
import { NoteDataService } from "../../Services/notes";
import './Palette.css'

export default function Palette(props: any) {
  const colors1 = ["#cdb4db", "#ffc8dd", "#ffafcc"];
  const colors2 = ["#bde0fe", "#a2d2ff", "#2a9d8f"];
  const [showPalette, setPalette] = useState(false);

  const handleClick = (e: any) => {
    NoteDataService.updateColor(props.note, e.target.id);
    props.setFlag(!props.flag)
  };

  const setView = () => {
    setPalette(true)
  }

  const unsetView = () => {
    setPalette(false)
  }

  return (
    <>
        <div className="palette"
         >
          {(props.palette || showPalette ) && <>
          <div className="palette-row">
            {colors1.map((color, key) => {
              return (
                <div className="palette-col" key={key}>
                  <div
                    className="palette-btn"
                    style={{ background: color }}
                    key={color}
                    id={color}
                    onClick={handleClick}
                  ></div>
                </div>

              );
            })}</div>
          <div className="palette-row mt-2">
            {colors2.map((color, key) => {
              return (
                <div className="palette-col" key={key}>
                  <div
                    className="palette-btn"
                    style={{ background: color }}
                    key={color}
                    id={color}
                    onClick={handleClick}
                  ></div>
                </div>

              );
            })}</div></>}
        </div>
    </>
  );

}
