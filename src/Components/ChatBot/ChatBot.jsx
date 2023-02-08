import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import React, {useState} from "react";
import { useHistory } from "react-router-dom"
import "./chatBot.css";
import { MdChatBubble } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import {  getInfoUser, getProductsByCategory } from "../../Redux/Actions";
import { Link } from "react-router-dom";



const theme = {
  background: "#f5f88fb",
  headerBgColor: "#7230ff",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#7230ff",
  botFontColor: "#fff",
  userBubbleColor: "#e96a16",
  userFontColor: "#fff",
};

const ChatBot1 = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const info = useSelector((state) => state.Admin);
    const { logout, user } = useAuth0();

    console.log(info);


    const handleClick = () => {
        dispatch(getProductsByCategory('Componentes de pc'));
        history.push("/result")
    };
    const handleClick1 = () => {
        dispatch(getProductsByCategory('Perifericos'));
        history.push("/result")
    };
    const handleClick2 = () => {
        dispatch(getProductsByCategory('Mantenimiento'));
        history.push("/result")
    };

    useEffect(() => {
        if(user) {
            dispatch(getInfoUser(user.email));
        } else {

        }
    }, []);


  return (
    <>
        <button className="btn-flotante fs-3" onClick={() => setIsOpen(true)}><MdChatBubble /></button>
        {isOpen && (
            <>
            <button className="ssds343 fs-4" onClick={() => setIsOpen(false)}>X</button>
            
            <div className="cdscndsjcnjdsncsj12344 fs-6">
            <ThemeProvider theme={theme}>
            <ChatBot
            steps={[
                {
                id: "1",
                message: "Hola soy chatbot de Galaxia Tech. Cómo es tú nombre?",
                trigger: "2",
                },
                {
                id: "2",
                user: true,
                validator: (value) => {
                    if (/^[a-z,A-Z]{2,15}$/.test(value)) {
                    return true;
                    } else {
                    return "Por favor ingrese un nombre válido!";
                    }
                },
                trigger: "3",
                },
                {
                id: "3",
                message: "Hola {previousValue}, es un gusto saludarte!",
                trigger: "4",
                },
                {
                id: "4",
                message: "Necesitas ayuda en algo?",
                trigger: "5",
                },
                {
                id: "5",
                options: [
                    { value: "s", label: "Si", trigger: "6A" },
                    { value: "n", label: "No", trigger: "6B" },
                ],
                },
                {
                id: "6A",
                message: "Genial! Dime en qué te puedo ayudar...",
                trigger: "seleccion",
                },
                {
                id: "6B",
                message: "Lo siento, espero poder ayudarte pronto. Te veo luego.",
                end: true,
                },
                {
                id: "seleccion",
                options: [
                    { value: "c", label: "Componentes de PC disponibles", trigger: "7A" },
                    { value: "p", label: "Periféricos", trigger: "7B" },
                    { value: "m", label: "Productos de Mantenimiento", trigger: "7C" },
                    { value: "o", label: "Como puedo ver mis órdenes canceladas?", trigger: "7D" },
                ],
                },
                {
                id: "7A",
                component: (
                    <div className="text-dark bg-body shadow p-3 rounded">
                        Haz <button className="btn btn-success" onClick={() => handleClick()}>click aquí</button> y podrás observar nuestros componentes de PC disponibles. Necesitas algo más?
                    </div>
                ),
                trigger: "respuestaVuelta",
                },
                {
                id: "preguntaVuelta",
                message: "Hay algo más en que te pueda ayudar?",
                trigger: "respuestaVuelta",
                },
                {
                id: "respuestaVuelta",
                options: [
                    { value: "y", label: "Si", trigger: "6A" },
                    { value: "n", label: "No", trigger: "6B" },
                ],
                },
                {
                id: "7B",
                message:
                    "Veo que quieres ver los periféricos para tu pc disponibles y en stock:",
                trigger: "10",
                },
                {
                id: "10",
                component: (
                    <div className="text-dark bg-body shadow p-3 rounded">
                        Haz <button className="btn btn-success" onClick={() => handleClick1()}>click aquí</button> y podrás ver los periféricos actuales disponibles.
                    </div>
                ),
                trigger: "preguntaVuelta",
                },
                {
                id: "preguntaVuelta",
                message: "Te puedo ayudar en algo más?",
                trigger: "respuestaVuelta",
                },
                {
                id: "respuestaVuelta",
                options: [
                    { value: "y", label: "Yes", trigger: "6A" },
                    { value: "n", label: "No", trigger: "6B" },
                ],
                },
                {
                id: "7C",
                message:
                    "Veo que quieres saber sobre productos de mantenimiento para tú PC",
                trigger: "11",
                },
                {
                id: "11",
                component: (
                    <div className="text-dark bg-body shadow p-3 rounded">
                        Haz <button className="btn btn-success" onClick={() => handleClick2()}>click aquí</button> y podrás revisar los productos de mantenimiento disponibles.
                    </div>
                ),
                trigger: "preguntaVuelta",
                },
                {
                id: "preguntaVuelta",
                message: "Te puedo ayudar en algo más?",
                trigger: "respuestaVuelta",
                },
                {
                id: "respuestaVuelta",
                options: [
                    { value: "y", label: "Yes", trigger: "6A" },
                    { value: "n", label: "No", trigger: "6B" },
                ],
                },
                {
                id: "7D",
                message:
                    "Quieres saber el estado de tus órdenes?",
                trigger: "12",
                },
                {
                id: "12",
                component: (
                    <div className="text-dark bg-body shadow p-3 rounded">
                        Haz <Link to={`/myorders/${info._id}`}>Click aqui </Link> y podrás ir al apartado de 'Mis Órdenes' en tú perfil de usuario.
                    </div>
                ),
                trigger: "preguntaVuelta",
                },
                {
                id: "preguntaVuelta",
                message: "Te puedo ayudar en algo más?",
                trigger: "respuestaVuelta",
                },
                {
                id: "respuestaVuelta",
                options: [
                    { value: "y", label: "Yes", trigger: "6A" },
                    { value: "n", label: "No", trigger: "6B" },
                ],
                },
            ]}
            />
        </ThemeProvider>
        </div>
            </>
        )} 
    </>
  );
};

export default ChatBot1;
