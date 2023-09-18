const departmentList = [
    {
        departmentName: 'Financial',
        employees:
        [
            {
                name: 'Rose',
                age: 26,
                responsibility: 'Financial director',
                salary: 5600
            },
            {
                name: 'Stevem',
                age: 32,
                responsibility: 'Financial manager',
                salary: 4200
            },
            {
                name: 'Beca',
                age: 26,
                responsibility:'Financial analyst',
                salary: 2800
            }
        ],
        working: true
    },
    {
        departmentName: 'Expedition',
        employees:
        [
            {
                name: 'Rooper',
                age: 35,
                responsibility: 'Expedition director',
                salary: 5600
            },
            {
                name: 'Maggie',
                age: 22,
                responsibility: 'Expedition manager',
                salary: 4200
            },
            {
                nome: 'Thompson',
                age: 41,
                responsibility: 'Expedition analyst',
                salary: 2800
            }
        ],
        working: true
    },
    {
        departmentName: 'Capitation',
        employees:
        [
            {
                name: 'Saory',
                age: 35,
                responsibility: 'Capitaion director',
                salary: 5600
            },
            {
                name: 'Silvia',
                age: 22,
                responsibility: 'Capitation manager',
                salary: 4200
            },
            {
                name: 'Sonem',
                age: 41,
                responsibility: 'Capitation analyst',
                salary: 2800
            },
            {
                name: 'Havi',
                age: 41,
                responsibility: 'Trainee Capitation manager',
                salary: 1500
            },
            {
                name: 'Margie',
                age: 25,
                responsibility: 'Capitation analyst',
                salary: 2800
            },
            {
                name: 'Victoria',
                age: 18,
                responsibility: 'Trainee Capitation analyst',
                salary: 1500
            }
        ],
        working: true
    }
]

function insertEmployeeInDepartment(departmentName, newEmployee) {
    for (let i = 0; i < departmentList.length; i++) {
        if (departmentList[i].departmentName === departmentName) {
            departmentList[i].employees.push(newEmployee);
            return departmentList;
        }
    }
    return `Department not found`;
}

const newEmployee = {
    name: 'Rosemary',
    age: 44,
    responsibility: 'Financial expedition director',
    salary: 15600
};

const result = insertEmployeeInDepartment('Financial', newEmployee);
console.log(result);