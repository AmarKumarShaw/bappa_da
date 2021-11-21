import React from 'react'
import styled from "styled-components"


const Button = ({title,link}) => {
    return (
        <ButtonStyled>
            <a href={link}>{title}</a>
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button` 
    border:none;
    outline:none;
    
    
    a{
        padding:0.6rem 1.2rem;
        background-color: purple;
        font-size:1.2rem;
        font-weight:500;
        color:white;
        border-radius:20px;
        transition:all 0.4s ease-in-out;
        outline:none;
        border:none;
    }
    a:hover{
        color:purple;
        background-color: white;
        border:2px solid purple;
    }
    
`

export default Button

