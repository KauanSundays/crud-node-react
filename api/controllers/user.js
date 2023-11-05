import { db } from "../db.js"; // Importando o módulo de acesso ao banco de dados

export const getUsers = (_, res) => {  // Definindo um método que recebe uma requisição e uma resposta como parâmetros
    const q = "SELECT * FROM usuarios"; // Consulta SQL para selecionar todos os registros da tabela 'usuarios'

    db.query(q, (err, data) => { // Executando a consulta SQL no banco de dados
        if (err) {
            return res.json(err); // se der erro, devolve o erro em um json
        }

        return res.status(200).json(data); // Se a consulta for bem-sucedida, retorna uma resposta JSON com os dados dos usuários
    });
};
