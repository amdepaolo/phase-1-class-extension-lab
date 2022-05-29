// Your code here
class Polygon {
    constructor(array){
        this.sides = array;
    }
    get countSides(){
        return this.sides.length;
    }
    get perimeter(){
        let result = 0;
        for (const side of this.sides) {
         result += side;   
        }
        return result;
    }
}

class Triangle extends Polygon{
    get isValid(){
        for (const side of this.sides){
            if(this.perimeter - side < side) return false
        }
        return true
    }
}

class Square extends Polygon{
    get isValid(){
        for( const side of this.sides){
            if( side !== (this.perimeter/4)){
                return false
            }
        }
        return true
    }
    get area(){
        return this.sides[0] ** 2
    }
}