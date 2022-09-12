import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import SignInForm from "../Forms/Sign-In";
import SignUpForm from "../Forms/Sign-Up";

export default function RouterNavigator() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignInForm />} />
      <Route path="/sign-up" element={<SignUpForm />} />
    </Routes>
  );
}
