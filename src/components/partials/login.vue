<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn outline round dark v-on="on">Login</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline" primary-title>
        Login to Rakbuku
        <v-spacer></v-spacer>
        <button>
          <v-icon color="primary" x-large @click="dialog = false">cancel_presentation</v-icon>
        </button>
      </v-card-title>

      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="Username" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Password*" type="password" required></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center">
              <p>
                Don't have an account?
                <router-link to="/login">
                  <span style="color:#30DE82">
                    <strong>Sign up now!</strong>
                  </span>
                </router-link>
              </p>
            </v-flex>
            <v-flex xs12>
              <div>
                <v-btn class="grey--text text--darken-4" depressed block color="primary">Login</v-btn>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    dialog: false
  })
};
</script>