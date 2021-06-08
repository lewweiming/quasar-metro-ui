<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10 text-white">
    <div class="q-gutter-md">
      <!-- Example 1 -->
      <q-card dark class="bg-purple-8" style="width: 200px">
        <q-card-section class="text-center">
          <div class="text-weight-thin text-h2">Friday</div>
          <div class="text-weight-regular text-h3">Games</div>
        </q-card-section>
      </q-card>

      <!-- Example 2 -->
      <q-card dark class="bg-purple-5" style="width: 400px">
        <q-card-section>
          <div class="row items-center">
            <div class="col-6">
              <div class="text-weight-thin text-h3">3:30 PM</div>
            </div>
            <div class="col-6 text-center">
              <div class="text-weight-regular text-h5">Tuesday</div>
              <div class="text-weight-regular text-h6">December 8</div>
            </div>
          </div>
        </q-card-section>
        </q-card>

        <!-- Example 3 -->
        <q-card dark class="bg-purple-6" style="width: 300px">
          <q-card-section>
            <div class="row items-center">
              <div class="col-4">
                <q-icon size="6em" name="laptop_windows" />
              </div>
              <div class="col-8 text-right">
                <div class="text-weight-thin text-h3">Metro7</div>
                <div class="text-weight-light text-h5">Store</div>
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
    return {};
  },
};
</script>