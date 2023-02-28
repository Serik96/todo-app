import { GiWindHole, GiPrayer } from 'react-icons/gi';
import Button from '../UI/Button';
import styles from './TodosAction.module.css';

function TodosAction({ resetTodo, deleteCompleteTodo, completedTodosExist }) {
  return (
    <>
      <Button title="Reset" onClick={resetTodo}>
        <GiWindHole className={styles.deleteIcon} />
      </Button>
      <Button
        title="Clear"
        onClick={deleteCompleteTodo}
        disabled={!completedTodosExist}
      >
        <GiPrayer className={styles.checkIcon} />
      </Button>
    </>
  );
}

export default TodosAction;
