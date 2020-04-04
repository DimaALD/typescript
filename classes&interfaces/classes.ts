abstract class Department {
    protected employees: string[] = [];

    static fiscalYear = '2020';

    constructor(protected readonly id: string, public name: string) {}

    static createEmployee(name: string) {
        return {name: name}
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}


class ItDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
    }

    describe() {
        console.log(`ITDepartment ID: ${this.id}`);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error(`No report found`);
    }

    set mostRecentReport(report: string) {
        this.addReport(report);
    }

    constructor(id: string, private readonly reports: string []) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmployee(name: string) {
        if(name === 'Dima') {
            return;
        }
        this.employees.push(name);
    }

    addReport(report: string) {
        this.reports.push(report);
        this.lastReport = report;
    }

    printReports() {
        console.log(this.reports);
    }

    describe() {
        console.log(`AccoutingDepartment ID: ${this.id}`);
    }

}

const employee1 = Department.createEmployee('Dima');

const year = Department.fiscalYear;

const accounting = new AccountingDepartment('d2', []);

const it = new ItDepartment('d3', ['Dima', 'Alyona']);

it.describe();

accounting.addReport('new report');

accounting.printReports();

accounting.addEmployee('Maxim');

accounting.printEmployeeInformation();


class SingleTone {

    private static instance: SingleTone;

    private constructor (public n: string, public age: number) {}

    static getInstance() {
        if(SingleTone.instance) {
           return this.instance;     
        } 
        this.instance = new SingleTone('d2', 2);
        return this.instance;
    }

}

const singleTone = SingleTone.getInstance();