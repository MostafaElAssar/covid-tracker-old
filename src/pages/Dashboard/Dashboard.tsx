import React, { useEffect, useState } from 'react';
import { Card, Input, AutoComplete } from 'antd';
import styled from 'styled-components';
import { Country } from '../../services/countriesService';
import style from './Dashboard.style';

interface DsshboardProps {
  className?: string;
  countries: ReadonlyArray<Country>;
  loading: boolean;
  errorMessage: string;
  onLoadCountriesStats: () => void;
}

const searchCountries = (query: string, countries: ReadonlyArray<Country>) => {
  return countries
    .filter((c) => c.country.toLowerCase().includes(query.toLowerCase()))
    .map((el) => {
      return {
        value: el.country,
        label: el.country,
      };
    });
};

const Dsshboard: React.FC<DsshboardProps> = ({
  onLoadCountriesStats,
  countries,
  className,
}: DsshboardProps) => {
  useEffect(() => {
    onLoadCountriesStats();
  }, [onLoadCountriesStats]);

  const [options, setOptions] = useState<
    Array<{ value: string; label: string }>
  >([]);

  const [country, setCountry] = useState<Country>();

  const handleSearch = (value: string) => {
    setOptions(value ? searchCountries(value, countries) : []);
  };

  const handleSelect = (value: string) => {
    setCountry(countries.find((c) => c.country === value));
  };

  return (
    <div className={className}>
      <AutoComplete
        options={options}
        onSelect={handleSelect}
        onSearch={handleSearch}
      >
        <Input.Search size="large" enterButton />
      </AutoComplete>

      {country && (
        <Card title={country.country}>
          <p>Total cases: {country.cases}</p>
          <p>New cases: {country.todayCases}</p>
          <p>Total deaths: {country.deaths}</p>
          <p>New deaths: {country.todayDeaths}</p>
          <p>Total recovered: {country.recovered}</p>
          <p>New recovered: {country.todayRecovered}</p>
          <p>Active cases: {country.active}</p>
          <p>Population: {country.population}</p>
        </Card>
      )}
    </div>
  );
};

export default styled(Dsshboard)`
  ${style}
`;
