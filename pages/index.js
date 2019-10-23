import React from 'react'
import Head from 'next/head'
import {getCharacterList} from "../utils/api";
import CharacterItem from "../components/characterItem";

const Home = (props) => {
    return (
        <div>
            <Head>
                {/* https://metatags.io/ */}
                <title>Rick and Morty index</title>
                <link rel='icon' href='/favicon.ico'/>

                <meta name="title" content="Rick and Morty index"/>
                <meta name="description" content="Know more about your favorite character on Rick and Morty!"/>


                <meta property="og:type" content="website"/>
                <meta property="og:url" content="http://terrible-walrus-15.localtunnel.me/"/>
                <meta property="og:title" content="Rick and Morty index"/>
                <meta property="og:description" content="Know more about your favorite character on Rick and Morty!"/>
                <meta property="og:image" content="/banner.jpg"/>


                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="http://terrible-walrus-15.localtunnel.me/"/>
                <meta property="twitter:title" content="Rick and Morty index"/>
                <meta property="twitter:description" content="Know more about your favorite character on Rick and Morty!"/>
                <meta property="twitter:image" content="/banner.jpg"/>
            </Head>
            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', alignItems: 'center'}}>
                {props.characters.map(character => (
                    <CharacterItem key={character.id} character={character} />
                ))}
            </div>
        </div>
    );
}

Home.getInitialProps = async (ctx) => {
    const characters = await getCharacterList();
    return {characters};
};

export default Home
