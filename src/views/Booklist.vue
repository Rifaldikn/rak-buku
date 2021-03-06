<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>{{userData.displayName}}</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="700px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">Add new Book</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md12 v-for="item in headers" v-if="item.text != 'Action'">
                  <v-text-field v-model="editedItem[item.value]" :label="item.text"></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field v-model="editedItem.description" label="Description"></v-text-field>
                  <v-text-field v-model="editedItem.language" label="Language"></v-text-field>
                  <v-text-field v-model="editedItem.bookCover" label="Book Cover"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
      <template v-slot:items="props">
        <router-link :to="{name: 'BookDetail', params: {id: props.item.serialNumberBook}}">
          <td>{{ props.item.bookTitle }}</td>
        </router-link>
        <td class="text-xs-right">{{ props.item.author }}</td>
        <td class="text-xs-right">{{ props.item.publishedDate }}</td>
        <td class="text-xs-right">{{ props.item.serialNumberBook }}</td>
        <td class="text-xs-right">{{ props.item.pages }}</td>
        <td class="text-xs-right">{{ props.item.genres }}</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
          <v-icon small @click="deleteItem(props.item)">delete</v-icon>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "Book Title",
        align: "left",
        value: "bookTitle"
      },
      { text: "Author", value: "author" },
      { text: "Published On", value: "publishedDate" },
      { text: "ISBN / e-ISBN", value: "serialNumberBook" },
      { text: "Pages", value: "pages" },
      { text: "Genres", value: "genres", sortable: false },
      { text: "Action", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      bookTitle: "",
      publishedDate: "",
      serialNumberBook: 0,
      pages: 0,
      genres: "",
      publisher: "",
      language: "",
      description: null,
      bookCover: null,
      author: ""
    },
    defaultItem: {
      bookTitle: "",
      publishedDate: "",
      serialNumberBook: 0,
      pages: 0,
      genres: "",
      publisher: "",
      language: "",
      description: null,
      bookCover: null,
      author: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add new Book" : "Edit Book";
    },
    ...mapGetters("app", ["userData"])
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.$store.dispatch("books/getBookList");
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
        this.$store.dispatch("books/addNewBook", this.editedItem);
      }
      this.close();
    }
  }
};
</script>
