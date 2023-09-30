import React from "react";

export const SpecialtiesCard = ({title,pic,description}) => {
  return (
    <>
          <div className="col-md-3 col-12 my-3">
            <div className="">
              <div className="Speical-card">
                <img src={pic} 
                className="special-img" alt="" />
              <div className="special-card-body">
                <h1 className="special-card-title">{title}</h1>
                <p  className="special-card-sub-title">{description}</p>
              </div>
              </div>
            </div>
          </div>
    </>
  );
};
