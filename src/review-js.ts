// Bagian 1: Variables & Template Literals

// 1. Buat contoh penggunaan let, const, dan template literal:
const nama = "Dyo";
let umur = 55;
let isMarried = true;
const gender = "Laki-laki";
let alamat = "Cimahi, Jawa Barat";

// Buat template literal:

const biodata = `Nama saya ${nama}, umur saya ${umur}, saya adalah seorang ${gender}, saya adalah ${isMarried ? "menikah" : "belum menikah"}, dan saya tinggal di ${alamat}.`;

console.log(biodata);

// Bagian 2: Arrow Functions
// Buat arrow function 1 parameter:

const sayHello = (name: string) => {
    console.log(`Hello, ${name}!`); // Output: Hello, Dyo!
};

// Buat function dengan implicit return 1 baris:
const sapa = (nama: string) => `Hallo, ${nama}!`;

// Buat function dengan multiple line dan return object:
const person = (name: string, age: number) => {
    return {
        name,
        age,
    };  
}
console.log(person("Dyo", 35));

const person2 = (name: string, address: string, phone: number) => {
    return {
        name,
        address,
        phone
    }
}
console.log(person2("Brandon", "Jakarta", 628123456789));

// 3. Destructuring dengan alias:
// Apa itu destructuring? Destructuring adalah cara mengambil data dari array atau object.  

const user = {nama: "Budi", umur: 20, alamat: "Jakarta"};
const {nama: namaPanggillan, umur: usia, alamat: tempatTinggal} = user;

console.log(namaPanggillan);
console.log(usia);
console.log(tempatTinggal);

// 3. Array destructuring:

const warna = ['Merah', 'Kuning', 'Hijau'];

// Mengambil elemen pertama dan kedua
const [satu, dua] = warna;

console.log(satu);
console.log(dua);

// Nested Object destructuring:

const karyawan = {
    id: 1,
    info: {
        kota: "Jakarta",
        jabatan: "Manager"
    }
}

// Mengambil properti kota dan jabatan yang adad di dalam info:

const { info: {kota, jabatan}} = karyawan;

console.log(kota);
console.log(jabatan);

// 4. Spread Operator & Rest Operator
// Spread Operator digunakan untuk menggabungkan array atau object menjadi satu.
// Rest Operator digunakan untuk mengambil sisa elemen dari array atau object.

// a. Spread pada array:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

// b. Spread pada object:
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const obj3 = {...obj1, ...obj2};

console.log(obj3);

// c. Rest parameter di function
// Rest parameter digunakan untuk mengambil sisa elemen dari array atau object.

// Buat garis horizontal
console.log("=".repeat(30));

const sum = (a: number, b: number, ...rest: number[]) => {
    console.log(a);
    console.log(b);
    console.log(rest);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// 5. Array Methods
// Array methods digunakan untuk mengubah array menjadi array baru.

const users = [
    {id: 1, name: "Dyo", age: 25, city: "Jakarta", active: true},
    {id: 2, name: "Budi", age: 30, city: "Surabaya", active: false},
    {id: 3, name: "Joko", age: 35, city: "Bandung", active: true},
    {id: 4, name: "Rudi", age: 40, city: "Medan", active: false},
    {id: 5, name: "Siti", age: 45, city: "Palembang", active: true}
];

// Menggunakan map() mengambil daftar nama saja
const names = users.map((user) => user.name);
console.log(names); // Output: ["Dyo", "Budi", "Joko", "Rudi", "Siti"]

// Mengambil nama dan city:
const nameAndCity = users.map((user) => user.name + " " + user.city);
console.log(nameAndCity);

// Menggunakan filter() untuk mengambil user dari Medan
const medanUsers = users.filter((user) => user.city === "Medan");
console.log(medanUsers);

// Menggunakan find() untuk mencari ID tertentu
const userById = users.find((user) => user.id === 2);
console.log(userById);

// Menggunakan reduce() untuk menghitung total umur user yang active(true)

const totalAgeActive = users.reduce((total, user) => {
    if (user.active) {
        return total + user.age;
    } else {
        return total;
        console.log(total);
    }
}, 0);
console.log(`Jumlah umur user active: ${totalAgeActive}`);

// Cara ke 2:
const totalActiveAge = users
    .filter((user) => user.active)// filter dulu yang active
    .reduce((total, user) => total + user.age, 0);
console.log(`Jumlah umur user active: ${totalActiveAge}`);

// Bagian 7: Modules (Exprot/Import)
// Karena ini satu file, buat contoh export di bagian bawah:

// export const PI = 3.14;
// export function formatName(name: string) { ... }
// export default function main() { ... }

