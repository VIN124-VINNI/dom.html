var container=document.querySelector ("div")
var card=document.createElement("div")
card.id="cardname"
card.innerHTML=`
<img src="https://th.bing.com/th?id=OIP.a5UE_QXAywI2Ht86zadmYwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width="300"/>
<h4> Nova Scotia Duck Tolling Retriever </h4>
<button> seemore </button> 
`
card.style.border="2px solid black"
card.style.backgroundColor="lightgreen"
card.style.display="inline-block"
card.style.padding="5px"
card.style.margin="0px"
card.style.textAlign="center"

container.appendChild(card)


var newcard=document.createElement("div")
newcard.id="newcardname"
newcard.innerHTML=`
<img src="https://th.bing.com/th/id/OIP.85JEKa-qc7anWVKA74jifAAAAA?w=131&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" width="300"/>
<h4> Roller Coasters While Pregnant </h4>
<button> seemore </button> 
`
newcard.style.border="2px solid black"
newcard.style.backgroundColor="lightgreen"
newcard.style.display="inline-block"
newcard.style.padding="5px"
newcard.style.margin="0px"
newcard.style.textAlign="center"

container.appendChild(newcard)

container.style.display="flex"
container.style.gap="20px"
var divcontainer=document.querySelector ("div")
var cardd=document.querySelector("p")
cardd.id="cardname"
cardd.innerHTML=` 
<img src="https://th.bing.com/th/id/OIP.oskx353D2aULY_mccZ1YDAHaLI?w=208&h=305&c=7&r=0&o=5&dpr=1.3&pid=1.7" width="280px"/>
<p> this is image osf roll<p/>
<button>seemore</button>
`
cardd.style.border="2px solid black"
cardd.style.backgroundColor="lightblue"
cardd.style.display="inline-block"
cardd.style.padding="5px"
cardd.style.margin="0px"
cardd.style.textAlign="center"

divcontainer.appendChild(cardd)


var newcardd=document.createElement("p")
newcardd.id="newcardname"
newcardd.innerHTML=` 
<img src="https://th.bing.com/th/id/OIP.D1wQDcHmSEqbcSRE7KiqnAAAAA?w=200&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" width="300px"/>
<p> this is image osf roll<p/>
<button>seemore</button>
`

newcardd.style.border="2px solid black"
newcardd.style.backgroundColor="lightblue"
newcardd.style.display="inline-block"
newcardd.style.padding="5px"
newcardd.style.margin="0px"
newcardd.style.textAlign="center"

divcontainer.appendChild(newcardd)


divcontainer.style.display="flex"
divcontainer.style.gap="20px"