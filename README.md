# Student Speaking Assessment Report

This project is a simple **frontend prototype** of a **student speaking assessment report page**, similar to platforms such as SpeechAce or IELTS score reports.

The purpose of this project is to demonstrate:
- Frontend UI development skills
- Basic data handling
- Logical implementation of score-based feedback

Only the **top part of the report** is implemented, including **Summary of Scores** and **Descriptive Feedback**, as required in the assignment.

---

## Live Demo

https://heartfelt-pastelito-aa4f1d.netlify.app/

---

## Tech Stack

- React.js
- HTML, CSS, JavaScript
- Chart.js (via react-chartjs-2)
- Vite (build tool)

No backend or database is used. All data is handled on the frontend.

---

## How to Run the Project Locally

1. Clone the repository:
```bash
git clone https://github.com/shubhamkumar2703/speaking-report.git
cd speaking-report
```
2. Install dependencies:
 ```bash
   npm install
```
3.Start the development server:
```
npm run dev
```
The application will run on:
```
http://localhost:5173
```
Where the Scores Are Stored

All speaking assessment scores are stored in a simple in-memory JavaScript object.

File location:
```
src/data.js
```
Example:
```
export const reportData = {
  studentName: "Shubham Kumar",
  overallScore: 8,
  skills: {
    Pronunciation: 8.5,
    Fluency: 8,
    Vocabulary: 7.5,
    Grammar: 7
  }
};
```
If any score value is changed in this file, the UI, chart, and feedback update automatically.

How Feedback Logic Works

Descriptive feedback is generated using basic conditional logic based on score ranges.

File location:
```
src/components/Feedback.jsx

````
Logic used: 
```
if (score >= 8) return "Excellent performance with strong control.";
  if (score >= 6) return "Good performance with minor inaccuracies.";
  return "Needs improvement.";
```
This logic is applied to:

The overall speaking score

Each individual skill score

As a result, feedback text changes dynamically when score values are modified.

Graphical Representation

Skill-wise performance is visualized using a Radar Chart created with Chart.js.
The chart displays all speaking skills on a scale of 0 to 10, matching standard speaking assessment criteria.


Author
Shubham Kumar

