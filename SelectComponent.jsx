import React, { useState } from "react";
import "../Components/AboutUs(2).css"
function SelectComponent() {
  // Define options for each symptom
  const symptomOptions = {
    symptom1: ["Sneezing", "Itchy throat", "Rashes", "Watery eyes", "Runny nose"],
    symptom2: ["Fever", "Cough", "Headache", "Fatigue", "Nausea"],
    symptom3: ["Sore throat", "Runny nose", "Muscle pain", "Loss of taste", "Loss of smell"],
    symptom4: ["Shortness of breath", "Chest pain", "Dizziness", "Joint pain", "Stomach ache"],
    symptom5: ["Rash", "Swollen glands", "Blurry vision", "Constipation", "Diarrhea"]
  };

  // Initialize state for selected symptoms
  const [selectedSymptoms, setSelectedSymptoms] = useState({
    symptom1: "",
    symptom2: "",
    symptom3: "",
    symptom4: "",
    symptom5: ""
  });

  // Handle select change for each symptom
  const handleSelectChange = (event, symptom) => {
    const { value } = event.target;
    setSelectedSymptoms((prevSelectedSymptoms) => ({
      ...prevSelectedSymptoms,
      [symptom]: value
    }));
  };

  // Generate options JSX for a given symptom
  const generateOptions = (symptom) => {
    return symptomOptions[symptom].map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  // Generate list of selected symptoms
  const selectedSymptomsList = Object.values(selectedSymptoms).filter(Boolean);

  return (
    <div>
      <div>
    <div class="fullMain">
      <div class="leftSideMain">
        <h1>Multiple disease prediction system</h1>
        <hr/>
        <div>
          <p class="leftPara">General Symptom</p>
          <p class="leftPara">Diabetis Prediction</p>
          <p class="leftPara">Heart Disease Prediction</p>
          <p class="leftPara">Parkinsons Prediction</p>
        </div>
      </div>
      <div class="SymptomMain">
        <h1 class="symptomHeading">Disease Prediction From Symptoms          .</h1>
        <div class="Symptom">
          <label>Symptom 01</label>
          <select class="selectStyle"
            value={selectedSymptoms.symptom1}
            onChange={(event) => handleSelectChange(event, "symptom1")}
          >
            {generateOptions("symptom1")}
          </select>
        </div>
        <div class="Symptom">
          <label>Symptom 02</label>
          <select class="selectStyle"
            value={selectedSymptoms.symptom2}
            onChange={(event) => handleSelectChange(event, "symptom2")}
          >
            {generateOptions("symptom2")}
          </select>
        </div>
        <div class="Symptom">
          <label>Symptom 03</label>
          <select class="selectStyle"
            value={selectedSymptoms.symptom3}
            onChange={(event) => handleSelectChange(event, "symptom3")}
          >
            {generateOptions("symptom3")}
          </select>
        </div>
        <div class="Symptom">
          <label>Symptom 04</label>
          <select class="selectStyle"
            value={selectedSymptoms.symptom4}
            onChange={(event) => handleSelectChange(event, "symptom4")}
          >
            {generateOptions("symptom4")}
          </select>
        </div>
        <div class="Symptom">
          <label>Symptom 05</label>
          <select class="selectStyle"
            value={selectedSymptoms.symptom5}
            onChange={(event) => handleSelectChange(event, "symptom5")}
          >
            {generateOptions("symptom5")}
          </select>
          {/* <button class="symptomSubmitButton">Submit</button> */}
        </div>
      </div>
    </div>
      <button class="symptomSubmitButton">Submit</button>
    {/* <div class="container">
    </div> */}
    </div>
    </div>
  );
}

export default SelectComponent;
