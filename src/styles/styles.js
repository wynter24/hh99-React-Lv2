import { styled } from 'styled-components';

// 게시물 추가 
export const PostBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  background-color: rgb(238, 238, 238);
  padding: 30px;
`;
export const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const InputLabel = styled.label`
  font-size: 18px;
  font-weight: 700;
`;
export const Inputs = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0px 12px;
`;
export const PostBoxButton = styled.button`
  height: 40px;
  width: 140px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: green;
  color: white;
`;

// working, done layout
export const How = styled.h2`
  text-align: start;
  width: 100%;
  margin: 10px 0px;
  padding: 20px 0 20px 10px;
  font-weight: bold;
`;
export const PostBoxLayout = styled.div`
  min-height: 200px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

// working, done poster
export const PostedBox = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px;
`;
export const PostedBoxOfBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Btn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const DoneBtn = styled.button`
  width: 115px;
  height: 40px;
  border: 2px solid green;
  border-radius: 8px;
  background-color: transparent;
`;
export const PostTitle = styled.h2`
  margin: 10px 0;
`;
export const PostContent = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
`;

// 삭제 버튼
export const DeleteBtn = styled.button`
  width: 115px;
  height: 40px;
  border: 2px solid red;
  border-radius: 8px;
  background-color: transparent;
`;

// Detail page
export const DtailPostBoxLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;
export const DtailPostBox = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
`;
export const UpSide = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const DownSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
