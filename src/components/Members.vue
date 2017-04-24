<template>
    <div id="members">
        <div class="row">
            <div class="input-field col s6">
                <i class="material-icons prefix">search</i>
                <input type="text" id="search" v-model="filter">
                <label for="search">Search Member by Office</label>
            </div>
            <div class="col s6">
                <h1>Members</h1>
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
    margin-top: 21px;
    margin-left: 11px;
    font-size: 22px;
    color: #ccc;
}

.input-field label {
    font-size: 13px;
    color: rgba(101, 157, 184, 0.76);
}

.input-field .prefix.active {
    color: #86c06e;
}

.input-field input[type=text] {
    margin-top: -3px;
    border-bottom: 1px solid #ccc;
    color: #a8a8a8;
}

.input-field input[type=text]:focus:not([readonly]) {
    border-bottom: 1px solid #86c06e;
}

.input-field input[type=text]:focus:not([readonly]) + label {
    color: #86c06e;
}

table, th, td {
    border: 1px solid #000;
}
</style>