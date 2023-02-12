import { List, Spinner } from '@chakra-ui/react';
import { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';

const TodoList = () => {
  const isLoading = true;
  const data: Todo[] = [];

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );

  return (
    <List>
      {data.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </List>
  );
};

export { TodoList };
