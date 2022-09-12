/* eslint-disable react/jsx-no-duplicate-props */
import { React, useState } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { signUp } from "../../../services/api";
import { Caixa } from "./styles";

export default function SignUpForm() {
  const [isDisabled, setDisabled] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisabled(true);
    const data = new FormData(event.currentTarget);
    const form = {
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    };
    console.log(form);
    try {
      const response = await signUp(form);
      console.log(response.data);
      setDisabled(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Caixa>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="false"
            autoFocus={false}
            disabled={isDisabled}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="false"
            autoFocus={false}
            disabled={isDisabled}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="false"
            autoFocus={false}
            disabled={isDisabled}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Caixa>
    </>
  );
}
