import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function createStudentData(fname, lname) {
  return { fname, lname };
}

const studentRows = [
  createStudentData("Laiba", "Ovais"),
  createStudentData("Bisma", "Mansoor"),
  createStudentData("Adeena", "Lathiya"),
  createStudentData("Rija", "Shaheed"),
  createStudentData("Anum", "Fatima"),
];
const studentHeading = {
  fname: "First Name",
  lname: "Last Name",
};

function createBookData(
  bookName,
  author,
  borrowedBy,
  dateOfBorrow,
  expectedDateOfReturn
) {
  return { bookName, author, borrowedBy, dateOfBorrow, expectedDateOfReturn };
}
const bookRows = [
  createBookData(
    "Data Science",
    "John Doe",
    "Laiba Ovais",
    new Date().toLocaleDateString(),
    "3/20/22"
  ),
  createBookData(
    "Python",
    "Albert",
    "Bisma Mansoor",
    new Date().toLocaleDateString(),
    "3/20/22"
  ),
  createBookData(
    "Data Science",
    "John Doe",
    "Rija Shaheed",
    new Date().toLocaleDateString(),
    "3/20/22"
  ),
  createBookData(
    "Accounting",
    "Ahmed Raza",
    "Laiba Ovais",
    new Date().toLocaleDateString(),
    "3/20/22"
  ),
];
const bookHeading = {
  bookName: "Book Name",
  author: "Author",
  borrowedBy: "Borrowed By",
  dateOfBorrow: "Date Of Borrow",
  expectedDateOfReturn: "Expected Date Of Return",
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsPage({ firstTab, secondTab }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Students" {...a11yProps(0)} />
          <Tab label="Books" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {firstTab}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {secondTab}
      </TabPanel>
    </Box>
  );
}
