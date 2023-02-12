import { Checkbox, ListItem, Stack } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleTodoStatus } from '../services/todos';
import { Todo } from '../types/todo';

const TodoItem = ({ completed, id, title }: Todo) => {
  const client = useQueryClient();

  const { mutate: toggle } = useMutation({
    mutationFn: () => toggleTodoStatus(id, !completed),
    onSuccess: () => client.invalidateQueries(['todos']),
  });

  return (
    <ListItem>
      <Stack spacing={4} direction="row" onClick={() => toggle()}>
        <Checkbox isChecked={completed}>{title}</Checkbox>
      </Stack>
    </ListItem>
  );
};

export { TodoItem };
