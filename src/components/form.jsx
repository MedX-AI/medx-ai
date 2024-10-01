import React, { useState } from 'react';

const MedicalHistoryForm = () => {
  const [formData, setFormData] = useState({
    patientAge: '',
    maternalGeneticHistory: '',
    paternalGeneticHistory: '',
    maternalInheritedDisorder: '',
    paternalInheritedDisorder: '',
    bloodCellCount: '',
    respiratoryRate: '',
    heartRate: '',
    geneticTest1Result: '',
    geneticTest2Result: '',
    substanceAbuseHistory: '',
    assistedReproductiveTechnology: '',
    previousPregnancyAnomalies: '',
    whiteBloodCellCount: '',
    respiratorySymptom: '',
    cardiovascularSymptom: '',
    neurologicalSymptom: '',
    gastrointestinalSymptom: '',
    musculoskeletalSymptom: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Here you would typically send the data to an API or process it further
  };

  const radioFields = [
    { label: "Family history of genetic disorders on mother's side", name: "maternalGeneticHistory" },
    { label: "Family history of genetic disorders on father's side", name: "paternalGeneticHistory" },
    { label: "Presence of inherited disorder from mother", name: "maternalInheritedDisorder" },
    { label: "Presence of inherited disorder from father", name: "paternalInheritedDisorder" },
    { label: "History of substance abuse", name: "substanceAbuseHistory" },
    { label: "Use of assisted reproductive technology (IVF/ART)", name: "assistedReproductiveTechnology" },
    { label: "History of anomalies in previous pregnancies", name: "previousPregnancyAnomalies" },
    { label: "Presence of respiratory symptoms", name: "respiratorySymptom" },
    { label: "Presence of cardiovascular symptoms", name: "cardiovascularSymptom" },
    { label: "Presence of neurological symptoms", name: "neurologicalSymptom" },
    { label: "Presence of gastrointestinal symptoms", name: "gastrointestinalSymptom" },
    { label: "Presence of musculoskeletal symptoms", name: "musculoskeletalSymptom" },
    { label: "Genetic Test 1 Result (Positive/Negative)", name: "geneticTest1Result" },
    { label: "Genetic Test 2 Result (Positive/Negative)", name: "geneticTest2Result" },
  ];

  return (
    <form onSubmit={handleSubmit} className="max-w-md  mx-auto mt-8 p-4 text-gray-900 text-xl">
      <h2 className=" font-semibold mb-4 text-3xl">Comprehensive Medical History Form</h2>

      <div className="mb-4">
        <label className="block mb-1" htmlFor="patientAge">Patient Age:</label>
        <input
          type="number"
          id="patientAge"
          name="patientAge"
          value={formData.patientAge}
          onChange={handleChange}
          className="w-full p-1 border rounded"
          required
        />
      </div>

      {radioFields.map((field) => (
        <div key={field.name} className="mb-3">
          <label className="block mb-1">{field.label}:</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name={field.name}
                value="1"
                checked={formData[field.name] === '1'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name={field.name}
                value="0"
                checked={formData[field.name] === '0'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
      ))}

      <div className="mb-4">
        <label className="block mb-1" htmlFor="bloodCellCount">Red Blood Cell Count (million cells/mcL):</label>
        <input
          type="number"
          id="bloodCellCount"
          name="bloodCellCount"
          value={formData.bloodCellCount}
          onChange={handleChange}
          className="w-full p-1 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1" htmlFor="respiratoryRate">Respiratory Rate (breaths per minute):</label>
        <input
          type="text"
          id="respiratoryRate"
          name="respiratoryRate"
          value={formData.respiratoryRate}
          onChange={handleChange}
          placeholder="e.g., Normal (12-20)"
          className="w-full p-1 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1" htmlFor="heartRate">Heart Rate (beats per minute):</label>
        <input
          type="text"
          id="heartRate"
          name="heartRate"
          value={formData.heartRate}
          onChange={handleChange}
          placeholder="e.g., Normal (60-100), Tachycardia"
          className="w-full p-1 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1" htmlFor="whiteBloodCellCount">White Blood Cell Count (cells/mcL):</label>
        <input
          type="number"
          id="whiteBloodCellCount"
          name="whiteBloodCellCount"
          value={formData.whiteBloodCellCount}
          onChange={handleChange}
          step="0.01"
          className="w-full p-1 border rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Submit Medical History
      </button>
    </form>
  );
};

export default MedicalHistoryForm;