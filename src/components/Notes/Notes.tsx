import "bootstrap/dist/css/bootstrap.css";
import "./Notes.css";
import { NoteDataService } from "../../Services/notes";
import { useEffect, useState } from "react";
import Palette from "../Palette/Palette";
import Note from "../Note/Note";

interface INote {
  id: string;
  value: string;
  userid: string;
  archive: boolean;
  bin: boolean;
  pinned: boolean;
  color: string;
}

export default function Notes() {
  const [pinnedData, setPinnedData] = useState<INote[]>([
    {
      id: "",
      value: "",
      userid: "",
      archive: false,
      bin: false,
      pinned: false,
      color: ""
    },
  ]);
  const [unpinnedData, setUnPinnedData] = useState<INote[]>([
    {
      id: "",
      value: "",
      userid: "",
      archive: false,
      bin: false,
      pinned: false,
      color: ""
    },
  ]);

  const [message, setMessage] = useState("");
  const [newVal, updateNote] = useState("");
  const [user, updateUserIDs] = useState({ id: "", userid: "" });
  const [flag, setFlag] = useState(false);
  const [palette, setPaletteView] = useState({ id: "", show: false });

  function showPallete(id: any) {
    setPaletteView({ id: id, show: true })
  }

  function hidePallete(id: any) {
    setPaletteView({ id: id, show: false })
  }



  function handleChange(e: any) {
    setMessage(e.target.value);
  }

  function handleClick() {
    const body = { value: message, userid: "def" };
    NoteDataService.addData(body);
    setFlag(!flag);
  }
  useEffect(() => {
    NoteDataService.getData().then((dats) => {
      let unPinnedNotes: any[] = [];
      let pinnedNotes: any[] = [];
      dats.forEach((element: { pinned: any }) => {
        if (element.pinned) pinnedNotes.push(element);
        else unPinnedNotes.push(element);
      });

      setPinnedData(pinnedNotes);
      setUnPinnedData(unPinnedNotes);
    });
  }, [flag]);

  function updateUserBody(id: string, userid: string) {
    updateUserIDs({ id, userid });
  }

  function handleNoteChange(e: any) {
    updateNote(e.target.value);
  }

  function updateNoteValue() {
    NoteDataService.updateData(newVal, user.id, user.userid).then((result) => {
      setFlag(!flag);
    });
  }



  return (
    <div className="notes">
      <div className="input-area">
        <input data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ width: '480px' }} id='addnote__body' placeholder="Take a note.." aria-label="note" className="form-control" onChange={handleChange}
        />
      </div>
      {pinnedData.length > 0 && <p className="heading-style">PINNED</p>}
      <div className="row">
        {pinnedData.map((data, key) => {
          return (
            <div className="col-3 mt-3 palette-wrapper" key={key}>
              <Note data={data} setFlag={setFlag} flag={flag} component={'console'}></Note>
            </div>
          );
        })}
      </div>
      {unpinnedData.length > 0 && <p className="heading-style">OTHERS</p>}
      <div className="row">
        {unpinnedData.map((data, key) => {
          return (
            <div className="col-3 mt-3" key={key}>
              <Note data={data} setFlag={setFlag} flag={flag} component={'console'} ></Note>
            </div>
          );
        })}
      </div>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
