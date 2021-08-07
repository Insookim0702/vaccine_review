import React from "react";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "100%",
    },
  })
);

const WriteReviewPresenter = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    muscle: false, //근육통
    whirl: false, //어지러움.
    fever: false, //발열
    headache: false, //두통
  });
  const { muscle, whirl, fever, headache } = state;
  const error = [muscle, whirl, fever, headache].filter((v) => v).length !== 2;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth="600px" width="100%" flexDirection="column">
        <Box width="100%">
          <h3>증상</h3>
          <FormControlLabel
            control={
              <Checkbox
                checked={muscle}
                onChange={handleChange}
                name="muscle"
              />
            }
            label="근육통"
          />
          <FormControlLabel
            control={
              <Checkbox checked={whirl} onChange={handleChange} name="whirl" />
            }
            label="어지러움"
          />
          <FormControlLabel
            control={
              <Checkbox checked={fever} onChange={handleChange} name="fever" />
            }
            label="발열"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={headache}
                onChange={handleChange}
                name="headache"
              />
            }
            label="두통"
          />
        </Box>
        <Box width="100%">
          <h3>제목</h3>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            className={classes.textField}
          />
        </Box>
        <Box>
          <h3>내용</h3>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={8}
            defaultValue="Default Value"
            className={classes.textField}
            variant="outlined"
          />
        </Box>
        <Box>
          <h3>내용</h3>
        </Box>
        <Button color="primary">저장</Button>
      </Box>
    </Box>
  );
};
export default WriteReviewPresenter;
