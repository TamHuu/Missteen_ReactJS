import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import { Avatar, Button, TextField } from "@material-ui/core";
import { useState } from "react";
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          style={{ color: "red" }}
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function DialogEdit({ dataEdit, title, onClose }) {
  return (
    <div>
      <Dialog
        aria-labelledby="customized-dialog-title"
        open={true}
        onClose={onClose}
      >
        <DialogTitle id="customized-dialog-title">{title}</DialogTitle>

        <DialogContent dividers>
          <Typography
            gutterBottom
            style={{
              textAlign: "-webkit-center",
              width: "551px",
              height: "300px",
            }}
          >
            <Avatar
              src={dataEdit.img}
              alt="Cindy Baker"
              variant="square"
              style={{ width: "300px", height: "300px" }}
            />
            {/* )} */}
          </Typography>
          <div className="container_info" style={{ display: "grid" }}>
            <TextField
              type="number"
              style={{ margin: "20px 0" }}
              label="Số báo danh"
              id="TenDanhMuc"
              variant="outlined"
              defaultValue={dataEdit.sbd}
            />

            <TextField
              style={{ margin: "20px 0" }}
              label="Họ và tên"
              id="TenDanhMuc"
              variant="outlined"
              maxRows={4}
              defaultValue={dataEdit.name}
            />

            <TextField
              style={{ margin: "20px 0" }}
              label="Năm sinh"
              id="NamSinh"
              variant="outlined"
              maxRows={4}
              defaultValue={dataEdit.born}
            />

            <TextField
              style={{ margin: "20px 0" }}
              label="Email"
              id="NamSinh"
              variant="outlined"
              maxRows={4}
              defaultValue={dataEdit.email}
            />

            <TextField
              type="number"
              style={{ margin: "20px 0" }}
              label="Số điện thoại"
              id="NamSinh"
              variant="outlined"
              maxRows={4}
              defaultValue={dataEdit.sdt}
            />

            <TextField
              style={{ margin: "20px 0" }}
              label="Nơi ở hiện nay"
              id="NamSinh"
              variant="outlined"
              maxRows={4}
              defaultValue={dataEdit.address}
            />

            <TextField
              style={{ margin: "20px 0" }}
              label="Nghề nghiệp"
              id="NamSinh"
              variant="outlined"
              maxRows={4}
              defaultValue={dataEdit.jobs}
            />

            <TextField
              style={{ margin: "20px 0" }}
              label="Quốc tịch"
              id="email"
              variant="outlined"
              maxRows={4}
              defaultValue={dataEdit.nation}
            />

            <TextField
              style={{ margin: "20px 0" }}
              label="Chiều cao"
              id="Sdt"
              variant="outlined"
              maxRows={4}
              defaultValue={dataEdit.height}
            />

            <TextField
              style={{ margin: "20px 0" }}
              label="Cân nặng"
              id="born"
              variant="outlined"
              maxRows={4}
              defaultValue={dataEdit.weight}
            />

            <TextField
              style={{ margin: "20px 0" }}
              label="Bằng cấp"
              id="jobs"
              variant="outlined"
              maxRows={4}
              defaultValue={dataEdit.education}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button style={{ backgroundColor: "red", color: "white" }}>
            Thoát
          </Button>
          <Button style={{ backgroundColor: "blue", color: "white" }}>
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
