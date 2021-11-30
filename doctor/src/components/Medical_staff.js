import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import 의료진목록 from "../data/의료진목록";
import "../style/Medi.scss";
import defaultImg from "../srcImage/defaultProfile.png";
function Medical_staff(props) {
  //학력, 경력, 수상경력, 학회활동, 논문
  let url = useParams().name;
  console.log(url);
  console.log(의료진목록);
  const 대상 = 의료진목록.find((e) => {
    return e.name[1] === url || e.name[0] === url;
  });
  const 탭목록= ['학력','경력','수상경력','학회활동','논문'];
  let 보유목록 = [];
  console.log(탭목록);
  for(let i =0;i<5;i++){
    if(대상.hasOwnProperty(탭목록[i]) === true){
      보유목록.push(탭목록[i]);
    }
  }
  console.log(보유목록);
  const [info,setInfo] = useState(0);
  document.title = `의료진 소개 | ${대상.name[0]}교수`
  
  return (
    <div className="container mt-5">
      <div className="d-flex">
        <div className="profile">
          <img src={대상.프로필} alt="images" />
        </div>
        <div className="profile-text">
          <div className="name">
            이름: {대상.name[0]}({대상.name[1].replace(/\_/g, " ")})
          </div>
          <div className="진료과">진료과: {대상.진료과}</div>
          <div className="소속병원">소속병원: {대상.소속병원}</div>
          <div className="경력">{대상.경력[0].내용}</div>
        </div>
      </div>
      <div className="professor-profile-tab">
        {보유목록.map((a,i)=>{
          return (
            <div onClick={()=>setInfo(i)} className={`tab-list ${info === i ? 'active' : ''}`}>
              {보유목록[i]}
            </div>
          )
        })}
      
      </div>
      <div className="전문진료분야">
        전문 진료 분야:{" "}
        {대상.전문진료분야.map((a, i) => {
          return i === 0 ? `${a}` : `, ${a}`;
        })}
      </div>
      <div className="경력 d-flex" style={{ gap: "5px" }}>
        <div>경력: </div>
        <ul>
          {대상.경력
            .sort((a, b) => {
              return a.id - b.id;
            })
            .map((a, i) => {
              return (
                <li>
                  {a.시작} {a.끝 !== undefined ? `~ ${a.끝}` : ""} {a.내용}
                </li>
              );
            })}
        </ul>
      </div>
      {대상.수상경력 === undefined ? (
        ""
      ) : (
        <div className="수상경력">
          <div>수상경력: </div>
          <ul>
            {대상.수상경력
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
      )}
      {대상.학회활동 === undefined ? (
        ""
      ) : (
        <div className="학회활동">
          <div>학회활동: </div>
          <ul>
            {대상.학회활동
              .sort((a, b) => {
                return a.id - b.id;
              })
              .map((a, i) => {
                return (
                  <li>
                    {a.시작} {a.끝 !== undefined ? `~ ${a.끝}` : ""} {a.내용}
                  </li>
                );
              })}
          </ul>
        </div>
      )}

      <div className="논문">
        <div>논문: </div>
        <ul>
          {대상.논문.map((a, i) => {
            return (
              <li>
                <span style={{ fontWeight: "600" }}>&#91;{a.분류}&#93;</span>{" "}
                <a target="/blank" href={`https://pubmed.ncbi.nlm.nih.gov/?term=${a.제목.replace( /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '' ).replace(/\(|\)/g,'').replace(/\ /g,'+')}`}>{a.제목}</a>
                
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Medical_staff;
