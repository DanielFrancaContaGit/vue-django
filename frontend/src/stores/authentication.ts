import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthenticationStore = defineStore('authentication', () => {
  const token: Ref<string | null> = ref('')

  const isAuthenticated: Ref<boolean> = ref(false)

  function initializeStore() {
    if (localStorage.getItem('token')) {
        token.value = localStorage.getItem('token')
        isAuthenticated.value = true
    } else {
        token.value = ''
        isAuthenticated.value = false
    }
  }

  function setToken(token_passs: string) {
    token.value = token_passs
    isAuthenticated.value = true
  }

  function removeToken() {
    token.value = ''
    isAuthenticated.value = false
  }

  return { token, isAuthenticated, initializeStore, setToken, removeToken }
})
