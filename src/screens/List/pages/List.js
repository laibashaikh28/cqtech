import * as React from "react";
import ListEntites from "../components/List";
import TabsPage from "../../Tabs/Tabs";

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
  return (
    <TabsPage
      firstTab={<ListEntites heading={studentHeading} rows={studentRows} />}
      secondTab={<ListEntites heading={bookHeading} rows={bookRows} />}
    />
  );
}
