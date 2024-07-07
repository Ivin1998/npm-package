function trimtrailingspaces(string){
    let text = string.replace(/\s+$/, '');
    return text;
}

module.exports = trimtrailingspaces;