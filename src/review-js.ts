// =============================================
// Review JavaScript Modern - Dyo
// =============================================

// Bagian 1: Variables & Template Literals

const nama: string = "Dyo";
let umur: number = 35;
let alamat: string = "Cimahi, Jawa Barat";

console.log(`Halo, nama saya ${nama}, umur ${umur} tahun, dari ${alamat};`)


// Bagian 2: Arrow Functions
// Buat function dengan implicit return 1 baris:

const tambah = (a: number, b: number): number => a + b;
console.log(tambah(1, 5));

const greet = (name: string): string => `Halo, ${name}!`;
console.log(greet("Samuel"));

const createUser = (name: string, age: number) => ({
    name,
    age,
    createdAt:new Date()
})
console.log(createUser("Samuel", 25)); // Output: {name: "Samuel", age: 25}



// 3. Destructuring dengan alias:
// Apa itu destructuring? Destructuring adalah cara mengambil data dari array atau object.  

const user = {
    id: 1,
    name: "Budi", 
    address: {
        city: "Jakarta",
        province: "DKI Jakarta"
    }
};

const { name, address: {city}} = user; 
console.log(name, city);

const numbers = [10, 20, 30, 40];
const [first, second, ...rest] = numbers;
console.log(first, second, rest); // Output: 10, 20, [30, 40]

// Bagian 4: Spread Operator & Rest
// Spread Operator digunakan untuk menggabungkan array atau object menjadi satu.
// Rest Operator digunakan untuk mengambil sisa elemen dari array atau object.

// a. Spread pada array:
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2); // Output: [1, 2, 3, 4, 5, 6]

// b. Spread pada object:
const obj1 = {name: "Dyo",  skill: "TS"};
const obj2 = {...obj1, level: "Advanced"};
console.log(obj2); // Output: {name: "Dyo", skill: "TS", level: "Advanced"}

const sumAll = (...numbers: number[]): number => {
    return numbers.reduce((total, num) => total + num, 0);
};
console.log(sumAll) // Output: 15
console.log(`Sum of all numbers: ${sumAll(1, 2, 3, 4, 5)}`); // Output: 15



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
    }
}, 0);
console.log(`Jumlah umur user active: ${totalAgeActive}`);

// Cara ke 2:
const totalActiveAge = users
    .filter((user) => user.active)// filter dulu yang active
    .reduce((total, user) => total + user.age, 0);
console.log(`Jumlah umur user active: ${totalActiveAge}`);


// Bagian 6: Async/Await
// Async/Await digunakan untuk menangani promise.

const fetchUser = (id: number): Promise<{name: string, age: number}> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({name: "Dyo", age: 25});
            } else {
                reject(new Error("User not found"));
            }
        }, 1000);
    });
};

const getUserData = async () => {
    try {
        const user = await fetchUser(1);
        console.log("User data:", user);
    } catch (error) {
        console.error("Error:", error);
    }
};
getUserData(); // Output: User data: {name: "Dyo", age: 25}



// Bagian 7: Modules (Export/Import)

export const PI = 3.1419;

export function formatName(name: string): string {
    return name.toUpperCase();
}

export default function main() {
    console.log("Review JavaScript Modern Selesai :)");
}