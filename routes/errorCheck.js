            function errorCheck(a, b, c, d, e, f) {
                // Check if all values are passed to the input 
                if (!a || !b || !c) {
                    return ({
                        status: 400,
                        message: `Missing variable (check ${d}, ${e}, ${f})`
                    })
                }
            }

            module.exports = errorCheck