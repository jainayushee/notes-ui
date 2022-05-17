import { useEffect, useState } from "react";
import { NoteDataService } from "../../Services/notes";
import Note from "../Note/Note";


export default function Archived() {
  const [data, setData] = useState([
    { id: "", value: "", userid: "", archive: false, bin: false },
  ]);

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    NoteDataService.getArchivedData().then((data) => {
      console.log(data);      
      setData(data);
    });
  }, [flag]);


  return (
    <div className="row">
      {data.length === 0 ? <p>Your archived notes appear here</p> : <>{data.map((data, key) => {
        return (
          <div className="col-4 mt-3" key={key}>
            <Note data={data} setFlag={setFlag} flag={flag} component={'archive'}></Note>
          </div>
        );
      })}</>}
    </div>
  );
}

