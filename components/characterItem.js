import React from 'react'
import Link from 'next/link';

const CharacterItem = props => (
    <div style={styles.card}>
        <Link href="/character/[characterName]" as={`/character/${props.character.name}`}>
            <a>
                <img src={props.character.image} />
                <div style={{ textAlign: 'center' }}>
                    <p>{props.character.name}</p>
                </div>
            </a>
        </Link>
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
        cursor: 'pointer'
    }
}

export default CharacterItem;