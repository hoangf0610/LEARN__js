//summary
/* 
1. Derlace: 
var, let, const
2. Built-in function
alert, console, confirm, prompt, setTimeout, setInterval
3. Boolean false
0, false, '' - "", underfined, NaN, null
console.log(isNaN(result))      true
4. String   
string = 'content'; 
.length, .search('JS') .indexOf('JS',6) .lastIndexOf('JS'), .slice(4,6), replace('JS', 'js'), .toUpperCase() .toLowerCase(), .trim(), .split(', '), .charAt(6)
5. Number
var billion = 1e9;
.toString(), toFixed(2)
6. Array
var a = ['JS', null, undefined,{}];
.isArray([]), a[2], .toString(), .join(' - '), .pop(), .shift(), .push('css'), .unshift('css'), .splice(1,1), .concat(arr2), .slice(0):copy
.forEach(f(course, index)), .every(){r}, .some(){r}, .find(){r}, .filter(){r}
//map
function handler(course, index) {
	return {
		id: course.id,
		name: `Khoa hoc : ${course.name}`
	}; //return course.name;
}
var newCourses = courses.map(courseHandler);
// reduce
var totalCoin = courses.reduce((total,arr) => total + arr.coin, 0);
//flat : làm phẳng mảng
var arr = [1,2, [3, 4], 5, 6, [7, 8, 9]];
var flatArr = arr.reduce((flatOut, item) => flatOut.concat(item), []);
console.log(flatArr);
7. Object 
var emailKey = 'email';
var myInfo = {
	// property : thuộc tính
	name: 'Hoang', 
	[emailKey]: 'hoang123@gmail.com',
	// method : phương thức
	getName: funtion(){return this.name;}
};
delete myInfo.age;

// Object  Constructor : cấu trúc
var User = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}
var author = new User('Sơn', 'Đặng');
author.title = 'Chia sẻ dạo tại F8';

User.prototype.className = 'F8';
User.prototype.getClassName = function() {return this.className;}

8. date
var date = new Date(); // new => object ; not new => toString
var year = date.getFullYear();
var month = date.getMonth() + 1; // 0 - 11
var day = date.getDate();
console.log(`${day}/${month}/${year}`);
9. Math Object
Math.PI, Math.round(1.8), Math.abs(-4), Math.ceil(4.1), Math.floor(4.99), Math.random(), Math.min(-100, 1, 2, 90)
var random = Math.floor(Math.random() * 5);
var bonus = ['10 coin','20 coin','30 coin','40 coin','50 coin',];
console.log(bonus[random]);
10. HTML DOM
// Concept
.setAttribute('class', 'heading'), .getAttribute('class'), .innerText = 'hello', .textContent = 'hello ', .innerHTML = '<h1>Heading</h1>', .outerHTML = '<h1>Heading</h1>'
// DOM style        boxE.style.width = '100px'; 
                    Object.assign(boxE.style, {height: '200px', });
// DOM classlist    .add('red'), .remove('red'), .contains('red'), .toggle('red')
// DOM event        btn.onclick = function() {console.log('viec 1'); console.log('viec 2');}
// input , select   .oninput, .onchange, 
// key up/ down     .onkeydown
preventDefault(), .stopPropagation()
11. JSON : Javascript Object Notation
// Stringify : từ JS type -> json
// parse : từ json -> JS type
var a = '"abc"';
console.log(JSON.parse(a));
console.log(JSON.stringify({name: 'hoang', age: 23 }));
12. Promise
// Pendding(chờ) -> Fullfile(thành công) -> reject(thất bại)
var promise = new Promise(
    function(resolve, reject) {
        resolve('thành công');
        //reject('có lỗi');
    }
);
promise
    .then(function(e) {console.log(data);})
    .catch(function(err) {console.log(err);})
    .finally(function() {console.log('done');});
*/

