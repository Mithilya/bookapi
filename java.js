
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://sroxijjdoucuikkvgamq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyb3hpampkb3VjdWlra3ZnYW1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4MDIxMDIsImV4cCI6MjAyNjM3ODEwMn0.r8DVJxN2hbQiRsVrtdpyblfuyR_SBdGRklfhRMOKHIA'
const supabase = createClient(supabaseUrl, supabaseKey)

  async function getBooks() {
    let { data: books, error } = await supabase
      .from('books')
      .select('*')

    for (let book of books){
      let bookList = document.getElementById('books');
      bookList.innerHTML += `<li>${book.Title}</li> <li>${book.Author}</li> <li>${book.ISBN}</li>`
    }
  }

getBooks(); 