import React, { useState } from "react";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DialogMissTeen from "./Form/formDialoglistCandicates.jsx";
import { lists } from "../service/list.js";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    marginTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
    backgroundColor: "mediumvioletred",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    padding: "120px",
    margin: "27px",
    height: "400px",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.5",
      margin: "1px",
    },
  },

  cardContent: {
    flexGrow: 1,
    textAlign: "center",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album() {
  const classes = useStyles();
  const [DataTable, setDataTable] = useState(lists);
  const [user, setUser] = useState({});
  const [dataDialog, setDataDialog] = useState({});
  const [open, setOpen] = useState(false);
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

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Typography
        style={{
          fontSize: "50px",
          margin: "43px",
          backgroundColor: "mediumvioletred",
          width: "963px",
          marginLeft: "278px",
          color: "ghostwhite",
        }}
      >
        Danh s??ch th?? sinh
      </Typography> */}
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {lists.map((list) => (
              <Grid item key={list.id} xs={12} sm={6} md={4}>
                <Card
                  className={classes.card}
                  onClick={() => handleChange(list)}
                >
                  <CardMedia
                    style={{}}
                    className={classes.cardMedia}
                    image={list.img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {list.name}
                    </Typography>
                    <Typography>S??? b??o danh:{list.sbd}</Typography>
                    <Typography>S??? b??nh ch???n:{list.sbc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {open && (
            <DialogMissTeen
              title={"Th??ng Tin Th?? Sinh"}
              onClose={handleClose}
              onView={ViewHandler}
              user={user}
            />
          )}
        </Container>
      </main>
    </React.Fragment>
  );
}
