
/**
 * return this first value of array
 * 
 * @returns mixed
 */
Array.prototype.first = function() {
    for (var i in this) {
        return this[i];
    }
}

/**
 * 
 * @returns last value o
 */
Array.prototype.last = function() {
    var last = null;
    for (i in this) {
        if (typeof this[i] != 'function') {
            last = this[i];
        }
    }
    return last;
}

/**
 * return minimun number of array
 * 
 * @returns number minimum number 
 */
Array.prototype.less = function() {
    this.ordination('asc');
    return this.first();
}

/**
 * Alias Array.prototype.less()
 * 
 * @returns number minimum number 
 */
Array.prototype.min = function() {
    return this.less();
}

/**
 * Alias Array.prototype.less()
 * 
 * @returns number minimum number 
 */
Array.prototype.smaller = function() {
    return this.less();
}

/**
 * return the bigger number of array
 * @returns number bigger of array
 */
Array.prototype.superior = function() {
    this.ordination('desc');
    return this.first();
}

/**
 * Alias for Array.prototype.superior
 * @returns number bigger of array
 */
Array.prototype.max = function() {
    return this.superior();
}



/**
 * Ordination of array
 * 
 * @param string ['asc' or 'desc']
 * @returns array orderly
 */
Array.prototype.ordination = function(type) {

    if (typeof type == 'undefined') {
        type = 'asc';
    }

    return this.sort(function(a, b) {
        if (typeof a == 'number' && typeof b == 'number') {
            if (type == 'asc') {
                return b < a;
            } else {
                return b > a;
            }
        }

        if (typeof a == 'string' && typeof b == 'string') {
            var nameA = a.toLowerCase(), nameB = b.toLowerCase();
            if (type == 'asc') {
                if (nameA < nameB) //sort string ascending
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            } else {
                if (nameA > nameB) //sort string ascending
                    return -1;
                if (nameA < nameB)
                    return 1;
                return 0;
            }
        }

    });
}

