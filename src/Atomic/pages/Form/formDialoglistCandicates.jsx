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

export default function DialogMissTeen({ user, onClose, title }) {
  return (
    <div>
      <Dialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={true}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={onClose}
          style={{ color: "black" }}
        >
          {title}
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
              <b>S??? b??o danh:</b> <label> {user.sbd}</label>
            </Typography>
            <Typography gutterBottom>
              <b>H??? t??n:</b>
              <label>{user.name} </label>
            </Typography>

            <Typography gutterBottom>
              <b>N??m sinh: </b>
              <label> {user.born}</label>
            </Typography>
            <Typography gutterBottom>
              <b>Email:</b>
              <label> {user.email}</label>
            </Typography>
            <Typography gutterBottom>
              <b>S??T :</b>
              <label> {user.sdt}</label>
            </Typography>
            <Typography gutterBottom>
              <b>?????a ch??? :</b>
              <label> {user.address}</label>
            </Typography>
            <Typography gutterBottom>
              <b>C??ng vi???c :</b>
              <label> {user.jobs}</label>
            </Typography>
            <Typography gutterottom>
              <b>Qu???c t???ch :</b>
              <label> {user.nation}</label>
            </Typography>
            <Typography gutterBottom>
              <b>Chi???u cao :</b>
              <label> {user.height}</label>
            </Typography>
            <Typography gutterBottom>
              <b>C??n n???ng :</b>
              <label> {user.weight}</label>
            </Typography>
            <Typography gutterBottom>
              <b>Tr??nh ????? h???c v???n :</b>
              <label> {user.education}</label>
            </Typography>
          </div>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
