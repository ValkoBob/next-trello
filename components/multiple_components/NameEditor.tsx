import React, { useState } from 'react';

interface ListNameEditorTypes {
  title: string,
  style: string,
  editTitle: (newTitle: string) => void,
  editClass: (isDisabled: boolean) => void,
}

const NameEditor: React.FC<ListNameEditorTypes> = ({
  title, style, editTitle, editClass,
}): JSX.Element => {
  const [text, setText] = useState<string>(title);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isDisabled, setDisabled] = useState<boolean>(true);

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDisabled(false);
    editClass(false);
    if (!isSelected) {
      (e.target as HTMLInputElement).select();
      setIsSelected(true);
    }
  };

  const handleChange = (e: { target: HTMLInputElement; }) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>
    | React.FocusEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.length > 0) {
      editTitle(text);
    } else {
      setText(title);
    }
    if (isSelected) {
      const selection: Selection | null = window.getSelection();
      if (selection != null) {
        selection.removeAllRanges();
      }
      setIsSelected(false);
    }
    setDisabled(true);
    editClass(true);
  };

  return (
    <form onKeyDown={(e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSubmit(e);
      }
    }}
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleSubmit(e);
          }}>
      <input type="text" value={text} readOnly={isDisabled} className={style}
             onClick={handleClick} onChange={handleChange} onBlur={handleSubmit}/>
    </form>
  );
};

export default NameEditor;
