

function TodoList() {
    const [tasks, setTask] = useState([
        {
            id: 1,
            text: "Ruffle Duffle Bag",
            completed: true
        },
        {
            id: 2,
            text: "Propel Whoopie Cushion",
            completed: false
        }
    ]);
}

export default TodoList