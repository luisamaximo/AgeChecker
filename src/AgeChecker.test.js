import ageChecker from './AgeChecker';

describe('Date of Birth Validation', () => {
    
    test('should return false if age > 100', () => {
        const oldAge = 150;
        const test = ageChecker(oldAge)
        expect(test).toBe(false)
    }
    )

    test('should return false if age < 18', () => {
        const youngAge = 17;
        const test = ageChecker(youngAge)
        expect(test).toBe(false)
    })

    test('should return true if age >= 18 and age < 100', () => {
        const age = 20
        const test = ageChecker(age)
        expect(test).toBe(true)
    })
})