import { useState } from "react";

function Modal({ aberto, tarefa, fechar, salvarEdicao }) {
  const [editando, setEditando] = useState(false);
  const [texto, setTexto] = useState(tarefa);

  if (!aberto) return null;

  function salvar() {
    salvarEdicao(texto);
    setEditando(false);
  }

  return (
    <div className="modal-overlay" onClick={fechar}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Tarefa</h2>

        <div className="modal-conteudo">
          {editando ? (
            <input
              className="input-tarefa"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
            />
          ) : (
            <p>{texto}</p>
          )}
        </div>

        <div className="modal-botoes">
          {!editando ? (
            <button
              className="botao botao-editar"
              onClick={() => setEditando(true)}
            >
              Editar 
            </button>
          ) : (
            <button className="botao botao-salvar" onClick={salvar}>
              Salvar 
            </button>
          )}

          <button className="botao botao-fechar" onClick={fechar}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;