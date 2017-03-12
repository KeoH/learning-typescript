
import { Serializable } from '../interfaces/serializable';

export class User implements Serializable<User> {
    username :string;
    name :string;
    lastname :string;
    create_date :Date;

    constructor(o :Object){
        this.deserialize(o);
    }

    deserialize( input ){
        this.username = input.username;
        this.name = input.name;
        this.lastname = input.lastname;
        this.create_date = new Date(input.create_date);
        return this;
    }

}