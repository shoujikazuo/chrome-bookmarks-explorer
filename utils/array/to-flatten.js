export function toFlatten (ary) {
    return ary.reduce(function (p, c) {
        return Array.isArray(c) ? p.concat(toFlatten(c)) : p.concat(c);
    }, []);
};