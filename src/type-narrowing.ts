// =============================================
// HARI 3 - Type Narrowing & Interface Lanjutan
// =============================================

// Bagian 1: Type Narrowing Dasar
// TODO: Buat function yang menerima parameter bertipe string | number
//       Kemudian narrow tipe-nya menggunakan typeof dan tampilkan hasil yang berbeda

function processInput(input: string | number) {
    if (typeof input === "string") {
        console.log(`Input is a string: ${input.toUpperCase()}`);
    } else if (typeof input === "number") {
        console.log(`Input is a number: ${input.toFixed(2)}`);
    }
}
processInput("Focus To Master TypeScript Dude!");
processInput(99);


// Bagian 2: Discriminated Union
// TODO: Buat 2 tipe berikut

type SuccessResponse = {
    status: "success"; // discriminated 
    data: string;
};

type ErrorResponse = {
    status: "error"; // discriminated
    message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse) {
    if (response.status === "success") {
        console.log(response.data);
    } else {
        console.error(response.message);
    }
}
handleResponse({ status: "success", data: "Data fetched successfully" });
handleResponse({ status: "error", message: "An error occurred" });


// Bagian 3: Interface Lanjutan
// TODO: Buat interface User

interface User {
    id: number;
    name: string;
    email: string;
}

// TODO: Buat interface AdminUser yang extend User
interface AdminUser extends User {
    role: string;
    permissions: string[];
}

const admin: AdminUser = {
    id: 5,
    name: "Rudy",
    email: "rudy@gmail.com",
    role: "admin",
    permissions: ["read", "write"]
};
console.log(admin);


// Bagian 4: Function Overloading
// TODO: Buat function formatInput yang overload
//       Bisa menerima string → return string
//       Bisa menerima number → return string dengan format "Rp xxx"

function formatInput(input: string): string;
function formatInput(input: number): string;

function formatInput(input: string | number): string {
    if (typeof input === "number") {
        return `Rp ${input.toLocaleString("id-ID")}`;
    }
    return input;
}
const res1 = formatInput("Solid TS for future");
const res2 = formatInput(50000);
console.log(res1);
console.log(res2);



// Bagian 5: Custom Type Guard
// TODO: Buat type guard untuk mengecek apakah object adalah User

function isUser(obj: any): obj is User {
    if (obj && typeof obj === "object" && "id" in obj && "name" in obj && "email" in obj) {
        return (
            typeof obj.id === "number" &&
            typeof obj.name === "string" &&
            typeof obj.email === "string"
        );
    }
    return false;
}

// Test function
console.log("=== Type Narrowing & Interface Test ===");
// TODO: Panggil semua function di atas untuk testing

const user: User = {
    id: 1,
    name: "Rudy",
    email: "rudy@gmail.com"
};

const user2: User = {
    id: 2,
    name: "Susi",
    email: "susi@gmail.com"
}
console.log(isUser(user));
console.log(isUser(user2));

