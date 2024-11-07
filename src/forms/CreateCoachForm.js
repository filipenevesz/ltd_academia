import React from "react";
import { useNavigation } from "@react-navigation/native";
import FormBaseDark from "./FormBaseDark";
import styles from '../forms/FormBaseDark';

const CreateCoachForm = ({ onSubmit }) => {
    const navigation = useNavigation();

    const fields = [
        {
            name: "firstName",
            label: "Nome",
            rules: { required: "Campo obrigatório" },
        },
        {
            name: "lastName",
            label: "Sobrenome",
            rules: { required: "Campo obrigatório" },
        },
        {
            name: "birthDate",
            label: "Data de nascimento",
            rules: { required: "Campo obrigatório" },
        },
        {
            name: "cpf",
            label: "CPF",
            rules: { required: "Campo obrigatório", pattern: { value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, message: "CPF inválido" } },
        },
        {
            name: "state",
            label: "Estado",
            rules: { required: "Campo obrigatório" },
        },
        {
            name: "city",
            label: "Cidade",
            rules: { required: "Campo obrigatório" },
        },
        {
            name: "neighborhood",
            label: "Bairro",
            rules: { required: "Campo obrigatório" },
        },
        {
            name: "street",
            label: "Rua",
            rules: { required: "Campo obrigatório" },
        },
        {
            name: "number",
            label: "Número",
            rules: { required: "Campo obrigatório" },
        },
        {
            name: "complement",
            label: "Complemento",
            rules: { required: false },
        },
        {
            name: "phone",
            label: "Celular",
            rules: { required: "Campo obrigatório", pattern: { value: /^\(\d{2}\) \d{4,5}-\d{4}$/, message: "Celular inválido" } },
        },
        {
            name: "email",
            label: "E-mail",
            rules: { required: "Campo obrigatório", pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "E-mail inválido" } },
        },
    ];

    return <FormBaseDark fields={fields} onSubmit={onSubmit} buttonTitle="Cadastrar Funcionário" />;
};

export default CreateCoachForm;


