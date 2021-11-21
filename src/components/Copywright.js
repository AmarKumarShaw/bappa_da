import React from 'react'
import styled from "styled-components"

const Copywright = () => {
    return (
        <CopywrightStyled>
            <p>Copywright &copy; 2021 All Rights Reserved || Designed with ❤️ by Amar Shaw</p>
        </CopywrightStyled>
    )
}

const CopywrightStyled = styled.div` 
    height:auto;
    text-align: center;
    background-color: #000;
    padding-bottom: 0.5rem;
    color:#fff;
`

export default Copywright
