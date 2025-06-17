import sqlite3

# Attempt to connect to the SQLite database
try:
    conn = sqlite3.connect('library.db')
    cursor = conn.cursor()
except sqlite3.Error as e:
    print(f"Database connection error: {e}")
    exit()

# Create or reset the Books table in the database
try:
    cursor.execute('DROP TABLE IF EXISTS Books')
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS Books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        availability TEXT NOT NULL CHECK (availability IN ('Yes', 'No'))
    )
    ''')
    conn.commit()
except sqlite3.Error as e:
    print(f"Error creating table: {e}")
    exit()


def insert_predefined_books():
    """
    Inserts a predefined list of books into the database if no books currently exist.
    Prevents duplication on multiple program runs.
    """
    cursor.execute('SELECT COUNT(*) FROM Books')
    count = cursor.fetchone()[0]
    if count == 0:
        books = [
            ('first', 'Yes'),
            ('second', 'Yes'),
            ('third', 'Yes'),
            ('fourth', 'Yes')
        ]
        cursor.executemany('INSERT INTO Books (name, availability) VALUES (?, ?)', books)
        conn.commit()


def show_all_books():
    """
    Fetches and displays all books in the database, including their availability status.
    """
    try:
        cursor.execute('SELECT * FROM Books')
        books = cursor.fetchall()
        if books:
            print("\nBook Records:")
            for book in books:
                print(book)
        else:
            print("No books found.\n")
    except sqlite3.Error as e:
        print(f"Database error: {e}")


def borrow_book():
    """
    Allows the user to borrow a book by ID if it is available.
    Updates the book's availability to 'No'.
    """
    try:
        book_id = int(input("Enter book ID to borrow a book: "))
        cursor.execute('SELECT availability FROM Books WHERE id = ?', (book_id,))
        result = cursor.fetchone()
        if result:
            if result[0] == 'Yes':
                cursor.execute('UPDATE Books SET availability = "No" WHERE id = ?', (book_id,))
                conn.commit()
                print("Book borrowed successfully.\n")
            else:
                print("Book is already borrowed.\n")
        else:
            print("Book not found.\n")
    except ValueError:
        print("Please enter a valid Book ID.\n")
    except sqlite3.Error as e:
        print(f"Database error: {e}")


def return_book():
    """
    Allows the user to return a previously borrowed book by ID.
    Updates the book's availability to 'Yes'.
    """
    try:
        book_id = int(input("Enter book ID to return the book: "))
        cursor.execute('SELECT availability FROM Books WHERE id = ?', (book_id,))
        result = cursor.fetchone()
        if result:
            if result[0] == 'No':
                cursor.execute('UPDATE Books SET availability = "Yes" WHERE id = ?', (book_id,))
                conn.commit()
                print("Book returned successfully.\n")
            else:
                print("Book is already available.\n")
        else:
            print("Book not found.\n")
    except ValueError:
        print("Please enter a valid Book ID.\n")
    except sqlite3.Error as e:
        print(f"Database error: {e}")


def menu():
    """
    Displays the main menu and handles user interaction.
    Allows viewing all books, borrowing, returning, or exiting the program.
    """
    insert_predefined_books()  # Ensure initial books are loaded
    while True:
        print("\nLibrary Management Menu:")
        print("1. Show All Books")
        print("2. Borrow Book")
        print("3. Return Book")
        print("4. Exit")
        choice = input("Enter your choice (1-4): ")

        if choice == '1':
            show_all_books()
        elif choice == '2':
            borrow_book()
        elif choice == '3':
            return_book()
        elif choice == '4':
            print("Exiting program.")
            break
        else:
            print("Invalid choice. Please try again.")


if __name__ == '__main__':
    try:
        insert_predefined_books()
        menu()
    finally:
        conn.close()  # Always close the database connection when done
