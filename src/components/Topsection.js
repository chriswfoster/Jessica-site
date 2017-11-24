import React, {Component} from 'react'
import Slider from './slider/Slider.js'
import './../App.css'




export default class Topsection extends Component{
    constructor(){
        super()
            this.state = {

            }
    }


render(){
    return(
        <div>

            <div className="top-black">

            <Slider />

           </div>


        </div>


    )
}








}