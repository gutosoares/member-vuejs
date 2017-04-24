<template>
    <div id="members">
        <div class="row">
            <div class="input-field col s6">
                <i class="material-icons prefix">search</i>
                <input type="text" id="search" v-model="filter">
                <label for="search">Search Member by Office</label>
            </div>
            <div class="col s6 change-view right-align">
                <span>Visualizar: </span>
                <a href="#" class="btn btn-item btn-disable">Freelas</a>
                <a href="#" class="btn btn-item">Usuários</a>
                <router-link to="/add"><a class="add-member waves-effect waves-light btn-large">Add Member</a></router-link>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Office</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="member in filterBy(members, filter)">
                            <td>{{ member.name }}</td>
                            <td>{{ member.email }}</td>
                            <td>{{ member.office }}</td>
                            <td>
                                <router-link v-bind:to="'/member/' + member.id"><button>Details</button></router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'members',

    data() {
        return {
            members: [],
            filter: ''
        }
    },

    methods: {
        fetchMembers() {
            var self = this
            self.$http.get('http://localhost:3000/members').then(response => {
                self.members = response.data
            })
        },

        filterBy(list, value) {
            value = value.charAt(0).toUpperCase() + value.slice(1)
            return list.filter(member => {
                return member.office.indexOf(value) > -1
            })
        }
    },

    mounted() {
        this.fetchMembers()
    }
}
</script>

<style>
/* Search Input */
.input-field .material-icons {
    margin-top: 12px;
    margin-left: 42px;
    font-size: 22px;
    color: rgba(168, 168, 168, 0.25);
}

.input-field label {
    font-size: 13px;
    color: rgba(101, 157, 184, 0.76);
}

.input-field .prefix ~ label {
    margin-left: 5.4rem;
}

.input-field .prefix.active {
    color: #86c06e;
}

.input-field input[type=text] {
    margin-top: -3px;
    padding-left: 35px;
    border-bottom: 1px solid rgba(168, 168, 168, 0.25);
    color: #a8a8a8;
}

.input-field input[type=text]:focus:not([readonly]) {
    border-bottom: 1px solid #86c06e;
}

.input-field input[type=text]:focus:not([readonly]) + label {
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
}
/* Config toastr position */
#toast-container {
  top: auto !important;
  right: auto !important;
  bottom: 10%;
  left: 82%;
}
</style>