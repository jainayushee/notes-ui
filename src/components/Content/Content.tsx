import * as React from "react";
import "./Content.css";
import Navbar from "../Navbar/Navbar";
import Notes from "../Notes/Notes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Archived from "../Archived/Archived";
import Bin from "../Bin/Bin";

export default class Content extends React.Component<{}> {
  render() {
    return (
        <BrowserRouter>
          <div className="content">

          <div className="left"><Navbar/></div>
          <div className="right">
          <Routes>

            <Route path="/" element={<Notes/>}></Route>
            <Route path="/archived" element={<Archived/>}/>
            <Route path="/bin" element={<Bin/>}/>
            </Routes>

          </div>
          </div>

        </BrowserRouter>
    );
  }
}
