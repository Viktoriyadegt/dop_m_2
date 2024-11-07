import React from 'react';
import './App.css';
import {SupperButton} from "./components/supperButton/SupperButton";
import {Modal} from "./components/modal/Modal";

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

            {/*<SupperButton color={'red'}>REd Button</SupperButton>
            <SupperButton color={'secondary'}>Secondary Button</SupperButton>
            <SupperButton >Default Button</SupperButton>
            <SupperButton disabled>Disabled Button</SupperButton>*/}

            {/*        <Modal>
                <input placeholder={'email'}/>
                <input placeholder={'pass'}/>
                <button>send</button>
            </Modal>*/}

            <Modal>
                <h3>Confident Information</h3>
                <input type={'text'} placeholder={'email'}/>
                <input type={'text'} placeholder={'pass'}/>
                <input type={'text'} placeholder={'pass'}/>
                <label>
                    <input type={"checkbox"}/>
                    I agree
                </label>
                <button>send</button>
            </Modal>

        </div>
    );
}


export default App;
