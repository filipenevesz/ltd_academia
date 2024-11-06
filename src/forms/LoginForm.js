import React from "react";
import { useNavigation } from "@react-navigation/native";

import FormBase from "./FormBase"


const LoginForm = ({onSubmit}) => {
    const navigation = useNavigation();
    const fields = [
        {
            name: "email",
            label: "E-mail",
            rules: { required: "Campo obrigatório", pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "E-mail inválido" } },
        },
        {
            name: "password",
            label: "Senha",
            rules: { required: "Campo obrigatório", },
        },
       
    ];

    

    return <FormBase fields={fields} onSubmit={onSubmit} buttonTitle="Entrar"/>;
}


export default LoginForm;

