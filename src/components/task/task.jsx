import { Status } from '@alfalab/core-components/status/esm';
import { Checkbox } from '@alfalab/core-components/checkbox/esm';
import { DotsThreeVerticalMIcon } from '@alfalab/icons-glyph/DotsThreeVerticalMIcon';
import { IconButton } from '@alfalab/core-components/icon-button/esm';

import PropTypes from 'prop-types';

import './task.css';
export const Task = ({ title, description, isDone }) => {
  const handleChange = (_, {payload}) => {
    console.log('payload: ', payload);
  }



  return (
  <div className="task" >
    <Checkbox
        block={true}
        size='m'
        onChange={handleChange}
        checked={isDone}
        label={title}
        hint={description}
        align='center'
        className='task-checkbox'
      />
    <Status color={isDone ? 'green' : 'orange'}>{isDone ? 'Готово' : 'Сделать'}</Status>
    <div className='right-block'>
      <IconButton icon={DotsThreeVerticalMIcon} />
    </div>
  </div>
)}

Task.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  isDone: PropTypes.bool,

}