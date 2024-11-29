<template>
  <main>
    <UserList />
  </main>
</template>

<script>
import UserList from '@/components/admin/Users/UserList.vue'
export default {
  components: { UserList },
  data() {
    return {}
  },
  methods: {},
  // watch: {
  //   formModel: {
  //     handler(newVal) {
  //     },
  //     deep: true,
  //   },
  // },
}
</script>
<style scoped></style>
