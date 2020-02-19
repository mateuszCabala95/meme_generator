import React from 'react';
import styles from './App.module.scss'
import Header from "./components/Header/Header";
import MemeGenerator from "./components/MemeGenerator/MemeGenerator";

class App extends React.Component {
    render() {
        return (
            <div className={styles.body}>
                <Header/>
                <MemeGenerator />
            </div>
        );

    };
}

export default App;
