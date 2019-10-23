import React from 'react'

const CharacterDetails = props => (
    <div style={styles.card}>
        <div style={{ textAlign: 'left' }}>
            <p>Status: {props.character.status}</p>
            <p>Specie: {props.character.species}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Type: {props.character.type}</p>
        </div>
    </div>
);

const styles = {
    card: {
        backgroundColor: '#FAFAFA',
        margin: '5px',
        borderRadius: '5px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
        overflow: 'hidden',
        maxWidth: '600px',
        width: '100%',
        padding: '10px'
    }
}

export default CharacterDetails;