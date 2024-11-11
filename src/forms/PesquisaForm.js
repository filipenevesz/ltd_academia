import FormBase from "./FormBaseDark";

export default function PesquisaForm() {
    const fields = [
        {
            name: "nome",
            label: "Nome ou Matrícula",
            type: "text",
        }
    ]
    return (
        <FormBase
            fields={fields}
            buttonTitle="Pesquisar"  />)
    }