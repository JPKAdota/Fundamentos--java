function getAdmins(map) {
    let admins = [];
    for ([key,value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usarios = new Map();

usarios.set('Luiz', 'Admin');
usarios.set('João', 'Admin');
usarios.set('Natalia', 'Admin');
usarios.set('Jorge', 'User');

console.log(getAdmins(usarios));