//전체조회
//특정값만 보내주면 됨.기본적으로 get 방식 사용
fetch('http://localhost:3000/posts')
.then(res => res.json())
.then(data => console.log('list', data))
.catch(err => console.log(err));

//단건조회
//조회할 대상을 기준으로 /1 처럼 슬래시 사용, list가 아닌 info 
 fetch('http://localhost:3000/posts/1')
 .then(res => res.json())
 .then(data => console.log('info', data))
 .catch(err => console.log(err));

//등록
// fetch('http://localhost:3000/posts', {
//     method : 'post',
//     headers : {
//         'content-type' : 'application/json'
//     },
//     body : JSON.stringify({ userId : 2, id : 4, title : 'Have A Nice Day !', body : 'quia et suscipit\n' +
//     'suscipit recusandae consequuntur expedita et cum\n' +
//     'reprehenderit molestiae ut ut quas totam\n' +
//     'nostrum rerum est autem sunt rem eveniet architecto'})
// })
// .then(res => res.json())
// .then(result => console.log('insert', result));

//수정
//어떤 정보를 수정할것인지 경로를 적어줘야함
fetch('http://localhost:3000/posts/4', {
    method : 'put',
    headers : {
        'content-type' : 'application/json'
    },
    body : JSON.stringify({ userId : 3,title : 'Hello, World!', body : 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'})
})
.then(res => res.json())
.then(result => console.log('update', result));

//삭제
fetch('http://localhost:3000/posts/4',{
    method : 'delete'
})
.then(res => res.json())
.then(result => console.log('delete', result));