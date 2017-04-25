<template>
    <div id="offices">
        <div class="row">
            <div class="col s12">
                <h1>Offices</h1>
                <div class="col xl4 l4 m6 s12 card-horizontal-list" v-for="role in roles">
                    <div class="card horizontal">
                        <div class="card-image">
                            <i class="material-icons">{{ role.icon }}</i>
                        </div>
                        <div class="card-content truncate">
                            <p class="truncate">Office: <span>{{ role.type }}</span></p> 
                            <span class="role-value truncate">{{ role.value }} work on this office</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'offices',

    data() {
        return {
            roles: [
                {"type": "Front-End Developer", "value": 0, "icon": "code"},
                {"type": "Back-End Developer", "value": 0, "icon": "laptop"},
                {"type": "Mobile Developer", "value": 0, "icon": "android"},
                {"type": "Full Stack Developer", "value": 0, "icon": "code"},
                {"type": "Design", "value": 0, "icon": "web"},
                {"type": "Author", "value": 0, "icon": "book"},
                {"type": "Aventureiro", "value": 0, "icon": "accessibility"}
            ],

            members: []
        }
    },

    methods: {
        fetchAllMembers() {
            var self = this
            self.$http.get('http://localhost:3000/members').then(response => {
                self.members = response.data;
                for(var i = 0; i < self.members.length; i++) {
                    let member = self.members[i]
                    for(var j = 0; j < self.roles.length; j++) {
                        let role = self.roles[j]
                        if(member.office == role.type) {
                            role.value++;
                        }
                    }
                }
            })
        },
    },

    mounted() {
        this.fetchAllMembers()
    },
}
</script>

<style scoped>
/* Title Page */
h1 {
    font-size: 18px;
    color: #a8a8a8;
    margin-bottom: 45px;
}

/* Card Style */
.card i {
    color: #a8a8a8;
    margin: 25px 0 0 20px;
    font-size: 2em;
}
.card-content h3 {
    color: #ccc;
}

.card-content p span {
    color: #a8a8a8;
}

.card-content .role-value {
    color: rgba(39.6%, 61.6%, 72.2%, 0.8);
    font-size: 12px;
}
</style>