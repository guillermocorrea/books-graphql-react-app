import { TodoService } from './services/todo.service';
import { ITodoService } from './interfaces/todo.service.interface';
import { container } from 'tsyringe';

const todoServiceBaseUrl = process.env.TODO_SERVICE_URL || 'https://jsonplaceholder.typicode.com/todos/';
container.register('todoServiceBaseUrl', { useValue: todoServiceBaseUrl });
container.register<ITodoService>(TodoService, { useClass: TodoService });
