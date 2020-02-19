import React from "react";
import styles from './MemeGenerator.module.scss'

const API = 'https://api.imgflip.com/get_memes';


class MemeGenerator extends React.Component {
    state = {
        topText: '',
        bottomText: '',
        randomImageURL: 'http://i.imgflip.com/1bij.jpg',
        allMemeImgs: [],
    };


    componentDidMount() {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                const {memes} = data.data;
                this.setState({
                    allMemeImgs: memes,
                })
            })
    }

    handleChange = (e) => {
        const {value, name} = e.target;

        this.setState({
            [name]: value,
        })


    };

    handleSubmit = (e) => e.preventDefault();

    randomMemeImg = () => {
        const randomIndex = Math.floor(Math.random() * this.state.allMemeImgs.length);
        this.setState({
            randomImageURL:this.state.allMemeImgs[randomIndex].url,
        })
    };

    handleClick = ()=> this.randomMemeImg();

    render() {
        const {topText, bottomText} = this.state;

        return (
            <div className={styles.memeContainer}>
                <form onSubmit={this.handleSubmit} className={styles.flexContainer}>
                    <input
                        className={styles.input}
                        type="text"
                        value={topText}
                        name='topText'
                        placeholder='  Top Text'
                        onChange={this.handleChange}
                    />

                    <input
                        className={styles.input}
                        type="text"
                        id='bottomText'
                        value={bottomText}
                        name='bottomText'
                        placeholder='  Bottom Text'
                        onChange={this.handleChange}
                    />

                    <button className={styles.button} onClick={this.handleClick}>Generate</button>
                </form>

                <div className={styles.image}>
                    <img className={styles.imageMem} src={this.state.randomImageURL} alt=""/>
                    <h2 className={styles.topText}>{this.state.topText}</h2>
                    <h2 className={styles.bottomText}>{this.state.bottomText}</h2>
                </div>
            </div>
        );
    }

}

export default MemeGenerator