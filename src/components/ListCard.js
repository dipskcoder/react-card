import React, { useState } from "react";
import Card from "./Card";

function ListCard({ planetdata }) {
  const [cardVisible, setCardVisible] = useState(false);

  return (
    <>
      <div
        className="list-card"
        onClick={() => {
          setCardVisible(!cardVisible);
        }}
      >
        <div className="list-card-name">
          {new Date(planetdata.created).toLocaleDateString()}
        </div>
        <div className="card-body">
          <div className="details">
            <div className="avatar-border">
              <div className="avatar">
                <div className="avatar__letters">
                  <i
                    className="fa fa-paint-brush fa-xl icon"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
            <div>
              <div className="heading">{planetdata.name}</div>
              <div className="list-root">Films:{planetdata.films.length}</div>
            </div>
          </div>
          <div>
            <div className="list-card-name">
              {new Date(planetdata.created).toLocaleDateString()}
            </div>
            <div className="list-root">{planetdata.climate}</div>

            <div>
              <i
                className="fa fa-chevron-down list-icon"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
      </div>
      {cardVisible && <Card planetdata={planetdata} />}
    </>
  );
}

export default ListCard;
