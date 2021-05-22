import {
  LoadCountriesStatsActions,
  LOAD_COUNTRIES_STATS_REQUEST,
  LOAD_COUNTRIES_STATS_SUCCESS,
  LOAD_COUNTRIES_STATS_FAILURE,
} from '../actions/countriesActions';
import { Country } from '../services/countriesService';

export type CountryState = {
  countries: ReadonlyArray<Country>;
  loading: boolean;
  errorMessage: string;
};

const initialState: CountryState = {
  countries: [],
  loading: false,
  errorMessage: '',
};

const countriesReducer = (
  state: CountryState = initialState,
  action: LoadCountriesStatsActions
) => {
  switch (action.type) {
    case LOAD_COUNTRIES_STATS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOAD_COUNTRIES_STATS_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
        errorMessage: '',
      };
    case LOAD_COUNTRIES_STATS_FAILURE:
      return {
        ...state,
        loading: false,
        countries: [],
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default countriesReducer;
