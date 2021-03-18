class Person {
    constructor(public name: string, public surname: string, public age: number ) {
        
    }
    Show(){
    
        document.body.innerHTML = `<h1>Witaj ${this.name} ${this.surname} mam ${this.age} lat</h1>`
    }
}

let p = new Person("John", "Blake", 11);

p.Show();