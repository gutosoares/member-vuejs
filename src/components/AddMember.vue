<template>
    <div id="add-member">
        <h1>Add Member</h1>
        <form v-on:submit.prevent="addMember">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Ex: Tolkien" v-model="member.name">

            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Ex: tolkien@hobbit.com" v-model="member.email">

            <label for="office">Office</label>
            <input type="text" id="office" placeholder="Ex: The Hobbit Author" v-model="member.office">

            <button type="submit">Add Member</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'addMember',

    data() {
        return {
            member: {}
        }
    },

    methods: {
        addMember() {
            if(!this.member.name || !this.member.email || !this.member.office) {
                console.log("Please fill in all required fields")
            } else {
                let newMember = {
                    name: this.member.name,
                    email: this.member.email,
                    office: this.member.office
                }

                this.$http.post('http://localhost:3000/members', newMember).then(response => {
                    console.log("Add new beautiful member")
                    this.$router.push({path: '/'})
                })
            }
        }
    }
}
</script>