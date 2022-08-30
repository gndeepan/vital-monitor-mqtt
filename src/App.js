

import * as mqtt from 'mqtt'
import React, { useState, Fragment } from 'react';
import './App.css';


var client  = mqtt.connect('https://test.mosquitto.org:8080');


client.subscribe('vitalData');
client.publish('vitalData',"Connected");

function App() {
  var note;
  client.on('message', function (topic, message) {
    note = message.toString();
    // Updates React state with message 
    setMesg(note);
    console.log(note);
    //client.end();
    });

  // Sets default React state 
  const [mesg, setMesg] = useState(<Fragment><em>Waiting... </em></Fragment>);

  return (
    <div className="App">
    <header className="App-header">
      <div id='box'>
      <h1>Patient Vital Data</h1>
    <p>The Data is: {note}</p>
    <div>
      
    </div>
      </div>
   
		
		</header>
		</div>
  );
}

export default App;