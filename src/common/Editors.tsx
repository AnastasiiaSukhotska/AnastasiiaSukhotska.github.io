export const editingSalaryMethod = (salary: string) => {
    let salaryArr = salary.split('-');
    let editedSalaryArr = salaryArr.map(s => s.replace("k", " 000"))
    let editedSalaryStr = editedSalaryArr.join('-')
    return editedSalaryStr
}