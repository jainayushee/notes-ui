const axios = require("axios");

async function getData(): Promise<any> {
  const { data } = await axios.get("http://localhost:3001/data", {
    headers: {
      Accept: "application/json",
    },
  });

  let result: any[] = [] ;
  data.forEach((element: { archive: any; bin: any; }) => {
    if(!(element.archive || element.bin))
    result.push(element)
  });
  return result;
}

async function getTrashedData(): Promise<any> {
  const { data } = await axios.get("http://localhost:3001/data", {
    headers: {
      Accept: "application/json",
    },
  });

  let result: any[] = [] ;
  data.forEach((element: { archive: any; bin: any; }) => {
    if(element.bin)
    result.push(element)
  });
  return result;
}

async function getArchivedData(): Promise<any> {
  const { data } = await axios.get("http://localhost:3001/data", {
    headers: {
      Accept: "application/json",
    },
  });

  let result: any[] = [] ;
  data.forEach((element: { archive: any; bin: any; }) => {
    if(element.archive)
    result.push(element)
  });
  return result;
}

async function addData(body: Object): Promise<any> {
  const { data } = await axios.post("http://localhost:3001/data", body, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return data;
}

async function deleteAndRestoreData(note: any): Promise<any> {
  const body = {
    "id":note.id,
    "value":note.value,
    "userid": note.userid,
    "archive": false,
    "bin": !note.bin,
    "pinned": false,
    "color": note.color 
  }
  const { data } = await axios.put(
    `http://localhost:3001/data/${note.id}`,
    body,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  return data;
}

async function archiveAndUnarchiveData(note: any): Promise<any> {
  const body = {
    "id":note.id,
    "value":note.value,
    "userid": note.userid,
    "archive": !note.archive,
    "bin":false,
    "pinned": false,
    "color": note.color 
  }
  const { data } = await axios.put(
    `http://localhost:3001/data/${note.id}`,
    body,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  return data;
}

async function updateData(value: String, id: String, userid: String): Promise<any> {
  const body = {
    "id":id,
    "value":value,
    "userid": userid
  }

  const { data } = await axios.put(
    `http://localhost:3001/data/${id}`,
    body,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  return data;
}

async function deleteForever(id: String): Promise<any> {
  
  const { data } = await axios.delete(
    `http://localhost:3001/data/${id}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  return data;
}

async function pinAndUnpinNote(note: any): Promise<any> {
  const body = {
    "id":note.id,
    "value":note.value,
    "userid": note.userid,
    "archive": note.archive,
    "bin": note.bin,
    "pinned": !note.pinned,
    "color": note.color    
  }

  const { data } = await axios.put(
    `http://localhost:3001/data/${note.id}`,
    body,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  return data;
}

async function updateColor(note: any, color: string): Promise<any> {
  const body = {
    "id":note.id,
    "value":note.value,
    "userid": note.userid,
    "archive": note.archive,
    "bin": note.bin,
    "pinned": note.pinned,
    "color": color
  }

  const { data } = await axios.put(
    `http://localhost:3001/data/${note.id}`,
    body,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  return data;
}

export const NoteDataService = {
  getData: getData,
  addData: addData,
  deleteAndRestoreData: deleteAndRestoreData,
  updateData: updateData,
  getTrashedData: getTrashedData,
  archiveAndUnarchiveData: archiveAndUnarchiveData,
  getArchivedData: getArchivedData,
  deleteForever: deleteForever,
  pinAndUnpinNote:pinAndUnpinNote,
  updateColor: updateColor
};
