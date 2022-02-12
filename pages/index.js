import { Alert, Container, Snackbar } from "@mui/material"
import TodoForm from "../components/TodoForm"
import TodoList from "../components/TodoList"
import { useState } from "react"
import { TodoContext } from "../contexts/TodoContext";
export default function Home() {
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [todo, setTodo] = useState({ title: '', detail: '' }); 
  const showAlert = (type, msg) => {
    setAlertType(type);
    setAlertMessage(msg);
    setOpen(true);
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <TodoContext.Provider value={{ showAlert, todo, setTodo}}>
      <Container maxWidth="sm"
        style={{ backgroundColor: '#C1C1C1', paddingBottom:"40px"}}>
        <TodoForm />
        <Snackbar 
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={alertType} sx={{ width: '100%' }}>
            {alertMessage}
          </Alert>
        </Snackbar>
        <TodoList />
      </Container>
    </TodoContext.Provider>
  )
}