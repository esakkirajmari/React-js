function resolveAfter2Seconds(x) {
	return new Promise((resolve) => {
	  setTimeout(() => {
		resolve(x);
	  }, 2000);
	});
  }
  
  async function f1() {
	const x = await resolveAfter2Seconds(10);
	console.log(x); 
  }
  
  f1()

  async function f() {
  const thenable = {
    then(resolve, reject) {
      reject(new Error("rejected!"));
    },
  };
  await thenable; // Throws Error: rejected!
}
f();

async function f() {
    const thenable = {
      then(resolve, _reject) {
        resolve("resolved!");
      },
    };
    console.log(await thenable); // "resolved!"
  }
  f();