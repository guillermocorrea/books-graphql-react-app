import { Todo } from '../models/todo';

export interface ITodoService {
  getTodo(id: number): Promise<Todo>;
}
