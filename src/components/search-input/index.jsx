import React, { useEffect, useState } from 'react';
import { AutoComplete, message } from 'antd';
import { ethers } from 'ethers';
import { abi } from '../../abi/article';
import config from '../../config';

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(config.articleContract, abi, signer);

const SearchInput = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);
  const [list, setList] = useState([]);
  const initPaperList = async () => {
    try {
      const res = await contract.getAllPaper();
      setList(res);
    } catch (_err) {
      message.error('数据请求报错');
    }
  };

  useEffect(() => {
    initPaperList();
  }, []);

  const onSearch = (searchText) => {
    const optionsVal = list.filter(item => (item[0] || '').indexOf(searchText) !== -1).map(i => ({
      label: i[0],
      value: parseInt(i[4]),
    }));
    setOptions(optionsVal);
  };

  const onSelect = (data) => {
    setValue(options.find(item => item.value === data).label);
    window.open(`/detail/${data}`);
  };

  const onChange = (data) => {
    setValue(data);
  };
  return (
    <AutoComplete
      size="large"
      value={value}
      options={options}
      style={{ width: 400 }}
      onSelect={onSelect}
      onSearch={onSearch}
      onChange={onChange}
      placeholder="Enter title or description of article"
    />
  );
};

export default SearchInput;