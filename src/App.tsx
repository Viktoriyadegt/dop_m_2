import React from 'react';
import './App.css';
import {SupperButton} from "./components/supperButton/SupperButton";
import s from '../src/components/supperButton/SupperButton.module.css'

function App() {
    return (
        <div>
            <SupperButton background={'red'}
                          onClick={() => {
                          }}
                          className={s.redColorForButton}
                          color={'red'}>
                Red Button
            </SupperButton>

            <SupperButton background={'blue'}
                          onClick={() => {
                          }}
                          className={s.blueColorForButton}
                          color={'blue'}>
                Blue Button
            </SupperButton>

        </div>
    );
}


export default App;
