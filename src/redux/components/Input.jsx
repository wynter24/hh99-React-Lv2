import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../modules/posts';
import { PostBox,InputBox,InputLabel,Inputs,PostBoxButton } from '../../styles/styles';

const Input = () => {
  // input에 입력된 title과 content를 보기 위한 데이터
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };
  const inputContent = (event) => {
    setContent(event.target.value);
  };

  const dispatch = useDispatch();
  
  return(
    <PostBox>
        <InputBox>
          <InputLabel>제목</InputLabel>
          <Inputs name='title' value={title} onChange={inputTitle} />
          <InputLabel>내용</InputLabel>
          <Inputs name='content' value={content} onChange={inputContent} />
        </InputBox>
        <PostBoxButton
          onClick={() => {
            dispatch(addPost(title, setTitle, content, setContent));
          }}
        >
          추가하기
        </PostBoxButton>
      </PostBox>
  );
};

export default Input;