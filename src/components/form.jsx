import React, { useState } from 'react';

const MedicalHistoryForm = () => {
  const [step, setStep] = useState(1);
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

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

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

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <>
            <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="patientAge">Patient Age:</label>
              <input
                type="number"
                id="patientAge"
                name="patientAge"
                value={formData.patientAge}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            {radioFields.slice(0, 4).map((field) => (
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
          </>
        );
      case 2:
        return (
          <>
            <h3 className="text-lg font-semibold mb-4 ">Medical History</h3>
            {radioFields.slice(4, 8).map((field) => (
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
          </>
        );
      case 3:
        return (
          <>
            <h3 className="text-lg font-semibold mb-4">Symptoms and Test Results</h3>
            {radioFields.slice(8).map((field) => (
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
          </>
        );
      case 4:
        return (
          <>
            <h3 className="text-lg font-semibold mb-4">Clinical Measurements</h3>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="bloodCellCount">Red Blood Cell Count (million cells/mcL):</label>
              <input
                type="number"
                id="bloodCellCount"
                name="bloodCellCount"
                value={formData.bloodCellCount}
                onChange={handleChange}
                className="w-full p-2 border rounded"
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
                className="w-full p-2 border rounded"
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
                className="w-full p-2 border rounded"
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
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl text-gray-900 text-xl font-md pt-12">
      <h2 className="text-2xl font-semibold mb-6">Comprehensive Medical History Form</h2>
      
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" style={{ width: `${(step / 4) * 100}%` }}></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">Step {step} of 4</p>
      </div>

      <form onSubmit={handleSubmit}>
        {renderStep()}
        
        <div className="mt-6 flex justify-between">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition-colors duration-300"
            >
              Previous
            </button>
          )}
          {step < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
            >
              Submit
            </button>
          )}
        </div>
      </form>

      {/* Custom Alert using Tailwind CSS */}
      <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
        <p className="font-bold">Important</p>
        <p>Please ensure all information is accurate and complete. Your medical history is crucial for proper care.</p>
      </div>
    </div>
  );
};

export default MedicalHistoryForm;