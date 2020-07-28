import React from 'react';
import Autocomplete from 'react-autocomplete';

const AutoComplete = ({ items, value, onChange }) => {
  return (
    <Autocomplete
      getItemValue={(item) => item.title}
      items={items}
      wrapperStyle={{ display: 'flex' }}
      renderItem={(item, isHighlighted) => (
        <div
          className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
          key={item.id}
        >
          {item.title}
        </div>
      )}
      renderMenu={(children) => <div className="menu">{children}</div>}
      value={value}
      onChange={(e) => onChange(e)}
      onSelect={(val) => onChange(val)}
    />
  );
};

export default AutoComplete;
