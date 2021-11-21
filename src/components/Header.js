import React from 'react'
import styled from "styled-components"
import hero from "../images/hero-anim.svg"
import OuterLayout from '../Layout/OuterLayout'

const Header = () => {
    return (
      
        <HeaderStyled>
                <div className="header-left">
                    <div className="hero-title">
                    <h1>Welcome to <br /> <span>Bappa Da Classes</span> </h1>
                    </div>
                    <div className="btn">
                    <button>Watch on Youtube</button>
                    </div>
                </div>
                <div className="header-right">
                    <img src={hero} alt="" />
                </div>
        </HeaderStyled>
     
    )
}

const HeaderStyled = styled.div` 
height:100vh;
width:100%;
display:grid;
place-items:center;
grid-template-columns:repeat(2,1fr);

.header-left{
    display: flex;
    justify-content:flex-start;
    flex-direction:column;
    padding:6rem 6rem;
    h1{
        font-size:3rem;
        text-align:start; 
    }
    span{
        color:purple;
    }
    .btn{

        text-align:start;
        margin-top: 1rem;
        button{
            padding:0.8rem 1.6rem;
            color:#fff;
            font-size:1.2rem;
            cursor:pointer;
            background: purple;
            border:2px solid purple;
            border-radius:40px;
            transition:all 0.4s ease-in-out;
        }
        button:hover{
            background: #fff;
            color:purple;
            font-weight:bold;
        }
    }
}

.header-right{
    position:relative;
    img{
        height:30rem;
        width:30rem;
    }
}

@media screen and (max-width:768px){
    grid-template-columns:repeat(1,1fr);
    margin-top:0px;
    .header-right{
        img{
            height:20rem;
            width:20rem;
        }
    }
}

`
export default Header;

