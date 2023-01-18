import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import AdminApiService from '../services/admin.api.services';

const AdminMenuComponent = (props) => {
  const [menuItems, setMenuItems] = useState([]);

  AdminApiService.getAdminMenu().then((responce: any) => {
    setMenuItems(responce);
  });

  return (
    <>
      <List className="transition">
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <a href={item.link}>
              <ListItemButton>
                <ListItemIcon title={item.title}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default AdminMenuComponent;
