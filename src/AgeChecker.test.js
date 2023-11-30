import ageChecker from './AgeChecker';

describe('Date of Birth Validation', () => {
    
    test('should return false if age > 100', () => {
        const age = 150;
        const test = ageChecker(age)
        expect(test).toBe(false)
    }
    )

    test('should return false if age < 18', () => {
        const age = 17;
        const test = ageChecker(age)
        expect(test).toBe(false)
    })

    test('should return true if age >= 18 and age < 100', () => {
        const age = 20
        const test = ageChecker(age)
        expect(test).toBe(true)
    })
})