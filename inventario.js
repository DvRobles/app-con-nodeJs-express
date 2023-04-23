
class inventario {
    constructor() {
        this.aux = [];
    }
    
    agregar(nuevo) {
        this.aux= [...this.aux, nuevo];
    }
    buscar(iduser) {
        return this.aux.find((usuario) => iduser == usuario.id);
    }
    listar() {
        return this.aux;
    }
     obtenerxId() {
        let id;
        this.data.forEach(user => {
            id = user.id
        })
        id++
        return id
    }
}

const inventory = new Inventario();
export {inventory};
