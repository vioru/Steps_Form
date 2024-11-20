
import React, { useEffect, useState } from "react";
import { StepOne, StepTwo, StepThree, StepFive, StepFour } from "../Steps/Steps";
import "../FormSteps/FormSteps.modules.css";


const FormSteps = () => {
  const [step, setStep] = useState(0); 
  const [error, setError] = useState(""); 
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    animal: "",
    animalCount: "",
    profession: "",
  });

  useEffect(() => {
    console.log("Paso actual:", step);
    console.log("Datos del formulario actualizados:", formData);
  }, [step]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const steps = [
    <StepOne formData={formData} handleChange={handleChange} />,
    <StepTwo formData={formData} handleChange={handleChange} />,
    <StepThree formData={formData} handleChange={handleChange} />,
    formData.animal !== "No me gustan" && <StepFour formData={formData} handleChange={handleChange} />,
    <StepFive formData={formData} handleChange={handleChange} />,
  ].filter(Boolean); 

  const isValidStep = () => {
    const validations = [
      formData.fullName && formData.email, 
      formData.address && formData.phone, 
      formData.animal, 
      formData.animal !== "No me gustan" ? formData.animalCount : true, 
      formData.profession, 
    ];
    return validations[step];
  };

  const nextStep = () => {
    if (isValidStep()) {
      setStep((prev) => prev + 1);
      setError("")
    } else {
      setError("Por favor completa todos los campos.");
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidStep()) {
      console.log("Datos del formulario:", formData);
      alert("¡Formulario enviado con éxito!");
      setFormData({
        fullName: "",
        email: "",
        address: "",
        phone: "",
        animal: "",
        animalCount: "",
        profession: "",
      });
      setStep(0);
    } else {
      setError("Por favor completa todos los campos.");
    }
  };

  return (
    <form className="multi-step-form" onSubmit={handleSubmit}>
      {steps[step]}
      <div className="buttons">
        {step > 0 && <button type="button" onClick={prevStep}>Atrás</button>}
        {step < steps.length - 1 && (
          <button type="button" onClick={nextStep}>Siguiente</button>
        )}
        {step === steps.length - 1 && <button type="submit">Enviar</button>}
      </div>
      {error? <p className="errors">{error}</p>: ""}
    </form>
  );
};

export default FormSteps;