/*
// 1. Khai bao bien
var fullName = 'Nguyen Huu Hoang';
var age = 23;

var myObject = {
    name : 'Hoang',
    age: 23,
    adress: 'Ha Noi', 
    myFunction: function () {

    }
};

var myArray = [
    'JS',
    'PHP',
    'Ruby' 
];


// 2. Hàm built-in function
1. alert
    alert(fullName);
    alert(age);
2. console 
    console.log(fullName)
    console.warn()
    console.error()
3. confirm
    confirm('Message');
    confirm('Xac nhan ban du tuoi!');
4. Prompt
    prompt('Message');
    prompt('Xac nhan ban du tuoi!');
5. Set setTimeout : thực hiện 1 lần
    setTimeout(function() {
    }, time s)
    setTimeout(function() {
        alert(fullName);
    }, 1000)
    setTimeout(() => {
        boxE.classList.toggle('red');
    }, 3000);
6. Set interval : thực hiện liên tục
    setInterval(function() {
    console.log('day la log' + Math.random())
    }, 1000)

// 3. Boolean false
    0
    false
    '' - ""
    underfined
    NaN : số không hợp lệ
        kiểm tra NaN : 
        var result = 20 / 'ABC';
        console.log(isNaN(result))      true
    null

// 4. String     
    var myString = 'Hoc JS tai JS JS F8!';
    
1. length 
    console.log(myString.length) 
2. find index
    console.log(myString.search('JS'))          4
    console.log(myString.indexOf('JS'))         4
    console.log(myString.indexOf('JS', 6))      11
    console.log(myString.lastIndexOf('JS'))     21
    console.log(myString.lastIndexOf('ABC'))    -1
3. Cut string
    console.log(myString.slice(4, 6))           JS
    console.log(myString.slice(4))              JS tai JS JS F8!
    console.log(myString.slice(-3, -1))         F8!
4. replace
    console.log(myString.replace('JS', 'Javascript'))       Hoc Javascript tai JS JS F8!
    console.log(myString.replace(/JS/g, 'Javascript'))      Hoc Javascript tai Javascript Javascript F8!
5. convert to upper case
    console.log(myString.toUpperCase())         HOC JS TAI JS JS F8!
6. convert to lower case
    console.log(myString.toLowerCase())         hoc js tai js js f8!
7. Trim : loại bỏ khoảng trắng
    var myString = '       Hoc JS tai F8!  ';
    console.log(myString.trim())                Hoc JS tai F8!
8. Split : tách
    var languages = 'JS, PHP, Ruby';
    console.log(languages.split(', '))           "JS", "PHP", "Ruby"
    console.log(languages.split(''))           "J", "S", "P", "H", "P", "R", "u", "b", "y"
9. Get a character by index
    const myString = 'Hoang Nguyen'
    console.log(myString.charAt(0))             H
    console.log(myString.charAt(7))             N

// 5. Number
1. khai báo
    var million = 1000000;
    var biliion = 1e9;
    var age = 18;
    var a = 3.491316546;
    var b = 3.5;
2. làm việc
    console.log(age.toString())           '18'
    console.log(typeof age.toString())    string

    console.log(a.toFixed())                3 
    console.log(a.toFixed(2))               3.49 
    console.log(b.toFixed())                4  
    console.log(typeof b.toFixed())         string  

3. check NaN
function isNumber(value) {
   return typeof value === 'number' && value === value;
}

// 6. Array
1. khai bao
    var languages = [
        'JS',
        'PHP',
        'Ruby',
        null,
        undefined,
        function() {},
        {}
    ];
    console.log(languages)
2. check array
    console.log(Array.isArray(languages))   true
    console.log(Array.isArray({}))          false
    console.log(Array.isArray([]))          true
3. truy xuat
    console.log(languages[0])              'JS'
    console.log(languages[2])              'Ruby'
4. lam viec
toString
    console.log(languages.toString())      JS,PHP,Ruby
join
    console.log(languages.join(' - '))     JS - PHP - Ruby
pop: xóa phần tử cuối mảng, trả về phần tử đã xóa
shift: xóa phần tử đầu mảng, trả về phần tử đã xóa
    console.log(languages.pop())                Ruby    'JS', 'PHP'
    console.log(languages.shift())              JS      'PHP', 'Ruby'
push: thêm phần tử vào cuối mảng, thêm độ dài cho mảng
Unshift: thêm phần tử vào đầu mảng, thêm độ dài cho mảng
    console.log(languages.push('css', 'html'))     'JS', 'PHP', 'Ruby', 'css', 'html'
    console.log(languages.unshift('css', 'html'))  'css', 'html, 'JS', 'PHP', 'Ruby'
splicing: xóa phần tử
    languages.splice(1,0)          'JS', 'PHP', 'Ruby'
    languages.splice(1,1)          'JS', 'Ruby'
    languages.splice(1,2)          'JS'
    languages.splice(1,2,'css', 'html', 'java')
                            'JS','css', 'html', 'java'
    console.log(languages)     
concat: nối array vào languages
    var languages2 = [
        'Css',
        'Html'
    ];
    console.log(languages.concat(languages2)) 
                        'JS', 'PHP', 'Ruby', 'css', 'html'
slicing: cắt
    console.log(languages.slice(0))         copy array
    console.log(languages.slice(-2, -1))    'PHP'

// 6a. Array
var courses = [
    {
        id: 1,
        name : 'JS',
        coin: 250
    },
    {
        id: 2,
        name : 'HTML',
        coin: 250
    },
    {
        id: 3,
        name : 'REACTJS',
        coin: 0
    },
];

// forEach
courses.forEach(function(course, index) {
    console.log(course.name, index);
})


// every() : lặp lại function (kiểm tra từ trên xuông, return ngay khi đk đúng)
var isFree = courses.every(function(course, index) {
    return course.coin === 0;
})

console.log(isFree);

// some() : lặp lại function (kiểm tra tất cả, chỉ cần 1 đk đúng là return)
var isFree = courses.every(function(course, index) {
    return course.coin === 0;
})

console.log(isFree);

// find() : 
var course = courses.find(function(course, index) {
    return course.name === 'HTML';
})
console.log(course);

// filter : lọc
var course = courses.filter(function(course, index) {
    return course.coin >= 100;
})
console.log(course);


// map
function courseHandler(course, index) {
    return {
        id: course.id,
        name:`Khoa hoc : ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index
    };
    //return course.name;
}
var newCourses = courses.map(courseHandler);
console.log(newCourses);

// reduce
var total = 0;
function courseHandler1(total, course) {
    //accumulator : var luu tru : khi return
    return total + course.coin;
}
var totalCoin = courses.reduce(courseHandler1, 0);

const numbers = [1,2,3,4,5];
console.log(numbers.reduce((total,number) => total+number, 0));

function arrToObj(arr) {
	return arr.reduce((obj, [key, value]) => {
		obj[key] = value;
		return obj;
	}, {})
}
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr));
//flat : làm phẳng mảng
var depthArray = [1,2, [3, 4], 5, 6, [7, 8, 9]];
var flatArr = depthArray.reduce(function(flatOut, depthItem) {
    return flatOut.concat(depthItem);
}, []);
console.log(flatArr);

// includes
var title = 'Responsive web design';
var courses = ['JS', 'PHP', 'Dart'];
console.log(title.includes('web'));     //true
console.log(title.includes('Res', vi tri));
console.log(title.courses('PHP',1));     //false
console.log(title.courses('PHP',-1));    //tim nguoc arrLength-1=2

// call back : hàm dc truyền qua đối số
function myCb (cb,a, b,) {
    console.log(cb(a,b));
}

// 7. Object 
var emailKey = 'email';
var myInfo = {
	// property : thuộc tính
	name: 'Hoang', 
	[emailKey]: 'hoang123@gmail.com',
	// method : phương thức
	getName: funtion(){return this.name;}
	
};
delete myInfo.age;

// Constructor : cấu trúc
//function User (firstName, lastName, avatar) {
var User = function(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Prototype 
User.prototype.className = 'F8';
User.prototype.getClassName = function() {return this.className;}

// Declare
var author = new User('Sơn', 'Đặng', 'Avatar');
var user = new User('Hoàng', 'Nguyễn', 'Avatar');

author.title = 'Chia sẻ dạo tại F8';
user.coment = 'Hôm nay là thử 7';

// console.log(author.getName())
console.log(author)
// console.log(user.getName())
console.log(user)

// 8. Date
var date = new Date(); // new => object ; not new => toString
console.log(date)

var year = date.getFullYear();
var month = date.getMonth() + 1; // 0 - 11
var day = date.getDate();

console.log(`${day}/${month}/${year}`);

// 9. Math
console.log(Math.PI);
console.log(Math.round(1.8)); // làm tròn số
console.log(Math.abs(-4)); //trị tuyệt đối
console.log(Math.ceil(4.1)); // làm tròn trên
console.log(Math.floor(4.99)); // làm tròn dưới
console.log(Math.random()); // trả về số thập phân nhỏ hơn 1
console.log(Math.min(-100, 1, 2, 90));
console.log(Math.max(-100, 1, 2, 90));

// random box
var random = Math.floor(Math.random() * 5);
var bonus = ['10 coin','20 coin','30 coin','40 coin','50 coin',];
console.log(bonus[random]);
console.log(Math.PI);

// random rate
var random = Math.floor(Math.random() * 100);
if (random < 5) {console.log('goal goal')} // tỉ lệ vào là 5%
if (random < 50) {console.log('goal')} // tỉ lệ vào là 50%

// random in array
function getRandomItem(a) {
    var random = Math.floor(Math.random() * a.length);
    return a[random];
}
var a = [1, 2, 3, 4, 5];
console.log(getRandomItem(a));


// 10. if else, switch, toán tử 3 ngôi
const getCanVoteMessage = (age) => age >= 18 ? `Bạn có thể bỏ phiếu` : `Bạn chưa được bỏ phiếu`;

// 11. for

var myInfor = {
    name: 'Hoang',
    age: 23,
};

var languages = [
    'JS',
    'PHP',
    'Ruby',
]

var myString = 'javascript';

// for/in
for (var key in myInfor) {console.log(myInfor[key]);}
for (var key in myString) {console.log(myString[key]);}

function run(ob) {
    var a = [];
    for(var key in ob) {a.push(`Thuộc tính ${key} có giá trị ${ob[key]}`)}
    return a;
}

console.log(run({ name: 'Nguyen Van A', age: 16 }));

// for/of
for (var value of languages) {console.log(value);}
for (var value of Object.keys(myInfor)) {console.log(value);}

// while
while(i < languages.length) {
    console.log(languages[i]);
    i++;
}

// do while
do {
    i++;
    console.log(languages[i]);
} while(i < languages.length);

    // bài toán nạp thẻ
var i = 0;
var isSuccess = false;
do {
    i++;
    console.log('Nạp thẻ lần ' + i);
    if(true) isSuccess = true;
} while (!isSuccess && i<=3);

// đệ quy
var array = ['a', 'b', 'c','a', 'b', 'c',];
console.log(new Set(array)); 
// giải mảng console.log([...(new Set(array))]); 
// xác định điểm dừng 
function countDown (num) {
    if(num > 0) {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}
countDown(5);

function giaiThua (num) {
    if(num > 0){
        return num * giaiThua(num - 1);
    }
    return 1;
}
console.log(giaiThua(6));
*/

