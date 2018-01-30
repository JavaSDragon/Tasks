let getResolvedPromise = (value) => {
    return new Promise((resolve, reject) => {
        if (value <= 300) {
            resolve(value)
        }
        throw new Error(`Ошибка`)
    });
};
getResolvedPromise(200).then((value) => (console.log(value))).catch((err) => (console.log(err))).finally(() => { console.log(`This is Finally!`) });


