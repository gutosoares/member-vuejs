<template>
    <div id="members">
        <input type="text" placeholder="Search Member by Office" v-model="filter">
        <h1>Members</h1>
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
table, th, td {
    border: 1px solid #000;
}
</style>