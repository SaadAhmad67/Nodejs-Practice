function htmlGenerator(title, content){
    return `<html><head><title>${title}</title></head><body>${content}</body></html>`
}

module.exports = {
    htmlGenerator
}