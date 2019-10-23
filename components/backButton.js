import React from 'react'
import Link from 'next/link';

const BackButton = props => (
    <div style={styles.card}>
        <Link href="/">
            <a>
                <div style={{ textAlign: 'center' }}>
                    <p>{'Back to the list'}</p>
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
        cursor: 'pointer',
        padding: '10px'
    }
}

export default BackButton;