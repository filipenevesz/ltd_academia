import FormBase from './FormBaseLigth';
import { useEffect, useState } from 'react';

export default function EditAluno({ onSubmit, aluno = {} }) {
    const [fields, setFields] = useState([
        {
            name: 'name',
            label: 'Nome',
            placeholder: 'Digite o nome do aluno',
            required: true,
            value: aluno.name || ''
        },
        {
            name: 'lastName',
            label: 'Sobrenome',
            placeholder: 'Digite o sobrenome do aluno',
            required: true,
            value: aluno.lastName || ''
        },
        {
            name: 'email',
            label: 'E-mail',
            placeholder: 'Digite o e-mail do aluno',
            required: true,
            value: aluno.email || ''
        },
        {
            name: 'phone',
            label: 'Telefone',
            placeholder: 'Digite o telefone do aluno',
            required: true,
            value: aluno.phone || ''
        },
        {
            name: 'date',
            label: 'Data de nascimento',
            placeholder: 'Digite a data de nascimento do aluno',
            required: true,
            value: aluno.birthDate || '',
            role: {
                pattern: '^\\d{2}/\\d{2}/\\d{4}$',
                message: 'A data deve estar no formato dd/mm/yyyy'
            }

        },
    ]);

    useEffect(() => {
        if (aluno) {
            setFields((prevFields) =>
                prevFields.map((field) => ({
                    ...field,
                    value: aluno[field.name] || '',
                }))
            );
        }
    }, [aluno]);

    return (
        <FormBase
            fields={fields}
            onSubmit={onSubmit}
            buttonTitle={'Cadastrar'}
        />
    );
}
