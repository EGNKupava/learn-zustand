import { useState } from 'react';
import { AddLargeMIcon } from '@alfalab/icons-glyph/AddLargeMIcon';
import { Input } from '@alfalab/core-components/input/esm';
import { IconButton } from '@alfalab/core-components/icon-button/esm';
import { Gap } from '@alfalab/core-components/gap/esm';
import { Textarea } from '@alfalab/core-components/textarea/esm';

import "./add-task.css";

export const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');


  const handleAddTaskClick = () => {
    console.log('CLICK ADD');
  }
  const handleInputChange = (_, {value}) => {
    setInputValue(value);
  }
  const handleTextareaChange = (_, {value}) => {
    setTextareaValue(value);
  }

  return (
      <div className='add-task'>
        <div className='top-block'>
          <Input block={true} label='Чё надо?!' size='m' value={inputValue} onChange={handleInputChange}/>
          <Gap direction="horizontal" size='m'/>
          <IconButton icon={AddLargeMIcon} onClick={handleAddTaskClick}/>
        </div>
        <Textarea
                label='Описание'
                minRows={2}
                autosize={false}
                block={true}
                labelView="inner"
                value={textareaValue}
                onChange={handleTextareaChange}
            />
      </div>
)};