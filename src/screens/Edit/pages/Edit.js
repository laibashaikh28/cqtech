import * as React from "react";
import TabsPage from "../../Tabs/Tabs";
import EditEntites from "../components/Edit";

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

export default function ListPage() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <TabsPage
      firstTab={
        <EditEntites
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
          heading={studentHeading}
          rows={studentRows}
          student={true}
        />
      }
      secondTab={
        <EditEntites
          heading={bookHeading}
          rows={bookRows}
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
        />
      }
    />
  );
}
