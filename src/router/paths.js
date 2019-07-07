export default [
  {
    path: "/dashboard",
    // Relative to /src/views
    view: "Dashboard",
    name: "Dashboard"
  },
  {
    path: "/publisher/bookManager",
    view: "Booklist",
    name: "Book Manager",
    children: [
      {
        path: "/publisher/bookManager/add",
        view: "Booklist",
        name: "Add Book"
      }
    ]
  }
];
