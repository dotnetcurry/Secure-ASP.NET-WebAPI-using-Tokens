using System.Collections.Generic;

namespace WebAPI_NG_TokenbasedAuth.Models
{
    public class Employee
    {
        public int EmpNo { get; set; }
        public string EmpName { get; set; }
        public int Salary { get; set; }
        public string DeptName { get; set; }
    }

    public class EmployeeDatabase : List<Employee>
    {
        public EmployeeDatabase()
        {
            Add(new Employee() { EmpNo = 101, EmpName = "TS", Salary = 12000, DeptName = "IT" });
            Add(new Employee() { EmpNo = 102, EmpName = "MS", Salary = 22000, DeptName = "System" });
            Add(new Employee() { EmpNo = 103, EmpName = "LS", Salary = 21000, DeptName = "Sales" });
            Add(new Employee() { EmpNo = 104, EmpName = "VB", Salary = 32000, DeptName = "HRD" });
            Add(new Employee() { EmpNo = 105, EmpName = "PB", Salary = 42000, DeptName = "HRD" });
            Add(new Employee() { EmpNo = 106, EmpName = "AB", Salary = 12000, DeptName = "Admin" });
        }
    }
}