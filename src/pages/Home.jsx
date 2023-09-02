import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/modules/posts";
import WorkingPoster from "../components/WorkingPoster";
import DonePoster from "../components/DonePoster";
import { styled } from "styled-components";

const PostBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  background-color: rgb(238, 238, 238);
  padding: 30px;
`;
const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const InputLabel = styled.label`
  font-size: 18px;
  font-weight: 700;
`;
const Input = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0px 12px;
`;
const PostBoxButton = styled.button`
  height: 40px;
  width: 140px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: green;
  color: white;
`;
const How = styled.h2`
  text-align: start;
  width: 100%;
  margin: 10px 0px;
  padding: 20px 0 20px 10px;
  font-weight: bold;
`;
const PostBoxLayout = styled.div`
  min-height: 200px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

function Home() {
  // input에 입력된 title과 content를 보기 위한 데이터
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };
  const inputContent = (event) => {
    setContent(event.target.value);
  };

  // store에 접근하여 posts의 값을 읽어오기 위한 로직(redux hook) 사용하기
  // 여기서 state는 중앙저장소에 저장된 state 전체를 의미
  const posts = useSelector((state) => {
    return state.posts;
  });
  // console.log(posts);

  const dispatch = useDispatch();

  return (
    <div>
      {/*게시글 작성 */}
      <PostBox>
        <InputBox>
          <InputLabel>제목</InputLabel>
          <Input value={title} onChange={inputTitle} />
          <InputLabel>내용</InputLabel>
          <Input value={content} onChange={inputContent} />
        </InputBox>
        <PostBoxButton
          onClick={() => {
            dispatch(addPost(title, setTitle, content, setContent));
          }}
        >
          추가하기
        </PostBoxButton>
      </PostBox>

      <main style={{ padding: "0 24px" }}>
        {/* post한 workign 게시물 */}
        <How>Working..🔥</How>
        <PostBoxLayout>
          {posts
            .filter((item) => {
              return item.isDone === false;
            })
            .map(function (item) {
              return (
                <WorkingPoster
                  key={item.id}
                  item={item}
                  // setTitle={setTitle}
                  // setContent={setContent}
                />
              );
            })}
        </PostBoxLayout>

        {/* post한 done 게시물 */}
        <How>Done..!🎉</How>
        <PostBoxLayout>
          {posts
            .filter((item) => {
              return item.isDone === true;
            })
            .map(function (item) {
              return <DonePoster key={item.id} item={item} />;
            })}
        </PostBoxLayout>
      </main>
    </div>
  );
}

export default Home;
