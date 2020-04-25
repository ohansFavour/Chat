import { getMessages } from "../static-data";
import produce from "immer";
import { SEND_MESSAGE, DELETE_CHAT } from "../constants/action-types";
import _ from "lodash";

function messages(state, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId, chatId } = action.payload;
      const allUserMsgs = state[userId];
      const number = chatId || +_.keys(allUserMsgs).pop() + 1;
      const newMsg = {
        number,
        text: chatId ? message.concat(" (edited)") : message,
        is_user_msg: true
      };

      //perform mutation. No need to use the return keyword.
      state[userId][number] = newMsg;
      break;

    case DELETE_CHAT:
      const messageId = action.payload.number;
      const activeUserId = action.payload.activeUserId;

      //perform mutation. No need to use the return keyword.
      state[activeUserId] = _.omit(state[activeUserId], messageId);
      break;

    //with immer you can remove the default case here.
    default:
      return state;
  }
}

export default produce(messages, getMessages(10));
