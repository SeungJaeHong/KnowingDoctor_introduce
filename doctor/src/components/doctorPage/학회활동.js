import React from 'react';

function 학회활동({대상}) {
    return (
        <div className="학회활동">
          <ul>
            {대상
              .sort((a, b) => {
                return a.id - b.id;
              })
              .map((a, i) => {
                return (
                  <li>
                    {a.시작} {a.끝 !== '' ? `~ ${a.끝}` : ""} {a.내용}
                  </li>
                );
              })}
          </ul>
        </div>
    );
}

export default 학회활동;