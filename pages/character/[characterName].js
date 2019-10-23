import React from 'react';
import Head from 'next/head';
import Error from 'next/error';
import { getCharacterByName } from '../../utils/api';
import CharacterItem from '../../components/characterItem';
import CharacterDetails from '../../components/characterDetails';
import BackButton from '../../components/backButton';

const Page = (props) => {
    if (!props.character) return <Error />
    return (
    <>
    <Head>
        <title>{`${props.character.name} - Know more about the character`}</title>
        <link rel='icon' href='/favicon.ico'/>
    </Head>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {props.character && <CharacterItem character={props.character} />}      
        <CharacterDetails character={props.character} />
        <BackButton />
    </div>
    </>
)}

Page.getInitialProps = async (ctx) => {
    const character = await getCharacterByName(ctx.query.characterName);
    return {character};
}

export default Page