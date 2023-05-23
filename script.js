addEventListener("load", function() {
    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
})
/*=========================================================*/

// Variable Declaration
const lowerCaseCharSet="abcdefghijklmnopqrswxyz";
const upperCaseCharSet="ABCDEFGHOJKLMNOPQRSWXYZ";
const numberSet="1234567890";
const symbolSet="!@#$%^&()?~|₹-√£¢€¥¡¿[]";

// HTML element Selection
const password_Length=document.getElementById("passwordLength");
const super_Strong_Password=document.getElementById("Super_strong_password");
const strong_Password=document.getElementById("Strong_password");
const weak_Password=document.getElementById("Weak_password");
const funny_Password=document.getElementById("Funny_password");
const password_generator_btn=document.getElementById("Password_generator_btn");
const password_appear=document.getElementById("Password_appear");
const copybtn=document.getElementById('copy')


class Password_Genaration{	
	#Password="";
	constructor(lowerCaseCharSet,upperCaseCharSet,numberSet,symbolSet){
		//console.log("Password_generator class called")
		this.lowerChar=lowerCaseCharSet;
		this.upperChar=upperCaseCharSet;
		this.numbers=numberSet;
		this.symbols=symbolSet;
		this.#Password;
		this.fuunyPasswordArr=["YourName","Password", "IncorrectPassword","admin"];
		
		if(copybtn.classList.contains("fa-copy")){
			//kus nahi karna
		}else if(copybtn.classList.contains("fa-check")){
			copybtn.classList.remove('fa-check');
			copybtn.classList.add('fa-copy')
		}
		
		
		
	}
	
	static limitPasswordLength(text, max_length){
		if(text.length > max_length){
			return text.substring(0, max_length).trimEnd();
		}
		else{
			return text;
		}
	}
		
	generate_Super_Strong_Password(){		
		let passCharLower=this.lowerChar.charAt(Math.floor(Math.random()*this.lowerChar.length))
		let passCharUpper=this.upperChar.charAt(Math.floor(Math.random()*this.upperChar.length))
		let passNumber=this.numbers.charAt(Math.floor(Math.random()*this.numbers.length))
		let passSymbol=this.symbols.charAt(Math.floor(Math.random()*this.symbols.length))
		
		this.#Password+=passCharLower
		this.#Password+=passCharUpper
		this.#Password+=passNumber
		this.#Password+=passSymbol
		//console.log(this.#Password)
		
		if(this.#Password.length<password_Length.value){
			return this.generate_Super_Strong_Password();
		}
		
		this.#Password=Password_Genaration.limitPasswordLength(this.#Password, password_Length.value)
		console.log("super strong password: ",this.#Password);
		password_appear.innerText=this.#Password;
		this.#Password="";				
	}
	
	generate_Strong_Password(){	
		let passCharLower=this.lowerChar.charAt(Math.floor(Math.random()*this.lowerChar.length))
		let passCharUpper=this.upperChar.charAt(Math.floor(Math.random()*this.upperChar.length))
		let passNumber=this.numbers.charAt(Math.floor(Math.random()*this.numbers.length))
		//let passSymbol=this.symbols.charAt(Math.floor(Math.random()*this.symbols.length))
		
		this.#Password+=passCharLower
		this.#Password+=passCharUpper
		this.#Password+=passNumber
		//this.#Password+=passSymbol
		//console.log(this.#Password)
		
		if(this.#Password.length<password_Length.value){
			return this.generate_Strong_Password();
		}
		
		this.#Password=Password_Genaration.limitPasswordLength(this.#Password, password_Length.value)
		console.log("strong password: ",this.#Password);
		password_appear.innerText=this.#Password;
		this.#Password="";	
	}
	
	generate_Weak_Password(){	
		let passCharLower=this.lowerChar.charAt(Math.floor(Math.random()*this.lowerChar.length))
		let passCharUpper=this.upperChar.charAt(Math.floor(Math.random()*this.upperChar.length))
		//let passNumber=this.numbers.charAt(Math.floor(Math.random()*this.numbers.length))
		//let passSymbol=this.symbols.charAt(Math.floor(Math.random()*this.symbols.length))
		
		this.#Password+=passCharLower
		this.#Password+=passCharUpper
		//this.#Password+=passNumber
		//this.#Password+=passSymbol
		//console.log(this.#Password)
		
		if(this.#Password.length<password_Length.value){
			return this.generate_Weak_Password();
		}
		
		this.#Password=Password_Genaration.limitPasswordLength(this.#Password, password_Length.value)
		console.log("weak password: ",this.#Password);
		password_appear.innerText=this.#Password;
		this.#Password="";	
	}
	
	generate_Funny_Password(){	
		this.#Password=this.fuunyPasswordArr[Math.floor(Math.random()*this.fuunyPasswordArr.length)]
		console.log("Funny password: ",this.#Password);
		password_appear.innerText=this.#Password;
		this.#Password="";	
	}
	
}

password_generator_btn.addEventListener('click',(e)=>{
	e.preventDefault()
	//console.log("button click")
	let user_Pass=new Password_Genaration(lowerCaseCharSet,upperCaseCharSet,numberSet,symbolSet)
	
	if(super_Strong_Password.checked){
		user_Pass.generate_Super_Strong_Password()
	}else if(strong_Password.checked){
		user_Pass.generate_Strong_Password()
	}else if(weak_Password.checked){
		user_Pass.generate_Weak_Password()
	}else if(funny_Password.checked){
		user_Pass.generate_Funny_Password()
	}else{
		user_Pass.generate_Super_Strong_Password()
	}	
})


copybtn.addEventListener("click",(e)=>{
	copybtn.classList.remove('fa-copy');
	copybtn.classList.add('fa-check');
	
	let textCopy = document.getElementById('Password_appear').innerHTML;
	(async () => {
	  try {
	    await navigator.clipboard.writeText(textCopy);
	    console.log('Password copied to clipboard');
	  } catch (err) {
	    console.log('Failed to copy: ', err);
	  }
	})()
})






