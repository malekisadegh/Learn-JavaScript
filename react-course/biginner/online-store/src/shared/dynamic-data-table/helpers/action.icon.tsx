import React from 'react';
import Icon from '@mui/material/Icon';
import { imagePath } from '../../../helpers/asset.helper';
import { createSvgIcon, SvgIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Settings from '@mui/icons-material/Settings';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DetailsIcon from '@mui/icons-material/Details';
import InfoIcon from '@mui/icons-material/Info';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

const ActionIcon = (elm: any) => {
  const iconName = elm.icon || elm.props?.icon?.icon;

  if (typeof iconName === 'string') {
    switch (iconName) {
      case 'delete':
        return <DeleteIcon color="error" />;
      case 'settings':
        return <Settings color="info" />;
      case 'add':
        return <AddCircleOutlineIcon color="success" />;
      case 'details':
        return <DetailsIcon color="warning" />;
      case 'info':
        return <InfoIcon color="info" />;
      case 'more-vert':
        return <MoreVertIcon color="primary" />;
      case 'more-horiz':
        return <MoreHorizIcon color="primary" />;
      case 'more-time':
        return <MoreTimeIcon color="primary" />;
      case 'expand-circle-down':
        return <ExpandCircleDownIcon color="primary" />;
      default:
        <Settings />;
    }
  } else {
    return elm.props.icon;
  }
};

export default ActionIcon;
