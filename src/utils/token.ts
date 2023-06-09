export let SET_TOKEN = (token: any) => {
    localStorage.setItem("TOKEN", token)
}


export let GET_TOKEN = () => {
    return localStorage.getItem("TOKEN")
}

