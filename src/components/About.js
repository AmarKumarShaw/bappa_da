import React from 'react';
import aboutimg from "../images/download.jpg"
import styled from "styled-components";
const About = () => {
    return (
        <AboutStyled>
            <div className="about-left">
                <img src={aboutimg} alt="" />
            </div>
            <div className="right">
                <div className="about-right">
                    <h2>About Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ad, error sint ullam necessitatibus neque earum esse commodi illo quasi dolores quae sed qui eveniet provident modi non deserunt?</p>
                    <div className="about-btn">
                        <button className="about-btns">Call now</button>
                    </div>
                </div>
            </div>
        </AboutStyled>
    )
}

const AboutStyled = styled.div` 
        padding:0 0;
        height:60vh;
        width:100%;
        display:grid;
        grid-template-columns:repeat(2,1fr);
        background-color:purple;
        .about-left{
            position:relative;
            
            img{
                position:absolute;
                left:0;
                height:60vh;
                background-size:cover;
                object-fit:cover;
                width:100%;
            }
        }
        .about-right{
            display: flex;
            flex-direction:column;
            align-items: center;
            padding:3rem;
            color:white;
            h2{
                font-size:3rem;
                padding:3rem 5rem;
            }
            p{
                font-size:1.2rem;
                text-align:flex-start;
            }
            .about-btn {
                button{
                margin-top: 2rem;
                padding:0.8rem 1.8rem;
                color:purple;
                background:white;
                border-radius:30px;
                cursor:pointer;
                transition:all 0.4s ease-in-out;
            }
            button:hover{
                color: white;
                background-color:purple;
                border:2px solid white; 
            }

            }
        }

@media screen and (max-width:768px){
    height:100vh;
    grid-template-columns:repeat(1,1fr);
    .about-left{
        position:relative;
        background-size:cover;
        height:auto;
        object-fit:cover;
        width:100%;
        overflow:hidden;
        height:40vh;


        
        img{
        }
        
    }
    .right{
        padding:1rem;
        height:60vh;
        }
        .about-right{
            height:auto;
            padding:0;
            h2{
                padding:0.5rem;
                
            }
        }
}

`

export default About;
