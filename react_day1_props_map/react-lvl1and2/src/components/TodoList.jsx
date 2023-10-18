import TodoItem from "./TodoItem";

const TodoList = () => {
  const data = [
    { task: "Feed snake" },
    { task: "Send Dudes" },
    { task: "Finish iwas" },
    { task: "Eat some milk" },
  ];

  return (
    <div>
      <h1>Meine Todos</h1>
      <ol>
        {data.map((item, index) => (
          <TodoItem key={index} todo={item} />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
