import { ItemModel } from '@core/models/Item.interface';
import { createAction, createActionGroup, props } from '@ngrx/store'; // create actions
 
export const loadItems = createAction(
    '[Item List] Load items' // type or name
);

export const loadedItems = createAction(
    '[Item List] Loaded success',
    props<{items:ItemModel[]}>()
)
 