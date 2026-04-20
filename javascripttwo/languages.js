// Convert the object where languages are the top-level keys, and inside each are translation strings by key into an object where translation keys are the top-level keys, and inside each you store values per language [HARD**]

// Input :{
//   en: { hello: "Hello", bye: "Goodbye" },
//   fr: { hello: "Bonjour", bye: "Au revoir" },
//   es: { hello: "Hola" }
// }
// {not able to think the logic in the first attempt}
// Output:{
//   hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
//   bye: { en: "Goodbye", fr: "Au revoir" }
// }

function objectLanguage(values) {
    let result = { }
    for (let lang in values) {
        for (let word in values[lang]) {
            if (!(result[word])) {
                result[word] = {}
            }
            result[word][lang] = values[lang][word]
        }
    }
    return result;
}

let data = { en: { hello: "Hello", bye: "Goodbye" }, fr: { hello: "Bonjour", bye: "Au revoir" }, es: { hello: "Hola" } }
console.log(objectLanguage(data))