export {};

// Hari 2 - Types Fundamental (Primitive Types, Inference, Union, dll)

// Bagian 1: Primitive Types & Inference
// Apa itu Primitive Types? Primitive Types adalah tipe data dasar yang digunakan untuk menyimpan nilai primitif seperti string, number, boolean, dll.
// Inference digunakan untuk menentukan tipe data secara otomatis dari nilai yang diberikan.

// Buat variable dengan tipe berikut:
// string, number, boolean, null, undefined
// Gunakan type inference sebanyak mungkin.

const name: string = "Anto";
const age: number = 25;
const isActive: boolean = true;
const address: null = null;
const city: undefined = undefined;

console.log(name, age, isActive, address, city);


// Bagian 2: Union & Literal Types
// Apa itu Union Types? Union Types adalah tipe data yang digunakan untuk menyimpan nilai dari beberapa tipe data yang berbeda.
// Apa itu Literal Types? Literal Types adalah tipe data yang digunakan untuk menyimpan nilai konstan seperti string, number, boolean, dll.

// Status user: "active" | "inactive" | "banned"
// Role: "admin" | "user" | "moderator"
type Status = "active" | "inactive" | "banned";
const status: Status = "active";
console.log(status);

type Role = "admin" | "user" | "moderator";
const role: Role = "admin";
console.log(role);


// Bagian 3: Object Types
// Apa itu Object Types? Object Types adalah tipe data yang digunakan untuk menyimpan nilai object seperti {name: string, age: number, address: string, dll.}

// Buat tipe User dengan properti: id, name, age, email, isActive, role
type User = {
    id: number,
    name: string,
    age: number,
    email: string,
    isActive: boolean,
    role: Role
};

const user: User = {
    id: 1,
    name: "Dyo",
    age: 25,
    email: "X4TtP@example.com",
    isActive: true,
    role: "admin"
};
console.log(user);


// Bagian 4: Array & Tuples
// Apa itu Array? Array adalah tipe data yang digunakan untuk menyimpan nilai array seperti [1, 2, 3, 4, 5, 6]
// Apa itu Tuples? Tuples adalah tipe data yang digunakan untuk menyimpan nilai tuple seperti [1, "Dyo", true]

// Array of users
// Tuple untuk koordinat [latitude, longitude]

const arrayUsers: {id: number, name: string, email: string}[] = [
    {id: 1, name: "Dyo", email: "X4TtP@example.com"},
    {id: 2, name: "Budi", email: "K0l8t@example.com"},
    {id: 3, name: "Joko", email: "gM0Yq@example.com"},
    {id: 4, name: "Rudi", email: "r6y8M@example.com"},
];

let coordinates: [number, number] = [-6.2088, 106.8456];

console.log(arrayUsers);
const userPertama = console.log(`user pertama: ${arrayUsers[0].name}`);
//console.log(`lokasi userPertama di: ${coordinates}`);
console.log(userPertama);
console.log(coordinates);

// Bagian 5: Type vs Interface
// Apa itu Type vs Interface? Type digunakan untuk membuat tipe data baru, sedangkan Interface digunakan untuk membuat interface baru.

// Buat 1 contoh Type alias dan 1 contoh Interface untuk tipe yang sama:
// Type alias
type UserType = {
    id: number,
    name: string,
    email: string
};

// Interface:
interface UserInterface {
    id: number,
    name: string,
    email: string
};

// Cara penggunaannya sama persis:
const userA: UserInterface = {id: 1, name: "Rudy", email: "r6y8M@example.com"};
const userB: UserType = {id: 2, name: "Susi", email: "susi@gmail.com"};

console.log(userA);
console.log(userB);


// Bagian 6: Function Typing
// Apa itu Function Typing? Function Typing adalah tipe data yang digunakan untuk menyimpan nilai function seperti (name: string) => string
// Buat function dengan parameter dan return type yang jelas:

const greet = (name: string): string => `Halo, ${name}!`;
console.log(greet("Dyo"));

