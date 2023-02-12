import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '../services/todos';
import { TodoState } from '../types/todo';

const useTodosQuery = (state: TodoState) => {
  const toast = useToast()

  return useQuery({
    queryFn: () => fetchTodos(state),
    queryKey: ['todos', state],
    staleTime: 1000 * 5,
    onError: (err) => {
      if (err instanceof Error) {
        toast({
          status: 'error',
          title: err.message,
          position: 'top-right'
        })
      }
    }
  });
};

export { useTodosQuery };
