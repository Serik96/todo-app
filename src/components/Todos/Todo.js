import { RiAncientGateFill } from 'react-icons/ri';
import { GiMagicGate, GiSpinningSword } from 'react-icons/gi';
import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isComplete ? styles.completedTodo : ''
      }`}
    >
      <RiAncientGateFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <GiMagicGate
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <GiSpinningSword
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  );
}
export default Todo;
