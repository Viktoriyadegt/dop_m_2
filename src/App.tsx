import React, {useState} from 'react';
import './App.css';
import {Modal} from "./components/modal/Modal";
import {SupperButton} from "./components/supperButton/SupperButton";


function App() {
    return (
        <div>
            <SupperButton background={'red'}
                          onClick={() => {
                          }}
                          color={'red'}>
                Red Button
            </SupperButton>

        </div>
    );
}


export default App;
