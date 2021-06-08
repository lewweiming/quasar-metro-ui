<template>
  

<q-card class="card overflow-hidden">
    <q-card-section class="q-pa-none">
            <div class="slider flex no-wrap relative-position">
                <q-img
          class="element"
          height="100%"
          src="https://images.pexels.com/photos/1662163/pexels-photo-1662163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
        <q-img
          class="element"
          height="100%"
          src="https://images.pexels.com/photos/2929277/pexels-photo-2929277.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
        <q-img
          class="element"
          height="100%"
          
          src="https://images.pexels.com/photos/3208298/pexels-photo-3208298.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
        <q-img
          class="element"
          height="100%"
          
          src="https://images.pexels.com/photos/2398595/pexels-photo-2398595.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
            </div>
    </q-card-section>
</q-card>

</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.card {
    width: 300px;
    height: 200px;
}
.slider {
    animation: slide 20s 2s infinite;
}

.element {
    flex-shrink: 0;
}


@keyframes slide {
    0%, 5%, 15%, 100%{
        transform: translateX(0);
    }
    25%, 30%, 40%{
        transform: translateX(-100%);
    }
    50%, 60%, 65%{
        transform: translateX(-200%);
    }
    75%, 85%, 90%{
        transform: translateX(-300%);
    }
}
</style>
