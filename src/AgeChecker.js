const ageChecker = (age) => {
    if (age < 18 || age > 100) {
        return false
    } else {
        return true
    }
}

export default ageChecker;