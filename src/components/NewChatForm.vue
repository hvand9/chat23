<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..." 
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div v-if="error" class="error">{{ error }} blah</div>
  </form>

  <div class="container">
  <div class="hello">
    <h1>Velkommen til din profil</h1>    
    <p>
      Klik på knappen nedenfor som vil henvise dig til din profil
    </p>
    </div>
    </div>
     
  <button onclick="window.location.href='https://sad-perlman-9d529a.netlify.app/?fbclid=IwAR3GndrFRlhOWQ544uCP8x0ERJDHr8_ds6RofC8JMNC--sUEB4f-e48kXbg'">Se profil</button>
    
</template>

<script>
import useCollection from '../composables/useCollection'
import getUser from '../composables/getUser'
import { timestamp } from '../firebase/config'
import { ref } from 'vue'



export default {
  setup() {
    const { user } = getUser()
    const { addDoc, error } = useCollection('messages')

    // refs
    const message = ref('')

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp()
      }
      await addDoc(chat)
      if (!error.value) {
        message.value = ''
      }
    }

    return { message, handleSubmit, error }
  }
}
</script>

<style scoped>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
  .error {
    text-align: center;
    color: #ff2a58;
    font-size: 12px;
    padding: 10px 0;
  }

  .container {
    width: 100%;
    max-width: 700px;
    margin: 50px auto;
    height: auto;
    border-radius: 25px;
    box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
    background: #EF4423;
    margin-bottom: 10px;
  }
</style>