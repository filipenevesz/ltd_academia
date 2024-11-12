import FormBase from './FormBaseLigth';

export default function CreateFuncionario({ onSubmit }) {
    const fields = [
        {
            name: 'name',
            label: 'Nome',
            placeholder: 'Digite o nome do aluno',
            required: true,
        },
        {
            name: "lastNome",
            label: 'Sobrenome',
            placeholder: 'Digite o sobrenome do aluno',
            required: true,
        },
        {
            name: 'cpf',
            label: 'CPF',
            placeholder: 'Digite o CPF do aluno',
            required: true,
        },

        {
            name: 'email',
            label: 'E-mail',
            placeholder: 'Digite o e-mail do aluno',
            required: true,
        },
        {
            name: 'telefone',
            label: 'Telefone',
            placeholder: 'Digite o telefone do aluno',
            required: true,
        },
        {
            name: 'birthDate',
            label: 'Data de nascimento',
            placeholder: 'Digite a data de nascimento do aluno',
            required: true,
            
        },
        {
            name: 'role',
            label: 'Cargo',
            type: 'select',

        }
    ]

    return (
        <FormBase
            fields={fields}
            onSubmit={onSubmit}
            buttonTitle={'Cadastrar'}
            options={[
                { label: 'Admin', value: 'ADMIN' },
                { label: 'Instrutor', value: 'TRAINER' },
            ]}

        />
    );
}

