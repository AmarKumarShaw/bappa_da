import React from 'react'
import styled from "styled-components"

const Footer = () => {
    return (
        <FooterStyled>
            <div className="footer-con">
                <div className="footer-nav">
                    <h2>Navigation</h2>
                    <ul>
                        <li> <a href="">Home</a> </li>
                        <li> <a href="">Services</a> </li>
                        <li> <a href="">About</a> </li>
                        <li> <a href="">Contact</a> </li>
                    </ul>

                </div>
                <div className="footer-nav">
                    <h2>Notes</h2>
                    <ul>
                        <li> <a href="">Sem-1</a> </li>
                        <li> <a href="">Sem-2</a> </li>
                        <li> <a href="">Sem-3</a> </li>
                        <li> <a href="">Sem-4</a> </li>
                        <li> <a href="">Sem-5</a> </li>
                        <li> <a href="">Sem-6</a> </li>
                    </ul>

                </div>
                <div className="footer-nav">
                    <h2>Bappa Da Classes</h2>
                    <h4>Tution Address</h4>
                    <p>Chanditala Hooghly 712017</p>

                    <div className="footer-btns">
                    <button className="about-btns">Call Now</button>
                    <button className="about-btns">Direction</button>
                    </div>
                </div>
            </div>
            
                
           
        </FooterStyled>
    )
}

const FooterStyled = styled.footer` 
    padding:8rem 14rem;
    background-color: black;
    width:100%;
    color:white;
    .footer-con{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        grid-gap:9rem;
        .footer-btns{
       
                display:grid;
                grid-template-columns:repeat(2,1fr);
                grid-gap:1rem;
      
            button{           
                margin-top: 2rem;
                padding:0.6rem 1.2rem;
                color:#fff;
                background:purple;
                border-radius:30px;
                cursor:pointer;
                transition:all 0.4s ease-in-out;
                border:1px solid white;
                font-size:1rem;
            }
            button:hover{
                background-color:white;
                color:purple;
            }
        }
    }
    

    @media screen and (max-width:768px){
            height:auto;
            padding-top: 3rem;
            padding:1rem;
            .footer-con{
            grid-template-columns:repeat(1,1fr);
            grid-gap:1rem;
            }
    }
`

export default Footer
