
// import {} from 'antd'
import styles from './index.css';


function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! 2.0.0   Welcome to umi!</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
