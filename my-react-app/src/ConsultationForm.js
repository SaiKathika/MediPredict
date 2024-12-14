import React, { useState } from 'react';
import './ConsultationForm.css';

const symptomsList = [
    'itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills', 'joint_pain', 'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting', 'vomiting', 'burning_micturition', 'spotting_ urination', 'fatigue', 'weight_gain', 'anxiety', 'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 'lethargy', 'patches_in_throat', 'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes', 'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache', 'yellowish_skin', 'dark_urine', 'nausea', 'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 'constipation', 'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine', 'yellowing_of_eyes', 'acute_liver_failure', 'fluid_overload', 'swelling_of_stomach', 'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision', 'phlegm', 'throat_irritation', 'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs', 'fast_heart_rate', 'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus', 'neck_pain', 'dizziness', 'cramps', 'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels', 'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties', 'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech', 'knee_pain', 'hip_joint_pain', 'muscle_weakness', 'stiff_neck', 'swelling_joints', 'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness', 'weakness_of_one_body_side', 'loss_of_smell', 'bladder_discomfort', 'foul_smell_of urine', 'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)', 'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body', 'belly_pain', 'abnormal_menstruation', 'dischromic _patches', 'watering_from_eyes', 'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum', 'lack_of_concentration', 'visual_disturbances', 'receiving_blood_transfusion', 'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen', 'history_of_alcohol_consumption', 'fluid_overload.1', 'blood_in_sputum', 'prominent_veins_on_calf', 'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling', 'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister', 'red_sore_around_nose', 'yellow_crust_ooze'
];

const ConsultationForm = () => {
    const [symptoms, setSymptoms] = useState(['']);
    const [result, setResult] = useState(null);

    const handleSymptomChange = (index, event) => {
        const newSymptoms = [...symptoms];
        newSymptoms[index] = event.target.value;
        setSymptoms(newSymptoms);
    };

    const addSymptomField = () => {
        setSymptoms([...symptoms, '']);
    };

    const removeSymptomField = (index) => {
        const newSymptoms = symptoms.filter((_, i) => i !== index);
        setSymptoms(newSymptoms);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formattedSymptoms = symptoms.map(symptom => symptom.trim()).join(', ');
        console.log('Formatted symptoms:', formattedSymptoms);

        try {
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ symptoms: formattedSymptoms }),
            });

            const data = await response.json();
            console.log('Response from server:', data);
            setResult(data); // Update the result state with the response
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="consultation-container">
            {result ? (
                <div className="result">
                    <h3>Medical Analysis Report</h3>
                    <div className="result-sections-grid">
                        <div className="result-section">
                            <div className="result-label disease-label">Diagnosed Condition</div>
                            <div className="result-content">{result.predicted_disease}</div>
                        </div>
                        <div className="result-section">
                            <div className="result-label description-label">Clinical Description</div>
                            <div className="result-content">{result.description}</div>
                        </div>
                        <div className="result-section">
                            <div className="result-label medications-label">Recommended Medications</div>
                            <div className="medications-list">
                                {result.medications.map((med, index) => {
                                    // Split the string by commas and clean each item
                                    const medItems = med.split(',').map(item => 
                                        item.replace(/[\[\]']/g, '').trim()
                                    );
                                    
                                    return medItems.map((item, subIndex) => (
                                        <div key={`${index}-${subIndex}`} className="medication-item">
                                            {item}
                                        </div>
                                    ));
                                })}
                            </div>
                        </div>
                        <div className="result-section">
                            <div className="result-label precautions-label">Essential Precautions</div>
                            <div className="result-list">
                                {result.precautions.map((precaution, index) => (
                                    <span key={index} className="result-list-item">{precaution}</span>
                                ))}
                            </div>
                        </div>
                        <div className="result-section">
                            <div className="result-label workout-label">Lifestyle Recommendations</div>
                            <div className="result-list">
                                {result.workout.map((item, index) => (
                                    <span key={index} className="result-list-item">{item}</span>
                                ))}
                            </div>
                        </div>
                        <div className="result-section">
                            <div className="result-label diet-label">Dietary Guidelines</div>
                            <div className="diet-list">
                                {result.diets.map((diet, index) => {
                                    const dietItems = diet.split(',').map(item => 
                                        item.replace(/[\[\]']/g, '').trim()
                                    );
                                    
                                    return dietItems.map((item, subIndex) => (
                                        <div key={`${index}-${subIndex}`} className="diet-item">
                                            {item}
                                        </div>
                                    ));
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <form className="consultation-form" onSubmit={handleSubmit}>
                    {symptoms.map((symptom, index) => (
                        <div key={index} className="symptom-field">
                            <label>
                                Symptom {index + 1}:
                                <input
                                    type="text"
                                    list="symptoms-list"
                                    value={symptom}
                                    onChange={(event) => handleSymptomChange(index, event)}
                                    required
                                />
                                <datalist id="symptoms-list">
                                    {symptomsList.map((symptom, i) => (
                                        <option key={i} value={symptom} />
                                    ))}
                                </datalist>
                            </label>
                            {index > 0 && (
                                <button type="button" className="remove-btn" onClick={() => removeSymptomField(index)}>
                                    -
                                </button>
                            )}
                        </div>
                    ))}
                    <div className="form-actions">
                        <button type="button" className="add-btn" onClick={addSymptomField}>
                            +
                        </button>
                        <button type="submit" className="submit-btn">Submit</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ConsultationForm;
