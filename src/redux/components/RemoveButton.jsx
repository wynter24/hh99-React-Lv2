import { useDispatch } from "react-redux";
import { delete_post } from '../modules/posts';
import { DeleteBtn } from '../../styles/styles';

const RemoveButton = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <DeleteBtn onClick={() => dispatch(delete_post(item.id))}>
      삭제하기
    </DeleteBtn>
  );
};

export default RemoveButton;
