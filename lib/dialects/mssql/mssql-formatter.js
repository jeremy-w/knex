const Formatter = require('../../formatter');

class MSSQL_Formatter extends Formatter {
  // Accepts a string or array of columns to wrap as appropriate.
  columnizeWithPrefix(prefix, target) {
    const columns = typeof target === 'string' ? [target] : target;
    let str = '',
      i = -1;
    while (++i < columns.length) {
      if (i > 0) str += ', ';
      str += prefix + this.wrap(columns[i]);
    }
    return str;
  }

  escapingStringDelimiters(/** @type {string} */ string) {
    return string.replace(/'/g, "''");
  }
}

module.exports = MSSQL_Formatter;
