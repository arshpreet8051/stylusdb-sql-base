function parseQuery(query) {
    const selectRegex = /SELECT (.+?) FROM (.+?)(?: WHERE (.*))?$/i;
    const match = query.match(selectRegex);

    if (match) {
        const [, fields, table, whereString] = match;
        const whereClause = whereString ? parseWhereClause(whereString) : [];
        return {
            fields: fields.split(',').map(field => field.trim()),
            table: table.trim(),
           whereClause
        };
    } else {
        throw new Error('Invalid query format');
    }
}

// src/queryParser.js
function parseWhereClause(whereString) {
    const conditionRegex = /(.*?)(=|!=|>|<|>=|<=)(.*)/;
    return whereString.split(/ AND | OR /i).map(conditionString => {
        const match = conditionString.match(conditionRegex);
        if (match) {
            const [, field, operator, value] = match;
            return { field: field.trim(), operator, value: value.trim() };
        }
        throw new Error('Invalid WHERE clause format');
    });
}

module.exports = parseQuery,parseQuery;