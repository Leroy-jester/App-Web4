<<<<<<< HEAD
import { useState } from "react"
import "./style.scss"

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false)
  const [tarefas, setTarefas] = useState([
    "Estudar React",
    "Fazer exercícios",
    "Entregar atividade"
  ])
  const [novaTarefa, setNovaTarefa] = useState("")
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

  function alternarTema() {
    setTemaEscuro(!temaEscuro)
  }

  function adicionarTarefa() {
    if (!novaTarefa.trim()) return
    setTarefas([...tarefas, novaTarefa])
    setNovaTarefa("")
  }

  function removerTarefa(index) {
    setTarefas(tarefas.filter((_, i) => i !== index))
=======
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import "./componentes.scss"
import Modal from "./components/Modal";

function App() {
  const navigate = useNavigate(); 
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [tarefas, setTarefas] = useState([
    "Estudar React",
    "Fazer exercícios",
    "Entregar atividade",
  ]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [tarefaSelecionada, setTarefaSelecionada] = useState("");
  const [indexSelecionado, setIndexSelecionado] = useState(null);

  function adicionarTarefa() {
    if (!novaTarefa.trim()) return;
    setTarefas([...tarefas, novaTarefa]); //ccria nova lista + o que foi add
    setNovaTarefa("");
  }

  function removerTarefa(index) {
    setTarefas(tarefas.filter((_, i) => i !== index));//mantém tudo que for diferente do índice clicado.
  }
  

function visualizarTarefa(tarefa, index) {
  setTarefaSelecionada(tarefa);
  setIndexSelecionado(index);
  setModalAberto(true);
} // visu as tarefas

function salvarEdicao(novoTexto) {
  const listaAtualizada = [...tarefas];
  listaAtualizada[indexSelecionado] = novoTexto;
  setTarefas(listaAtualizada);
  setModalAberto(false);
}// salva na hora de editar no modal

  function truncar(texto, limite) {
    return texto.length > limite ? texto.slice(0, limite) + "..." : texto;
>>>>>>> 209a31f (não sei o número desse commit)
  }

  return (
    <div className={`app ${temaEscuro ? "escuro" : "claro"}`}>
      <div className="container">
<<<<<<< HEAD

        <h1 className="titulo">Done</h1>

        <button className="botao-tema" onClick={alternarTema}>
          {temaEscuro ? "Modo claro" : "Modo escuro"}
        </button>

        <h2>Funcionalidades</h2>
        <ul>
          <li>Adicionar tarefas</li>
          <li>Remover tarefas</li>
          <li>Alternar tema</li>
        </ul>
=======
        <h1 className="titulo">Done</h1>

        {/* Toggle tema */}
        <div
          className={`toggle ${temaEscuro ? "ativo" : ""}`}
          onClick={() => setTemaEscuro(!temaEscuro)}
        >
          <div className="icone">{temaEscuro ? "🌙" : "☀️"}</div>
          <div className="bolinha"></div>
        </div>

        {/* Botão que leva para Componentes Legais */}
        <button className="botao" onClick={() => navigate("/componentes")}>
          Componentes Uteis
        </button>
>>>>>>> 209a31f (não sei o número desse commit)

        <h2>Lista de tarefas</h2>

        <div className="area-input">
          <input
            className="input-tarefa"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            placeholder="Adicione uma tarefa"
          />
<<<<<<< HEAD

          <button className="botao-adicionar" onClick={adicionarTarefa}>
=======
          <button className="botao botao-adicionar" onClick={adicionarTarefa}>
>>>>>>> 209a31f (não sei o número desse commit)
            Adicionar
          </button>
        </div>

<<<<<<< HEAD
        
        {tarefas.map((tarefa, index) => (
          <div className="card" key={index}>
            {tarefa.length > 20 
              ? tarefa.slice(0, 20) + "..." 
              : tarefa}

            {tarefa.length > 20 && (
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

      </div>

        {modalAberto && (
            <div className="modal-overlay">
              <div className="modal">
                <h3>Tarefa completa</h3>
                <p>{tarefaSelecionada}</p>
                <button onClick={fecharModal}>Fechar</button>
              </div>
            </div>
      )}

    </div>
  )
}

export default App
=======
        {tarefas.map((tarefa, index) => (
          <div className="card" key={index}>
            <span>{truncar(tarefa, 60)}</span>

            <div className="acoes">
              <button
                className="botao botao-visualizar"
                onClick={() => visualizarTarefa(tarefa, index)}
              >
                Visualizar
              </button>

              <button
                className="botao botao-remover"
                onClick={() => removerTarefa(index)}
              >
                Remover
              </button>
            </div>
          </div>
        ))}

        <Modal
        aberto={modalAberto}
        tarefa={tarefaSelecionada}
        fechar={() => setModalAberto(false)}
        salvarEdicao={salvarEdicao}
        />
      </div>
    </div>
  );
}

export default App;
>>>>>>> 209a31f (não sei o número desse commit)
