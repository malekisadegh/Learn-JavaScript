import React, { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';

export default function CellSwithComponent(props: any) {
  const [checked, setChecked] = useState(Boolean(props.value));
  useEffect(() => {
    setChecked(Boolean(props.value));
  }, [props.value]);

  const handleChange = ($event) => {
    setChecked($event.target.checked);
    try {
      props.colDef.callback({ ...$event,...props });
    } catch (e) {
      // console.log(e);
    }
  };
  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
