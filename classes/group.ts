
import { Serializable } from '../interfaces/serializable';

export class Group implements Serializable<Group> {

    name :string;
    create_date :Date;

    constructor(o :Object){
        this.deserialize(o);
    }

    deserialize( input ){
        this.name = input.name;
        this.create_date = new Date(input.create_date);
        return this;
    }

}