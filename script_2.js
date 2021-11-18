{
    let num = prompt("De quel chiffre veux-tu la factorielle ?");
    let i = num - 1
    let fac = num
    while (i > 0)
    {
        fac = i * fac
        i--
    }
    console.log(`La factorielle de ${num} est ${fac}`)
}
console.log("----------------------------")
