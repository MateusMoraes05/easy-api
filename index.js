
export default function apiHelper(url) {
    const fetchProps = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(url, apiHelper)
    .then(response => {response.json().then( data => console.log(data))})
    .catch((e) => {console.log(`Erro: ${e}`)})
}