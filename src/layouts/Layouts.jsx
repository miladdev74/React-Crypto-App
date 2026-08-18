import styles from './Layouts.module.css'

function Layouts({children}) {
  return (
    <>
        <header className={styles.header}>
            <h1>Milad Ctypto App</h1>
            <p>from react course</p>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Develop By Milad With ❤</p>
        </footer>
    
    </>
  )
}

export default Layouts