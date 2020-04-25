import { combineReducers } from "redux";
import user from "./user";
import messages from "./messages";
import typing from "./typing";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import activeChatId from "./activeChatId";

// export default (state = {}, action) => {
//   console.log(
//     " %c =====> In the root reducer with state ",
//     "background:yellow;color:black",
//     state
//   );
//   console.log(
//     "%c =====> action passed in root reducer ",
//     "background:yellow;color:black",
//     action
//   );
//   const newState = Object.assign({}, state, {
//     user: user(state.user, action),
//     messages: messages(state.messages, action),
//     typing: typing(state.typing, action),
//     contacts: contacts(state.contacts, action),
//     activeUserId: activeUserId(state.activeUserId, action),
//     activeChatId: activeChatId(state.activeChatId, action)
//   });

//   return newState;
// };

/**
 * =======================================================
 * Uncomment the commented code above,
 * and comment out the export default combineReducers
 * below to see the "manual" reducers combination at work.
 * ========================================================
 */
export default combineReducers({
  user,
  messages,
  typing,
  contacts,
  activeChatId,
  activeUserId,
  nested: combineReducers({
    user,
    messages,
    typing,
    contacts,
    activeChatId,
    activeUserId
  })
});
