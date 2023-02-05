import React, { useState } from 'react';
import { Tooltip } from 'antd';
import './index.less';

// true => cn, false => en
const LocaleSwitch = (props) => {
  const { onChange } = props;
  const [locale, setLocale] = useState(false);
  const handleSwitchLocale = () => {
    onChange && onChange(!locale ? 'cn' : 'en');
    setLocale(!locale)
  };

  return (
    <Tooltip placement="bottom" title={locale ? '中文/English' : 'English/中文'}>
      <div className="locale-switch" onClick={handleSwitchLocale}>
        <span className={`label-${locale ? 'active' : 'inactive'}`}>中</span>
        <span className={`label-${locale ? 'inactive' : 'active'}`}>En</span>
      </div>
    </Tooltip >
  );
}

export default LocaleSwitch;