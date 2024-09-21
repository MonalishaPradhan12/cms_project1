import React from "react";
import { Typography, TextField, Button, Box, Container } from "@mui/material";
import FormCard from "./FormCard";
import { useForm } from "react-hook-form";
import FormWithFieldset from "./FormWithFieldset";

const Form = () => {
  return (
    <>
    <Container>
      <FormCard title="Application Form"/>
     <FormWithFieldset title="Personal Information" hello="mother name"/>
     </Container>
    </>
  );
};

export default Form;
