import { Link } from "react-router-dom";
import RemoveButton from "./RemoveButton";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { done } from "../redux/modules/posts";

const PostedBox = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px;
`;
const PostedBoxOfBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Btn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const DoneBtn = styled.button`
  width: 115px;
  height: 40px;
  border: 2px solid green;
  border-radius: 8px;
  background-color: transparent;
`;
const PostTitle = styled.h2`
  margin: 10px 0;
`;
const PostContent = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
`;

const WorkingPoster = ({ item, setTitle, setContent }) => {
  // store에 접근하여 posts의 값을 읽어오기 위한 로직(redux hook) 사용하기
  // 여기서 state는 중앙저장소에 저장된 state 전체를 의미
  // const posts = useSelector((state) => {
  //   return state.posts;
  // });
  // console.log(posts);

  const dispatch = useDispatch();

  return (
    <PostedBox>
      <PostedBoxOfBox>
        <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none' }}>
          <div
          // onClick={() => {
          //   // setTitle(''); //엥 이거 없지도 잘지워지네? 왜지..?
          //   // setContent('');
          // }}
          >
            상세보기
          </div>
        </Link>
        
        <PostTitle>{item.title}</PostTitle>
        <PostContent>{item.content}</PostContent>
      </PostedBoxOfBox>
      <Btn key={item.id}>
        <RemoveButton item={item} />
        <DoneBtn onClick={() => dispatch(done(item.id))}>완료</DoneBtn>
      </Btn>
    </PostedBox>
  );
};

export default WorkingPoster;
