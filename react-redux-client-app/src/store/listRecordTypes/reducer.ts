import { Reducer } from 'redux'
import { ListRecordTypesState, ListRecordTypesActionTypes, ShowListOptions, FetchListOptions } from './types'
import { getSearchRecordTypes } from '../../nstypes/search';
import { ErrorOptions } from '../commonTypes';

export const listRecordTypesInitialState: ListRecordTypesState = {
  recordTypes: getSearchRecordTypes(),
  pageSize: 5
}

const reducer: Reducer<ListRecordTypesState> = (state = listRecordTypesInitialState, action) => {
  switch (action.type) {
    case ListRecordTypesActionTypes.FETCH_LIST: {
      // debugger
      const options = action.payload as FetchListOptions
      return { ...state, ...options, error: undefined, loading: true }
    }
    case ListRecordTypesActionTypes.SHOW_LIST: {
      const options = action.payload as ShowListOptions
      return { ...state, ...options, error: undefined, loading: false }
    }
    case ListRecordTypesActionTypes.FETCH_ERROR: {
      const options = action.payload as ErrorOptions
      return {
        ...state, error: options, loading: false
      }
    }
    default: {
      return state
    }
  }
}

export { reducer as listRecordTypesReducer }
