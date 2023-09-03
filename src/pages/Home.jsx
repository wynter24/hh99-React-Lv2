import Input from '../redux/components/Input';
import TodoList from '../redux/components/TodoList';

function Home() {

  return (
    <div>
      {/* 게시물 추가 */}
      <Input />
      {/* working, done post 목록 */}
      <TodoList/>
    </div>
  );
}

export default Home;
