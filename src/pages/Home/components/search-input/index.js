import React, { useState } from 'react';
import { Select } from 'antd';

const fakeData = [{ value: 1, text: '测试1' }, { value: 2, text: '测试2' }, { value: 3, text: '测试3' }];
const fetch = (_value, callback) => setTimeout(() => callback(fakeData), 3000);

const SearchInput = (props) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState();

  const handleSearch = (newValue) => {
    if (newValue) {
      fetch(newValue, setData);
    } else {
      setData([]);
    }
  };

  const handleChange = (newValue) => {
    handleSearch(newValue);
    setValue(newValue);
  };

  return (
    <Select
      showSearch
      allowClear
      value={value}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
      options={(data || []).map((d) => ({
        value: d.value,
        label: d.text,
      }))}
      {...props}
    />
  );
};

export default SearchInput;