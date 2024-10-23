export const Validate = (Email, Password) => {
    return fetch('https://localhost:8443/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Email: Email,
            Password: Password
        })
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((responseJson) => {
            console.log(responseJson);
            return responseJson; // Retorna o resultado da validação
        })
        .catch((error) => {
            console.error(error);
            throw error; // Propaga o erro para ser tratado onde a função é chamada
        });
}
