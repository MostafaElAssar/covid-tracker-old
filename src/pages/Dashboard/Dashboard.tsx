import React, { useEffect, useState } from "react";
import { Input, Table } from "antd";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import { Country } from "../../services/countriesService";
import style from "./Dashboard.style";

interface DsshboardProps {
  className?: string;
  countries: ReadonlyArray<Country>;
  loading: boolean;
  errorMessage: string;
  onLoadCountriesStats: () => void;
}

const columns = [
  {
    title: "Name",
    width: 50,
    dataIndex: "country",
    key: "country",
  },
  {
    title: "Total cases",
    width: 50,
    dataIndex: "cases",
    key: "cases",
  },
  {
    title: "New cases",
    dataIndex: "todayCases",
    key: "todayCases",
    width: 50,
  },
  {
    title: "Total deaths",
    width: 50,
    dataIndex: "deaths",
    key: "deaths",
  },
  {
    title: "New deaths",
    dataIndex: "todayDeaths",
    key: "todayDeaths",
    width: 50,
  },
  {
    title: "Total recovered",
    width: 50,
    dataIndex: "recovered",
    key: "recovered",
  },
  {
    title: "New recovered",
    dataIndex: "todayRecovered",
    key: "todayRecovered",
    width: 50,
  },
  {
    title: "Active cases",
    dataIndex: "active",
    key: "6",
    width: 50,
  },
  {
    title: "Population",
    dataIndex: "population",
    key: "population",
    width: 50,
  },
  {
    title: "Population",
    dataIndex: "population",
    key: "population",
    width: 50,
  },
  {
    title: "Percentile Rank",
    dataIndex: "percentile",
    key: "percentile",
    width: 50,
  },
  {
    title: "Safe <50",
    dataIndex: "safe",
    key: "percentile",
    width: 50,
  },
];

const searchCountries = (query: string, countries: ReadonlyArray<Country>) => {
  return countries.filter((c) =>
    c.country.toLowerCase().includes(query.toLowerCase())
  );
};

const Dsshboard: React.FC<DsshboardProps> = ({
  onLoadCountriesStats,
  countries,
  className,
}: DsshboardProps) => {
  const [filtered, setFiltered] = useState<ReadonlyArray<Country>>([]);

  useEffect(() => {
    onLoadCountriesStats();
  }, [onLoadCountriesStats]);

  useEffect(() => {
    setFiltered(countries);
  }, [countries]);

  const handleSearch = (value: string) => {
    if (value.length > 0) {
      setFiltered(searchCountries(value, countries));
      return;
    }
    setFiltered(countries);
  };

  return (
    <div className={className}>
      <Input.Search
        prefix={<SearchOutlined />}
        size="large"
        allowClear
        enterButton="Search"
        onSearch={handleSearch}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <Table
        columns={columns}
        dataSource={filtered.map((el) => {
          const percentile = Math.round(
            (countries.filter((c) => c.active <= el.active).length /
              countries.length) *
              100
          );
          return {
            ...el,
            percentile,
            safe: percentile < 50 ? "true" : "false",
          };
        })}
        pagination={false}
        bordered
        scroll={{ x: 1400, y: 450 }}
      />
    </div>
  );
};

export default styled(Dsshboard)`
  ${style}
`;
