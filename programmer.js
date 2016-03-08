let createProgrammer = () => {
    var langs = [];

    return {
        isPragmatic: () => langs.length > 2,
        learnNewLang: (lang) => langs.push(lang)
    };
};

let p = createProgrammer();
p.learnNewLang('js');
p.learnNewLang('java');
p.learnNewLang('php');
console.log(p.isPragmatic());
