function webServerConnect(){
    return fetch('https://jsonplaceholder.typicode.com/posts/1',{
        headers : {
            'Cache-Control' : 'no-cache'
        }
    })
    .then(response => response.json());
}

//async await 가 없을 경우 결과값은 Promise {<pending>} 으로 수행이 되지 않아 클래스 자체를 출력한다.
async function getJSONData(){
    const result = await webServerConnect();
    console.log(result);
}

getJSONData();