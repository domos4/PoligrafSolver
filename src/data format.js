const inputData = [{
    name: "wizytówka",
    size: {
        width: 10,
        height: 5
    },
    count: 2000
}, {
    name: "plakat",
    size: {
        width: 60,
        height: 100
    },
    count: 500
}];

const outputData = [{
    name: "SRA3",
    size: {
        width: 120,
        height: 200
    },
    uses: [{
        name: "plakat",
        rotated: false,
        position: {
            width: 0,
            height: 0
        }
    }, {
        name: "plakat",
        rotated: false,
        position: {
            width: 60,
            height: 0
        }
    }, {
        name: "plakat",
        rotated: false,
        position: {
            width: 0,
            height: 100
        }
    }, {
        name: "plakat",
        rotated: false,
        position: {
            width: 60,
            height: 100
        }
    }]
}, {
    name: "W2",
    size: {
        width: 20,
        height: 10
    },
    uses: [{
        name: "wizytówka",
        rotated: true,
        position: {
            width: 0,
            height: 0
        }
    }, {
        name: "wizytówka",
        rotated: true,
        position: {
            width: 5,
            height: 0
        }
    }, {
        name: "wizytówka",
        rotated: true,
        position: {
            width: 10,
            height: 0
        }
    }, {
        name: "wizytówka",
        rotated: true,
        position: {
            width: 15,
            height: 0
        }
    }]
}];