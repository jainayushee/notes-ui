import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom'

export default function Navbar() {
  function handleClick(e: any) {
    let id = e.target.id;
    let element = document.getElementById(id);
    let childNodes = document.getElementsByClassName("list-group--item");
    for (let i = 0; i < childNodes?.length; i++) {
      if (childNodes[i].classList.contains("list-item-active")) {
        childNodes[i].classList.remove("list-item-active");
      }
    }
    element?.classList.add("list-item-active");
  }

  return (
    <div>
      <ul className="list-group list-group-flush p-2">
        <Link to={'/'} className='text-link'><li
          id="notes"
          className="list-group--item border-0 p-3"
          onClick={handleClick}
        >
          <i className="fa-solid fa-clipboard me-4"></i>Notes
        </li></Link>
        {/* <li
          id="reminder"
          className="list-group-item border-0 p-3"
          onClick={handleClick}
        >
          <i className="fa-solid fa-bell me-4"></i>Reminders
        </li> */}
        {/* <li
          id="edit"
          className="list-group-item border-0 p-3"
          onClick={handleClick}
        >
          <i className="fa-solid fa-pen me-4"></i>Edit labels
        </li> */}
        <Link to={'/archived'} className='text-link'><li
          id="archive"
          className="list-group--item border-0 p-3"
          onClick={handleClick}
        >
          <i className="fa-solid fa-box-archive me-4"></i>Archive</li></Link>
        <Link to={'/bin'} className='text-link'><li
          id="bin"
          className="list-group--item border-0 p-3"
          onClick={handleClick}
        >
          <i className="fa-solid fa-trash-can me-4"></i>Bin
        </li></Link>
      </ul>
    </div>
  );
}
