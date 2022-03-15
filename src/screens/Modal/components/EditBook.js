import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function EditBook({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Edit Book</h2>

          <TextField id="filled-basic" label="Book Name" variant="filled" />
          <TextField id="filled-basic" label="Author" variant="filled" />
          <TextField id="filled-basic" label="Borrowed By" variant="filled" />
          <TextField
            id="filled-basic"
            label="Date Of Borrow"
            variant="filled"
          />
          <TextField
            id="filled-basic"
            label="Expected Date Of Return"
            variant="filled"
          />
          <Box>
            <Button sx={{ m: 3 }} variant="contained" onClick={handleClose}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
