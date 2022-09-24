import styles from './index.less';
import { MicroApp } from 'umi';

export default function IndexPage(props) {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      {/* <MicroApp name="app1" /> */}
      {props.children}
    </div>
  );
}
