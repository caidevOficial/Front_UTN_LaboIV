import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserCrudService {

  private usersDB: AngularFireList<IUser>;

  constructor(private db: AngularFireDatabase) {
    //? Accedemos a la base de datos de firebase.
    //? Vamos a acceder la lista de jugadores en la db.
    //? y se implementa la funcionalidad en el segundo argumento.
    //? La referencia que es nuestra lista de jugadores, se va a ordenar por nombre.
    this.usersDB = this.db.list('/users', (ref) =>
      ref.orderByChild('username')
    );
  }

  //Devuelve un Observable de tipo Jugador Array.
  // getUsers(): Observable<IUser[]> {
  //   //? this.jugadoresDB ya tiene la base de datos.
  //   //? snapshotChanges obtiene la informacion en este momento.
  //   //? Obtiene los datos junto con la Key
  //   //? Con Pipe permite hacer modificaciones
  //   //? Con Map haremos un cambio, que por cada uno de los jugadores retornaremos la informacion,
  //   //? y se Agregue una Key.
  //   //? El formato de key siempre es $key.
  //   //? Payload es por donde esta viajando la data.
  //   return this.usersDB.snapshotChanges().pipe(
  //     //?A veces hay que importar map manualmente de rsjs/operators
  //     map((changes) => {
  //       return changes.map((c) => ({
  //         $key: c.payload.key,
  //         ...c.payload.val(),
  //       }));
  //     })
  //   );
  // }

  //Metodo para crear un nuevo jugador en la DB
  addUser(actual_user: IUser) {
    //?Con esto FireBase se encarga de todo,
    //?no hay que pensar en endpoints o si esta o no creada la tabla.
    //?Adicionamos un nuevo record a la tabla.
    return this.usersDB.push(actual_user);
  }

  //Borrar un Jugador de la DB
  deleteUser(id: string) {
    //? Que base de datos afectaremos? Jugadores.
    //? El id del jugador que deseamos eliminar.
    this.db.list('/users').remove(id);
  }

  //Editar un Jugador
  editUser(newUserData: any) {
    //? Salvamos el Key.
    //? Eliminamos el registro anterior con el Key.
    //? Nuevamente asignamos a ese registro la nueva información en la base de datos.
    //? FireBase no acepta que ya se contenga una Key, por eso se hizo la Key opcional.
    //? Al borrar o actualizar daria problema sino fuera opcional.
    const $key = newUserData.$key;
    delete newUserData.$key;
    this.db.list('/users').update($key, newUserData);
  }
}
