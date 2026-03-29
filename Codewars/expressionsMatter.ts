function expressionsMatter(a: number, b: number, c: number): number {
    const expressions: number[] = [
        a + b + c,
        a * b * c,
        (a + b) * c,
        a * (b + c),
        a + b * c,
        a * b + c
    ];
    return Math.max(...expressions);
}