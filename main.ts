import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimations from "chalk-animation";
import { exit } from "process";

async function welcome () {
    let title = chalkAnimations.rainbow("\n\t\t\tWelcome To The Meezan Bank ATM......... \n\t\t\t\t\t")
    await new Promise((res => {
        setTimeout(res,3000);
    }))
    title.stop();
}
welcome();

let Bank_Balance = 92000;
let Bank_Pin = 67522;
const Account_Number = 3408367522;


const answers = await inquirer.prompt([
    {
            name:"Account_Name",
            type:"string",
            prefix:"",
            message:(chalk.green)("\n\t > Enter Your Account Name =\t")
        },

        {
        name:"Account_Number",
        type: "number",
        prefix:"",
        message:(chalk.green)("\n\t > Enter your Account Number =\t")},

]
)

if(answers.Account_Number === Account_Number){
    
    console.log(chalk.yellow("\n***************************************************************************************************************"))
    async function login () {
        const animation = chalkAnimations.karaoke(`\n\t\t\t\t\tSUCCESSFUL LOGIN... ${answers.Account_Name} \t\t\t\t\t`)
        await new Promise((res => {
            setTimeout(res,3000);
        }))
        animation.stop();
    }
    login();
}

else{
    console.log("Invalid Account Number");
    console.log("Enter Correct Account Number");
}

    

const ask = await inquirer.prompt([{

    
        type: "number",
    name: "Pin",
    prefix: "",
    message: (chalk.green)("\n\ > Enter your Bank_Pin Code = \t")
        
}])

