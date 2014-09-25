
String.prototype.toLines = function() {
    return this.match(/^.*\b/gm);
}

String.prototype.stripBrackets = function() {
    return this = this.replace(/[\(\{\[].*[\)\}\]]/, '');
}
