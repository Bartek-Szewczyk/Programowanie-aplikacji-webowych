class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    Show() {
        document.body.innerHTML = `<h1>Witaj ${this.name} ${this.surname} mam ${this.age} lat</h1>`;
    }
}
let p = new Person("John", "Blake", 11);
p.Show();
