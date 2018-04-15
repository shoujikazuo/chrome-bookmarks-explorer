var arrayToflatten = function (ary) {
    return ary.reduce(function (p, c) {
        return Array.isArray(c) ? p.concat(arrayToflatten(c)) : p.concat(c);
    }, []);
};