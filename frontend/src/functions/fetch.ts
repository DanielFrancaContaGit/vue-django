import { ref } from 'vue'

export function useFetch(url: URL) {
  const res = ref(null)
  
  fetch(url).then((res) => res.json())
            .then((data) => {
                console.log(data);
                res.value = data
                
            })
       
  return res
}