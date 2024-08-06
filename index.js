function introduction(name) {
    console.log("Aki");
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {
    console.log("Aki", "Ember.js");
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    if (name = "Gracie") {
        return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    } if (language = "JavaScript") {
        return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    } else `Hi, my name is ${name} and I am learning to program in ${language}`;
};
console.log(introductionWithLanguageOptional("Gracie", "JavaScript"));

function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log("Gracie", "python");
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
