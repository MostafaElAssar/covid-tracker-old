import { Action } from 'redux';
import countriesService, { Country } from '../services/countriesService';

export const LOAD_COUNTRIES_STATS_REQUEST = 'LOAD_COUNTRIES_STATS_REQUEST';
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type LOAD_COUNTRIES_STATS_REQUEST = typeof LOAD_COUNTRIES_STATS_REQUEST;
export interface LoadCountriesStatsRequestAction extends Action {
  type: LOAD_COUNTRIES_STATS_REQUEST;
}

export const LOAD_COUNTRIES_STATS_SUCCESS = 'LOAD_COUNTRIES_STATS_SUCCESS';
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type LOAD_COUNTRIES_STATS_SUCCESS = typeof LOAD_COUNTRIES_STATS_SUCCESS;
export interface LoadCountriesStatsSuccessAction extends Action {
  type: LOAD_COUNTRIES_STATS_SUCCESS;
  payload: ReadonlyArray<Country>;
}

export const LOAD_COUNTRIES_STATS_FAILURE = 'LOAD_COUNTRIES_STATS_FAILURE';
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type LOAD_COUNTRIES_STATS_FAILURE = typeof LOAD_COUNTRIES_STATS_FAILURE;
export interface LoadCountriesStatsFailureAction extends Action {
  type: LOAD_COUNTRIES_STATS_FAILURE;
  payload: string;
}

export type LoadCountriesStatsActions =
  | LoadCountriesStatsRequestAction
  | LoadCountriesStatsSuccessAction
  | LoadCountriesStatsFailureAction;

export const loadCountriesStats =
  () => (dispatch: (action: LoadCountriesStatsActions) => void) => {
    dispatch({
      type: LOAD_COUNTRIES_STATS_REQUEST,
    });
    return countriesService.loadCountriesStats().then(
      (res) => {
        dispatch({
          type: LOAD_COUNTRIES_STATS_SUCCESS,
          payload: res.data,
        });
      },
      (err) => {
        const errorMessage = err.response
          ? err.response.data.message
          : 'Server is not running';
        dispatch({
          type: LOAD_COUNTRIES_STATS_FAILURE,
          payload: errorMessage,
        });
      }
    );
  };
