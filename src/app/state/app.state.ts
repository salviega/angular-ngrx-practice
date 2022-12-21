import { ItemsState } from "@core/models/items.state";
import { ActionReducerMap } from "@ngrx/store";
import { itemsReducer } from "./reducers/items.reducer";

export interface AppState {
    items: ItemsState,
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    items:itemsReducer
}