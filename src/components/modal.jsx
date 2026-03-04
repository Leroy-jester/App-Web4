const [modalAberto, setModalAberto] = useState(false)
const [tarefaSelecionada, setTarefaSelecionada] = useState("")

function visualizarTarefa(tarefa) {
  setTarefaSelecionada(tarefa)
  setModalAberto(true)
}

function fecharModal() {
  setModalAberto(false)
  setTarefaSelecionada("")
}

{tarefas.map((tarefa, index) => (
  <div className="card" key={index}>
    {tarefa.length > 40 
      ? tarefa.slice(0, 40) + "..." 
      : tarefa}

    {tarefa.length > 40 && (
      <button onClick={() => visualizarTarefa(tarefa)}>
        Visualizar
      </button>
    )}

    <button
      className="botao-remover"
      onClick={() => removerTarefa(index)}
    >
      Remover
    </button>
  </div>
))}