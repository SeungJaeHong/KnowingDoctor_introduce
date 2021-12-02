import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import 의료진목록 from "../../data/의료진목록";
import "../../style/Medi.scss";
import defaultImg from "../../srcImage/defaultProfile.png";
import 경력 from "./경력";
import 논문 from "./논문";
import 수상경력 from "./수상경력";
import 학력 from "./학력";
import 학회활동 from "./학회활동";
import 프로필 from "./프로필";
import { Accordion } from "react-bootstrap";
function Medical_staff(props) {
  //학력, 경력, 수상경력, 학회활동, 논문
  let url = useParams().name;
  console.log(url);
  console.log(의료진목록);
  const 대상 = 의료진목록.find((e) => {
    return e.name[1] === url || e.name[0] === url;
  });
  const 탭목록 = ["학력", "경력", "수상경력", "학회활동", "논문"];
  let 보유목록 = [];
  console.log(탭목록);
  for (let i = 0; i < 5; i++) {
    if (대상.hasOwnProperty(탭목록[i]) === true) {
      보유목록.push(탭목록[i]);
    }
  }
  console.log(보유목록);
  const [info, setInfo] = useState(0);
  document.title = `의료진 소개 | ${대상.name[0]}교수`;

  return (
    <div className="container mt-5">
      <프로필 대상={대상} />
      <학력 대상={대상.학력} />
      <Accordion className="mt-5" defaultActiveKey="0" style={{minHeight: `${보유목록.length*100}px`,marginBottom: '200px'}}>
        {보유목록.slice(1).map((a, i) => {    //학력만은 없으면 안됨.
          return (
            <Accordion.Item eventKey={i}>
              <Accordion.Header>{a}</Accordion.Header>
              <Accordion.Body>
                {
                  {
                    '경력':  <경력 대상={대상.경력} />,
                    '수상경력': <수상경력 대상={대상.수상경력} />,
                    '학회활동': <학회활동 대상={대상.학회활동} />,
                    '논문': <논문 대상={대상.논문} />
                  }[a]
                }
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}

export default Medical_staff;
