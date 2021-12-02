import React from 'react';

function 학력({대상}) {
    return (
        <div className="학력" style={{marginTop: '43px'}}>
        <h5 style={{fontSize: '16px', fontWeight: '700'}}>학력</h5>
        <div>
        {대상
            .sort((a, b) => {
              return a.id - b.id;
            })
            .map((a, i) => {
              return (
                <div>
                  {a.시작 !== undefined ? a.시작 : ''} {a.끝 !== ''|| a.끝 !== undefined ? `~ ${a.끝}` : ""} {a.내용}
                </div>
              );
            })}
        </div>
      </div>
    );
}

export default 학력;