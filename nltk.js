
String.prototype.toLines = function() {
    return this.match(/^.*\b/gm);
}

String.prototype.stripBrackets = function() {
    return this = this.replace(/[\(\{\[].*[\)\}\]]/, '');
}

Array.prototype.lineMap = function( threshold ) {

    threshold = threshold ? threshold : 100;

    return this.map(function(v){
        var r = 0, len = v.length;

        r = len > 0 && len <= threshold ? 'A' : r;
        r = len > threshold && len <= (threshold * 2) ? 'B' : r;
        r = len > (threshold * 2) && len <= (threshold * 3) ? 'C' : r;
        r = len > (threshold * 3) && len <= (threshold * 4) ? 'D' : r;
        r = len > (threshold * 4) ? 'E' : r;

        return r;
    }).join('')
}