//  HTML DOM : Document Object Model
/*
// 1. Concept
// DOM có 3 thành phần : element, attribute, text
// Node : điểm giao nhau : 
var headingE = document.querySelector('.heading');
var boxE = document.querySelector('.boxz');

document.write('hello');
document.getElementById('');
document.getElementsByClassName('');
document.getElementsByTagName('');
document.querySelector('.heading:first-child');

headingE.setAttribute('class', 'heading');
headingE.getAttribute('class');

headingE.innerText = 'hello';        // trả về cái nhìn thấy
headingE.textContent = 'hello ';      // trả về all text 

boxE.innerHTML = '<h1>Heading</h1>';
boxE.outerHTML = '<h1>Heading</h1>';

console.log([boxE]);        // find attribute

// 2. DOM style
boxE.style.width = '100px';
Object.assign(boxE.style, {
    height: '200px',
    backgroundColor: 'red'
});

// 3. DOM classlist
boxE.classList.add('red');
boxE.classList.remove('red');
boxE.classList.contains('red');
boxE.classList.toggle('red');  //check có thì bỏ, k có thì thêm

// 4. DOM event : làm dc nhiều sự kiện
boxE.onclick = function(e) {
    console.log(e.target);
}

btn.onclick = function() {
    // viec 1
    console.log('viec 1');
    // viec 2
    console.log('viec 2');
    // viec 3
    console.log('viec 3');
}

// 5. input , select
var inputE = document.querySelector('input[type="text"]');
var inputC = document.querySelector('.inputz');
var inputS = document.querySelector('select');
var spd;

inputE.oninput = function(e) {      // change mỗi khi nhập
    var inputValue = e.target.value;
}
inputE.onchange = function(e) {     
    spd = e.target.value;
    console.log(spd);
}
inputC.onchange = function(e) {     // change sau khi out click
    console.log(e.target.checked);
}
inputS.onchange = function(e) {     // change sau khi out click
    console.log(e.target.value);
}

// 6. key up/ down
document.onkeydown = function(e) {
    switch(e.which) {
        case 27: 
            console.log('Exit');
            break;
    }
}

// 7. preventDefault , e.stopPropagation();
var aEs = document.links;
console.log(aEs);
for(aE of aEs) {
    aEs[i].onclick = function(e) {
        if(!e.target.href.startsWith('http://f8.edu.vn')) {
            e.preventDefault();
        }
    }
}

const inputz1 = document.querySelector('.inputz1')
const ulz1 = document.querySelector('.ulz1')

ulz1.onmousedown = function(e){
    e.preventDefault();
}

ulz1.onclick = function(e) {
    console.log(e.target);
}

// 14. event listener
const btnz = document.querySelector('.btnz')
function viec1(){console.log('event 1');}
function viec2(){console.log('event 2');}
btnz.addEventListener('click', viec1);
btnz.addEventListener('click', viec2);
setTimeout(function() {
    btnz.removeEventListener('click', viec1);
}, 3000);

// 15. JSON: Javascript Object Notation
// là 1 định dạng dữ liệu (chuối) : Number, Boolean, Null, Array, Object, String
// Encode/ decode
// Stringify : từ JS type -> json
// parse : từ json -> JS type

var json = 'Number';            // json dạng number
var json = '["JS", "PHP"]';     // json dạng array
var json = '{"name":"hoang", "age":23}';         // json dạng object

var a = '"abc"';
console.log(JSON.parse(a));
console.log(JSON.stringify({
    name: 'hoang',
    age: 23
}));
*/

