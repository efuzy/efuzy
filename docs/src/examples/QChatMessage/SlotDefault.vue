<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="me"
        avatar="https://cdn.efuzy.dev/img/avatar3.jpg"
        stamp="7 minutes ago"
        :text="['Hey there!']"
        sent
        text-color="white"
        bg-color="primary"
      >
        Have you seen Efuzy?
        <img src="https://cdn.efuzy.dev/img/discord-omq.png" class="my-emoticon">
      </q-chat-message>

      <q-chat-message
        name="Jane"
        avatar="https://cdn.efuzy.dev/img/avatar5.jpg"
        bg-color="amber"
      >
        <q-spinner-dots size="2rem" />
      </q-chat-message>
    </div>
  </div>
</template>

<style lang="sass">
.my-emoticon
  vertical-align: middle
  height: 2em
  width: 2em
</style>
