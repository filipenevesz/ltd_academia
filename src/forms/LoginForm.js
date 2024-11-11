import React from "react";
import { useNavigation } from "@react-navigation/native";

import FormBase from "./FormBaseDark"


const LoginForm = ({onSubmit}) => {
    const navigation = useNavigation();
    const fields = [
        {
            name: "email",
            label: "E-mail",
            type: "text",
            rules: { required: "Campo obrigatório", pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "E-mail inválido" } },
        },
        {
            name: "password",
            label: "Senha",
            type: "password",
            rules: { required: "Campo obrigatório", },
        },
       
    ];

    

    return <FormBase fields={fields} onSubmit={onSubmit} buttonTitle="Entrar" mode = "dark"/>;
}


export default LoginForm;

