import React from 'react';
import styled from "styled-components";
import Card from "./Card"

const Notes = () => {
    return (
        <NotesStyled>
            <div className="notes_section">
                <h2 className="notes_heading">Download Our Notes</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magnam libero tempora, debitis non itaque quia unde laudantium vitae mollitia earum expedita.</p>
            </div>

            <div className="card_section">
                <Card />
            </div>
        </NotesStyled>
    )
}

const NotesStyled = styled.div` 
    .notes_section{
        text-align:center;
        width:100%;
        margin:0 auto;
        /* padding:2rem; */
        
        h2{
            font-size:3rem;
        
    }   
    p{
            font-size:1.2rem;
            line-height:1.6rem;
            width:60%;
            margin:0 auto;
        }     

        @media screen and (max-width:768px){
            display:grid;
            grid-template-columns:repeat(1,1fr);
            .notes_section{
                width:100%;
                padding:0;
                .notes_heading{
                    font-size:2rem;
                    width:100%;
                }
                p{
                    width:100%;
                    margin:0;
                }
            }
        }


`;

export default Notes;
