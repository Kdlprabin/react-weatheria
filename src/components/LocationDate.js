import {useState} from "react";
function LocationDate() {
  var day = Date().substring(0,3);
  var month = Date().substring(4,7);
  var day_num = Date().substring(8,10);
  var year = Date().substring(11,15);
    return (
      <div className="location-date">
        <h1 className="location">Kathmandu</h1>
        <h3 className="date">
          <span>{day}</span>,<span> {month}</span>
          <span> {day_num}</span>,<span>{year} </span>
        </h3>
      </div>
    );
  }
export default LocationDate  