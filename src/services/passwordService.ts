export default function generatePassword (){
    let password: string = ''
    let characters: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%'
    let passwordLenght = 9
    for (let i = 0; i < passwordLenght; i++ ){
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return password
}