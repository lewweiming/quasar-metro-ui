<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10">

<div class="text-h5 text-white text-bold q-mb-lg">
  Card Action
</div>
<div class="row q-gutter-lg">

    <!-- Colours -->
    <q-card flat square class="bg-blue-3" style="max-width: 200px;">
      <q-card-section class="text-center">
        <q-icon size="10em" color="white" name="mail" />
      </q-card-section>
      <q-card-actions class="text-white" align="left">
        Action
      </q-card-actions>
    </q-card>

    <q-card flat square class="bg-blue-3" style="max-width: 200px;">
      <q-card-section class="text-center">
        <q-icon size="10em" color="white" name="mail" />
      </q-card-section>
      <q-card-actions class="text-white" align="center">
        Action
      </q-card-actions>
    </q-card>

</div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
