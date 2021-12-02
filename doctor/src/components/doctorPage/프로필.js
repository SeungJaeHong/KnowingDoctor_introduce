import React from 'react';

function 프로필({대상}) {
    return (
        <div className="d-flex profile-wrapper">
        <div className="profile">
          <div className="circle">
            <img src={대상.프로필} alt="images" />
          </div>
        </div>
        <div className="profile-text">
          <div className="name d-flex" style={{ gap: "clamp(5px, 1vw, 10px)" }}>
            <span>{대상.name[0]}</span>
            <span>{대상.name[1].replace(/\_/g, " ")}</span>
          </div>
          <div>
            <div className="진료과">진료과: {대상.진료과}</div>
              <div className="전문진료분야">
                진료분야:{" "}
                {대상.전문진료분야.map((a, i) => {
                  return i === 0 ? `${a}` : `, ${a}`;
                })}
              </div>           
          </div>
        </div>
      </div>
    );
}

export default 프로필;