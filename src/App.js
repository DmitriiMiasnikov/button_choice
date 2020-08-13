import React from 'react';
import styles from './App.module.scss';
import ButtonsChoice from './components/ButtonsChoice/ButtonsChoiceContainer';
import HintQuantity from './components/HintQuantity/HintQuantityContainer';
import HintWrong from './components/HintWrong/HintWrongContainer';
import ButtonSubmit from './components/ButtonSubmit/ButtonSubmitContainer'

function App() {
  return (
    <div className={styles.wrapper}>
      <div className = {styles.title}>Выберите все уравнения, в которых решением является число 6</div>
      <HintQuantity />
      <HintWrong />
      <ButtonsChoice />
      <ButtonSubmit />
    </div>
  );
}

export default App;
