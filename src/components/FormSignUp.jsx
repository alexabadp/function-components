import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Switch } from "@mui/material";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";

function FormSignUp() {
  return (
    <form>
      <TextField
        id="name"
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="lastName"
        label="Apellido"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormGroup>
        <FormControlLabel
          label="Promociones"
          control={<Switch defaultChecked />}
        />

        <FormControlLabel
          label="Novedades"
          control={<Switch defaultChecked />}
        />
      </FormGroup>

      <Button variant="contained">Resgistrarse</Button>
    </form>
  );
}

export default FormSignUp;