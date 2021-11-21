import React from 'react'
import styled from "styled-components"
import hero from "../images/hero-anim.svg"
import CardData from "../data/CardData.js"
import Button from "./Button"



const Card = () => {
    return (
        <CardStyled>
            {
                CardData.map((data)=>{
                    const {title,description,link} = data;
                return(
                    <>
            <div className="card-con">
                <div className="card-img">
                    <img src={hero} alt="" />
                </div>
                <div className="card-body">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-bottom">
                    <Button link={`${link}`} title="Download" />
                </div>
            </div>
                    </>
                )
                })
            }
        </CardStyled>
    )
}

const CardStyled = styled.section` 
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(320px,1fr));
    width:100%;
    grid-template-rows:auto;
    grid-gap:2rem;
    padding:2rem 3rem;


    .card-con{
    position:relative;
    display: flex;
    align-items: center;
    flex-direction:column;
    max-width:320px;
    border:1px solid grey;
    padding:0.5rem 1.5rem;
    border-radius:5px;
    box-shadow:2px 5px 7px rgba(0,0,0,0.25);
    transition:all 0.3s ease-in-out;
    }

    .card-con:hover{
        transform:translateY(-20px);
        box-shadow:4px 7px 15px rgba(0,0,0,0.45);
    }

    .card-img{
        position:relative;
        overflow:hidden;
        width:100%;
        background-size:cover;
       
        img{    
            object-fit:cover;
            

    }
    .card-body{
        width:70%;
    }

    
    }
    
   .card-bottom{
       padding:2rem 2rem;
   }
    
`

export default Card
