import { v4 as uuid } from "uuid";

export const users = [
    {
        id: uuid(),
        firstName: "fname1",
        lastName: "lName1",
        birthDay: new Date(1999, 12, 25),
        gender: "male",
        isAdmin: true,
        isFunny: true,
    },
    {
        id: uuid(),
        firstName: "fname2",
        lastName: "lName2",
        birthDay: new Date(1997, 11, 19),
        gender: "female",
        isAdmin: false,
        isFunny: true,
    },
    {
        id: uuid(),
        firstName: "fname3",
        lastName: "lName3",
        birthDay: new Date(2000, 12, 1),
        gender: "non-binary",
        isAdmin: false,
        isFunny: true,
    },
];