import css from './Header.module.css';

export default function Header() {
  return (
    <>
      <header className={css.toolbar}>
        <a href="/" className={css.logo}>
          My Logo
        </a>
        <div className={css.btn_container}>
          <button className={css.button}>Log In</button>
          <button className={css.button}>Sign Up</button>
        </div>
      </header>
    </>
  );
}
