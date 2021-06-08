<template>
  <q-layout view="lHh lpR lFf">
    <q-header class="bg-grey-10 text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="left = !left"
        />

        <q-toolbar-title>
          Quasar Metro UI
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left">
      <!-- drawer content -->
      <q-scroll-area class="bg-grey-9 window-height">
      <LeftPanelList />
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import LeftPanelList from 'components/LeftPanelList.vue'
export default {
  name: 'MainLayout',
  components: {
    LeftPanelList,
  },
  data () {
    return {
      left: true
    }
  }
}
</script>
