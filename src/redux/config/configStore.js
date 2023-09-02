import { combineReducers, createStore } from 'redux';
import posts from '../modules/posts';

// 중앙 데이터 관리소
// modules 폴더 아래의 파일들은 관리소에 저장하여 다른 컴포넌트들이 그 데이터에 접근 가능하게 한다.
const rootReducer = combineReducers({
  posts,
});
const store = createStore(rootReducer);

export default store;