import { ref } from 'vue'
import { useAuthenticationStore } from '@/stores/authentication'

export function useFetch(url: URL,) {
  const res = ref('')
  const header = new Headers()
  const auth = useAuthenticationStore()

  if (auth.token) {
    header.set('Authorization', 'Token ' + auth.token)
  } else {
    header.set('Authorization', '')
  }

  fetch(url, {
    headers: header,
  })
    .then((res) => res.json())
    .then((data) => {
      res.value = data
    })

  return res
}
