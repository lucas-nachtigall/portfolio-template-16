exports.handler = async (event) => {
    console.log('Hello World!');
    console.error('Hello World! - 1');
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello World!'),
    };
    return response;
};
