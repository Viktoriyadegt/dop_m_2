import React from 'react';
import './App.css';
import {SupperButton} from "./components/supperButton/SupperButton";

function App() {
    return (
        <div>
            {/*<SupperButton background={'red'}*/}
            {/*              onClick={() => {*/}
            {/*              }}*/}
            {/*              className={s.redColorForButton}*/}
            {/*              color={'red'}>*/}
            {/*    Red Button*/}
            {/*</SupperButton>*/}

            {/*<SupperButton background={'blue'}
                          onClick={() => {
                          }}
                          className={s.blueColorForButton}
                          color={'blue'}>
                Blue Button
            </SupperButton>*/}

            <SupperButton color={'red'}>REd Button</SupperButton>
            <SupperButton color={'secondary'}>Secondary Button</SupperButton>
            <SupperButton >Default Button</SupperButton>
            <SupperButton disabled>Disabled Button</SupperButton>

        </div>
    );
}


export default App;
