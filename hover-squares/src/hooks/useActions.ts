import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { hoveredActions, settingsActions } from "../store/slice";

const actions = {
  ...settingsActions,
  ...hoveredActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};
