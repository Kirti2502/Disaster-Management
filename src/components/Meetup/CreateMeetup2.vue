<template>
  <v-container>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <h4>Send Message</h4>
        </v-flex>
    </v-layout>
    <v-layout row>
        <v-flex xs12 >
          <form @submit.prevent="onCreateMeetup">
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                name="title"
                label="Title"
                v-model="title"
                id="title"
                required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                name="location"
                label="Location"
                v-model="location"
                id="location"
                required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                name="desription"
                label="Description"
                multi-line
                v-model="description"
                id="desription-url"
                required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit">Report</v-btn>
              </v-flex>
            </v-layout>
          </form>
        </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  export default {
    data () {
      return {
        title: '',
        location: '',
        description: ''
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' &&
        this.location !== '' &&
        this.description !== '' &&
        this.imageUrl !== ''
      }
    }
  }
</script>
