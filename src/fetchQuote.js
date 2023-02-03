import axios from 'axios';
import 'core-js/actual/promise';
import 'regenerator-runtime';


let number = 1;

async function fetchQuote() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    number = number >= 101 ? 1 : number;
    await axios.get('https://dummyjson.com/quotes/' + number++, config)
        .then(res => {
            document.getElementById('author').innerHTML = res.data.author;
            document.getElementById('quote').innerHTML = res.data.quote;
        })
        .catch(error => {
            document.getElementById('author').innerHTML = "Could not Fetch";
            document.getElementById('quote').innerHTML = error;
        });
}

export default fetchQuote;