import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './Note.css'
import Palette from "../Palette/Palette";
import { NoteDataService } from "../../Services/notes";
import { log } from "console";

interface INote {
  id: string;
  value: string;
  userid: string;
  archive: boolean;
  bin: boolean;
  pinned: boolean;
  color: string;
}

export default function Note(props: any) {
  const [palette, setPaletteView] = useState(false);

  function showPallete() {
    setPaletteView(true)
  }
  function hidePallete() {
    setPaletteView(false)
  }
  function pinAndUnpinNote() {
    NoteDataService.pinAndUnpinNote(props.data).then(() => {
      props.setFlag(!props.flag);
    });
  }
  function archiveNote() {
    NoteDataService.archiveAndUnarchiveData(props.data).then((result) => {
      props.setFlag(!props.flag);
    });
  }
  function deleteNote() {
    if (props.component === 'bin') {
      NoteDataService.deleteForever(props.data.id).then((res) => {
        props.setFlag(!props.flag);
      });
    }

    else {
      NoteDataService.deleteAndRestoreData(props.data).then((res) => {
        props.setFlag(!props.flag);
      });
    }
  }
  function restore() {
    NoteDataService.deleteAndRestoreData(props.data).then(() => {
      props.setFlag(!props.flag);
    });
  }

  return (

    <div className="card note" style={{ backgroundColor: props.data.color }}>
      <div className="note-body">
        {props.data.value}
      </div>
      <div className="pal">
        {palette && <Palette note={props.data} palette={palette} setFlag={props.setFlag} flag={props.flag} />}
      </div>
      <div className="toolbar">
        <div className="toolbar-group">
          {props.component !== 'bin' && <i className="fa-solid fa-palette pe-3" onClick={() => showPallete()} />}
          {(props.component === 'bin' || props.component === 'archive' || props.component !== 'console') ? undefined : <i className="fa-solid fa-pen pe-3" />}
          <i className="fa-solid fa-trash-can pe-3" onClick={() => deleteNote()} />
          {props.component !== 'bin' && <i className="fa-solid fa-box-archive pe-3" onClick={() => archiveNote()} />}
          {(props.component == 'bin' || props.component == 'archive') ? undefined : < i className="fa-solid fa-thumbtack pe-3" onClick={() => pinAndUnpinNote()} />}
          {props.component === 'bin' && <i className="fa-solid fa-trash-arrow-up" onClick={() => restore()}></i>}
        </div>
      </div>
    </div>
  )
}
