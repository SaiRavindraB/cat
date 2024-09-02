let url = "https://catfact.ninja/fact";

let btn = document.querySelector("button");

let p = document.querySelector("p");

btn.addEventListener("click",async ()=>
{
  let fact =  await getfact();
  //must use await so that we can get data after promis is fullfilled
  p.innerText = fact;
})


async function getfact()
{
  try{
    // let res = await fetch(url)
    // let data = await res.json();
    //instead of this we can give use below code which directly give json data
    let res = await axios.get(url);
    return (res.data.fact);
  }
  catch(err)
  {
    console.log("error was occured");
  }

}