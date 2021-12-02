import React from 'react';

function 수상경력({대상}) {
    return (
        <div className="수상경력">
          <ul>
            {대상
              .sort((a, b) => {
                return a.id - b.id;
              })
              .map((a, i) => {
                return (
                  <li>
                    {a.날짜} {a.내용}
                  </li>
                );
              })}
          </ul>
        </div>
    );
}

export default 수상경력;