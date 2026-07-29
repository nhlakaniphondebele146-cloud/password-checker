// Simple Security Tool: Password Strength Evaluator
function checkPasswordStrength(password) {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++; // Has uppercase
    if (/[a-z]/test(password)) score++; // Has lowercase
    if (/[0-9]/.test(password)) score++; // Has Numbers
    if (/[^A-Za-z0-9]/.test(password)) score++; //Has special characters

    console.log(`Evaluating Password: "${password}"`);
    if (score <= 2) console.log("Result: WEAK PASSWORD (Insecure)");
    else if (score <= 4) console.log("Result: MEDIUM PASSWORD (Moderate)");
    else console.log("Result: SRONG PASSWORD (Highly Secure)");
}

// Test case for security evaluation 
checkPasswordStrength("P@ssword123!");