<template>
    <id id="edit-member">
        <h1>Edit Member</h1>
        <form v-on:submit.prevent="updateMember">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Ex: Tolkien" v-model="member.name">

            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Ex: tolkien@hobbit.com" v-model="member.email">

            <label for="office">Office</label>
            <input type="text" id="office" placeholder="Ex: The Hobbit Author" v-model="member.office">

            <button type="submit">Add Member</button>
        </form>
    </id>
</template>

<script>
export default {
    name: 'editMember',

    data() {
        return { 
            member: {}
        }
    },

    methods: {
        fetchEditMember(id) {
            var self = this
            self.$http.ge('http://localhost:3000/members/' + id)
        }
    }
}
</script>