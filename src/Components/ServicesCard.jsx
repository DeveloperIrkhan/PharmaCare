import React from "react";
import { NavLink } from "react-router-dom";

export const ServicesCard = (props) => {
  return (
    <div className="col-md-3 col-12 gy-3">
      <div className="card" style={{width: "18rem",height:""}}>
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text overflow-hidden">
           {props.description}
          </p>
          <NavLink to='/details-page' state={{title:props.title,pic:props.image,desc:props.description}} className="btn btn-customized">
            Show Details
           </NavLink>
        </div>
      </div>
    </div>
  );
};
