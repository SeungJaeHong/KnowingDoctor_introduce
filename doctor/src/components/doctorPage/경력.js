import React from "react";

function 경력({대상}) {
  return (
    <div className="경력" style={{ gap: "5px" }}>
      <ul>
        {대상
          .sort((a, b) => {
            return a.id - b.id;
          })
          .map((a, i) => {
            return (
              <li>
                {a.시작 !== undefined ? a.시작 : ''} {(a.끝 === ''|| a.끝 === undefined) ? '' : `~ ${a.끝}`} {a.내용}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default 경력;
