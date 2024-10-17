<template>
    <div class="emojiCard">
        <div class="emoji">
            <span v-for="emoji in emojis" :key="emoji" @click="selectEmoji(emoji)" >{{emoji}}</span>
        </div>
      

    </div>


</template>
<script>
   export default {
       name: 'emojiCard',
       data() {
           return {
               emojis: ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '😢', '😭', '😤', '😠', '😡', '🤬', '🤯', '😳', '🥺', '😨', '😰', '😥', '😓', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱', '😴', '🤤', '😪', '😵', '🤐', '🥴', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '🤠', '😈', '👿', '👹', '👺', '🤡', '💩', '👻', '💀', '☠️', '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🙈', '🙉', '🙊', '💋', '💌']
           }
       },
         methods: {
              selectEmoji(e) {
                console.log(e)
                    this.$emit('selectEmojis', e)
              }
         }
   }
</script>
<style scoped>
    .emojiCard {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        width:490px;
        height: 328px;
        border-radius: 10px;
        padding: 18px;
        background-color: #f8f8f8;
        flex-wrap: wrap;
        overflow-y: auto;
        scrollbar-width: thin;
    }

    .emoji {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        font-size: 24px;
        margin: 10px;
        cursor: pointer;
    }
</style>