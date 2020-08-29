import React from 'react'

class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImages: []
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then((response) => {
            return(
                response.json()
            )
        })
        .then((response) => {
            const {memes} = response.data
            return(
                this.setState(() => {
                    return{
                        allMemeImages: memes
                    }
                })
            )
        })
    }

    handleOnChange(event){
        const {name, value} = event.target
        this.setState(() => {
            return{
                [name]: value
            }
        })
    }

    handleOnSubmit(event){
        event.preventDefault()
        const randomNumber = Math.floor(Math.random() * this.state.allMemeImages.length)
        const aRandomImage = this.state.allMemeImages[randomNumber].url
        this.setState(() => {
            return{
                randomImage: aRandomImage
            }
        })
    }

    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleOnSubmit}>
                    <input
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleOnChange}/>

                    <br/>
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleOnChange}/>

                    <br/>
                    <button>Generate</button>
                </form>

                <br/>
                <div className="meme">
                    <img src={this.state.randomImage} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator