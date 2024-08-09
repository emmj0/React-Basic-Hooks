import React from 'react';

function Resultarea({ text }) {
    return (
        <div>
            <textarea 
                placeholder='Result here ! ' 
                rows={8} 
                value={text} 
                readOnly 
            />
        </div>
    );
}

export default Resultarea;
