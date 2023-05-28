import styles from './index.module.scss';

type TagProps = {
  text: string;
  color: string;
};

export default function Tag({ text, color }: TagProps) {
  return <div className={`${styles.tag} ${styles[color]}`}>{text}</div>;
}
