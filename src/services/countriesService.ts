import DiseaseApi from '../api/DiseaseApi';

type Response<T> = {
  data: T;
};

export type Country = {
  country: string;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
};

function loadCountriesStats(): Promise<Response<Array<Country>>> {
  return DiseaseApi.get(`/covid-19/countries`);
}

const countriesService = {
  loadCountriesStats,
};

export default countriesService;
