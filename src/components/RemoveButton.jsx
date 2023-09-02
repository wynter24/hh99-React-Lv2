import { useDispatch } from "react-redux";
import { delete_post } from "../redux/modules/posts";
import { styled } from "styled-components";

const DeleteBtn = styled.button`
  width: 115px;
  height: 40px;
  border: 2px solid red;
  border-radius: 8px;
  background-color: transparent;
`;

const RemoveButton = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <DeleteBtn onClick={() => dispatch(delete_post(item.id))}>
      삭제하기
    </DeleteBtn>
  );
};

export default RemoveButton;
