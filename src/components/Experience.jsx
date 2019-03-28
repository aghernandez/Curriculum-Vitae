import React from 'react';

const Experience = props => (
    <div className="Experience">
         <div className="Experience-container">
            {
                props.data.map((exp, index) => (
                    <div className="Experience-item" key={'Experience-${index}'}>
                        <h3>{exp.jobTitle} @ {exp.company}</h3>
                        <span>{exp.starDate} - {exp.endDate} </span>
                        <span>{exp.jobDescription} </span>
                    </div>
            ))}
        </div>
    </div>
);

export default Experience;