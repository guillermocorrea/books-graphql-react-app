import fetch from 'node-fetch';
import { inject, injectable } from 'tsyringe';

import { ITodoService } from '../interfaces/todo.service.interface';
import { Todo } from '../models/todo';

@injectable()
export class TodoService implements ITodoService {
  constructor(@inject('todoServiceBaseUrl') private baseUrl: string) {}

  async getTodo(id: number): Promise<Todo> {
    const response = await fetch(`${this.baseUrl}${id}`);
    return await response.json();
  }
}
