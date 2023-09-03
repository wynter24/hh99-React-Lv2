import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { DtailPostBoxLayout,DtailPostBox,UpSide,DownSide } from '../styles/styles';

function Detail({ item }) {
  // 어떤 파라미터가 들어왔는지 확인 -> 우리 router에서 지정한 id값이 출력됨
  const params = useParams();
  // console.log(params);\

  // store에 접근하여 posts의 값을 읽어오기 위한 로직(redux hook) 사용하기
  // 여기서 state는 중앙저장소에 저장된 state 전체를 의미
  const posts = useSelector((state) => {
    return state.posts;
  });

  // 클릭한 post의 데이터 찾기
  // item.id - 숫자 /  params.id - 문자 -> parseInt 사용하여 숫자형으로 바꿔줘야함
  const foundData = posts.find((item) => {
    return item.id === parseInt(params.id); // == 동등연산자, === 일치연산자: type까지 일치해야 함
  });
  // console.log("foundData", foundData)

  const navigate = useNavigate();

  return (
    <DtailPostBoxLayout>
      <DtailPostBox>
        <UpSide>
          <div>ID: {foundData.id}</div>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </button>
        </UpSide>
        <DownSide>
          <h1>{foundData.title}</h1>
          <p>{foundData.content}</p>
        </DownSide>
      </DtailPostBox>
    </DtailPostBoxLayout>
  );
}

export default Detail;
