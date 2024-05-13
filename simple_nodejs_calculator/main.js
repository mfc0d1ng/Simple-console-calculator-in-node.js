
const prompt = require("prompt-sync")()

/** Takes input from user */
function input(msg)
{
    return prompt(msg)
}

function exit()
{
    console.log("Invalid operator!")
    process.exit(1)
}

function main()
{
    const input1 = input("Enter first number: ")
    const input2 = input("Enter second number: ")
    const operator = input("Enter valid operator [+][-][*][/][%]: ")

    if(operator.length > 1)
    {
        exit() 
    }

    const num1 = parseFloat(input1)
    const num2 = parseFloat(input2)
    let result = 0.0

    switch (operator) 
    {
	case '+':
	    result = num1 + num2
	    break
	case '-':
	    result = num1 - num2
	    break
	case '*':
	    result = num1 * num2
	    break
	case '/':
	    result = num1 / num2
	    break
	case '%':
	    result = num1 % num2
	    break
	default:
	    exit()
    }

    console.log('\n', num1, operator, num2, '=', result)
}

if (require.main === module)
{
    main()
}
