import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { NoteDataService } from "../../Services/notes";
import Note from "../Note/Note";

export default function Bin() {
  const [data, setData] = useState([
    { id: "", value: "", userid: "", archive: false, bin: false },
  ]);

  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(true)

  const showSpinner = () => {
    if (data) setLoading(false)
  }

  useEffect(() => {
    NoteDataService.getTrashedData().then((data) => {
      setData(data);
      showSpinner()
    });
  }, [flag]);

  return (
    <>{loading ? <div className="page-views"><ClipLoader loading={loading}></ClipLoader></div> : <div className="row">
      {data.length === 0 ? <p className="page-views">No notes in Recycle Bin</p> : <>
        {data.map((data, key) => {
          return (
            <div className="col-4 mt-3" key={key}>
              <Note data={data} setFlag={setFlag} flag={flag} component={'bin'}></Note>
            </div>
          );
        })}
      </>}
    </div>}</>
  );
}
