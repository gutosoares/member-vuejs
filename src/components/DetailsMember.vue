<template>
  <div id="details-member">
    <div class="row">
      <div class="col s12">
        <h1>Details</h1>
        <div class="card horizontal">
          <div class="card-image">
            <img src="/src/assets/profile.jpg" :alt=member.name height="200">
          </div>
          <div class="card-content">
            <h3>{{ member.name }}</h3>
            <p>{{ member.office }}</p>
            <p class="member-email">{{ member.email }}</p>
          </div>
        </div>
        <a class="waves-effect waves-light btn delete-btn right" title="Delete Member" @click="deleteMember(member.id)">Delete</a>
        <router-link v-bind:to="'/edit/' + member.id"><a class="waves-effect waves-light btn edit-btn right" title="Edit Member">Edit</a></router-link>
        <router-link to="/"><a class="waves-effect waves-teal btn-flat back-btn right" title="Back">Back</a></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details',
  data: () => ({
    member: {}
  }),
  mounted () {
    this.fetchSingleMember(this.$route.params.id)
  },
  methods: {
    fetchSingleMember (id) {
      this.$http.get('http://localhost:3000/members/' + id).then(response => {
        this.member = response.data
      })
    },
    deleteMember (id) {
      this.$http.delete('http://localhost:3000/members/' + id).then(response => {
        console.log('Delete Member with Success')
        // Materialize.toast('Delete Member with Success', 3000, 'red')
        this.$router.push({ path: '/' })
      })
    }
  }
}
</script>

<style>
/* Title Page */
h1 {
  font-size: 18px;
  color: #a8a8a8;
  margin-bottom: 45px;
}

/* Card Style */
.card-content h3 {
  color: #a8a8a8;
}

/* Actions Buttons */
.delete-btn {
  background-color: #ef5350;
  margin-left: 20px;
}

.delete-btn:hover {
  background-color: #e53935;
}

.edit-btn {
  background-color: #659db8;
  margin-left: 20px;
}

.edit-btn:hover {
  background-color: #5989a0;
}
</style>
