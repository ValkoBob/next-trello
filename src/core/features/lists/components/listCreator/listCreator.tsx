import React, { useState } from 'react';
import styles from './styles/listCreator.module.scss';

interface ListCreatorTypes {
  addList: (title: string) => void
}

const ListCreator: React.FC<ListCreatorTypes> = ({ addList }): JSX.Element => {
  const [activateCreator, setCreator] = useState(false);
  const [title, setTitle] = useState('');

  const activateListCreator = (): void => {
    setCreator(!activateCreator);
  };

  const handleChange = (e: { target: HTMLInputElement; }): void => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (title.length) {
      addList(title);
      setTitle('');
      setCreator(false);
    }
  };

  return (
    <div className={styles.listCreator}>
      <form>
        <div onClick={activateListCreator}
             className={activateCreator ? styles.hide : styles.listCreator_activate}>Add list...
        </div>
        <div className={activateCreator ? styles.show : styles.hide}>
          <input className={styles.listCreator_inputText} type="text" placeholder="Enter name of list..."
                 onChange={(e) => handleChange(e)} value={title}/>
          <div className={styles.listCreator_add}>
            <button onClick={handleSubmit} className={styles.listCreator_add_submit}>Add list</button>
            <span onClick={activateListCreator} className={styles.listCreator_add_cancel}>&#10005;</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ListCreator;
