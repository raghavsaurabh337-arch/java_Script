const books = [
    {
        title: "Python Crash Course",
        author: "Eric Matthes",
        category: "Programming",
        price: 650,
        rating: 4.8
    },
    {
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        category: "Programming",
        price: 550,
        rating: 4.5
    },
    {
        title: "Django for Beginners",
        author: "William S. Vincent",
        category: "Programming",
        price: 700,
        rating: 4.7
    },
    {
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        category: "Programming",
        price: 600,
        rating: 4.6
    },
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Programming",
        price: 800,
        rating: 4.8
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Novel",
        price: 300,
        rating: 4.5
    },
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        category: "Fantasy",
        price: 450,
        rating: 4.9
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        category: "Fantasy",
        price: 500,
        rating: 4.7
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self Help",
        price: 550,
        rating: 4.8
    },
    {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        category: "Finance",
        price: 400,
        rating: 4.6
    },
    {
        title: "The Psychology of Money",
        author: "Morgan Housel",
        category: "Finance",
        price: 600,
        rating: 4.8
    },
    {
        title: "Deep Work",
        author: "Cal Newport",
        category: "Self Help",
        price: 500,
        rating: 4.7
    },
    {
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        category: "Self Help",
        price: 350,
        rating: 4.5
    },
    {
        title: "Ikigai",
        author: "Hector Garcia",
        category: "Self Help",
        price: 300,
        rating: 4.4
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "Novel",
        price: 280,
        rating: 4.3
    },
    {
        title: "1984",
        author: "George Orwell",
        category: "Novel",
        price: 320,
        rating: 4.6
    },
    {
        title: "Animal Farm",
        author: "George Orwell",
        category: "Novel",
        price: 250,
        rating: 4.5
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "Novel",
        price: 450,
        rating: 4.7
    },
    {
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        category: "Programming",
        price: 1200,
        rating: 4.8
    },
    {
        title: "Java: The Complete Reference",
        author: "Herbert Schildt",
        category: "Programming",
        price: 900,
        rating: 4.5
    },
    {
        title: "Learning React",
        author: "Alex Banks",
        category: "Programming",
        price: 750,
        rating: 4.4
    },
    {
        title: "HTML and CSS",
        author: "Jon Duckett",
        category: "Web Development",
        price: 650,
        rating: 4.6
    },
    {
        title: "CSS Secrets",
        author: "Lea Verou",
        category: "Web Development",
        price: 700,
        rating: 4.5
    },
    {
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        category: "JavaScript",
        price: 600,
        rating: 4.7
    },
    {
        title: "Effective JavaScript",
        author: "David Herman",
        category: "JavaScript",
        price: 550,
        rating: 4.4
    },
    {
        title: "Mastering Python",
        author: "Julien Danjou",
        category: "Python",
        price: 850,
        rating: 4.6
    },
    {
        title: "Automate the Boring Stuff",
        author: "Al Sweigart",
        category: "Python",
        price: 700,
        rating: 4.8
    },
    {
        title: "Fluent Python",
        author: "Luciano Ramalho",
        category: "Python",
        price: 950,
        rating: 4.7
    },
    {
        title: "The Power of Now",
        author: "Eckhart Tolle",
        category: "Self Help",
        price: 400,
        rating: 4.6
    },
    {
        title: "Zero to One",
        author: "Peter Thiel",
        category: "Business",
        price: 450,
        rating: 4.5
    }
];



let book=
books.filter((bk)=> bk.category==="Programming")
console.log(book);