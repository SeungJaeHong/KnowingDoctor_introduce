import React, {useState, useEffect} from 'react';
import {useParams, Outlet} from 'react-router-dom';
import 의료진목록 from "../data/의료진목록";
import {Link} from 'react-router-dom';

function Medical_search(props) {
    document.title = '아는의사-의료진 소개'
    let 진료과 = ['전체'];
    의료진목록.map((a,i)=>{
      if(진료과.find(e=>e === a.진료과) === undefined){
        진료과.push(a.진료과);
      }
    })
    const [tab,setTab] = useState(0);
    let [맞는의사,set맞는의사]=useState([...의료진목록]);
    console.log(의료진목록);
    useEffect(()=>{
      if(tab === 0){
        set맞는의사([...의료진목록])
      }
      else{
        set맞는의사(의료진목록.filter(target=>target.진료과 === 진료과[tab]));
        
      }
      console.log(맞는의사);
    },[tab])
    useEffect(()=>{

    },[])
    return (
        <div className="container" style={{marginTop:'64px'}}>
          <div className="의료진소개-title">
                10년차 이상, 믿음직한 전문의들이<br/> 기다리고 있습니다.
            </div>
          <div className="professor-profile-tab animation flex-wrap">
            {진료과.map((a,i)=>{
              return(
                <div onClick={()=>{setTab(i)}} className={tab === i ? 'tab-list active': 'tab-list'}>{a}</div>
              )
            })}
          </div>
            
            <div className="row" style={{marginTop: '64px'}}>
              
        {
          맞는의사.map((a,i)=>{
            return(
              <Link
              className="col-xl-4 col-lg-6 col-md-6 professor-card"
              id="wrapper"
              to={`${a.name[1]}`}
            >
              <div className="professor-card-sizing">
                <div className="content d-flex">
                  <div className="profile">
                    <img src={a.프로필} style={{width: '100%'}} alt="" />
                  </div>
                  <div className="texts">
                    <div className="title">
                      <div>{a.name[0]}</div>
                      <div>{a.진료과}</div>
                    </div>
                    <div>{a.학력[0].내용}</div>
                    <div></div>
                  </div>
                </div>
              </div>
            </Link>
            )
            
          })
        }
      </div>
        </div>
    );
}

export default Medical_search;