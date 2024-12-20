<script setup>
// let data = await $fetch('/api/hello',{ query: { id: 123 }});

// let data = await useFetch('/api/hello',{ query: { id: 123 }});

async function sendData(){
  let {data} = await useFetch('/api/hello', {
  method: "POST",
  body: { some: "json" },
  
});
console.log('data here : ',data.value?.user);

}




// Define a global state using useState
const counter = useState('counter', () => 0)  // Initialize with 0

// Increment function
const increment = () => {
  counter.value++
  sendData()
}
</script>

<template>
  <div>
    <div>Returned JSON:</div>
    <div>
      {{ data }} - {{ counter }}
    </div>
    <button @click="increment">Increment</button>
  </div>
</template>