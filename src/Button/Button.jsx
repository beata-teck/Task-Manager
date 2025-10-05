import React from 'react';  
import './Button.css'

export default function Button({ className = 'button', content, btn_title }) {
    return (
        <button className={className} title={btn_title}>
            {content}
        </button>
    );
}