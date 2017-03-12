import { Serializable } from '../interfaces/serializable';
import { User } from './user';
import { Group } from './group';

export class Data implements Serializable<Data> {
    user: User;
    groups :Group[] = [];

    constructor(o :Object) {
        this.deserialize(o);
    }

    deserialize( input ){
        this.user = new User(input.user);
        for(let item of input.groups){
            this.groups.push(new Group(item));
        }        
        return this;
    }

}