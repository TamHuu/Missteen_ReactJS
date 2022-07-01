import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

import { lists } from "../service/list";

import { Grid, IconButton } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DialogMissTeen from "./Form/formDialoglistCandicates";
import DialogEdit from "./Form/formEdit";
import AlertDialog from "./Form/formDelete";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DenseTable() {
  const classes = useStyles();
  const [DataTable, setDataTable] = useState(lists);
  const [user, setUser] = useState({});
  const [dataDialog, setDataDialog] = useState({});
  const [open, setOpen] = useState(false);

  // view
  const [edit, setEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState({});

  const handleChange = (item) => {
    setOpen(true);
    setUser(item);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const ViewHandler = (id) => {
    const idRow = DataTable.findIndex((item) => item.id === id);
    setDataDialog(DataTable[idRow]);
  };
  console.log(user);
  // Sua
  const editHandleClose = () => {
    setEdit(false);
  };

  const handleChangeEdit = (item) => {
    setDataEdit(item);
    setEdit(true);
  };
  //Xóa
  const removeChangeHandler = (id) => {
    setDataTable(DataTable.filter((item) => item.id !== id));
    // setRemove(id);
  };

  return (
    <>
      {edit && (
        <DialogEdit
          dataEdit={dataEdit}
          onClose={editHandleClose}
          title={"Chinh sua"}
        />
      )}

      {open && (
        <DialogMissTeen
          onClose={handleClose}
          onView={ViewHandler}
          user={user}
          title={"Quản lý thí sinh"}
        />
      )}

      <TableContainer component={Paper} style={{ margin: " 71px 0" }}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: "20px" }} align="left">
                STT
              </TableCell>
              <TableCell style={{ fontSize: "20px" }} align="left">
                Tên thí sinh
              </TableCell>
              <TableCell style={{ fontSize: "20px" }} align="center">
                Hình ảnh
              </TableCell>

              <TableCell style={{ fontSize: "20px" }} align="left">
                Năm sinh
              </TableCell>
              <TableCell style={{ fontSize: "20px" }} align="left">
                Chiều cao
              </TableCell>
              <TableCell style={{ fontSize: "20px" }} align="left">
                Cân nặng
              </TableCell>
              <TableCell style={{ fontSize: "20px" }} align="left">
                Công việc
              </TableCell>
              <TableCell style={{ fontSize: "20px" }} align="left">
                Thao tác
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lists.map((list) => (
              <TableRow>
                <TableCell component="th" scope="row" align="left">
                  {list.id}
                </TableCell>
                <TableCell align="left">{list.name}</TableCell>
                <TableCell align="center">
                  <Avatar
                    style={{ width: "100px", height: "90px" }}
                    src={list.img}
                    variant="square"
                  ></Avatar>
                </TableCell>
                {/* <TableCell align="left">{list.age}</TableCell> */}
                <TableCell align="left">{list.born}</TableCell>
                <TableCell align="left">{list.height}</TableCell>
                <TableCell align="left">{list.weight}</TableCell>
                <TableCell align="left">{list.jobs}</TableCell>
                <TableCell align="left">
                  <Grid container>
                    <Grid item xs="auto" spacing={2}>
                      {" "}
                      <IconButton
                        variant="contained"
                        color="primary"
                        style={{ margin: 5 }}
                        onClick={() => {
                          ViewHandler(list.id);
                          handleChange(list);
                        }}
                      >
                        <Visibility />
                      </IconButton>
                    </Grid>
                    <Grid item xs="auto" spacing={2}>
                      <IconButton
                        variant="contained"
                        color="primary"
                        style={{ margin: 5 }}
                        onClick={() => {
                          handleChangeEdit(list);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                    </Grid>
                    <Grid item xs="auto" spacing={2}>
                      <AlertDialog
                        id={list.id}
                        onRemove={removeChangeHandler}
                        title={"Bạn có chắc muốn xóa danh mục này ?"}
                      />
                    </Grid>
                  </Grid>
                  {/* Xem */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
