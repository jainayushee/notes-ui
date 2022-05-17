import React, { useEffect, useState } from "react";
import { NoteDataService } from "../../Services/notes";
import Note from "../Note/Note";

export default function Bin() {
  const [data, setData] = useState([
    { id: "", value: "", userid: "", archive: false, bin: false },
  ]);

  const [flag, setFlag] = useState(false);

  function deleteNote(note: any) {
    NoteDataService.deleteForever(note.id).then(() => {
      setFlag(!flag);
    });
  }

  function restore(note: any) {
    NoteDataService.deleteAndRestoreData(note).then(() => {
      setFlag(!flag);
    });
  }

  useEffect(() => {
    NoteDataService.getTrashedData().then((data) => {
      setData(data);
      console.log(data);

    });
  }, [flag]);

  return (
    <div className="row">
      {data.length === 0 ? <p>No notes in Recycle Bin</p> : <>
        {data.map((data, key) => {
          return (
            <div className="col-4 mt-3" key={key}>
              <Note data={data} setFlag={setFlag} flag={flag} component={'bin'}></Note>
            </div>
          );
        })}
      </>}
    </div>
  );
}
