<template>
    <div>
        <q-list bordered>
            
      <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
        <q-item-section avatar>
            <!-- <q-icon name="person"></q-icon> -->
          <q-avatar color="primary" text-color="white" icon='person'>
             <!-- {{ contact.letter }} --> 
           </q-avatar> 
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.email }}  </q-item-label>
        </q-item-section>

        <q-item-section side>
            2 days ago
          <!-- <q-icon name="chat_bubble" color="green" /> -->
          <q-icon name="chat_bubble" color="green" />
        </q-item-section>
      </q-item>

      <q-separator />
      
    </q-list>
    </div>
</template>

<script>
const contacts = [{
  id: 1,
  name: 'Ruddy Jedrzej',
  email: 'Needs an expert in IT',
  letter: 'R'
}, {
  id: 2,
  name: 'Mallorie Alessandrini',
  email: 'Needs a Computer operator',
  letter: 'M'
}, {
  id: 3,
  name: 'Elisabetta Wicklen',
  email: 'Needs a Developer proficient in Java',
  letter: 'E'
}, {
  id: 4,
  name: 'Seka Fawdrey',
  email: 'Needs a highly experienced Front-end developer',
  letter: 'S'
}]

const offline = [{
  id: 5,
  name: 'Brunhilde Panswick',
  email: 'bpanswick4@csmonitor.com',
  avatar: 'avatar2.jpg'
}, {
  id: 6,
  name: 'Winfield Stapforth',
  email: 'wstapforth5@pcworld.com',
  avatar: 'avatar6.jpg'
}];

export default {
    name:'JobsInCategory',
    data(){
        return {
            contacts,
            offline
        }
    }
}
</script>

