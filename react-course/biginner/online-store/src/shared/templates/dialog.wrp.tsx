import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

export interface DialogProps {
  id?: string;
  children?: React.ReactNode;
  handleClose: () => void;
  open?: boolean;
  title?: string;
  fullWidth?: boolean;
  maxWidth?: any;
}

function DialogTitleWrp(props: DialogProps) {
  const { title, handleClose, ...other } = props;

  return (
    <DialogTitle
      className="dialog-title"
      sx={{
        m: 0,
        p: 2,
      }}
      {...other}
    >
      {title}
      {handleClose ? (
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function WrpDialog(props: DialogProps) {
  const { id, title, fullWidth, maxWidth, open, handleClose, children } = props;
  return (
    <>
      <Dialog
        fullWidth={true}
        maxWidth={'lg'}
        open={open}
        onClose={handleClose}
        id={id}
      >
        <DialogTitleWrp
          title={title}
          handleClose={handleClose}
        ></DialogTitleWrp>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </>
  );
}
