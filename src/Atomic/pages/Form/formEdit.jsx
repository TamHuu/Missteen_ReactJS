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

export default function DialogEdit({ dataEdit,title,onClose} ) {

  return (
    <div>
      <Dialog 
        aria-labelledby="customized-dialog-title"
        open={true}
        onClose={onClose}
      >
       
          <DialogTitle id="customized-dialog-title">
         {title}
        </DialogTitle>
      
      
        <DialogContent
          dividers
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography gutterBottom>
            <Avatar
              src={dataEdit.img}
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
              <b>Số báo danh:</b> 
              <TextField  id="standard-multiline-flexible"
       
          multiline
          maxRows={4}
           value={dataEdit.sbd} />
            </Typography>
            <Typography gutterBottom>
              <b>Họ tên:</b>
              <TextField value={dataEdit.name}/> 
            </Typography>

            <Typography gutterBottom>
              <b>Năm sinh: </b>
              <TextField value={dataEdit.born}/> 
            </Typography>
            <Typography gutterBottom>
              <b>Email:</b>
              <TextField value= {dataEdit.email}/>
            </Typography>
            <Typography gutterBottom>
              <b>SĐT :</b>
              <TextField value={dataEdit.sdt}/>
            </Typography>
            <Typography gutterBottom>
              <b>Địa chỉ :</b>
              <TextField  value={dataEdit.address}/>
            </Typography>
            <Typography gutterBottom>
              <b>Công việc :</b>
              <TextField value={dataEdit.jobs}/> 
            </Typography>
            <Typography gutterottom>
              <b>Quốc tịch :</b>
              <TextField value={dataEdit.nation}/> 
            </Typography>
            <Typography gutterBottom>
              <b>Chiều cao :</b>
              <TextField value={dataEdit.height}/> 
            </Typography>
            <Typography gutterBottom>
              <b>Cân nặng :</b>
              <TextField value={dataEdit.weight}/> 
            </Typography>
            <Typography gutterBottom>
              <b>Trình độ học vấn :</b>
              <TextField value= {dataEdit.education}/>
            </Typography>
          </div>
        </DialogContent>
        <DialogActions><Button style={{backgroundColor:'red'}}>Lưu</Button></DialogActions>
      </Dialog>
    </div>
  );
}
