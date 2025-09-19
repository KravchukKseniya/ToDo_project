import { AppBar, Button, Toolbar } from "@mui/material";

export default function Header() {
    return <AppBar>
      <Toolbar>
        <Button variant="outlined" color="inherit" href="/">Board</Button>
        <Button variant="outlined" color="inherit" href="/backlog" sx={{ ml: 2 }}>Back Log</Button>
      </Toolbar>
    </AppBar>;
  }