import { styled } from "styled-components";
import RemoveButton from "./RemoveButton";
import { not_yet } from "../redux/modules/posts";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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

const DonePoster = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <PostedBox>
      <PostedBoxOfBox>
        <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none' }}>
          <div>상세보기</div>
        </Link>
        <PostTitle>{item.title}</PostTitle>
        <PostContent>{item.content}</PostContent>
      </PostedBoxOfBox>
      <Btn key={item.id}>
        <RemoveButton item={item} />
        <DoneBtn onClick={() => dispatch(not_yet(item.id))}>취소</DoneBtn>
      </Btn>
    </PostedBox>
  );
};

export default DonePoster;
