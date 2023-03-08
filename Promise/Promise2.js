//Promise - callback 대체일.
//무겁고 해비한 일을 끝나면 알려줄게. then ,catch , finally
//비동기적으로 수행하고 끝난 event를 알려주는.

//state : pending , fulfilled , rejected

function reunInDelay(seconds) {
    return new Promise((resolve, reject) => {
        if (!seconds || seconds < 0) {
            reject(new Error('seconds가 없거나 0 보다 작음.'));
        }
        setTimeout(resolve, seconds * 1000);
    });
}

reunInDelay(2)
    .then(() => console.log('타이머 완료 끝났다 !'))
    .catch(console.error)
    .finally(() => console.log('finally finish !'));

//Promise static function.
function getChicken() {
    return Promise.reject(`치킨을 가지고 올 수 없음 !`);
    // return Promise.resolve(`⛺️=> 🐓`);
}
function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}
function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`);
}

//가독성을 위해 최대한 간결하게
getChicken()
    .catch(() => '🐔') //에러를 우아하게 앞에서 처리 for 에러버블링.
    .then(fetchEgg)
    .then(fryEgg)
    .then(console.log)
