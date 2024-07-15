// URL params:

let contenedorDetalle = document.getElementById("contenedorDetalle")
let urlParmsRoute = new URLSearchParams(window.location.search)
console.log(urlParmsRoute);

contenedorDetalle.innerHTML = `<div class="w-6/12 h-fit flex flex-col gap-10">
            <img class="w-full h-80 border-4 border-solid border-green-800  object-cover rounded-2xl" src="${urlParmsRoute.get("image")}" alt="imagen" />
            <table class="h-52 w-full bg-yellow-500">
              <tr class="border-4 border-solid border-red-900">
                <td class="border-4 border-solid border-red-900 pl-8 font-bold text-black">Original lenguage</td>
                <td class="border-4 border-solid border-red-900 pl-8 font-bold text-black">${urlParmsRoute.get("original_language")}</td>
              </tr>
              <tr class="border-4 border-solid border-red-900">
                <td class="border-4 border-solid border-red-900 pl-8 font-bold text-black">Release</td>
                <td class="border-4 border-solid border-red-900 pl-8 font-bold text-black">${urlParmsRoute.get("release_date")}</td>
              </tr>
              <tr class="border-4 border-solid border-red-900">
                <td class="border-4 border-solid border-red-900 pl-8 font-bold text-black">Runtime</td>
                <td class="border-4 border-solid border-red-900 pl-8 font-bold text-black">${urlParmsRoute.get("runtime")} mins</td>
              </tr>
              <tr class="border-4 border-solid border-red-900">
                <td class="border-4 border-solid border-red-900 pl-8 font-bold text-black">Status</td>
                <td class="border-4 border-solid border-red-900 pl-8 font-bold text-black">${urlParmsRoute.get("status")}</td>
              </tr>
            </table> 
        </div>
        <div class="w-6/12 h-fit flex flex-col gap-6 relative">
            <h1 class="text-5xl font-bold text-white">${urlParmsRoute.get("title")}</h1>
            <h2 class="text-3xl text-white">${urlParmsRoute.get("tagline")}</h2>
            <h3 class="text-2xl italic text-white">${urlParmsRoute.get("genres")}</h3>
            <p class="text-xl text-white">
              <span class="font-bold">Sypnosis:</span> ${urlParmsRoute.get("overview")}
            </p>
            <table class= "w-[400px] relative left-6 bg-yellow-500">
                <tr class="border-2 border-solid border-red-900">
                    <td class="border-2 border-solid border-red-900 pl-8 py-2 font-bold">Vote average</td>
                    <td class="border-2 border-solid border-red-900 pl-8 py-2 font-bold">${urlParmsRoute.get("vote_average")} votes</td>
                </tr>
                <tr class="border-2 border-solid border-red-900">
                    <td class="border-2 border-solid border-red-900 pl-8 py-2 font-bold">Budget</td>
                    <td class="border-2 border-solid border-red-900 pl-8 py-2 font-bold">USD ${urlParmsRoute.get("budget")}</td>
                </tr>
                <tr class="border-2 border-solid border-red-900">
                    <td class="border-2 border-solid border-red-900 pl-8 py-2 font-bold">Revenue</td>
                    <td class="border-2 border-solid border-red-900 pl-8 py-2 font-bold">USD ${urlParmsRoute.get("revenue")}</td>
                </tr>
            </table>
        </div>`




