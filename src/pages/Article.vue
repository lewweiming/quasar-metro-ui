<template>
<!-- Dark style -->
<q-page class="q-pa-lg bg-grey-10">
<div class="q-gutter-md">
  <!-- Example 1 -->
    <q-card dark class="bg-purple-8" style="width: 400px">
      <q-card-section horizontal>
       <q-img src="https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
       <q-card-section>
          <div class="text-h6">Did you know?</div>
          <div>Dolphins are social creatures and enjoying play time too!</div>
        </q-card-section>
      </q-card-section>
    </q-card>

    <!-- Example 2 -->
    <q-card dark class="bg-purple-8" style="width: 400px">
      
       
       <q-card-section>
          <div class="text-h5 q-mb-sm">Fact of the day</div>
          <div class="row">
              <div class="col-4">
                  <q-img src="https://images.pexels.com/photos/2613148/pexels-photo-2613148.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
              </div>
              <div class="col-8">
                  <div class="q-pa-md">
                      Tortoises are reptiles and love a good sun bath!
                  </div>
              </div>
          </div>
        </q-card-section>
     
    </q-card>
</div>
</q-page>
</template>

<script>
export default {

  data() {
    return {

    }
  }

}
</script>