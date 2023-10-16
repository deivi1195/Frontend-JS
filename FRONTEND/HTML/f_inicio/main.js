
async function getUser () {
    let user
    while (true) {
        let name = prompt('Enter a username', 'rubjo')
        try {
            user = await loadJson('http://localhost/${name}')
            break
        } catch (e) {
            if (e.response && e.response.status === 404) {
                alert(`User ${name} not found, please enter a username`)
            } else {
                throw e // uknown error
            }
        }
    }
    return user    
}
















