import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '../services/todos';
import { TodoState } from '../types/todo';

const useTodosQuery = (state: TodoState = 'all') => {
  const toast = useToast()

  return useQuery({
    queryFn: () => fetchTodos(state),
    queryKey: ['todos', state],
    staleTime: 1000 * 20,
    onError: (err) => {
      if (err instanceof Error)
        toast({ status: 'error', title: err.message, isClosable: true, position: 'top-right' })
    }
  });
};

export { useTodosQuery };
