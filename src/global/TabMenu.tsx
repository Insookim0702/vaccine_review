import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

export default function DisabledTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="커뮤니티" component={Link} to="/"></Tab>

        <Tab label="살펴보기" component={Link} to="/observe" />

        <Tab label="접종현황" component={Link} to="/situation" />

        <Tab label="마이" component={Link} to="/my" />

        {/* <Tab label="Disabled" disabled /> */}
      </Tabs>
    </Paper>
  );
}
