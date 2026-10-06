const user="usuario"
export function crearDatos(datos){
 if(recuperarDatos(user)==null){
    sessionStorage.setItem(user,JSON.stringify(datos));
 }
}
export function recuperarDatos(){
    const datos=sessionStorage.getItem(user);
    return JSON.parse(datos); 
}