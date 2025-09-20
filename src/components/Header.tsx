import { Add } from "@mui/icons-material";
import { AppBar, Button, Toolbar } from "@mui/material";

export default function Header() {
    return <AppBar>
      <Toolbar>
        <Button variant="outlined" color="inherit" href="/">Board</Button>
        <Button variant="outlined" color="inherit" href="/backlog" sx={{ ml: 2 }}>Back Log</Button>
        <Button variant="outlined" color="inherit" href="#" sx={{ ml: 2 }} startIcon={<Add />}>New Task</Button>
      </Toolbar>
    </AppBar>;
  }