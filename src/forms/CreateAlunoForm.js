import FormBase from './FormBaseLigth';

export default function CreateAluno({ onSubmit }) {
    const fields = [
        {
            name: 'name',
            label: 'Nome',
            placeholder: 'Digite o nome do aluno',
            required: true,
        },
        {
            name: 'email',
            label: 'E-mail',
            placeholder: 'Digite o e-mail do aluno',
            required: true,
        },
        {
            name: 'phone',
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
    ]

    return (
        <FormBase
            fields={fields}
            onSubmit={onSubmit}
            buttonTitle={'Cadastrar'}

        />
    );
}

