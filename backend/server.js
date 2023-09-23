const express = require('express');
const cors = require('cors');


const app = express();
const PORT = 5000

app.use('/static', express.static('static/images'));

const projects = [
    {
        id: 1,
        heading: "Dao Book",
        subheading: "Clinic Notes Application",
        image: ["http://localhost:5000/static/daobook.png"],
        features: ["User Creation", "Patient Profiles", "Clinic Notes", "JWT Auth", "Patient Login"],
        technologies: ["TailwindCSS", "React", "Node", "Express", "MongoDB"],
        color: ['#A33917'],
    },
    {
        id: 2,
        heading: "Blompt",
        subheading: "AI assisted blog writing",
        image: ["http://localhost:5000/static/blompt2.png"],
        features: ["Assistance level scale", "AI Temperature scale", "AI feedback", "AI suggestions"],
        technologies: ["OPENAI API", "Python", "Django"],
        color: ['#ffe5b4']
    },
    {
        id: 3,
        heading: "AI Copywriter",
        subheading: "Your inhouse copywriter",
        image: ["http://localhost:5000/static/copywriter.png"],
        features: ["Devise Auth", "User profiles", "Custom AI generated Copy"],
        technologies: ["OPENAI API", "Ruby on Rails", "Devise", "PostgreSQL", "TailwindCSS"],
        color: ['#1d4ed8']
    }
]


app.use(cors());

app.get('/projects', (req, res) => {
    res.json(projects);
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});