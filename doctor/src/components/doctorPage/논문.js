import React from 'react';

function 논문({대상}) {
    return (
        <div className="논문">
        <ul>
          {대상.map((a, i) => {
            return (
              <li>
                <span style={{ fontWeight: "600" }}>&#91;{a.분류}&#93;</span>{" "}
                <a
                  target="/blank"
                  href={`https://pubmed.ncbi.nlm.nih.gov/?term=${a.제목
                    .replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, "")
                    .replace(/\(|\)/g, "")
                    .replace(/\ /g, "+")}`}
                >
                  {a.제목}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
}

export default 논문;