import * as React from 'react';
import {
  DataGrid,
  DataGridProps,
  GridActionsCellItem,
  GridEventListener,
} from '@mui/x-data-grid';
import { DataTableAction, DataTableColumn } from '../models/column.type';
import ActionIcon from '../helpers/action.icon';
import DeleteIcon from '../icons/delete.svg';
import '../data.table.style.scss';
import { useTranslation } from 'react-i18next';

interface DataTableProps {
  columns: any[];
  rows: any[];
  rowDetail?: any;
}

export default function DynamicDataTable(props: DataTableProps) {
  const [t] = useTranslation(['common']);

  const tableConfig = {
    checkboxSelection: false,
    disableSelectionOnClick: false,
    autoHeight: true,
  };

  const gridLocale = {
    MuiTablePagination: {
      labelDisplayedRows: ({ from, to, count }) => {
        return `${from} - ${to} ${t('of.more.than')} ${count}`;
      },
      labelRowsPerPage: t('rows.per.page'),
      // footerRowSelected: (count: number) => `${t('row.selected')} ${count}`,
    },
  };

  const CreateActionBtn = (params, actions: DataTableAction) => {
    if (actions.hasOwnProperty('key')) {
      return actions;
    }

    const handleActionClick = (act, row) => {
      act.callback(row);
    };

    if (!actions.icon && actions.label) {
      return actions;
    }
    const _action = (
      <GridActionsCellItem
        icon={ActionIcon(actions)}
        label={actions.label || ''}
        onClick={(p) => handleActionClick(actions, params)}
        showInMenu={false}
      />
    );

    return _action;
  };

  const prepareColumns = (row) => {
    return props.columns.map((col) => {
      return new DataTableColumn(col, CreateActionBtn);
    });
  };

  const getDetailPanelHeight = React.useCallback(() => 400, []);

  const getDetailPanelContent = React.useCallback<
    NonNullable<DataGridProps['getDetailPanelContent']>
  >(({ row }) => props.rowDetail, []);

  const columns = prepareColumns(props.columns);
  return (
    <>
      {props.rows && props.rows.length > 0 && (
        <div
          style={{ display: 'flex', height: '100%', width: '100%' }}
          className="data-table-container"
        >
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              columns={columns}
              rows={props.rows || []}
              {...tableConfig}
              localeText={gridLocale}
            />
          </div>
        </div>
      )}
    </>
  );
}
