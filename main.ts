

import { Data } from './classes/data';

let datos = {
    user: {
        username: "pedrito",
        name: "Pedro",
        lastname: "Gutierrez",
        create_date: "2017-03-11T21:00:35.443Z"
    },
    groups: [
        {
            name: "Los aflijidos",
            create_date: "2017-02-18T21:04:35.443Z"
        },
        {
            name: "Los segundones",
            create_date: "2017-02-21T21:04:35.443Z"
        }
    ]
}

let instance :Data= new Data(datos);
console.log(instance.groups[0].create_date.getMonth());