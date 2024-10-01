import React, { useState } from 'react';

const MedicalHistoryForm = () => {
  const [formData, setFormData] = useState({
    currentConditions: [],
    previousSurgeries: '',
    allergies: [],
    currentMedications: [],
    geneticDisorders: [],
    familyMedicalHistory: [],
    inheritedConditions: []
  });
  const [medicationInput, setMedicationInput] = useState('');

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMedicationInputChange = (e) => {
    setMedicationInput(e.target.value);
  };

  const handleAddMedication = (e) => {
    e.preventDefault();
    if (medicationInput.trim()) {
      setFormData(prev => ({
        ...prev,
        currentMedications: [...prev.currentMedications, medicationInput.trim()]
      }));
      setMedicationInput('');
    }
  };

  const handleRemoveMedication = (medicationToRemove) => {
    setFormData(prev => ({
      ...prev,
      currentMedications: prev.currentMedications.filter(med => med !== medicationToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to an API
  };

  const CheckboxGroup = ({ title, options, field }) => (
    <div className="mb-4">
      <h3 className="text-lg  font-semibold text-gray-700 mb-2">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600"
              checked={formData[field].includes(option)}
              onChange={() => handleCheckboxChange(field, option)}
            />
            <span className="ml-2 text-lg text-gray-700 p-1">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className='w-full '>
    <form onSubmit={handleSubmit} className="mx-auto p-6 bg-white shadow-md rounded-lg w-full text-black ">
      <h2 className="text-4xl font-semibold mb-8 text-gray-800">Medical and Family History</h2>
        <div className='text-xl p-4'>
      <CheckboxGroup
        title="Current Medical Conditions"
        options={['Diabetes', 'Hypertension', 'Asthma', 'Heart Disease']}
        field="currentConditions"
      />
</div>
      <div className="mb-4 p-4">
        <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="surgeries">
          Previous Surgeries
        </label>
        
        <div className='border border-grey-700 p-1 text-lg ' >
            <select
              id="surgeries"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md "
              value={formData.previousSurgeries}
              onChange={(e) => handleInputChange('previousSurgeries', e.target.value)}
            >
              <option value="" >Select previous surgeries</option>
              <option value="none">None</option>
              <option value="appendectomy">Appendectomy</option>
              <option value="type1">Surgery Type 1</option>
              <option value="type2">Surgery Type 2</option>
            </select>
        </div>
      </div>
        <div className='p-4'>
      <CheckboxGroup
        title="Allergies"
        options={['Pollen', 'Nuts', 'Medication']}
        field="allergies"
      />
</div>
      <div className="mb-4 p-4">
        <label className="block text-lg font-semibold text-gray-700 mb-2 " htmlFor="medications">
          Current Medications
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="medications"
            className="flex-grow mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter a medication"
            value={medicationInput}
            onChange={handleMedicationInputChange}
          />
          <button
            type="button"
            onClick={handleAddMedication}
            className="ml-2 inline-flex items-center px-3 py-2 border border-transparent text-lg leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {formData.currentMedications.map((medication, index) => (
            <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {medication}
              <button
                type="button"
                onClick={() => handleRemoveMedication(medication)}
                className="ml-1 inline-flex items-center justify-center w-4 h-4 text-blue-400 hover:bg-blue-200 hover:text-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className='p-4'>
          <CheckboxGroup
            title="Family Members with Genetic Disorders"
            options={['Cystic Fibrosis', 'Sickle Cell Anemia']}
            field="geneticDisorders"
          />
      </div>

      <div className='p-4'>
          <CheckboxGroup
            title="Family Medical History"
            options={['Heart Disease', 'Cancer']}
            field="familyMedicalHistory"
          />
      </div>

      <div className='p-4'>
          <CheckboxGroup
            title="Inherited Conditions"
            options={['Hemophilia', "Huntington's Disease"]}
            field="inheritedConditions"
          />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
    </div>
  );
};

export default MedicalHistoryForm;