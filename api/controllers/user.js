import { db } from "../db.js"; // Importa o Banco

export const getUsers = (_, res) => {  // Definindo um método que recebe uma requisição e uma resposta como parâmetros
    const q = "SELECT * FROM usuarios"; // Consultando os registros do Banco

    db.query(q, (err, data) => { // Executando a consulta SQL no banco de dados
        if (err) {
            return res.json(err); // se der erro, devolve o erro em um json
        }

        return res.status(200).json(data); // Se a consulta for bem-sucedida, retorna uma resposta JSON com os dados dos usuários
    });
};


export const addUser = (req, res) => { // CREATE
    const q =
      "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";
  
    const values = [
      req.body.nome,
      req.body.email,
      req.body.fone,
      req.body.data_nascimento,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário criado com sucesso.");
    });
  };


  export const updateUser = (req, res) => {
    const q =
      "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";
  
    const values = [
      req.body.nome,
      req.body.email,
      req.body.fone,
      req.body.data_nascimento,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário atualizado com sucesso.");
    });
  };

export const deleteUser = (req, res) => { // DELETE
    const q = "DELETE FROM usuarios WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário deletado com sucesso.");
    });
  };