/*
// 16. Promise
// 16.1. concept
// Sync : đồng bộ
// Async: bất đồng bộ : setTimeout, setInterval, fetch, XMLHttpRequest, file reading
// request animation frame
// Async
setTimeout(function(){
    console.log(1);
}, 1000);
console.log(2);

// 16.2. callback hell : nỗi đau
setTimeout(function(){
    console.log(1); // viec 1
    setTimeout(function(){
        console.log(2); // viec 2
        setTimeout(function(){
            console.log(3); // viec 3
        }, 1000);
    }, 1000);
}, 1000);

// 16.3. status
// Pendding(chờ) -> Fullfile(thành công) -> reject(thất bại)
var promise = new Promise( // object contructor
    // Executor
    // Memory leak : rò rỉ bộ nhớ
    function(resolve, reject) {
        // success : resolve()  ; failure : reject()
        resolve('thành công');
        // reject('có lỗi');
    }
);

promise
    .then(function(e) {
        console.log(e);
    })
    .catch(function(err) {
        console.log(err);
    })
    .finally(function() {
        console.log('done');
    });

// 16.4. chain
var promise = new Promise( 
    function(resolve, reject) {
    resolve();
    }
);
var promise1 = Promise.resolve('Success');

promise
    .then(function() {
        console.log(1);
        return 1;
    })
    .then(function(data) {
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve([1,2,3]);
            }, 3000);
        });
    })
    .then(function(data) {
        console.log(data);
        return 2;
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        console.log(err);
    })
    .finally(function() {
        console.log('done');
    });

promise1
    .then(function() {
        console.log(1);
        return 1;
    })
    .then(function(data) {
        console.log(data);
        return 2;
    })

var promise2 = new Promise(
    function(resolve) {setTimeout(function(){resolve([2,3]);}, 1000)}
);

var promise3 = new Promise(
    function(resolve) {setTimeout(function(){resolve([1]);}, 2000)}
);

Promise.all([promise2, promise3])
    .then(function([result1, result2]){
        console.log(result1.concat(result2));
    });
    
var user = [
    {
        id: 1,
        name: 'Kien Dam',
    },
    {
        id: 2,
        name: 'Son Dang',
    },
    {
        id: 3,
        name: 'Hung Dam',
    },
    // ...
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'hôm nay là thứ mấy?',
    },
    {
        id: 2,
        user_id: 2,
        content: 'thứ 3!',
    },
]

// 1. lấy comments
// fake API
function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        }, 1000);
    });
}

// 2. từ comments lấy ra user_id,
function getUsersByIds(userIds) {
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIds.includes(user.id);
        });
        setTimeout(function(){
            resolve(result);
        },1000);
    },1000);
}

// 3. từ user_id lấy ra user tương ứng

getComments() 
    .then(function(comments) {
        var userIds = comments.map(function(){
            return comment.user_id;
        });
        return getUsersByIds(userIds)
            .then(function(users){
                return {
                    users: users,
                    comments: comments,
                };
            });
    })
    .then(function(data){
        var commentBlock = document.getElementsById('comments-box');
        var html = '';
        data.comments.forEach(function(comment){
            var user = data.users.find(function(user){
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;
    });

*/

