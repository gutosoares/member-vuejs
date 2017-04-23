<template>
    <div id="members">
        <h1>Members</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Office</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="member in members">
                    <td>{{ member.name }}</td>
                    <td>{{ member.email }}</td>
                    <td>{{ member.office }}</td>
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
            members: []
        }
    },

    methods: {
        fetchMembers() {
            var self = this
            self.$http.get('http://localhost:3000/customers').then(response => {
                self.members = response.data
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