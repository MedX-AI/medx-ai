import { useState } from 'react';

export default function SignupPage() {
    const [patientage, setPatientage] = useState('');
    const [mothergeneffect, setMothergeneffect] = useState('');
    const [fathergeneffect, setGeneffect] = useState('');
    const [mothersidegeneffect, setMothersidegeneffect] = useState('');
    const [fathersidegeneffect, setFathersidegeneffect] = useState('');
    const [cellcount, setCellcount] = useState('');
    const [heartrate, setHeartrate] = useState('');
    const [maskedtest1, setMaskedtest1] = useState('');
    const [maskedtest2, setMaskedtest2] = useState('');
    const [hosubstanceabuse, setHosubstanceabuse] = useState('');
    const [ivfart, setIvfart] = useState('');
    const [prevpregnant, setPrevpregnant] = useState('');
    const [whitebloodcell, setWhitebloodcell] = useState('');
    const [symptom1, setSymptom1] = useState('');
    const [symptom2, setSymptom2] = useState('');
    const [symptom3, setSymptom3] = useState('');
    const [symptom4, setSymptom4] = useState('');
    const [symptom5, setSymptom5] = useState('');

    // Outputs
    const [disease, setDisease] = useState('');
    const [percentage, setPercentage] = useState('');
}