import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import React, {useState} from "react";
import { useHistory } from "react-router-dom"
import "./chatBot.css";
import { MdChatBubble } from "react-icons/md";
import { useDispatch } from "react-redux";
import ComponentesPc from "./ComponentesPc";
import { getProductsByCategory } from "../../Redux/Actions";




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
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    const history = useHistory()
    const handleClick = () => {
        dispatch(getProductsByCategory('Componentes de pc'));
        history.push("/result")
    };

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
                    { value: "m", label: "Marcas de componentes de PC", trigger: "7B" },
                    { value: "p", label: "Promociones o descuentos disponibles", trigger: "7C" },
                    { value: "s", label: "Seguimiento de mi pedido", trigger: "7D" },
                ],
                },
                {
                id: "7A",
                component: (
                    <div className="text-dark">
                        Haz <button className="btn text-dark" onClick={() => handleClick()}>click aquí</button> y podrás observar nuestros componentes de PC disponibles. Necesitas algo más?</div>
                ),
                triggernextstep: "respuestaVuelta",
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
                    "I see you like Back-End programming! Which of these frameworks would you like to know more about?",
                trigger: "seleccionBack",
                },
                {
                id: "7C",
                message:
                    "I see you like Back-End programming! Which of these frameworks would you like to know more about?",
                trigger: "seleccionBack",
                },
                {
                id: "7D",
                message:
                    "I see you like Back-End programming! Which of these frameworks would you like to know more about?",
                trigger: "seleccionBack",
                },
                {
                id: "seleccionFront",
                options: [
                    {
                    value: "Angular_(framework)",
                    label: "Angular",
                    trigger: "9",
                    },
                    { value: "React", label: "React", trigger: "9" },
                    { value: "Vue.js", label: "Vue.js", trigger: "9" },
                ],
                },
                {
                id: "seleccionBack",
                options: [
                    { value: "Spring_Framework", label: "Spring", trigger: "9" },
                    { value: "Laravel", label: "Laravel", trigger: "9" },
                    { value: ".NET_Core", label: ".Net Core", trigger: "9" },
                ],
                },
                {
                id: "9",
                component:  (
                    <div> 
                        This is an example component 
                        <a href="/home"></a>
                    </div>
                    
                ),
                asMessage: true,
                trigger: "preguntaVuelta",
                },
                {
                id: "preguntaVuelta",
                message: "Do you need to know anything else?",
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
