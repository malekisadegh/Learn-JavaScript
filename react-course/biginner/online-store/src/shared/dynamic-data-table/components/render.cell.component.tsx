import { GridRenderCellParams } from '@mui/x-data-grid';
import React from 'react';
import CellSwithComponent from './cell-templates/cell.switch.component';

interface prop {
  type: string;
  checked: boolean;
  callback: Function;
}

export default class RenderCellComponent {
  static renderSwithBotton = (props: GridRenderCellParams<any>) => {
    return <CellSwithComponent {...props} />;
  };
}
