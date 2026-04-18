function calculateYears(principal: number, interest: number, tax: number, desired: number): number {
    let years = 0;
    let current = principal;
    while (current < desired) {
        const interestEarned = current * interest;
        const taxPaid = interestEarned * tax;
        current += interestEarned - taxPaid;
        years++;
    }
    return years;
}
