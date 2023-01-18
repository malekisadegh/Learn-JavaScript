import { GridAlignment } from '@mui/x-data-grid';
import { info } from 'console';
import { t } from 'i18next';

enum ColumnType {
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  DateTime = 'dateTime',
  Date = 'date',
  Actions = 'actions',
  SingleSelect = 'singleSelect',
}

class DataTableAction {
  label: string;
  icon: string;
  callback: Function;
  showInMenu?: boolean;
  constructor(opt) {
    this.label = opt.label;
    this.icon = opt.icon;
    this.callback = opt.callback;
    this.showInMenu = opt.showInMenu ? opt.showInMenu : false;
  }
}

class DataTableColumn {
  field: string;
  type?: ColumnType;
  width?: number;
  valueOptions?: any;
  actions?: DataTableAction[];
  editable?: boolean;
  getActions?: any;
  flex?: number;
  description?: string;
  headerName?: string;
  headerClassName?: string;
  cellClassName?: string;
  headerAlign?: GridAlignment;
  sortable?: boolean;
  valueGetter?: any;
  renderCell?: any;
  callback?: any;

  constructor(options, CreateActionBtn) {
    this.field = options.field;
    this.type = options.type;
    if (options.width) {
      this.width = options.width;
    } else {
      this.flex = 1;
    }
    this.valueOptions = options.valueOptions;
    this.actions = options.actions;
    this.editable = options.editable || false;
    this.headerName = options.headerName || options.field;
    this.description = options.description || '';
    this.headerClassName = options.headerClassName || 'data-table-header';
    this.headerAlign = options.headerAlign || 'center';
    this.sortable = options.sortable || true;
    this.valueGetter = options.valueGetter;

    this.callback = options.callback;
    this.cellClassName = options.cellClassName || 'data-table-cell';
    if (options.type !== ColumnType.Actions) {
      this.renderCell = options.renderCell;
    }
    this.getActions = (params) => {
      return options.actions.map((ac) => {
        const __actions = CreateActionBtn(params, ac);
        return __actions;
      });
    };
  }
}

export { ColumnType, DataTableAction, DataTableColumn };
