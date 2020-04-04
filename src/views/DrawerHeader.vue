<template>
<div>
      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Header</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer" show-if-above :width="200"
        :breakpoint="1100" bordered content-class="bg-grey-3">
        <q-scroll-area class="fit">
          <q-list v-for="(menuItem, index) in menuList" :key="index">

            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>

           <q-separator v-if="menuItem.separator" />

          </q-list>
        </q-scroll-area>
      </q-drawer>
      </div>
</template>

<script>
    const menuList = [
      {
        icon: 'inbox',
        label: 'Inbox',
        separator: true
      },
      {
        icon: 'send',
        label: 'Outbox',
        separator: false
      },
      {
        icon: 'delete',
        label: 'Trash',
        separator: false
      },
      {
        icon: 'error',
        label: 'Spam',
        separator: true
      },
      {
        icon: 'settings',
        label: 'Settings',
        separator: false
      },
      {
        icon: 'feedback',
        label: 'Send Feedback',
        separator: false
      },
      {
        icon: 'help',
        iconColor: 'primary',
        label: 'Help',
        separator: false
      }
    ];
    
    export default {
        name:'DrawerHeader',
        drawer: false,
        menuList
    }

</script>