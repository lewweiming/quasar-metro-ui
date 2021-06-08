<template>
<!-- Dark style -->
<q-page class="q-pa-lg bg-grey-10">
  <div class="q-gutter-md">

    <!-- Example 1 -->
    <q-card dark class="bg-purple-8" style="width: 200px">
      
       
       <q-card-section class="text-center">
          <q-icon size="10em" name="home" />
        </q-card-section>
     
     <q-card-actions align="left">
         Home
     </q-card-actions>
    </q-card>

    <!-- Example 2 -->
    <q-card dark class="bg-purple-5" style="width: 150px">
       
     <q-card-actions align="right">
         Sunny
     </q-card-actions>
       
       <q-card-section class="text-center">
          <q-icon size="5em" name="light_mode" />
        </q-card-section>
    
    </q-card>

    <!-- Example 3 -->
    <q-card dark class="bg-purple-7" style="width: 200px">
       
       
       <q-card-section class="text-center">
          <q-icon size="10em" name="photo" />
        </q-card-section>
    

     <q-card-actions align="between">
         <div>Images</div>
         <div>240</div>
     </q-card-actions>

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