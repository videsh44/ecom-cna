import React, { useState } from 'react';
import Tab from '@material-ui/core/Tab';
import { Tabs, withStyles } from '@material-ui/core';
import { useRouter } from 'next/router';

const CategoryTabs = () => {
  const router = useRouter();

  const [value, setValue] = useState(
    router && router.query && router.query.category
      ? router.query.category
      : '/'
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const AntTabs = withStyles({
    root: {
      borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
      backgroundColor: '#1890ff',
    },
  })(Tabs);

  const AntTab = withStyles((theme) => ({
    root: {
      textTransform: 'uppercase',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightMedium,
      marginRight: theme.spacing(4),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        borderBottom: '1px solid silver',
        opacity: 1,
      },
      '&$selected': {
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#40a9ff',
      },
    },
    selected: {},
  }))((props) => <Tab disableRipple {...props} />);

  const category_data = [
    {
      label: 'All',
      value: '/',
      disabled: false,
    },
    {
      label: 'Phone',
      value: 'phone',
      disabled: false,
    },
    {
      label: 'Electronics',
      value: 'electronics',
      disabled: false,
    },
    {
      label: 'Vegetable',
      value: 'vegetable',
      disabled: false,
    },
    {
      label: 'Suplements',
      value: 'suplements',
      disabled: true,
    },
    {
      label: 'Category',
      value: 'category',
      disabled: true,
    },
  ];

  const onCategoryTabClick = (url) => {
    if (['phone', 'vegetable', 'electronics'].includes(url)) {
      router.push(`/products/${url}`);
    }
    if (url === '/') {
      router.push(`/products`);
    }
  };

  return (
    <>
      <AntTabs
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"
        variant="scrollable"
        scrollButtons="off"
        indicatorColor="primary"
        textColor="primary"
      >
        {category_data.map((item) => (
          <AntTab
            disabled={item.disabled}
            onClick={() => onCategoryTabClick(item.value)}
            value={item.value}
            key={item.value}
            label={item.label}
          />
        ))}
      </AntTabs>
    </>
  );
};

export default CategoryTabs;
