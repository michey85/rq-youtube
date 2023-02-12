import { Checkbox, ListItem, Stack } from '@chakra-ui/react';
import { Todo } from '../types/todo';

const TodoItem = ({ completed, id, title }: Todo) => {
  return (
    <ListItem>
      <Stack spacing={4} direction="row">
        <Checkbox isChecked={completed}>{title}</Checkbox>
      </Stack>
    </ListItem>
  );
};

export { TodoItem };
