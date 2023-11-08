import GlobalStyle from "./styles/global.js";  // Estilos globais do aplicativo
import styled from "styled-components";  
import Grid from "./components/Grid.js";
import { ToastContainer, toast } from 'react-toastify';
import Form from "./components/Form.js";  // Importa o componente Form
import axios from "axios";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';



const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {

  function notify() {
    toast.success('formulario enviado com sucesso')
  }
  
  const [users, setUsers] = useState([]); 
  const [onEdit, setOnEdit] = useState(null); 

  const getUsers = async () => { // Pegando Usuarios do banco (READ)
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <Container>
        <Title>USUARIOS</Title>  
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/> 
        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} /> 
      <GlobalStyle />  {/* Estilos de GlobalStyle*/}
    </>
  );
}

export default App;