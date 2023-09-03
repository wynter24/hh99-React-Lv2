import { useSelector } from "react-redux";
import { How, PostBoxLayout } from "../../styles/styles";
import WorkingPoster from "./WorkingPoster";
import DonePoster from "./DonePoster";

const TodoList = () => {
  // store에 접근하여 posts의 값을 읽어오기 위한 로직(redux hook) 사용하기
  // 여기서 state는 중앙저장소에 저장된 state 전체를 의미
  const posts = useSelector((state) => {
    return state.posts;
  });
  // console.log(posts);

  return (
    <main style={{ padding: "0 24px" }}>
      {/* post한 workign 게시물 */}
      <How>Working..🔥</How>
      <PostBoxLayout>
        {posts
          .filter((item) => {
            return item.isDone === false;
          })
          .map(function (item) {
            return <WorkingPoster key={item.id} item={item} />;
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
  );
};

export default TodoList;
