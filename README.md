# MediPredict: A Web-Based ML Solution for Disease Prediction and Prescription Recommendations

MediPredict is a web-based healthcare platform that leverages machine learning to predict diseases based on user-reported symptoms and provides personalized medical recommendations. Designed with scalability, accuracy, and user accessibility in mind, MediPredict offers an innovative solution for early diagnosis and improved healthcare access.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Implementation](#implementation)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Machine Learning](#machine-learning)
  - [Cloud Deployment](#cloud-deployment)
- [System Architecture](#system-architecture)
- [Technologies Used](#technologies-used)

---

## Overview

MediPredict bridges the gap between user-reported symptoms and actionable healthcare insights. The platform utilizes machine learning models to provide:
- Accurate disease predictions
- Medication recommendations
- Lifestyle, dietary, and precautionary suggestions

The system includes:
1. **Interactive Frontend**: A user-friendly React-based interface
2. **Robust Backend**: Flask-based API for processing user inputs and managing ML predictions
3. **Scalable Cloud Deployment**: Google Cloud Platform ensures reliability and scalability

---

## Features

- **Disease Prediction**: Predicts diseases based on user-entered symptoms.
- **Comprehensive Reports**: Provides detailed descriptions, medication recommendations, and lifestyle suggestions.
- **Secure Authentication**: User login and signup functionalities with Google Cloud Storage for secure data handling.
- **Real-Time Performance**: Auto-scaling cloud services for seamless user experience.

---

## Implementation

### Frontend
- Developed using React with a component-based architecture.
- Pages include:
  - **Home**: Welcomes users and provides navigation.
  - **Login/Signup**: Secure user authentication.
  - **Consultation Form**: Accepts user symptoms and displays predictions.
  - **Report Page**: Displays detailed health reports.

### Backend
- Built using Flask with RESTful APIs:
  - `/login` and `/signup`: For user authentication.
  - `/predict`: For processing symptoms and returning predictions.
- Integrated Flask-CORS for frontend-backend communication.
- Uses serialized machine learning models for predictions.

### Machine Learning
- Implements multiple ML models:
  - Logistic Regression
  - Support Vector Machine (SVM)
  - Random Forest
  - Decision Tree
  - K-Nearest Neighbors (KNN)
- Symptom encoding and model evaluation based on metrics like accuracy, F1-score, and AUC.
- Trained on curated datasets for medical symptoms and diseases.

### Cloud Deployment
- Deployed on Google Cloud Platform (GCP):
  - **Google App Engine**: For hosting frontend and backend.
  - **Google Cloud Storage**: For secure data storage.
  - **IAM Roles**: Role-based access for data security.

---

## System Architecture

MediPredict follows a modular, RESTful architecture for seamless interaction between components. Key workflows include:
1. **Symptom Submission**: User inputs symptoms on the frontend.
2. **Backend Processing**: Inputs are validated and processed by ML models.
3. **Prediction Generation**: The best model predicts the disease and queries datasets for recommendations.
4. **Report Delivery**: Results are returned as structured JSON and displayed to users.

---

## Technologies Used

- **Frontend**: React, JavaScript, HTML, CSS, Lottie Animations
- **Backend**: Flask, Flask-CORS, Pandas, NumPy
- **Machine Learning**: Scikit-learn, Pickle for model serialization
- **Cloud**: Google Cloud Platform (App Engine, Cloud Storage)

---

