<template>
<!-- Dark style -->
<q-page class="q-pa-lg bg-grey-10">

<!-- Example 1 -->
<div class="row q-col-gutter-md">
  <div class="col-6">
    <div class="q-gutter-md">
     <q-card dark class="bg-purple-8">
       
       <q-card-section class="text-center">
          <q-avatar square size="100px">A</q-avatar>
        </q-card-section>

    </q-card>
    <q-card dark class="bg-purple-8">
       
       <q-card-section class="text-center">
          <q-avatar square size="100px">B</q-avatar>
        </q-card-section>

    </q-card>
    </div>
  </div>
  <div class="col-6">
    
    <q-card dark class="bg-purple-8 full-height">
       
       <q-card-section class="text-center full-height row items-center justify-center">
          <q-avatar square size="100px">C</q-avatar>
        </q-card-section>

    </q-card>
  </div>
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