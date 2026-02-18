// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import css from './App.module.css';
import Header from '../Header/Header';
// import { ReactComponent as Logo } from '';

function App() {
  return (
    <>
      <Header />
      <main className={css.main}>
        <div className={css.text_conteiner}>
          <h1 className={css.title}>The chemical negatively charged</h1>
          <p className={css.main_content}>
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. Twhile the mass defect
            is..
          </p>
          <button className={css.main_button}>Get Started</button>
        </div>
      </main>
    </>
  );
}

export default App;
