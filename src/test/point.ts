export class Point{

    constructor(private x?:number, private y?: number){

    }

    draw(){

        console.log('X: '+this.x, 'Y: '+this.y);
    }

    get X() {
        return this.x
    }

    set X(value) {

        if (value < 0){

            throw new Error('value cannot be less than 0.')

        }
        this.x= value 
    }

   
}