<template>
  <div id="members">
    <div class="row">
      <div class="input-field search col s6 l6">
        <i class="material-icons prefix">search</i>
        <input type="text" id="search" v-model="filter">
        <label for="search">Search Member by Office</label>
      </div>
      <div class="col s6 l6 change-view right-align">
        <span class="hide-on-med-and-down">View: </span>
        <a href="#" title="Freelas" class="btn btn-item btn-disable hide-on-med-and-down">Freelas</a>
        <a href="#" title="Users" class="btn btn-item hide-on-med-and-down">Users</a>
        <router-link to="/add"><a class="add-member waves-effect waves-light btn-large" title="Add New Member">Add Member</a></router-link>
      </div>
    </div>
    <div class="row">
      <div class="col xl12 l12 m12 s12">
        <div class="row" v-if="members.length">
          <div class="col xl3 l3 m6 s12 card-list" v-for="(member) in filterBy(members, filter)" :key="member.id">
            <router-link v-bind:to="'/member/' + member.id" :title="member.name">
              <div class="card">
                <div class="card-content center-align">
                  <img src="src/assets/profile.jpg" width="64" height="64">
                  <p class="member-name truncate">{{ member.name }} - <span>{{ member.office }}</span></p>
                  <p class="member-email truncate">{{ member.email }}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <h3 class="anybody center-align" v-else>Ops, anybody in your team.</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'members',
  data: () => ({
    members: [],
    filter: ''
  }),
  mounted () {
    this.fetchMembers()
  },
  methods: {
    fetchMembers () {
      var self = this
      self.$http.get('http://localhost:3000/members').then(response => {
        self.members = response.data
      })
    },

    filterBy (list, value) {
      value = value.charAt(0).toUpperCase() + value.slice(1)
      return list.filter(member => {
        return member.office.indexOf(value) > -1
      })
    }
  }
}
</script>

<style>
/* Config toastr position */
#toast-container {
  top: auto !important;
  left: auto !important;
  bottom: 5%;
  right: 2%;
}

/* Search Input */
.input-field.search {
  margin-left: -33px !important;
}

.input-field.search .material-icons {
  margin-top: 12px;
  margin-left: 42px;
  font-size: 22px;
  color: rgba(168, 168, 168, 0.40);
}

.input-field.search label {
  font-size: 13px;
  color: rgba(101, 157, 184, 0.76);
}

.input-field.search .prefix ~ label {
  margin-left: 5.4rem;
}

.input-field.search .prefix.active {
  color: #86c06e;
}

.input-field.search input[type=text] {
  margin-top: -3px;
  padding-left: 35px;
  border-color: rgba(168, 168, 168, 0.25);
  color: #a8a8a8;
}

.input-field.search input[type=text]:focus:not([readonly]) {
  border-color: #86c06e;
}

.input-field.search input[type=text]:focus:not([readonly]) + label {
  color: #86c06e;
}

/* Change options */
.change-view {
  margin-top: 20px;
}

.change-view span {
  color: rgba(101, 157, 184, 0.76);
  margin-right: 20px;
}

.change-view a:nth-child(3) {
  margin-right: 20px;
}

.change-view .btn-item {
  background-color: #eff2f3;
  border: 1px solid rgba(168, 168, 168, 0.25);
  color: rgba(101, 157, 184, 0.76);
  box-shadow: none;
  font-size: 13px;
}

.change-view a:nth-child(2) {
  margin-right: -6px;
}

.btn-disable {
  background-color: #fafafa !important;
  color: rgba(168, 168, 168, 0.6) !important;
}

/* Button Add Member */
.add-member {
  background-color: #86c06e;
  margin-right: -22px;
}

.add-member:hover {
  background-color: #5da93e;
}

/* Card Style */
.card {
  background-color: #f8f8f8;
  box-shadow: none;
  border: 1px solid rgba(168, 168, 168, 0.35);
  border-radius: 3px;
}

.card-content img {
  margin-bottom: 10px;
  border-radius: 50%;
}

.card .card-content p {
  color: rgba(168, 168, 168, 0.80);
}

.card .card-content .member-name span {
  font-weight: 200;
  font-size: 14px;
}

.card .card-content .member-email {
  color: rgba(39.6%, 61.6%, 72.2%, 0.8);
  font-size: 12px;
}

.anybody {
  font-weight: 200;
  text-align: center;
  margin-top: 10%;
  color: rgba(138, 138, 138, 0.40);
}
</style>
