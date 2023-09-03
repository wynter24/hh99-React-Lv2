import RemoveButton from "./RemoveButton";
import { not_yet } from '../modules/posts';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PostedBox,PostedBoxOfBox,Btn,DoneBtn,PostTitle,PostContent } from '../../styles/styles';

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