if (ask.Pin === Bank_Pin){

console.log("***************************************************************************************************************\n")
console.log(chalk.yellow(`\n\t\t\t\t\t WELCOME TO ONLINE ATM MACHINE \t\t\t\t\t\t\t\n`))
console.log("***************************************************************************************************************\n")


const operations = await inquirer.prompt(
    [
    {
    name:"Options",
    type: "list",
    prefix: "",
    message: (chalk.red)("\n\t > Select a list of Options = \t"),
    choices: [
        "Deposit",
        "Withdraw",
        "FastCash",
        "Transactions",
        "Insurance",
        "Balance",
        "Exit"
    ]
    }
]
)
if (operations.Options === "Deposit"){

    let Deposit = await inquirer.prompt(
        [
            {
                name:"Amount1",
                type:"number",
                prefix:"",
                message:(chalk.green) ("\t\n > Enter Deposit Amount =  \t")
            }
        ]
    )
    console.log(chalk.red(`\n\t\t\t\t\tyour Deposit Amount  = ${Deposit.Amount1}PKR\t\t\t\t\t\n`))
    console.log(chalk.green("``````````````````````````````````````````````````````````````````````````````````````"))
    console.log(chalk.gray(`\n\t\t\tNow your Current Bank_Balance is  = ${Bank_Balance + Deposit.Amount1} Amount\t\t\t\n`))
    console.log(chalk.green("``````````````````````````````````````````````````````````````````````````````````````"))
    console.log(chalk.black("***************************************************************************************************************"))
console.log(chalk.italic(chalk.white("\n\t\t\t\t\tTHANK YOU SO MUCH \t\t\t\t\t\n")))
console.log(chalk.black("***************************************************************************************************************\n"))
process.exit();
}

else if (operations.Options === "Withdraw"){

    console.log("would you like to withdraw online access")

    const withdraw = await inquirer.prompt([{

        name:"Amount2",
        type: "number",
        prefix:"",
        message:(chalk.green)( "\n\t > Please Enter your Withdraw = \t")

    }])
    console.log(chalk.cyan(`\n\t\t\t > your Withdraw Amount = ${withdraw.Amount2} PKR\t\t\t\t\t`))
    if(withdraw.Amount2 <=  Bank_Balance  ){
    console.log(chalk.grey(`\n > Now your Bank_Balance is  = ${Bank_Balance - withdraw.Amount2}PKR\n`))
    }
    else{
        console.log(chalk.red("\n\t\t\t> Insufficient Balance funds.......Check your Bank_Balance kindly\n\t\t\t\t\t"));
        }
    
    console.log(chalk.black("***************************************************************************************************************"))
console.log(chalk.italic(chalk.white("\n\t\t\t\t\tTHANK YOU SO MUCH \t\t\t\t\t\n")))
console.log(chalk.black("***************************************************************************************************************\n"))
    process.exit();
}

else if (operations.Options === "FastCash"){
 
    
    const fast = await inquirer.prompt([{

        name:"ok",
        type: "input",
        prefix:">",
        message:(chalk.green)("\n\t\t\t > Would you like to use FastCash `yes` for process...:\t"),

    }])
     if(fast.ok === "yes"){

    const fastCash = await inquirer.prompt([{

        name:"Amount3",
        type: "list",
        prefix:"",
        message:(chalk.green)("\n\t\t\t > Please select  your FastCash Amount"),
        choices:[
            "500",
            "1000",
            "2500",
            "5000",
            "100000"
        ]
        

    }])
    if(fastCash.Amount3 <=  Bank_Balance  ){
        console.log(chalk.red(`\n\t\t\t\t\t > Please collect your = ${fastCash.Amount3} PKR\n\t\t\t\t\t`))
        console.log(chalk.green("``````````````````````````````````````````````````````````````````````````````````````"))
        console.log(chalk.gray(`\n\t\t\t > Now your Bank_Balance is = ${Bank_Balance - fastCash.Amount3}PKR\n \t\t\t\n`))
        console.log(chalk.green("``````````````````````````````````````````````````````````````````````````````````````"))
        }
        else{
            console.log(chalk.red("\n\t\t\t > Insufficient Balance funds.......Check your Bank_Balance kindly\n\t\t\t\t\t"));
            }
    

  
    console.log(chalk.black("***************************************************************************************************************"))
    console.log(chalk.italic(chalk.white("\n\t\t\t\t\tTHANK YOU SO MUCH \t\t\t\t\t\n")))
    console.log(chalk.black("***************************************************************************************************************\n"))
    process.exit();
}}


else if (operations.Options === "Balance"){

  console.log(chalk.green("``````````````````````````````````````````````````````````````````````````````````````"))
  console.log(chalk.gray(`\n\t\t\t > your Current Balance is = ${Bank_Balance}PKR\n \t\t\t\n`))
  console.log(chalk.green("``````````````````````````````````````````````````````````````````````````````````````"))
    console.log(chalk.black("***************************************************************************************************************"))
    console.log(chalk.italic(chalk.white("\n\t\t\t\t\tTHANK YOU SO MUCH \t\t\t\t\t\n")))
    console.log(chalk.black("***************************************************************************************************************\n"))
    process.exit();
}

else if  (operations.Options === "Exit"){

    console.log(chalk.black("***************************************************************************************************************"))
    console.log(chalk.italic(chalk.white("\n\t\t\t\t\tTHANK YOU SO MUCH \t\t\t\t\t\n")))
    console.log(chalk.black("***************************************************************************************************************\n"))
    process.exit();
}
else if (operations.Options === "Insurance" ){
    console.log("***************************************************************************************************************\n")
    console.log(chalk.bold(chalk.blue("\n\t\t\t\t\t > Kindly Fill the Insurance Form\t\t\t\t\t\n")));
    console.log("***************************************************************************************************************\n")
    async function main() {
        const insuranceInfo = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                prefix:">",
                message:(chalk.red) ('\tEnter your name:')
            },
            {
                type: 'input',
                name: 'address',
                prefix:"\n>",
                message:(chalk.red) ('\tEnter your address:')
            },
            {
                type: 'input',
                name: 'nicNumber',
                prefix:"\n>",
                message:(chalk.red) ('\tEnter your NIC number:')
            },
            {
                type: 'input',
                name: 'bankAccountNumber',
                prefix:"\n>",
                message:(chalk.red) ('\tEnter your bank account number:')
            },
            {
                type: 'input',
                name: 'phoneNumber',
                prefix:"\n>",
                message:(chalk.red) ('\tEnter your phone number:')
            },
            {
                type: 'input',
                name: 'email',
                prefix:"\n>",
                message:(chalk.red)('\tEnter your email:')
            }
        ]);
    
        // Display the collected information
        console.log('\n\t\t\t\t\t > Insurance Information:\n');
        for (const [key, value] of Object.entries(insuranceInfo)) {
            console.log(chalk.white(`\n\t\t\t\t\t${key}: = ${value}\t\t\t\t\t\t`));
        }
    
    console.log(chalk.black("***************************************************************************************************************"))
    console.log(chalk.italic(chalk.white("\n\t\t\t\t\t > your Insurance form is submitted..... \t\t\t\t\t\n")))
    console.log(chalk.black("***************************************************************************************************************\n"))
    console.log(chalk.italic(chalk.red("\n\t\t\t\t\t > WE WILL RESPONSE YOU SOON..... \t\t\t\t\t\n"))) 
}
    main();
    
}
else if (operations.Options === "Transactions")
{
    
    console.log("***************************************************************************************************************\n")
    console.log(chalk.bold(chalk.blue("\n\t\t\t\t\t > Kindly Fill the Transaction Form\t\t\t\t\t\n")));
    console.log("***************************************************************************************************************\n")
    async function trs(){
        const transactionInfo = await inquirer.prompt([
            {
                type: 'input',
                name: 'amount',
                prefix:">",
                message:(chalk.red) ('\t transaction amount:')
            },
            {
                type: 'input',
                name: 'transactionDate',
                prefix:"\n>",
                message:(chalk.red) ('\tEnter transaction date:')
            },
            {
                type: 'input',
                name: 'transactionType',
                prefix:"\n>",
                message:(chalk.red) ('\tEnter transaction type:')
            },
            {
                type: 'input',
                name: 'transactionID',
                prefix:">\n",
                message:(chalk.red) ('\tEnter transaction ID:')
            }
        ]);
    
        console.log('\nTransaction Information:');
        for (const [key, value] of Object.entries(transactionInfo)) {
            console.log(chalk.blue(`\n\t\t\t\t\t${key}: ${value}\t\t\t\t\t\t\t`));
        }
        console.log(chalk.black("***************************************************************************************************************"))
        console.log(chalk.italic(chalk.white("\n\t\t\t\t\t > your Transaction form is submitted..... \t\t\t\t\t\n")))
        console.log(chalk.black("***************************************************************************************************************\n"))
        console.log(chalk.italic(chalk.red("\n\t\t\t\t\t > WE WILL RESPONSE YOU SOON..... \t\t\t\t\t\n"))) 
    }
    
    trs();
    }
}
else {" > Getting Error Please Try Again................\n";

}
