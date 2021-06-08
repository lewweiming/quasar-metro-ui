<template>
  <q-list separator class="bg-grey-10 text-grey-2 window-height">
    <q-item-label header> Explore Metro UI </q-item-label>
    <q-item :to="i.route" v-for="i in items" clickable>
      <q-item-section avatar>
        <q-icon name="chevron_right" />
      </q-item-section>
      <q-item-section>
        {{ i.label }}
      </q-item-section>
    </q-item>
    <q-item-label header>Themes</q-item-label>
    <q-item :to="i.route" v-for="i in themes" clickable>
      <q-item-section avatar>
        <q-icon name="chevron_right" />
      </q-item-section>
      <q-item-section>
        {{ i.label }}
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
const items = [
{
    label: "Grid",
    route: 'grid'
  },
  {
    label: "Typography",
    route: 'typography'
  },
  {
    label: "Animation",
    route: 'animation'
  },
  {
    label: "Videos",
    route: 'videos'
  },
  {
    label: "Images",
    route: 'images'
  },
  {
    label: "Article",
    route: 'article'
  },
  {
    label: "Notification",
    route: 'notification'
  },
  {
    label: "Icon",
    route: 'icon'
  },
  {
    label: "Graphs",
    route: 'graphs'
  },
  {
    label: "Indicators",
    route: 'indicators'
  },
  {
    label: "Windows",
    route: 'windows'
  },
  {
    label: "Flip Cards",
    route: 'flip-cards'
  },
  {
    label: "Live Tiles",
    route: 'live-tiles'
  },
  {
    label: "Scroll",
    route: 'scroll'
  },
  {
    label: "Effects",
    route: 'effects'
  },
];

const themes = [
  {
    label: "E-commerce",
    route: 'e-commerce'
  },
  {
    label: "Gaming",
    route: 'gaming'
  }
]

export default {
  data() {
    return {
      items, themes
    };
  },
};
</script>