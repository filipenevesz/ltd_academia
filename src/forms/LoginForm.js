import React from "react";

import FormBase from "./FormBase"

const LoginForm = () => {
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

    const onSubmit = (data) => {
        console.log(data);
    };

    return <FormBase fields={fields} onSubmit={onSubmit} buttonTitle="Entrar"/>;
}


export default LoginForm;

