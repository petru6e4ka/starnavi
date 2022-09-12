import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/createStore";

export const useSettingsSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useHoveredSelector: TypedUseSelectorHook<RootState> = useSelector;
