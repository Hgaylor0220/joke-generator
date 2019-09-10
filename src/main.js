
import $ from 'jquery';
// import {
//   HungryBear
// } from './date';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

$(document).ready(function() {
  $('#jokeGenerator').click(function() {

    let request = new XMLHttpRequest();
    const url = `http://api.icndb.com/jokes/random?limitTo=[nerdy]
`;
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
        console.log(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
      $('.showJoke').text(response.value.joke);
    }
  });
});
