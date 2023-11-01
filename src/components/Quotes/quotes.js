import React, { useEffect } from 'react';
import './quotes.css';
import { useState } from 'react';
import data from '../../assets/quotes.json';

function Quotes() {
    const[head, setHead] = useState('Click to Generate a Quote or Poem');
    const[auth, setAuth] = useState('');
    const[seen, setSeen] = useState([]);

    function addQuote() {
        let n = Math.floor(Math.random() * data.quotes.length);
        let quote = data.quotes[n].quote;
        let author = data.quotes[n].author;
        return quoteHelper(quote, author, data.quotes.length)
    }
    function quoteHelper(q, a, n) {
        if (seen.length === n) {
            setSeen([]);
            setHead('End')
            setAuth('')
        }
        else if (seen.includes(q)) {
            addQuote();
        }
        else {
            setSeen([...seen, q]);
            setHead(q);
            setAuth(a);
        }
    }

    return (
        <>
            <div id='contentContainer'>
                <h2>{head}</h2>
                <p>{auth}</p>
                <button id='startBtn' onClick={addQuote}>Next</button>
            </div>
        </>
    )
}

export default Quotes;