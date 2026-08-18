import styles from "./Pagination.module.css" 
function Pagination({peage , setPeage}) {
    
    const pervioudHandler = ()=>{
        if(peage <= 1)return
        setPeage(peage=> peage-1)}
    const nextHandler = ()=>{
      if(peage>=10)return
      setPeage(peage=> peage+1)}
    
  return (
    <div className={styles.pagination}>
        <button onClick={pervioudHandler} className={peage==1 ? styles.disabled : null}>pervious</button>
        <p className={ peage ===1 ? styles.selected : null}>1</p>
        <p className={ peage ===2 ? styles.selected : null}>2</p>
        {peage >2 && peage<9 && (
          <>
          <span>...</span>
          <p className={styles.selected}>{peage}</p>
          </>
        )}
        <span>...</span>
        <p className={ peage ===9 ? styles.selected : null}>9</p>
        <p className={ peage ===10 ? styles.selected : null}>10</p>
        
        <button onClick={nextHandler}  className={peage==10 ? styles.disabled : null}>next</button>
    </div>
  )
}

export default Pagination