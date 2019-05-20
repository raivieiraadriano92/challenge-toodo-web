import React from "react";

import { Todo } from "../../store/ducks/todos/types";

interface OwnProps {
  todo: Todo;
}

export default function TodoItem({ todo }: OwnProps) {
  return <li>{todo.name}</li>;
}
