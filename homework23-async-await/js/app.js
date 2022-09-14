let url="./js/await.json"
let webPages="";

const fakeApi = (url) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      
      let {pages} = webPages;
      if (pages[url]) {
        res(pages[url]);
      } else {
        rej();
      }
    }, 2000);
  });
};fakeApi("/users")
.then((data) => {
  console.log(data);
  let wanted = data.filter((author) => {
    return author.name === "David" ;
  });
  let wantedId = wanted[0].id;

  return fakeApi(`/user/${wantedId}`);
})
.then((data) => {
  console.log(data);
})
.catch(() => {
  console.log("Page 404");
  });
  
  // async await
  window.onload=()=>{
    init()
  }
  const init=async()=>{
    let url = "./js/await.json";
    let response= await fetch(url)
    let data=await response.json()
    console.log(data);
  };
