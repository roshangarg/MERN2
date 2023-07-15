import { Box, Button, Card, TextField } from "@mui/material";
import React, { useState } from "react";

export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
  };

  return (
    <div>
      <Box>
        <Card>
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              id="outlined-basic"
              label="Title"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              id="outlined-basic"
              label="Title"
              variant="outlined"
            />
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </form>
        </Card>
      </Box>
    </div>
  );
}
