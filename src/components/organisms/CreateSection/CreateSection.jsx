import React from 'react';
import './CreateSection.css';
import ViewCreate from '../../molecules/viewCreate/viewCreate';
import ToolsCreate from '../../molecules/toolsCreate/toolsCreate';

function CreateSection() {
    return (
        <div className="create-section">
            <div className="view-section-item">
                <ViewCreate />
            </div>
            <div className="tools-section-item">
                <ToolsCreate />
            </div>
        </div>
    );
}

export default CreateSection;