import { ItemsState } from '@core/models/items.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../app.state';

// selector that have relation with the propierti items
export const selectItemsFeature = (state: AppState) => state.items;

export const selectListItems = createSelector(
  selectItemsFeature,
  (state: ItemsState) => { state.items }
);

export const selectLoading = createSelector(
    selectItemsFeature,
    (state: ItemsState) => state.loading
)