import { Resource } from "./resource";
import { AdminUser, ModeratorUser, StandardUser } from "./user";


const user1 = new StandardUser("John", "Walker");
const user2 = new ModeratorUser("Adam", "Smith");
const user3 = new AdminUser("Andrew", "Johnson");


const res = new Resource();

res.read(user1)
res.modify(user1)

res.read(user2)
res.modify(user2)

res.read(user3)
res.modify(user3)




// console.log(user1.toString());
// console.log(user2.toString());
// console.log(user3.toString());