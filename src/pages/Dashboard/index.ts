import { connect } from 'react-redux';
import { CountryState } from '../../reducers/countriesReducer';
import { loadCountriesStats } from '../../actions/countriesActions';
import Dashboard from './Dashboard';

const mapStateToProps = (state: { country: CountryState }) => ({
  countries: state.country.countries,
  loading: state.country.loading,
  errorMessage: state.country.errorMessage,
});

const mapDispatchToProps = {
  onLoadCountriesStats: loadCountriesStats,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
