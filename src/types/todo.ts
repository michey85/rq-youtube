export type TodoState = 'all' | 'open' | 'completed'

export type Todo = {
  id: number
  completed: boolean
  title: string
}
