import React, { useEffect } from 'react';
import { Country } from '../../services/countriesService';

interface DsshboardProps {
  className?: string;
  countries: ReadonlyArray<Country>;
  loading: boolean;
  errorMessage: string;
  onLoadCountriesStats: () => void;
}

const Dsshboard: React.FC<DsshboardProps> = ({
  onLoadCountriesStats,
  countries,
}: DsshboardProps) => {
  useEffect(() => {
    onLoadCountriesStats();
  }, [onLoadCountriesStats]);
  return (
    <div>
      {countries.map((c) => (
        <span>{c.country} </span>
      ))}
    </div>
  );
};

export default Dsshboard;
