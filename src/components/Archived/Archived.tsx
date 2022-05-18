import { useEffect, useState } from "react";
import { NoteDataService } from "../../Services/notes";
import Note from "../Note/Note";
import ClipLoader from 'react-spinners/ClipLoader'


export default function Archived() {
  const [data, setData] = useState([
    { id: "", value: "", userid: "", archive: false, bin: false },
  ]);

  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(true)

  const showSpinner = () => {
    if (data) setLoading(false)
  }

  useEffect(() => {
    NoteDataService.getArchivedData().then((data) => {
      setData(data);
      showSpinner()
    });
  }, [flag]);


  return (
    <>{loading ? <div className="page-views"><ClipLoader loading={loading}></ClipLoader></div> : <><div className="row">
      {data.length === 0 ? <p className="page-views">Your archived notes appear here</p> : <>{data.map((data, key) => {
        return (
          <div className="col-4 mt-3" key={key}>
            <Note data={data} setFlag={setFlag} flag={flag} component={'archive'}></Note>
          </div>
        );
      })}</>}
    </div></>}</>
  );
}

