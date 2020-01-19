<template>
  <v-dialog  persistent v-model="registerDialog">
    <v-btn primary accent slot="activator">
      {{ userIsRegistered ? 'Under threat' : 'Report threat'}}
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title v-if="userIsRegistered"><h5>Declare you are rescued from this threat?</h5></v-card-title>
            <v-card-title v-else><h5>Declare you are under this threat?</h5></v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>You can change your status at any time.</v-card-text>
          </v-flex>
        </v-layout>
        <v-flex xs12>
          <v-btn
            class="black--text darken-1"
            flat
            @click="registerDialog = false">Cancel</v-btn>
          <v-btn
            class="green--text darken-1"
            flat
            @click="onAgree">Confirm</v-btn>
        </v-flex>
      </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>


<script>
  export default {
    props: ['meetupId'],
    data () {
      return {
        registerDialog: false
      }
    },
    computed: {
      userIsRegistered () {
        return this.$store.getters.user.registeredMeetups.findIndex(meetupId => {
          return meetupId === this.meetupId
        }) >= 0
      }
    },
    methods: {
      onAgree () {
        if (this.userIsRegistered) {
          this.$store.dispatch('unregisterUserFromMeetup', this.meetupId)
        } else {
          this.$store.dispatch('registerUserForMeetup', this.meetupId)
        }
      }
    }
  }
</script>
