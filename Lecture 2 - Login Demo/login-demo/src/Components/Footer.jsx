import React from 'react';

export default function Footer(props) {
    return (
        <div style={
            {
                color: 'blue',
                fontSize: 40
            }}>FOOTER {props.name}
        </div>
    );
}