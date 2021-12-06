import React, { useState, useRef } from "react";
import { Overlay, Button } from "react-bootstrap";
import 진료과소개 from '../../data/진료과소개'
function 프로필({ 대상 }) {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const  설명 = 진료과소개.find(e=>e.이름 === 대상.진료과).설명;
  return (
    <div className="d-flex profile-wrapper">
      <div className="profile">

          <img src={대상.프로필} alt="images" />

      </div>
      <div className="profile-text">
        <div className="name d-flex" style={{ gap: "clamp(5px, 1vw, 10px)" }}>
          <span>{대상.name[0]}</span>
          <span>{대상.name[1].replace(/\_/g, " ")}</span>
        </div>
        <div>
          <div className="진료과 d-flex" style={{gap: '10px'}}>
            진료과: {대상.진료과}
            <div

              ref={target}
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              className="도움말"
            >?</div>
            <Overlay target={target.current} show={show} placement="bottom">
              {({ placement, arrowProps, show: _show, popper, ...props }) => (
                <div
                  {...props}
                  style={{
                    backgroundColor: "#e4e4e4",
                    border: '1px solid #a7a7a7',
                    opacity: '0.8',
                    padding: "2px 10px",
                    marginLeft: '5px',
                    color: "black",
                    borderRadius: 3,
                    maxWidth: '300px',
                    fontSize: '12px',
                    transition: 'background .5s ease-in-out',
                    ...props.style,
                  }}
                >
                  {설명}
                </div>
              )}
            </Overlay>
          </div>
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