// 17. Fetch : 
/*
var postApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(postApi)
    .then(function(response) {
        return response.json();

    })
    .then(function(posts){
        var htmls = posts.map(function(post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`;
        });
        var html = htmls.join('');
        document.getElementById('post-box1').innerHTML = html;
    })
    .catch(function(err){
        console.log('have error!')
    })
*/

// 18. JSON server
// 19. Postman làm việc với REST API


// bài toán
/*
function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function(){
        console.log(1);
        return sleep(1000);
    })
    .then(function(){
        console.log(2);
        return sleep(1000);
    })
    .then(function(){
        console.log(3);
        return sleep(1000);
    })
    
sleep(4000)
    .then(function(){
        console.log(1);
        return sleep(1000);
    })
    .then(function(){
        console.log(2);
        return new Promise(function(resolve, reject){
            reject('có lỗi');
        })
    })
    .then(function(){
        console.log(3);
        return sleep(1000);
    })
    .catch(function(err){
        console.log(err);
    });


Array.prototype.myFilter = function(cb) {
    var arr = [];
    for (var index in this) {
        if(this.hasOwnProperty(index)) {
            var filter = cb{this[index], index, this}
            if(filter) {
                arr.push(this[index])
            }
        }
    }
    return arr;
}




// Array.prototype.some2 = function(callback) {
    // for(var index in this) {
    //     if(this.hasOwnProperty(index)) {
    //         if(callback(this[index], index, this)) return true;
    //     }
    // }
    // return false;
// }

Array.prototype.mySome = function(cb) {
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            if(!cb(this[index], index, this)) return false;
        }
    }
    return true;
}

const numbers = [1, 3, 3, 5];

console.log(numbers.mySome(function (number) {
    return number % 2 === 0;
}));

console.log(numbers.mySome(function (number, index) {
    return index % 2 === 0;
}));

document.querySelector('h1').title = "F8 - Học lập trình để đi làm";
document.querySelector('h1').setAttribute("data-title", "F8 - Học lập trình để đi làm");
document.querySelector('a').href = "https://fullstack.edu.vn/";
document.querySelector('a').target = "_blank";

function render(html) {
    document.querySelector('ul').innerHTML = html;
}

render(`
    <li>Khóa học HTML</li>
    <li>Khóa học JS</li>
    <li>Khóa học PHP</li>
`)

var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    document.querySelector('ul').innerHTML = courses
    .map(function(value){
        return "<li>" + value + "</li>";
    })
    .join("")
}

var x = document.querySelectorAll('div').forEach((e) => e.classList.add('box'));

*/

