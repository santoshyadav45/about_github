import sqlite3

try:
    conn = sqlite3.connect('library.db')
    cursor = conn.cursor()
except sqlite3.Error as e:
    print(f"Databse connection error: {e}")
    exit()


try:
    cursor.execute('DROP TABLE IF EXISTS Books')
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS Books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        availability TEXT NOT NULL CHECK (availability IN ('Yes', 'No') )
    )
    ''')
    conn.commit()
except sqlite3.Error as e:
    print(f"Error creating table: {e}")
    exit()


def insert_predefined_books():
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
    try:
        cursor.execute('SELECT * FROM Books')
        books = cursor.fetchall()
        if books:
            print("\n Book Records ")
            for book in books:
                print(book)
        else:
            print("No Books found.\n")
    except sqlite3.Error as e:
        print(f"Database error: {e}")


def borrow_book():
    try:
        book_id = int(input("Enter book id  to borrow a book"))
        cursor.execute('SELECT AVAILABILITY FROM Books WHERE id = ?', (book_id,))
        result = cursor.fetchone()
        if result:
            if result[0] == 'Yes':
                cursor.execute('UPDATE Books SET availability = "No" WHERE id = ?',(book_id,))
                conn.commit()
                print("Book borrowed succesfully.\n")
            else:
                print("Book is already borrowed.\n")
        else:
            print("Book not found.\n")
    except ValueError:
        print("Please enter a valid Book ID.\n")
    except sqlite3.Error as e:
        print(f"Database error: {e}")


def return_book():
    try:
        book_id = int(input("Enter book id to return book"))
        cursor.execute('SELECT AVAILABILITY FROM Books WHERE id = ?', (book_id,))
        result = cursor.fetchone()
        if result:
            if result[0] == 'No':
                cursor.execute('UPDATE Books SET availability = "Yes" WHERE id = ?',(book_id,))
                conn.commit()
                print("Book returned successfully.\n")
            else:
                print("Book is already available.\n")
        else:
            print("Book not found.\n")
    except ValueError:
        print("Please enter a valid roll no.\n")
    except sqlite3.Error as e:
        print(f"Database error: {e}")


def menu():
    insert_predefined_books()
    while True:
        print("\n Student Database Menu ")
        print("1. show_all_books")
        print("2. borrow_books")
        print("3. return_books")
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
        conn.close()