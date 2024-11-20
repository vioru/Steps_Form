import React from "react";

// Paso 1: Información Personal
export const StepOne = ({ formData, handleChange }) => (
  <div className="step">
    <h2>Paso 1: Información Personal</h2>
    <label>
      Nombre Completo:
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
  
      />
    </label>
    <label>
      Email:
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
       
      />
    </label>
  </div>
);

// Paso 2: Dirección y Teléfono
export const StepTwo = ({ formData, handleChange }) => (
  <div className="step">
    <h2>Paso 2: Dirección y Teléfono</h2>
    <label>
      Dirección:
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        
      />
    </label>
    <label>
      Teléfono:
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        
      />
    </label>
  </div>
);

// Paso 3: Preferencias de Animales
export const StepThree = ({ formData, handleChange }) => (
  <div className="step">
    <h2>Paso 3: Preferencias de Animales</h2>
    <label>
      ¿Qué animal te gusta?
      <select
        name="animal"
        value={formData.animal}
        onChange={handleChange}
        
      >
        <option value="">Selecciona una opción</option>
        <option value="Gatos">Gatos</option>
        <option value="Perros">Perros</option>
        <option value="Aves">Aves</option>
        <option value="Peces">Peces</option>
        <option value="No me gustan">No me gustan</option>
      </select>
    </label>
  </div>
);

// Paso 4: Cantidad de Animales (si aplica)
export const StepFour = ({ formData, handleChange }) => (
  <div className="step">
    <h2>Paso 4: Cantidad de Animales</h2>
    <label>
      ¿Cuántos tienes?
      <input
        type="number"
        name="animalCount"
        value={formData.animalCount}
        onChange={handleChange}
        
      />
    </label>
  </div>
);

// Paso 5: Profesión
export const StepFive = ({ formData, handleChange }) => (
  <div className="step">
    <h2>Paso 5: Profesión</h2>
    <label>
      Profesión:
      <input
        type="text"
        name="profession"
        value={formData.profession}
        onChange={handleChange}
        required
      />
    </label>
  </div>
);
