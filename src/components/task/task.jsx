import {Status} from "@alfalab/core-components/status/esm";
import {Checkbox} from "@alfalab/core-components/checkbox/esm";
import {DotsThreeVerticalMIcon} from "@alfalab/icons-glyph/DotsThreeVerticalMIcon";
import {IconButton} from "@alfalab/core-components/icon-button/esm";
import {TrashCanLineMIcon} from "@alfalab/icons-glyph/TrashCanLineMIcon";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";

import PropTypes from "prop-types";

import "./task.css";
import {useTodoStore} from "../../store/todo";
export const Task = ({id, title, description, isDone}) => {
  const changeStatus = useTodoStore((store) => store.changeStatus);
  const removeTask = useTodoStore((store) => store.removeTask);

  const {attributes, listeners, setNodeRef, transform, transition} =
    useSortable({id});

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleChange = (_, {checked}) => {
    changeStatus(id, checked);
  };
  const handleRemoveClick = () => {
    removeTask(id);
  };

  return (
    <div className="task" ref={setNodeRef} style={style}>
      <Checkbox
        block={true}
        size="m"
        onChange={handleChange}
        checked={isDone}
        label={title}
        hint={description}
        align="center"
        className="task-checkbox"
      />
      <Status color={isDone ? "green" : "orange"}>
        {isDone ? "Готово" : "Сделать"}
      </Status>
      <div className="right-block">
        <IconButton onClick={handleRemoveClick} icon={TrashCanLineMIcon} />
        <IconButton
          icon={DotsThreeVerticalMIcon}
          {...attributes}
          {...listeners}
        />
      </div>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  isDone: PropTypes.bool,
};
