import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Settings from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import DetailsIcon from '@mui/icons-material/Details';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';

const FormIcon = (iconName: any): React.ReactNode => {
  if (typeof iconName === 'string') {
    switch (iconName) {
      case 'delete':
        return <DeleteIcon />;
      case 'settings':
        return <Settings />;
      case 'add':
        return <AddIcon />;
      case 'details':
        return <DetailsIcon />;
      case 'info':
        return <InfoIcon />;
      case 'search':
        return <SearchIcon />;
      default:
        <Settings />;
    }
  }
  return <Settings />;
};

export default FormIcon;
