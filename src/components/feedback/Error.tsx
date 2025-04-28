import React from 'react';

interface ErrorMessageProps {
    message: string;
    title?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, title = "Error" }) => {
    if (!message) {
        return null;
    }

    return (
        <div style={{
            border: '1px solid red',
            backgroundColor: '#ffe0e0',
            color: '#b30000',
            padding: '16px',
            margin: '8px 0',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        }}>
            <span style={{

                fontSize: '20px',
                fontWeight: 'bold',

                content: '"\\26A0"',
            }}>⚠️</span>
            <div>
                <h2 style={{
                    margin: '0 0 8px',
                    fontSize: '1.2em'
                }}>{title}</h2>
                <p style={{ margin: 0 }}>{message}</p>
            </div>
        </div>
    );
};

