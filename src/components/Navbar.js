import React from 'react'
import styled from "styled-components"


const Navbar = () => {
    return (
        <NavbarStyled>
            <div className="nav-left">
                <h2>Bappa Da Classes</h2>
            </div>
            <div className="nav-right">
               <ul>
                   <li><a href="">Home</a></li>
                   <li><a href="">Services</a></li>
                   <li><a href="">Contact</a></li>
                   <li><a href="">About</a></li>
               </ul> 
            </div>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    height:80px;
    display:flex;
    justify-content: space-around;
    align-items:center;
    background-color: #fff;
    box-shadow:2px 5px 7px rgba(0,0,0,0.25);
    
    .nav-left{
        display: flex;
        justify-content:flex-start;
    }

    .nav-right ul{
        display: flex;
        flex-grow:1;
        
        li{
            margin-right:2rem;
            a{
                font-size:1.2rem;
                font-weight:bold;
            }
        }
    }
    
@media screen and (max-width:768px){
    
    .nav-left{
        text-align:center;
    }
    .nav-right{
        display:none;
    }
}
`

export default Navbar
