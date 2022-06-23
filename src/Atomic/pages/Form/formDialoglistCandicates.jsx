import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import { Avatar } from "@material-ui/core";
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

export default function DialogMissTeen({ user, onClose}) {

  return (
    <div>
      <Dialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={true}
      >
        <DialogTitle id="customized-dialog-title" onClose={onClose}>
          THÔNG TIN THÍ SINH
        </DialogTitle>
        <DialogContent
          dividers
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography gutterBottom>
            <Avatar
              src={user.img}
              alt="Cindy Baker"
              variant="square"
              style={{
                width: "250px",
                height: "309px",
              }}
            />
            {/* )} */}
          </Typography>
          <div className="container_info" style={{ marginLeft: "30px" }}>
            <Typography gutterBottom>
              <b>Số báo danh:</b> <label> {user.sbd}</label>
            </Typography>
            <Typography gutterBottom>
              <b>Họ tên:</b>
              <label>{user.name} </label>
            </Typography>

            <Typography gutterBottom>
              <b>Năm sinh: </b>
              <label> {user.born}</label>
            </Typography>
            <Typography gutterBottom>
              <b>Email:</b>
              <label> {user.email}</label>
            </Typography>
            <Typography gutterBottom>
              <b>SĐT :</b>
              <label> {user.sdt}</label>
            </Typography>
            <Typography gutterBottom>
              <b>Địa chỉ :</b>
              <label> {user.address}</label>
            </Typography>
            <Typography gutterBottom>
              <b>Công việc :</b>
              <label> {user.jobs}</label>
            </Typography>
            <Typography gutterottom>
              <b>Quốc tịch :</b>
              <label> {user.nation}</label>
            </Typography>
            <Typography gutterBottom>
              <b>Chiều cao :</b>
              <label> {user.height}</label>
            </Typography>
            <Typography gutterBottom>
              <b>Cân nặng :</b>
              <label> {user.weight}</label>
            </Typography>
            <Typography gutterBottom>
              <b>Trình độ học vấn :</b>
              <label> {user.education}</label>
            </Typography>
          </div>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
