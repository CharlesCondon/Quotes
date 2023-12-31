import React from 'react';
import './quotes.css';
import { useState } from 'react';
import data from '../../assets/quotes.json';

function Quotes() {
    const[head, setHead] = useState('Click Next for a Quote or Poem');
    const[auth, setAuth] = useState('');
    const[seen, setSeen] = useState([]);
    
    function addQuote() {
        
        let n = Math.floor(Math.random() * data.quotes.length);
        let quote = data.quotes[n].quote;
        let author = data.quotes[n].author;
        return quoteHelper(quote, author, data.quotes.length)
    }
    function quoteHelper(q, a, n) {
        let x = document.getElementById('contentContainer');
        if (seen.length === n) {
            x.classList.add('roll-out')
            setTimeout(() => {
                setSeen([]);
                setHead('End')
                setAuth('')
            }, 500)
        }
        else if (seen.includes(q)) {
            addQuote();
        }
        else {
            x.classList.add('roll-out')
            setTimeout(() => {
                setSeen([...seen, q]);
                setHead(q);
                setAuth(a); 
            }, 500)

        }
    }

    return (
        <>
            <img id='backgroundImg' src='./background.png' alt='sky'/>
            <div id='windowCont'>
                <div id='topPane' className='paneRow'>
                    <div className='pane'></div>
                    <div className='pane'></div>
                    <div className='pane'></div>
                </div>
                <div id='bottomPane' className='paneRow'>
                    <div className='pane'></div>
                    <div className='pane'></div>
                    <div className='pane'></div>
                </div>
            </div>
            <div key={Math.random()} id='contentContainer' className='animate__animated animate__fadeIn'>
                <h2 id='quote-top' className='animate__animated animate__fadeIn words'>{head}</h2>
                <p className='animate__animated animate__fadeIn words'>{auth}</p>
            </div>
            <img id='nextImg' className='animate__animated animate__fadeIn' src='./next.png' alt='next arrow' onClick={addQuote}/>
            <button id='startBtn' className='animate__animated animate__fadeIn words' onClick={addQuote}>Next</button>
        </>
    )
}

export default Quotes;