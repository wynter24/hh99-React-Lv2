// action value
const ADD_POST = "posts/ADD_POST";
const DONE = "posts/DONE"
const NOT_YET = "posts/NOT_YET"
const DELETE_POST = "post/DELETE_POST"

// action creator : action value를 return 하는 함수
// 컴포넌트에서 사용 
// 아래가 action 객체임
// 사용자가 입력한 값
export const addPost = (title, setTitle, content, setContent) => {
	return{
		type: ADD_POST,
		title,
		setTitle,
		content,
		setContent,
	};
}

// working zone에서 완료버튼 눌렀을 때 id 값 받아오기
export const done = (id) => {
	return{
		type: DONE,
		id,
	}
}

// done zone에서 취소 버튼을 눌렀을 때 id 값 받아오기
export const not_yet = (id) => {
	return{
		type: NOT_YET,
		id,
	}
}

// 삭제 버튼 눌렀을 때 해당 post id 값 받아오기
export const delete_post = (id) => {
	return{
		type: DELETE_POST,
		id,
	}
}

// store에 저장할 state
// 초기 상태값(state)
const initialState = [
	{
		id: 1, // id는 모두 고유값이어야 한다.
		title: "리액트 강의보기",
		content: "챕터 1부터 챕터 12까지 학습",
		isDone: false
	},
	{
		id: 2, 
		title: "점심 먹기",
		content: "점심 뭐먹지..?",
		isDone: false
	}
];

// 리듀서 : action의 type에 따라 state를 변경하는 함수('stae의 변화를 일으키는' 함수)
// input : state와 action
// state = intialState : state의 초기값은 intialState이다.
// action: state를 어떻게 수정하고 표현할지 나타내는 객체로 type과 value가 있다
// action={} : 데이터를 전달 받지 못해 함수를 실행하지 못하는 오류를 방지하기 위해 빈 객체를 전달
const posts = (state=initialState, action={}) => {
  switch(action.type) {
		case ADD_POST:{
			const newPost = {
				// at() : 정숫값을 받아 해당 인덱스에 있는 항목을 반환, 음의 정수는 배열의 마지막 항목부터 거슬러 셈.
				id: state.length===0 ? 1 : state.at(-1).id + 1,
				title: action.title,
				content: action.content,
				isDone: false,
			};
			const new_post = [...state,newPost];
			action.setTitle('');
			action.setContent('');
			return new_post;
		}
		case DELETE_POST:
			const newPost = state.filter((post) => post.id !== action.id);
			return newPost;
		case DONE:
			const changeIsDone = state.map((post) => {
				if (post.id === action.id) {
					return {
						id: action.id,
						title: post.title,
						content: post.content,
						isDone: true,
					};
				} else {
					return post;
				}
			});
			// console.log(changeIsDone);
			return changeIsDone;
		case NOT_YET:
			const notDonePost = state.map((post) => {
				if (post.id === action.id) {
					return {
						id: post.id,
						title: post.title,
						content: post.content,
						isDone: false,
					};
				} else {
					return post;
				}
			});
			return notDonePost;
    default:
      return state;
  }
} 

export default posts;