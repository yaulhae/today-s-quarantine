import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import modal from "./modal";

const rootReducer = (state : any, action : any) => {
    switch (action.type) {
      case HYDRATE:
        return action.payload;
      default: {
        const combinedReducer = combineReducers({
            modal: modal.reducer
        });
        return combinedReducer(state, action);
      }
    }
  };
  
  export type RootState = ReturnType<typeof rootReducer>

  export default rootReducer;