/*
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

console.log(tabs,panes)

*/


//IIFE 
/*
const app = (function() {
    // private
    const cars = []
    return {
        get(index) {
            return cars[index]
        },
        add(car) {
            cars.push(car)
        },
        edit(index, car) {
            cars[index] = car
        },
        delete(index) {
            cars.splice(index, 1)
        }
    }
});


(function js(x) {
    const y = (j) => j * x;
    console.log(27 * 3)

    console.log(y(s()));

    function s() {
        return j();
    }
    console.log(s())

    function j() {
        return x ** x;
    }
    console.log(j())
    console.log(x)
})(3)
// Output: ?

*/

// closure

function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {}

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))

    }

    const storage = {
        get(key) {
            return store[key]
        },
        set(key, value) {
            store[key] = value
            save()
        },
        remove(key) {
            delete store[key]
            save()
        }
    }

    return storage 
}



const profile = createStorage('profile')
profile.set('name', 'Kien Dam')
profile.set('age',12)
profile.set('address', 'hanoi')
console.log(profile.get('name'))

// "use strict";

//destructring, rest
var arr = [1,2,3]
var [a, ...rest] = arr
console.log(...rest)

// spread 
var arr1 = [1,2,3]
var arr2 = [4,5,6]
var arr3 = [...arr2, ...arr1]
console.log(arr3)

var obj1 = {name: 'js'}
var obj2 = {price: 1000}
var obj3 = {...obj1, ...obj2}
console.log(obj3)

//modules
import logger from './logger.js'
import * as constants from './constants.js'
logger('test message...', constants.TYPE_WARN)

// import {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './constants.js'
// logger('test message...', TYPE_WARN)
