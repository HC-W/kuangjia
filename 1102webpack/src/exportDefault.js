export default class{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    fn(){
        console.log(`我是${this.name},我今年${this.age}岁`)
    }
}