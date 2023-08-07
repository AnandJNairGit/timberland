import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Centered from "./Centered";
import { Box, Typography } from "@mui/material";

export default function Modal({ title, children, open, onClose }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth={true}
        maxWidth="sm"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box padding={1}>
          <Centered>
            <Typography fontSize="30px" fontWeight={500}>
              {title}
            </Typography>
          </Centered>
          <DialogContent>{children}</DialogContent>
        </Box>
      </Dialog>
    </div>
  );
}
