import { mockFilter } from 'shared/mocks';

import * as types from '../../consts';
import filterReducer from '../filterReducer';

const initialState = null;
describe('filter reducer', () => {
  it('should return initial state', () => {
    expect(filterReducer(undefined, {})).toEqual(
      initialState
    );
  });

  it(`should handle ${types.SET_FILTER} action`, () => {
    expect(
      filterReducer(initialState, {
        type: types.SET_FILTER,
        payload: mockFilter
      })
    ).toEqual(mockFilter);
  });

  it(`should handle ${types.RESET_FILTER} action`, () => {
    expect(
      filterReducer(initialState, {
        type: types.RESET_FILTER
      })
    ).toEqual(null);
  });
});
