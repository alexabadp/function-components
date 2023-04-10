import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Switch } from "@mui/material";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { useState } from "react";

function FormSignUp({ handleSubmit }) {
  const [nombre, setNombre] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [prom, setProm] = useState(true);
  const [nov, setNov] = useState(true);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ nombre, lastName, email, prom, nov });
      }}
    >
      <TextField
        id="name"
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
      />
      <TextField
        id="lastName"
        label="Apellido"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <FormGroup>
        <FormControlLabel
          label="Promociones"
          control={
            <Switch
              checked={prom}
              onChange={(e) => setProm(e.target.checked)}
            />
          }
        />

        <FormControlLabel
          label="Novedades"
          control={
            <Switch checked={nov} onChange={(e) => setNov(e.target.checked)} />
          }
        />
      </FormGroup>

      <Button variant="contained" type="submit">
        Resgistrarse
      </Button>
    </form>
  );
}

export default FormSignUp;
