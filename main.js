
let n = 1;
getPage.onclick = ()=>{
	const request = new XMLHttpRequest();
	request.open('GET',`/page${n+1}.json`);
	request.onreadystatechange = ()=>{
		if(request.readyState === 4 && request.status === 200){
			const array = JSON.parse(request.response);
			array.forEach(item => {
				const li = document.createElement("li");
				li.textContent = item.id;
				xxx.appendChild(li);
			})
			n+=1;
		}
	}
	request.send();
}

getTest.onclick = ()=>{
	const request = new XMLHttpRequest();
	request.open('GET', './test.html');
	request.onreadystatechange = ()=>{
		if(request.readyState === 4 && request.status === 200){
			let div = document.createElement('div');
			div.innerHTML = request.response;
			document.body.appendChild(div);
		}
	}
	request.send();
}

hehe.onclick = ()=>{
	const request = new XMLHttpRequest();
	request.open('GET', './hehe.json');
	request.onreadystatechange = ()=>{
		if(request.readyState === 4 && request.status === 200){
			// JSON.parse 就是把符合 json 语法的字符串转化成符合 js 语法的对象或其他东西
			console.log(request.response);
			const object = JSON.parse(request.response)
			console.log(object)
			const objectstring = JSON.stringify(request.response);
			console.log(objectstring);
		}
	}
	request.send();
}

getXML.onclick = ()=>{
	const request = new XMLHttpRequest();
	request.open('GET', './4.xml')
	request.onreadystatechange = ()=>{
		if(request.readyState === 4 && request.status === 200){
			console.log(request.response);
		}
	}
	request.send();
}

get3html.onclick = ()=>{
	const request = new XMLHttpRequest();
	request.open('GET', '/index3.html');
	request.onreadystatechange = ()=>{
		if(request.readyState === 4){
			// 下载完成；但我们不知道是成功还是失败，所以还要一个 if else
			if(request.status >= 200 && request.status < 300){
				// 说明成功了
				let div = document.createElement('div');
				div.innerHTML = request.response;
				document.body.appendChild(div);
			}
		}
	};
	request.send();
}

getHTML.onclick = ()=>{
	const request = new XMLHttpRequest();
	request.open('GET', 'index2.html');
	request.onreadystatechange = ()=>{
		console.log(request.readyState)	
		if(request.readyState === 4){
			console.log('下载完成')
			console.log(request.status) // 这是把响应的状态码打出来；打出来的可能是成功或失败的页面
			// 只有在 readyState === 4 的时候 response 才能被获取到
			
			if(request.status >= 200 && request.status < 300){
				// 那么我们认为响应成功了
				let div = document.createElement('div');
				div.innerHTML = request.response;
				document.body.appendChild(div);
			}else{
				// 响应失败
				alert('页面加载失败 / 响应失败')
			}
		}
	}
	request.send();
}

getJS.onclick = ()=>{
	const request = new XMLHttpRequest();
	request.open('GET', '2.js');
	request.onload = ()=>{
		console.log('get 2.js successfully')
		const secJS = document.createElement('script');
		secJS.src = './2.js';
		document.body.appendChild(secJS);
	}
	request.onerror = ()=>{
		console.log('get 2.js failed')
	}
	request.send();
}

getCSS.onclick = ()=>{

// 第一步：创建 XMLHttpRequest
const request = new XMLHttpRequest();

// 第二步：调用对象的 open 方法
request.open('GET', '/style.css');

// 第三步：监听 open 方法的请求的成功和失败
request.onload = ()=>{
	console.log('成功了')
	console.log(request.response)

  let style =	document.createElement('style');
	style.innerHTML = request.response;
	document.head.appendChild(style);
}

request.onerror = ()=>{
	console.log('失败了')
}

// 第四步：发送这个请求
request.send();

	
}
