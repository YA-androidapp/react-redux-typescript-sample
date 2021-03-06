import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { changeUserName } from '../actions/userInformationAction';

export interface UserInfoState {
  name: string;
}

const initialState: UserInfoState = {
  name: 'sample',
};

export const userInfomationReducer = reducerWithInitialState(initialState).case(
  changeUserName,
  (state, userInfo) => {
    if (typeof userInfo !== 'undefined' && 'name' in userInfo) {
      return {
        ...state,
        name: userInfo.name,
      };
    } else {
      return {
        ...state,
        name: state.name,
      };
    }
  }
);
