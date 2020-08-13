import React from 'react';
import styles from './App.module.scss';
import ButtonsChoiceContainer from './components/ButtonsChoiceContainer'

function App() {
  return (
    <div className={styles.wrapper}>
      <div className = {styles.title}>Выберите все уравнения, в которых решением является число 6</div>
      <div className = {styles.hintQuantity}>Выбраны не все верные варианты</div>
      <div className = {styles.hintWrong}>Вычисли X</div>
      <ButtonsChoiceContainer />
      <div className = {styles.buttonSubmit}>Done</div>
    </div>
  );
}

export default App;
