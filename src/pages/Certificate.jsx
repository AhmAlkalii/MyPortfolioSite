import React from 'react'
import '../Styles/Cert.css'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { certifications } from '../helpers/ProjectList';


function Certificate() {
    return (
        <div>
            <h2 className='section__title'>Certificates</h2>
            <div className="Cert-container">
                {certifications.map((cert, index) => (
                    <div className="Cert-box" key={index}>
                    <WorkspacePremiumIcon style={{ fontSize: '3rem', color: '#4caf50' }} />
                    <h3>{cert}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certificate