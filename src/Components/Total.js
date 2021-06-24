import React from 'react';

const Total = (props) => {
    const total = props.salary;
    console.log(total);

    let TotalSalary =0;
    for (let i = 0; i < total.length; i++) {
        const income = total[i];
        TotalSalary = TotalSalary + income.salary;
        console.log(TotalSalary);
        
    }
    return (
           <div>
                <h4>Total Salary: {TotalSalary}</h4>
                <p>Total Emplayee: {total.length}</p>
                
            </div>
    );
};

export default Total;